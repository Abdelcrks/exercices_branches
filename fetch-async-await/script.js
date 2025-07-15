async function fetchOffers() {
    const response = await fetch("https://www.codepassport.dev/api/offers")
    const offers = await response.json()
    //console.log(offers)

    const div =document.getElementById("container")

    offers.forEach(element => {
        //console.log(element)
        let title = document.createElement("h2")
        div.appendChild(title)
        title.innerHTML = element.titre
        let technologie = document.createElement("p")
        div.appendChild(technologie)
        technologie.innerHTML = element.technologie
        let description = document.createElement("p")
        div.appendChild(description)
        description.innerHTML = element.description
        
    });

}
fetchOffers()