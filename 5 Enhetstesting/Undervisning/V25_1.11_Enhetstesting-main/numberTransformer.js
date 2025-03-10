
function getTransformedNumber(number) {
    if(number < 0) {
        return Math.abs(number);
    }
    
    if(number % 2 === 0) {
        return number * 2;
    } else {
        return number * 3;
    }
}

function setTransformedNumber() {
    transformedNumber = getTransformedNumber(numberToTransform);
    updateView();
}