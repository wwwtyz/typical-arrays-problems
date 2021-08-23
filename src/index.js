
exports.min = function min (array) {
    let result = 0;
    if (!array || array.length === 0) {
        return 0;
    } else
    result = array.sort((a,b) => a - b)[0];
  return result;
}

exports.max = function max (array) {
    let result = 0;
    if (!array || array.length === 0) {
        return 0;
    } else
    result = array.sort((a,b) => b - a)[0];
  return result;
}

exports.avg = function avg (array) {
    let result = 0;
    let sum = 0;
    let i = 0;
    if (!array || array.length === 0) {
        return 0;
    } else {
    array.forEach ((i) => {
       sum += i;
       result = sum / array.length;
    })
    };
  return result;
}
