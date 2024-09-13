
let arr = [1, 40, -5, 10, 0];
let N = arr.length;

function bubble(arr){
    for (let i = 0; i < N; i++){
        for (let j = i; j < N; j++){
            if (arr[i] > arr[j]){
                let tmp = arr[j];
                arr[j] = arr[i];
                arr[i] = tmp;
            }
        }
    } return (arr); 

}

console.log(bubble(arr))
