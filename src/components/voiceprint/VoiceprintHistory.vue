<template>
    <div class="box">
        <div class="title">
            <h1>声纹检测记录</h1>
            <p>您的检测记录</p>
        </div>
        <div class="box-bodyer">
            <div class="table-header">
                <p>数据分析</p>
                <h4>声纹检测历史记录</h4>
            </div>
            <div class="table-bodyer">
                <div class="rows">
                    <div class="row-item table-title">
                        <div class="item-icon">序号</div>
                        <div class="item-model">测试名称</div>
                        <div class="item-time">测试时间</div>
                        <div class="item-files-name">测试文件</div>
                        <div class="item-files-ops">操作</div>
                    </div>
                    <div class="row-item row-content" v-for="(item, index) in tableData" :key="item.filesName">
                        <div class="item-icon item"><div class="icon">{{ index + 1 }}</div></div>
                        <div class="item-model item">{{ item.model }}</div>
                        <div class="item-time item">{{ item.time }}</div>
                        <div class="item-files-name item">{{ item.filesName }}</div>
                        <div class="item-files-ops">
                            <el-button text type="primary" @click="handleDetails">详情</el-button>
                            |
                            <el-button text type="danger">删除</el-button>
                        </div>
                    </div>
                    
                </div>  
            </div>
        </div>
        <div class="box-footer">
            <el-pagination
            :page-size="20"
            :pager-count="11"
            layout="prev, pager, next"
            :total="100"
            />
        </div>
    </div>    
</template>



<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router';



interface TableDataItem {
    model: string;
    time: string;
    filesName: string;
    id?: number;
}

const router = useRouter()
const tableData = ref<Array<TableDataItem>>([
    {
        model: 'OriginalAudio',
        time: '2023年7月13日 17:25',
        filesName: '声纹1.mp3; 声纹2.mp3; 声纹3.mp3'
    },
    {
        model: 'Adversarial Sample',
        time: '2023年7月13日 18:26',
        filesName: '声纹1.mp3; 声纹2.mp3; 声纹3.mp3'
    },
    {
        model: 'Adversarial Sample',
        time: '2023年7月13日 18:26',
        filesName: '声纹1.mp3; 声纹2.mp3; 声纹3.mp3'
    },
    {
        model: 'Adversarial Sample',
        time: '2023年7月13日 18:26',
        filesName: '声纹1.mp3; 声纹2.mp3; 声纹3.mp3'
    },
    {
        model: 'Adversarial Sample',
        time: '2023年7月13日 18:26',
        filesName: '声纹1.mp3; 声纹2.mp3; 声纹3.mp3'
    },
    {
        model: 'Adversarial Sample',
        time: '2023年7月13日 18:26',
        filesName: '声纹1.mp3; 声纹2.mp3; 声纹3.mp3'
    },
    {
        model: 'Adversarial Sample',
        time: '2023年7月13日 18:26',
        filesName: '声纹1.mp3; 声纹2.mp3; 声纹3.mp3'
    }
    
])


const handleDetails = (): void => {
    router.push({
        name: 'VoiceprintResult'
    })
}

</script>


<style lang="less" scoped>
.box {
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    width: 100%;
    .title {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
        font-size: 1.1rem;
        p {
            font-size: 0.9rem;
            color: grey;
        }
    }
    .box-bodyer {
        --border-ra: 10px;
        width: 100%;
        border-radius: var(--border-ra);
        .table-header {
            width: 100%;
            height: 120px;
            background-color: grey;
            color: white;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            font-size: 1.1rem;
            gap: 10px;
            border-radius: var(--border-ra) var(--border-ra) 0 0;
        }
    }
    .table-bodyer {
        width: 100%;
        .rows {
            width: 100%;
            display: flex;
            flex-direction: column;
            .row-item {
                width: 100%;
                display: flex;
                padding: 5px;
                font-size: 1.1rem;
                border-bottom: 1px solid rgb(216, 216, 216);
                .item {
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    flex-wrap: nowrap;
                }
                .item-icon {
                    flex: 1;  
                    .icon {
                        padding: 3px 10px;
                    } 
                }
                .item-model {
                    flex: 5;
                }
                .item-time {
                    flex: 5;
                }
                .item-files-name {
                    flex: 10;
                }
                .item-files-ops {
                    flex: 5;
                    
                    .el-button+.el-button {
                        margin-left: 0;
                    }
                }
            }
            .row-content:nth-child(-n+4) {
                .item-icon {
                    color: white;
                    .icon {
                        border-radius: 100% / 60%;
                    }
                }
            }
            .row-content:nth-child(2) {
                .item-icon {
                    .icon {
                        background-color: rgb(40, 108, 255);
                    }
                }
            }
            .row-content:nth-child(3) {
                .item-icon {
                    .icon {
                        background-color: rgb(45, 136, 255);
                    }
                }
            }
            .row-content:nth-child(4) {
                .item-icon {
                    .icon {
                        background-color: rgb(122, 164, 255);
                    }
                }
            }
            .table-title {
                font-weight: 600;
                color: rgb(138, 138, 138);
                padding: 15px 0;
            }
            .row-content {
                .item-files-ops {
                    color: rgb(202, 202, 202);
                    font-weight: 100;
                }
                .item-files-name, .item-time {
                    color: grey;
                    font-weight: 400;
                    font-size: 1rem;
                }
            }
            .row-content:hover {
                background-color: rgba(236, 240, 241, 0.534);
            }
        }
    }
    .box-footer {
        display: flex;
        width: 100%;
        justify-content: flex-end;
        align-items: center;
    }
}
</style>