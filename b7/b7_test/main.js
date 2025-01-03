const url = "https://dog.ceo/api/breeds/image/random/10";

fetch(url) // gửi request đến url
  .then(res => res.json()) 
  .then(data => {

    for (let i = 0; i < data.message.length; i++) {
      const img = document.createElement("img"); // tạo thẻ img
      img.src = data.message[i]; // gán src cho thẻ img
      document.body.appendChild(img); // thêm thẻ img vào body
    }

  }) 
  .catch(err => console.log(err));


if (dieukien1) {

}

if (dieukien2) {

}



const userOnLocalStore = localStorage.getItem("user");

for (let i = 0; i < 10; i++) {
  console.log(i);
}