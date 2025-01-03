// Ktra max

function max(a,b) {
    if(a > b) {
        return a
    } else {
        return b
    }
}

function maxOfN(arr)  {
    let max = 0;
    let length = arr.length - 1;
    while(length > 0){
        if (max >= arr[length]) {
            max == arr[length]
            length--
        } else {
            length--
        }
    }
    return max
}

let input = prompt("Nhập vào số mà bạn muốn kiểm tra: ")
let cacSo = input.split(",")

console.log(maxOfN(cacSo));
