

/**
 * 保留 x位小数
 *
 */

function useNumberFixed(): Function {
    return function(num: number, fixed: number = 4): number {
        return parseFloat(num.toFixed(fixed));
    }
}


export {
    useNumberFixed
}