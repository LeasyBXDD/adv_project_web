

function getCurDay(time?: string): string {
    const today = new Date(time ? time : new Date());
    const formattedDate = today.toLocaleDateString('zh-CN', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '-');
    return formattedDate
}

export {
    getCurDay
}