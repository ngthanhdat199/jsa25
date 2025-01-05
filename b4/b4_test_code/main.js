// ======= Array =======
let arr = ["1", 2, true, null, undefined];

// ======= Get value =======
// console.log(arr[0]);

// ======= Add =======

// C1: push
// arr.push("new element");

// C2: splice
// arr.splice(arr.length, 0, "new element");

// ======= Update =======

// C1: gán
// arr[0] = 1;

// C2: splice
// arr.splice(0, 1, 1);


// ======= Search index =======

let fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.indexOf("Apple"));


// ======= Delete =======
// arr.splice(0, 1);
// console.log(arr);

// ======= Object =======

let student = {
    name: "Kien",
    age: 20,
    address: "Ha Noi",
    // email: "kiendeptrai@gmail.com",
}


// ======= Get key =======
// console.log(student.address);
// console.log(student["address"]);

// ======= Loop key =======
// for (let key in student) {
//     console.log(key, student[key]);
// }

// ======= Add key =======
// C1:
student.email = "kiendeptrai@gmail.com";

// C2:
student["email"] = "kienkodeptrai@gmail.com";

// console.log(student);

// ======= Search key =======


// toán tử 3 ngôi
// console.log("email" in student ? "email exist in student" : "no exist");


// ======= Delete key =======
// C1:
// delete student.email;
// C2:
// delete student["email"];
