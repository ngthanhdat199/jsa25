const url = 'https://api.balldontlie.io/v1/players?per_page=10'
fetch(url, {
    headers: {
        'Authorization': '9145376e-18b8-4f11-aa88-e87fb116ea88',
    }
})
.then(response => response.json())
.then(json => console.log(json))

