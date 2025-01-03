
function sale() {
    let price = 49999000;
    let salePrice = price * 0.5;
    salePrice = salePrice.toLocaleString('VN');
    salePrice = salePrice.replace(/,/g, '.');
    document.querySelector('span').innerHTML = salePrice + ' VND';

    let countdown = document.getElementById('countdown');
    let count = 30;
    let interval = setInterval(() => {
        count--;
        countdown.innerHTML = count;
        if (count == 0) {
            clearInterval(interval);
            countdown.innerHTML = 'Time off';
            document.querySelector('span').innerHTML = price.toLocaleString('VN') + ' VND';
        }
    }, 1000);
}

let data = "1,2,3,4,5,6,7,8,9,10";
let arr = data.split(',');
console.log(arr);