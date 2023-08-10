


/**
 * 防抖函数
 * @returns void
 */
function useDebounce() {
    let time: NodeJS.Timeout | null = null;
    return function (this: any, fn: Function, delay: number) {
        if (time) {
            clearTimeout(time);
        }
        time = setTimeout(() => {
            // fn.bind(this);
            fn();
        }, delay) 

    }
}

export default useDebounce