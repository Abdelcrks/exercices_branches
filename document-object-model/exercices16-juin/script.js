const pageTitle = document.querySelector("h1")  
// "Je demande au document de me trouver un élément avec ce sélecteur (ici, le <h1>)"
console.log(pageTitle)

const subscribeButton = document.querySelector("#newsletter")
// Je sélectionne l'élément qui a l'id "newsletter" (ici, un bouton)
console.log(subscribeButton)

let userHasCliked = false

subscribeButton.addEventListener('click', () => {
  // "Quand on clique sur le bouton, exécute ce code"

  if (userHasCliked === true) {
    // L'utilisateur avait déjà cliqué auparavant → il était abonné
    // On annule l'abonnement, donc on repasse à false
    userHasCliked = false

    // On met à jour le texte du bouton
    subscribeButton.innerText = "subscribe"
  } else {
    // L'utilisateur clique pour la première fois → il s'abonne
    userHasCliked = true

    // On met à jour le texte du bouton
    subscribeButton.innerText = "unsubscribe"
  }
})


const monBouton = document.querySelector("#monBouton")
console.log(monBouton)

let userQuiPress = false
monBouton.addEventListener("click", () => {
    if(userQuiPress === false){ 
        userQuiPress = true 
        monBouton.innerText = "Merci de cliquer !"
    }
    else {
        userQuiPress = false
        monBouton.innerText = "Clique-moi !" 
    }

})







const buttonFacebook = document.querySelector("#Facebook")
console.log(buttonFacebook)

let userQuiCliqueSurFacebook = false

buttonFacebook.addEventListener("click", () => {   // faire attention à mettre click en miniscule !! c'est ce qui m'a fait galérer
    if(userQuiCliqueSurFacebook === false){ 
        userQuiCliqueSurFacebook = true
    buttonFacebook.innerText = "Se désabonner"
    }
    else {
        userQuiCliqueSurFacebook = false
    buttonFacebook.innerText = "Abonne toi"
    }
})

// querySelector("#Facebook") → pour cibler un élément HTML

//addEventListener("click", ...) → pour réagir à un clic

// innerText → pour changer dynamiquement le texte

// Utilisation d’un booléen (true/false) pour mémoriser l’état
