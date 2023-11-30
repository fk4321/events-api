let responses = []
console.log(responses)
//get the html div element 
const namesHtml = document.querySelector(".names");
const datesHtml = document.querySelector(".dates");
const timeHtml = document.querySelector(".time");
const locationHtml = document.querySelector(".location");
const descriptionHtml = document.querySelector(".description");



//render function 
function render() {
    const nameResponse = responses.map(function(response) {
        return `<li>${response.name}</li>`
    })
    namesHtml.innerHTML = nameResponse.join("")
    const dateResponse = responses.map(function(response) {
        return `<li>${response.date.substring(0,10)}</li>`
    })
    datesHtml.innerHTML = dateResponse.join("")
    const timeResponse = responses.map(function(response) {
        return `<li>${response.date.substring(11,19)}</li>`
    })
    timeHtml.innerHTML = timeResponse.join("")
    const locationResponse = responses.map(function(response) {
        return `<li>${response.location}</li>`
    })
    locationHtml.innerHTML = locationResponse.join("")
    const descriptionResponse = responses.map(function(response) {
        return `<li>${response.description}</li>`
    })
    descriptionHtml.innerHTML = descriptionResponse.join("")
}
//async function 
async function events(){
    const eventsData = await fetch("https://fsa-crud-2aa9294fe819.herokuapp.com/api/2310-ftb-et-web-ft/events")
    const data = await eventsData.json();
    console.log(data.data)
    responses = data.data
    render()
}
events()