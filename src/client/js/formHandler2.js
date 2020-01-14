function handleSubmit2(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    Client.checkForName(formText)
    // baseURL = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=661daa7377189bfe425b6af1f07ac279'
    console.log("::: Form Submitted :::")
    // fetch('http://localhost:8081/test')
    fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=661daa7377189bfe425b6af1f07ac279')
    .then(res => {
        return res.json()
    })
    .then(function(data) {
        document.getElementById('results').innerHTML = data.main.temp;
    })
}

export { handleSubmit2 }