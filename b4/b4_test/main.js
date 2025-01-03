function loopElementArray() {
    // duyệt mảng
    let ds = ["a", "b", "c", "d", "e"];
    for (let i = 0; i < ds.length; i++) {
        console.log(ds[i]);
    }
}

function addElementArray() {
    // thêm phần tử vào mảng
    let ds = ["a", "b", "c", "d", "e"];
    console.log("mảng trước khi thêm", ds);
    ds.push("f", "g");
    console.log("mảng sau khi thêm", ds);
}

function spliceElementArray() {
    // thêm phần tử vào vị trí bất kì trong mảng
    let ds = ["a", "b", "c", "d", "e"];
    console.log("mảng trước khi thêm", ds);
    ds.splice(2, 1, "new c");
    console.log("mảng sau khi thêm", ds);
}

function updatElementeArray() {
    // cập nhật phần tử trong mảng
    let ds = ["a", "b", "c", "d", "e"];
    console.log("mảng trước khi cập nhật", ds);
    ds[0] = "b";
    console.log("mảng sau khi cập nhật", ds);
}

function searchElementArray() {
    // tìm kiếm phần tử trong mảng
    let ds = ["a", "b", "c", "d", "e"];
    let index = ds.indexOf("c");
    console.log("vị trí của phần tử c là", index);
}

function deleteElementArray() {
    // xóa phần tử trong mảng
    let ds = ["a", "b", "c", "d", "e"];
    console.log("mảng trước khi xóa", ds);
    ds.splice(1, ds.length );
    console.log("mảng sau khi xóa", ds);
}

function loopObject() {
    // duyệt object
    let obj = {
        name: "Nguyen Van A",
        age: 20,
        address: "Ha Noi",

    };

    for (let key in obj) {
        console.log(key, obj[key]);
    }
}

function loopElementArray() {
    // duyệt mảng
    let ds = ["a", "b", "c", "d", "e"];
    for (let i = 0; i < ds.length; i++) {
        console.log(ds[i]);
    }
}

function addElementArray() {
    // thêm phần tử vào mảng
    let ds = ["a", "b", "c", "d", "e"];
    console.log("mảng trước khi thêm", ds);
    ds.push("f", "g");
    console.log("mảng sau khi thêm", ds);
}

function spliceElementArray() {
    // thêm phần tử vào vị trí bất kì trong mảng
    let ds = ["a", "b", "c", "d", "e"];
    console.log("mảng trước khi thêm", ds);
    ds.splice(2, 1, "new c");
    console.log("mảng sau khi thêm", ds);
}

function updatElementeArray() {
    // cập nhật phần tử trong mảng
    let ds = ["a", "b", "c", "d", "e"];
    console.log("mảng trước khi cập nhật", ds);
    ds[0] = "b";
    console.log("mảng sau khi cập nhật", ds);
}

function searchElementArray() {
    // tìm kiếm phần tử trong mảng
    let ds = ["a", "b", "c", "d", "e"];
    let index = ds.indexOf("c");
    console.log("vị trí của phần tử c là", index);
}

function deleteElementArray() {
    // xóa phần tử trong mảng
    let ds = ["a", "b", "c", "d", "e"];
    console.log("mảng trước khi xóa", ds);
    ds.splice(1, ds.length );
    console.log("mảng sau khi xóa", ds);
}

function loopObject() {
    // duyệt object
    let object = {
        name: "Nguyen Van A",
        age: 20,
        address: "Ha Noi",

    };

    for (let key in object) {
        console.log(key, object[key]);
    }
}

function addKeyObject() {
    // thêm key vào object
    let object = {
        name: "Nguyen Van A",
        age: 20,
        address: "Ha Noi",
    };

    console.log("object trước khi thêm key", object);

    object.email = "email@gmail.com"
    object["phone"] = "0123456789";

    console.log("object sau khi thêm key", object);
}

function searchKeyObject() {
    // tìm kiếm key trong object
    let object = {
        name: "Nguyen Van A",
        age: 20,
        address: "Ha Noi",
        test: undefined
    };

    if ("test" in object) {
        console.log("key test có tồn tại");
    } else {
        console.log("key test không tồn tại");
    }

    if (object.hasOwnProperty("test")) {
        console.log("key test có tồn tại");
    } else {
        console.log("key test không tồn tại");
    }

}

function deleteKeyObject() {
    // xóa key trong object
    let object = {
        name: "Nguyen Van A",
        age: 20,
        address: "Ha Noi",
        email: "email@gmail.com",
    }

    console.log("object trước khi xóa key", object);

    delete object.email;

    console.log("object sau khi xóa key", object);
}

function appStudent() {
    let hocsinh = [
        {ten: "Nguyen Van A", tuoi: 20, lop: "12A"},
        {ten: "Nguyen Van B", tuoi: 21, lop: "12B"},
        {ten: "Nguyen Van C", tuoi: 22, lop: "12C"},
    ]

    addStudent(hocsinh);
    printStudent(hocsinh);

    updateStudent(hocsinh);
    console.log("--------------------------------------")
    printStudent(hocsinh);

    deleteStudent(hocsinh);
    console.log("--------------------------------------")
    printStudent(hocsinh);
}

// CREATE -> C
function addStudent(hocsinh) {
    let studentObject = {
        ten: "Nguyen Van D",
        tuoi: 23,
        lop: "12D"
    }

    hocsinh.push(studentObject);
}

// GET -> G
function printStudent(hocsinh) {
    for (let i = 0; i < hocsinh.length; i++) {
        console.log(hocsinh[i]);
    }
}

// UPDATE -> U
function updateStudent(hocsinh) {
    for (let i = 0; i < hocsinh.length; i++) {
        if (hocsinh[i].ten === "Nguyen Van B") {
            hocsinh[i].tuoi = 25;
        }
    }
}

// DELETE -> D
function deleteStudent(hocsinh) {
    for (let i = 0; i < hocsinh.length; i++) {
        if (hocsinh[i].ten === "Nguyen Van C") {
            hocsinh.splice(i, 1);
        }
    }
}

appStudent();
