function solveMath() {
    let n = prompt("Nhập vào số n: ");
    while (true) {
        if (n < 0) {
            alert("Nhập lại n: ");
            n = prompt("Nhập vào số n: ");
        } else {
            break;
        }
    }

    result = sum(n);

    console.log("tổng số chẵn từ 0 đến n: " + result[0]);
    console.log("tổng số lẻ từ 0 đến n: " + result[1]);

}

function sum(n) {
    let sumOdd = 0;
    let sumEven = 0;
    for (let i = 0; i <= n; i++) {
        if (i % 2 == 0) {
            sumEven += i;
        } else {
            sumOdd += i;
        }
    }
    return [sumEven, sumOdd];
}

// solveMath();

function drawTriangle() {
    let n = prompt("Nhập vào số n: ");
    while (true) {
        if (n < 0) {
            alert("Nhập lại n: ");
            n = prompt("Nhập vào số n: ");
        } else {
            break;
        }
    }

    for (let i = 1; i <= n; i++) {
        let str = "";
        for (let j = 1; j <= i; j++) {
            str += j;
        }
        console.log(str);
    }
}

drawTriangle();