let name = "dat";

// Input: "dat"

// lấy kí tự đầu tiên
let firstLetter = name.charAt(0)

// In hoa
let upperCase = firstLetter.toUpperCase();

// Cắt chuỗi từ kí tự thứ 2
let slice = name.slice(1);

// Nối chuỗi
let result = upperCase + slice;

// console.log(result);

// Output "Dat"


// Input: "phong,long,tien,dat"
let names = "phong,long,tien,dat";

// Tách chuỗi thành mảng
let array = names.split(',');

for (let i = 0; i < array.length; i++) {
    // Lấy tên từ mảng
    let name = array[i];

    // lấy kí tự đầu tiên
    let firstLetter = name.charAt(0);

    // In hoa
    let upperCase = firstLetter.toUpperCase();

    // Cắt chuỗi từ kí tự thứ 2
    let slice = name.slice(1);

    // Nối chuỗi
    let result = upperCase + slice;

    // Gán lại vào mảng
    array[i] = result;
}

// Output: "Phong,Long,Tien,Dat"
let output = array.join(',');
console.log(output);