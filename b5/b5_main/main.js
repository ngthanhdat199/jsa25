function sumOfN(n) {
    var sum = 0;
    // i++ => i = i + 1
    for (let i = 1; i <= n; i++) {
        // sum = sum + i;
        sum += i;
    }
    return sum;
}

function sumOfN2(n) {
    return n * (n + 1) / 2;
}

// khai báo biến user 
let user = {
    name: 'Tom',
    age: 25,
}

// chuyển object/array sang json
let json = JSON.stringify(user);

// object
// console.log(user);

// json
// console.log(json);

// đẩy dữ liệu lên local storage
localStorage.setItem('user', json);

// lấy dữ liệu từ local storage
let data = localStorage.getItem('user');

console.log(data);

// chuyển json sang object/array
let userData = JSON.parse(data);

console.log(userData);

localStorage.removeItem('user');




