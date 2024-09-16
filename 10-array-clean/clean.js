let arr = [3, 6, 9, 2];
let result = [];


function dele(num) {
    return ((num < 5))
}


function clean(arr, fn) {
    for (let i of arr) {
        if (fn(i)) {
            result.push(i);
        }
    }
    return result
}


console.log(clean(arr, dele))

