const buttonValider = document.getElementById("Valider")
// On récupère le bouton grâce à son id "Valider"
const resultatParagraph = document.getElementById("paragraph")
// On récupère le paragraphe où on veut afficher le résultat
const champsInput = document.getElementById("input")
// On récupère le champ de saisie (input texte)



console.log(buttonValider)
console.log(resultatParagraph)
console.log(champsInput)

let userHasClicked = false
// variable boléenne qui indique si l'utilisateur à déjà cliquer 

buttonValider.addEventListener("click", () =>{
    // quand tu clique sur le bouton tu exécute le code ⬇️⬇️
    userHasClicked = true
    // l'utilisateur a cliqué ?  oui
    resultatParagraph.innerText = " Bonjour," +champsInput.value
    // modifier le resultparagraph avec innertext qui prendra la valeur de champsinput
    //donc resultatParagraph = champsInput.value

})




