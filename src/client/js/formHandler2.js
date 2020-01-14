function handleSubmit2(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://api.openweathermap.org/data/2.5/weather?q=Brussels,be&APPID=661daa7377189bfe425b6af1f07ac279')
    .then(res => {
        return res.json()
    })
    .then(function(data) {
        console.log(data)
        document.getElementById('results').innerHTML = data.main.temp;
    })
}

export { handleSubmit2 }
