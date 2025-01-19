function click() {
    let items = document.querySelectorAll('.item');
    for (let i = 0; i < items.length; i++) {
        items[i].addEventListener('click', function() {
            items[i].style.backgroundImage = "url('./img/chips.jpeg')";
        });
    }
}

click();

const arr = [
    {
        name: "chips",
        img: "./img/chips.jpeg",
    },
    {
        name: "burger",
        img: "./img/burger.jpeg",
    },
    {
        name: "pizza",
        img: "./img/pizza.jpeg",
    },
    {
        name: "hotdog",
        img: "./img/hotdog.png",
    },
    {
        name: "fries",
        img: "./img/fries.jpeg",
    },
    {
        name: "donut",
        img: "./img/donut.jpeg",
    },
];


function sortImg() {
    arr.sort(() => Math.random() - 0.5);
}

sortImg();


function show() {
    let items = document.querySelectorAll('.item');
    for (let i = 0; i < items.length; i++) {
        let index = i % arr.length;
        items[i].style.backgroundImage = `url('${arr[index].img}')`;
    }
}

show();