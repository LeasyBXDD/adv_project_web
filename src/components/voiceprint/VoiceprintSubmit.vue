<template>
  <div class="box">
    <div class="img-box"></div>
    <div class="submit-box">
      <div class="submit-box-left">
        <h1>安全声纹检测</h1>
        <p class="details">该声纹检测能够分析声音的特征，并测试是否为伪造声音</p>
        <div class="res-ops">
          <div class="ops-title">
            <p :class="pCheck==='step' ? 'p-check' : ''" @click="handleViewTrial('step')">查看测试阶段</p>
            <p :class="pCheck==='res' ? 'p-check' : ''" @click="handleViewTrial('res')">查看测试结果</p>
          </div>
          <div class="ops-bodyer">
            <keep-alive>
              <div v-if="pCheck==='step'">
                <div class="ops-bodyer-item">
                  <el-steps :active="activeStepMaster" finish-status="success">
                    <el-step title="上传声纹" />
                    <el-step title="提交声纹" />
                    <el-step title="检测中..." />
                    <el-step title="查看结果" />
                  </el-steps>
                </div>
                <transition name="steps">
                  <div class="ops-bodyer-item" v-if="activeStepMaster===2">
                    <el-steps :active="activeStepDev" finish-status="success">
                      <el-step title="模型初始化" />
                      <el-step title="音频输入" />
                      <el-step title="样本变化程序运行" />
                    </el-steps>
                  </div>
                </transition>
              </div>
            </keep-alive>
            <keep-alive>
                <div v-if="pCheck==='res'">
                    <div class="empty" v-if="activeStepMaster!==4">
                        <el-empty description="暂未检测出结果" image-size="80" />
                    </div>
                    <div class="box-res-data" v-else>
                        
                        <div class="btn-watch-more">
                            <el-button type="primary" plain @click="handleViewResult">查看详情</el-button>
                        </div>
                    </div>
                </div>
            </keep-alive>
          </div>
        </div>
      </div>
      <div class="submit-box-right">
        <div class="choice">
          <p>填写测试信息</p>
          <div class="choice-ops">
            <el-input v-model="checkedModel" placeholder="测试名称" />
          </div>
        </div>
        <div class="sub-ops">
          <div class="upload">
            <div class="btn-upload">
              <input
                type="file"
                multiple
                style="display:none"
                ref="fileInput"
                @change="getFiles($event as HTMLInputEvent)"
              />
              <button @click="uploadFile">上传声纹</button>
            </div>
            <div class="files-show">
              <ul class="files-list" :style="fileList.length > 0 ? 'border: 1px dashed rgb(214, 214, 214);' : ''">
                <li v-for="(item) in fileList" :key="item.name">
                  <p class="limit-name">{{ item.name }}</p>
                  <p>/ {{ item.size.toFixed(2) }}MB</p>
                </li>
              </ul>
            </div>
          </div>
          <div class="btn-submit-box">
            <button class="btn btn-submit" @click="handleSubmit">检测声纹</button>
            <button class="btn btn-submit-re" @click="handleReSubmit">重新测试</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>





<script setup lang="ts">
import { ref } from "vue";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";
import { userStore } from "@/store/stores";
import { getCurDay } from "@/utils/day/getCurDay";
import http from "@/utils/api/api";
import config from "@/config/index"

interface HTMLInputEvent extends Event {
  target: HTMLInputElement;
}

interface FileDetail {
  name: string;
  size: number;
}

const fileInput = ref<HTMLInputElement | null>(null);
const files = ref<any>();
const activeStepMaster = ref<number>(0);
const activeStepDev = ref<number>(0);
const checkedModel = ref<string>("");
const fileList = ref<Array<FileDetail>>([]);
const pCheck = ref<string>("step");
const router = useRouter()
const store = userStore()
const emit = defineEmits(['changeBread'])
const loadFiles = ref<FileList>()
const paramsFiles: string[] = []
const submitID = ref<number>()
let globalTimer: number | null = null

/**
 * @description 上传文件 => 触发input[file]Click事件
 */
const uploadFile = (): void => {
  fileInput.value?.click();
};

/**
 * @description 获取上传的file并且赋值给files
 */
const getFiles = (e: HTMLInputEvent): void => {
    
  // 初始化状态 必要=>解决再次提交的bug
  activeStepMaster.value = 0;
  activeStepDev.value = 0;

  files.value = fileInput.value?.value;

  if (checkFiles(e.target.files!)) {
    // 截取name和size
    loadFiles.value = e.target.files!;
    fileList.value = getFileDetails(e.target.files!);

    activeStepMaster.value = 1;

    paramsFiles.length = 0
  }
};

/**
 * @description 检验e.target.files是否满足 三个文件 MP3类型
 */
const checkFiles = (fs: FileList): boolean => {
  if (fs.length !== 3) {
    ElMessage({
      message: "请提交三个文件",
      type: "error"
    });
    return false;
  }

  // 判断mp3类型
  const audioTypes = [
    ".mp3",
    ".aac",
    ".wav",
    ".wma",
    ".cda",
    ".flac",
    ".m4a",
    ".mid",
    ".mka",
    ".mp2",
    ".mpa",
    ".mpc",
    ".ape",
    ".ofr",
    ".ogg",
    ".ra",
    ".wv",
    ".tta",
    ".ac3",
    ".dts"
  ];
  for (let file of fs) {
    let fileType = file.name.slice(file.name.lastIndexOf("."));

    if (!audioTypes.includes(fileType)) {
      ElMessage({
        message: "请提交音频格式文件",
        type: "error"
      });
      return false;
    }
  }

  return true;
};

/**
 * @description 截取e.target.files的name和size
 */
const getFileDetails = (fs: FileList): Array<FileDetail> => {
  let resFileDetails: Array<FileDetail> = [];

  for (let f of fs) {
    let tempF: FileDetail = {
      name: f.name,
      size: f.size / 1024 ** 2
    };
    resFileDetails.push(tempF);
  }

  return resFileDetails;
};

/**
 * @description 提交声纹
 */
const handleSubmit = async (): Promise<void> => {
  // 判断是否填写项目名称
  if (!checkedModel.value) {
    ElMessage({
        message: '请填写测试名称',
        type: 'error'
    })
    return void 0;
  }
  // 判断是否上传就绪
  if (activeStepMaster.value !== 1) {
    if (activeStepMaster.value === 4) {
        ElMessage({
            message: '请重新检测或重新提交声纹',
            type: 'warning'
        })
        return void 0;
    }
    ElMessage({
      message: "请上传声纹",
      type: "error"
    });
    return void 0;
  }

  // 提交声纹 
  // 处理参数
  const paramsFileName = fileList.value.map(item => item.name.split('.')[0])
  
  for (let i=0; i<3; i++) {
    if (loadFiles.value) {
      const f = await filesToBase64(loadFiles.value[i] as File)
      paramsFiles.push(getSubmitBase64(f))
    }
  }
  const params = {
    fileName: paramsFileName,
    userId: store.userInfo.userId,
    projectName: checkedModel.value,
    time: getCurDay(),
    files: paramsFiles
  }

  if (!config.mock) {
    const data: any = await http.uploadVoiceprint(params)
    if (data.isUpload) {
      ElMessage({
        message: "提交成功,开始测试",
        type: "success"
      })
      submitID.value = data.isUpload
    } else {
      ElMessage({
        message: "提交失败,请重试",
        type: "error"
      });
      return;
    }
  } else {
    submitID.value = 1
  }

  // mock
  while (activeStepMaster.value < 4) {
    activeStepMaster.value++;
    if (activeStepMaster.value === 2) {
      while (activeStepDev.value < 3) {
        await handleMock(1500);
        activeStepDev.value++;
      }
      await handleMock(100);
      activeStepMaster.value++;
      continue;
    }
    await handleMock(1500);
  }
};

/**
 * @description 处理分支进度条Mock
 */
const handleMock = (waitTime: number): Promise<string> => {
  
  return new Promise((resolve): void => {
    globalTimer = window.setTimeout(() => {
      resolve("success");
    }, waitTime);
  });
};

/**
 * @description 处理查看阶段的切换
 */
const handleViewTrial = (name: string): void => {
  pCheck.value = name;
};

/**
 * @description 重新检测声纹
 */
const handleReSubmit = (): void => {
    if (globalTimer) {
        clearTimeout(globalTimer)
    }
    if (fileList.value?.length === 0) {
        activeStepMaster.value = 0;
    }else {
        activeStepMaster.value = 1;
    }
    activeStepDev.value = 0;
    handleSubmit()
}


const handleViewResult = (): void => {
  store.setUserFile(paramsFiles)
  console.log(submitID.value);
  
  router.push({
    name: 'VoiceprintResult',
    params: {
      id: submitID.value,
    }
  })
  emit('changeBread', [{title: '测试结果'}], false)
}

/**
 * 将三个文件读为Base64
 */
const filesToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve) => {
    let reader = new FileReader()
    reader.onload = (e: any) => {
      resolve(e.target.result)
    }
    reader.readAsDataURL(file)
  })
}

/**
 * 截取base64 逗号后的部分，前缀为data:audio/mpeg;base64,
 */
const getSubmitBase64 = (base64: string): string => {
  return base64.substring(base64.indexOf(',') + 1)
}


</script>



<style lang="less" scoped>
.box {
  padding: 20px 0px 0px;
  width: 100%;
  .img-box {
    width: 100%;
    height: 30vh;
    min-height: 230px;
    border-radius: 20px;
    /**
        to-do img\delete
         */
    // background-color: rgb(184, 184, 184);
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background-image: url('../../assets/remove.png');
    background-position: center;
  }
  .submit-box {
    padding: 20px 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    .submit-box-left {
      display: flex;
      flex-direction: column;
      gap: 20px;
      .details {
        font-weight: 600;
      }
      .res-ops {
        display: flex;
        flex-direction: column;
        .ops-title {
          display: flex;
          gap: 15px;
          p {
            cursor: pointer;
          }
          .p-check {
            font-weight: 600;
            border-bottom: 3px solid black;
          }
        }
        .ops-bodyer {
          padding: 20px 5px;
          .ops-bodyer-item {
            padding: 20px 0;
          }
          .steps-enter-active,
          .steps-leave-active {
            transition: opacity 0.5s ease;
          }

          .steps-enter-from,
          .steps-leave-to {
            opacity: 0;
          }
          .box-res-data {
            padding-top: 10px;
            display: flex;
            flex-direction: column;
            gap: 10px;
            .btn-watch-more {
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
            }
          }
        }
      }
    }
    .submit-box-right {
      display: flex;
      flex-direction: column;
      gap: 5px;
      .choice {
        display: flex;
        flex-direction: column;
        gap: 20px;
        .choice-ops {
          display: flex;
          gap: 20px;
          button {
            font-size: 1.3rem;
            padding: 10px 20px;
            cursor: pointer;
            border: none;
            outline: none;
            border-radius: 8px;
            color: rgb(114, 114, 114);
            background-color: #fff;
            border: 1px solid #919191;
            transition: all 1s ease;
          }
          .button-add {
            color: var(--brand-color);
            border-color: var(--brand-color);
          }
        }
      }
      .sub-ops {
        display: flex;
        flex-direction: column;
        .upload {
          display: flex;
          gap: 40px;
          align-items: center;
          margin-bottom: 30px;
          .btn-upload {
            button {
              outline: none;
              border: none;
              background-color: var(--brand-color);
              color: white;
              padding: 10px 15px;
              font-size: 1.1rem;
              border-radius: 7px;
              cursor: pointer;
              white-space: nowrap;
            }
          }
          .files-show {
            min-height: 75px;
            .files-list {
              padding: 10px 20px;
              
              border-radius: 10px;
              max-width: 192px;
              width: 192px;
              li {
                list-style: none;
                display: flex;
                flex-wrap: nowrap;
                align-items: center;
                justify-content: center;
                white-space: nowrap;
                .limit-name {
                  max-width: 93px;
                  overflow: hidden;
                  white-space: nowrap;
                  text-overflow: ellipsis;
                }
              }
            }
            .files-list:hover {
              border-color: var(--brand-color);
            }
          }
        }
        .btn-submit-box {
          display: flex;
          flex-direction: column;
          gap: 15px;
          .btn {
            border: none;
            outline: none;
            padding: 10px;
            border-radius: 7px;
            background-color: var(--brand-color);
            color: white;
            font-size: 1.1rem;
            cursor: pointer;
          }
          .btn-submit-re {
            background-color: #e9e9e97a;
            color: black;
          }
          .btn:hover {
            opacity: 0.8;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 481px) {
  .box {
    .submit-box {
      flex-direction: column-reverse;
      gap: 30px;
    }
  }
}
</style>