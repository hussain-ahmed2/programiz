function isErdosWoodsSequence(start, end) {
    for(let i = start; i<=end; i++) {
        let isCommonFactorFound = false;
        for(let j = 2; j<= Math.ceil(i/2); j++) {
            if (i%j === 0) {
                isCommonFactorFound = true;
                break;
            }
        }
        if (!isCommonFactorFound) return false;
    }

    return true;
}

console.log(isErdosWoodsSequence(2184, 2200))