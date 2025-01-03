function bai1() {
    var userObject = [
        {
            id: 1,
            name: "Nguyen Van A",
        },
        {
            id: 2,
            name: "Nguyen Van B",
        }
    ]
    
    var newObject = {
        id: 3,
        name: "Nguyen Van C",
    }
    
    userObject.append(newObject);
    
    var updateID = 2;
    for (let i = 0; i < userObject.length; i++) {
        if (userObject[i].id == updateID) {
            userObject[i].name = "Nguyen Van D";
        }
    }
    
    var deleteID = 1;
    for (let i = 0; i < userObject.length; i++) {
        if (userObject[i].id == deleteID) {
            userObject.splice(i, 1);
        }
    }
    
    console.log(userObject);
}



function bai2() {
    var userObject = {
        name: "Nguyen Van A",
        age: 20,
        city: "Hanoi",
    }

    userObject.email = "example@gmail.com";

    delete userObject.age;

    console.log(userObject);
}