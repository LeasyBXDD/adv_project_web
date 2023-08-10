
/**
 * 获取两个时间间隔的dayNames
 * 
 */

function getBetweenDaysName(beginDate: string, endDate: string): string[] {
    let timeBetweens: string[] = []
    let begin = new Date(beginDate)
    let end = new Date(endDate)

    let curDate = begin
    while(curDate <= end) {
        timeBetweens.push(curDate.getDate() + "日")
        curDate.setDate(curDate.getDate() + 1)
    }
    return timeBetweens
}

export {
    getBetweenDaysName
}