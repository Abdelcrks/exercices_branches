
/* Ecris une fonction addition3Numbers() qui affichera la somme de 1 + 2 + 3 dans la console. Objectif : Voir dans la console : “Le résultat de la somme est 6”

Ecris une nouvelle fonction addition3NumbersWithArg(…) qui affichera aussi le résultat d’une addition de 3 nombres mais cette fois-ci à partir de 3 arguments.
 Déclarer 3 variables qui prennent chacune une valeur de votre choix. Passez ces variables à la fonction addition3NumbersWithArg(…).
Objectif : Voir dans la console : “Le résultat de la somme est X”. X étant le résultat de la somme de vos trois valeurs de variables.

Appelez addition3NumbersWithArg() 3 fois avec des valeurs d’argument différentes. Objectif :
 Voir dans la console : “Le résultat de la somme est X ” “Le résultat de la somme est Y” “Le résultat de la somme est Z”

*/

function addition3Numbers(number)
{
    console.log("Le résultat de la somme est :", 1 + 2 + 3)

}

addition3Numbers()


let x = 5
let y = 20
let z = 30


function addition3NumbersWithArg(a,b,c){
    console.log("resultat de la somme est :", a + b + c)
}


addition3NumbersWithArg(x,z,y)


addition3NumbersWithArg(10,10,20)
addition3NumbersWithArg(20,40,100)
addition3NumbersWithArg(100,200,100)

// 