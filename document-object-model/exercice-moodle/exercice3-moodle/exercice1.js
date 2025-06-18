const buttonClic= document.getElementById("counter") 
// je créer la variable buttonClic qui fait réference l'id  counter (html)
console.log(buttonClic)
// 
let valeur = 0
//let userHasClicked = false
buttonClic.addEventListener("click",()=>{
     //userHasClicked = true
     valeur += 1
     buttonClic.innerText = valeur + " " + "Clics !"
})