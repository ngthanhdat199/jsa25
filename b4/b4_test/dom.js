// function dom() {
//     const pID = document.getElementById("id-test");
//     console.log(pID);

//     const pClass = document.getElementsByClassName("class-test");
//     console.log(pClass);

//     const hTag = document.getElementsByTagName("h1");
//     console.log(hTag);

//     const querySelector = document.querySelector("#query-selector");
//     console.log(querySelector);

//     let newElement = document.createElement("h2");
//     newElement.innerHTML = "Hello World";
//     newElement.style.color = "red";
//     console.log(newElement);

//     querySelector.appendChild(newElement);
// }


let p = document.getElementById("p-id");
console.log(p);

let h = document.getElementsByTagName("h1");
console.log(h);

function show() {
    // lấy thẻ cha
    let h2 = document.querySelector("#h2-test");

    // tạo thẻ con
    let newElement = document.createElement("h3");
    // thêm text HTML cho thẻ con
    newElement.innerHTML = "Hello World TEST";
    newElement.style.color = "red";
    newElement.style.backgroundColor = "yellow";

    // thêm thẻ con vào thẻ cha
    h2.appendChild(newElement);
}
