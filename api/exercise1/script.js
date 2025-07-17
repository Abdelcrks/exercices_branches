const ul = document.getElementById("list")

const Fetch = async () => {
    
   try{ const response = await fetch("https://the-one-api.dev/v2/movie", {
        headers: {Authorization: "Bearer toYKCMesa-uYi8xJXo9D"} 
    })
    const data = await response.json()
    console.log(data)

    data.docs.forEach(element => {
        const movie = document.createElement("li")
        ul.appendChild(movie)
        movie.innerHTML= `<strong>${element.name}</strong> a couté ${element.budgetInMillions} millions de $`
    }); 
    }
    catch{err} {
        document.createElement("p").innerText="reessaye plus tard 😕"
    }

}
Fetch()