<template>
    <div class="history-table-box">
        <el-table :data="props.tableData" style="width: 100%">
            <el-table-column prop="historyId" label="声纹编号" width="180" />
            <el-table-column prop="projectName" label="项目名称" width="180" />
            <el-table-column prop="userName" label="用户" />
            <el-table-column prop="time" label="更新时间" />
            <el-table-column label="操作">
                <template #default="scope">
                    <el-button size="small" @click="handleEdit(scope.row)"
                    >详情</el-button
                    >
                    <el-button
                    size="small"
                    type="danger"
                    @click="handleDelete(scope.row)"
                    >删除</el-button
                    >
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>


<script setup lang="ts">
import managerHttp from '@/utils/api/manager/managerApi';
import { ElMessageBox } from 'element-plus';
import { IGET_MANAGER_VOICEPRINT_DETAILS_RESPONSE } from '@/utils/api/manager/types';

const props = defineProps<{
    tableData: Array<Props.HistoryTableProps>
}>()

const emit = defineEmits<{
    (e: 'deleteHistory', row: Props.HistoryTableProps): void
}>()

const handleEdit = async (row: Props.HistoryTableProps): Promise<void> => {
    // to-do router
    console.log(row);
    const data = await managerHttp.getManagerVoiceprintDetails({historyId: row.historyId}) as IGET_MANAGER_VOICEPRINT_DETAILS_RESPONSE

    function downloadTxt() {
        // 借助时间戳生成下载的文件名
        const fileName = row.projectName + (Date.now() / 10000+ "") + ".txt"
        // 文件内容
        const fileData = `
            测试名为：${row.projectName} \n
            置信度为：${data.confidenceLevel} \n
            等错误率为：${data.equalErrorRate} \n
            最小检测成本函数为：${data.minDetectionCostFunc} \n
        `
        // 下载文件
        const urlObject = window.URL || window.webkitURL || window;
        const export_blob = new Blob([fileData]);
        const save_link: any = document.createElementNS("http://www.w3.org/1999/xhtml", "a")
        save_link.href = urlObject.createObjectURL(export_blob);
        save_link.download = fileName;
        save_link.click();
    }


    downloadTxt()


    function dataURLtoBlob(dataurl: string) {
        var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)![1],
            bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new Blob([u8arr], { type: mime });
    }
 
    function downloadFile(url: string,name='文件默认名'){
        var a = document.createElement("a")
        a.setAttribute("href",url)
        a.setAttribute("download",name)
        a.setAttribute("target","_blank")
        let clickEvent = document.createEvent("MouseEvents");
        clickEvent.initEvent("click", true, true);  
        a.dispatchEvent(clickEvent);
    }
 
    function downloadFileByBase64(base64: string,name: string){
        var myBlob = dataURLtoBlob(base64)
        var myUrl = URL.createObjectURL(myBlob)
        downloadFile(myUrl,name)
    }
    
    downloadFileByBase64('data:audio/mpeg;base64,' + data.files[0], "声纹" + 1 + ".mp3")
    downloadFileByBase64('data:audio/mpeg;base64,' + data.files[1], "声纹" + 2 + ".mp3")
    downloadFileByBase64('data:audio/mpeg;base64,' + data.files[2], "声纹" + 3 + ".mp3")

    
}

const handleDelete = (row: Props.HistoryTableProps): void => {
    ElMessageBox.confirm(
        '删除后不可恢复，是否继续删除？',
        '注意',
        {
            confirmButtonText: '确认',
            cancelButtonText: '取消',
            type: 'warning'
        }
    ).then(() => {
        emit('deleteHistory', row)
    })
}



</script>


<style lang="less" scoped>
.history-table-box {
    width: 100%;
}
</style>