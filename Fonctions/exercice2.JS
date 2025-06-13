/*
Écris une fonction qui prend en argument un nombre entier et retourne son carré.
 Affiche le résultat dans la console. Objectif
  : Je donne 3 à ma fonction, j’obtiens 9. Je donne 2 à ma fonction, j’obtiens 4.

Stocke le résultat de la fonction dans une variable 
(c’est-à-dire, créé une variable qui sera égale à l’appel de la fonction).
Nous allons utiliser cette variable pour la donner à une autre fonction .
Ecris une autre fonction qui va multiplier par 10, la variable précédente. 
Affiche le résultat dans la console. Objectif : Je donne 9 à ma fonction de multiplication, j’obtiens 90.

Modifie le code existant et demande à l’utilisateur via une fonction existante (que tu dois rechercher)
le nombre qui sera en entrée de la première fonction. Objectif
L’utilisateur rentre un nombre, disons 4. Dans la console, je dois voir successivement 16 et 160.
*/

const calculerCarrer = (number) => {
    return number * number
} 
//console.log(calculerCarrer(2))

const multiplierPar10 = (nombre) => {
    return nombre * 10
        
}
//console.log(multiplierPar10(9))

let saisie = prompt("Entre un nombre :")     // creer la fonction qui affiche la boite
let nombreUtilisateur = Number(saisie)        // permet de convertir les "strings" en nombre  
let resultCarrer = calculerCarrer(nombreUtilisateur)  // appel la fonction resultat carrer pour calculer au carré le nombre de l'utilisateur
alert(resultCarrer) // affiche le resultat de resultCarrer 
let resultatFinal = multiplierPar10(resultCarrer) // appel la fonction multiplier par qui multiplie par 10 
alert(resultatFinal) // affiche le calcul au carré et le x10 

// https://codepen.io/pen/?editors=1111 pour tester le prompt




