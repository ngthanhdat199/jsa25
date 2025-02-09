const url = 'https://api.balldontlie.io/v1/teams';

fetch(url, {
    headers: {
        'Authorization': '9145376e-18b8-4f11-aa88-e87fb116ea88',
    },
})
.then(response => response.json())
.then(json => {
    render(json);
})


function render(json) {
    const div = document.querySelector('div');
    for (let i = 0; i < json.data.length; i++) {
        div.innerHTML += `
            <p>ID: ${json.data[i].id}</p>
            <p>Abbreviation: ${json.data[i].abbreviation}</p>
            <p>City: ${json.data[i].city}</p>
            <p>Name: ${json.data[i].name}</p>
            <p>Fullname: ${json.data[i].full_name}</p>
            <p>---------------------------------</p>
        `;
    }

    console.log(div);
}