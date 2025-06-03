// Nous souhaitons faire la somme du prix de plusieurs articles
// Prix de deux articles
let a1 = 10
let a2 = 20
// Nous calculons le total
let tot = a1 + a2    // J'ai modifier le const par un let car plus bas nous allons rajouter un troisième article et let permet de modifier cela alors que const non.
// Prix d'un troisieme article
let a3 = 50    // Ici de base la valeur était entre des string "50" ce qui est une erreur car nous en avons pas besoin quand c'est des nombres 
// Nous ajoutons a3 au total
tot = tot + a3

//Nous appliquons 20% de reduction      J'ai déplacer ici le code (cf plus bas) et j'ai également modifier le "," par un . car sinon le code ne se lit pas
let tot2 = tot - tot * 0.20
//let tot2 = tot * 0.80    alternative pour la reduction les deux calculs sont bons

console.log("Le prix total avant reduction est de : " + tot)       // changement de , par +
console.log("Le prix total après reduction est de : " + tot2)      // idem

/* Nous appliquons 20% de reduction     
 let tot2 = tot - tot*0,2    cette ligne doit être avant le console.log car ici sur JS le code est lu de haut en bas et donc inclure 
une reduction après le console.log ne sera pas prise en compte. par ailleurs il y a également une faute.     
 */


// Code non debuger en bas ⬇︎⬇︎⬇︎

// Nous souhaitons faire la somme du prix de plusieurs articles
// Prix de deux articles
let a1 = 10
let a2 = 20
// Nous calculons le total
const tot = a1 + a2
// Prix d'un troisieme article
let a3 = "50"
// Nous ajoutons a3 au total
tot = tot + a3

console.log("Le prix total avant reduction est de : ", tot)
console.log("Le prix total après reduction est de : ", tot2)

//Nous appliquons 20% de reduction
let tot2 = tot - tot*0,2