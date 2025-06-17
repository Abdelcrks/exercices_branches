const button = document.getElementById("button")
const paragraph = document.getElementById("paragraph")
console.log(button)
console.log(paragraph)


let userHasClicked = false

button.addEventListener("click", () => {
    if(userHasClicked === true){  
        userHasClicked = false
    paragraph.style.display = "none"
    }else{
        userHasClicked = true
        paragraph.style.display = "block"
    }
})


