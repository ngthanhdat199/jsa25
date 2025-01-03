const cat = {
    name: 'Tom',
    age: 25,
    is_male: true,
}

// chuyển object/array sang json
let json = JSON.stringify(cat);

// đẩy dữ liệu lên local storage
// localStorage.setItem('cat', json);

// lấy dữ liệu từ local storage
let json2 = localStorage.getItem('cat');

// chuyển json sang object/array
let cat2 = JSON.parse(json2);
