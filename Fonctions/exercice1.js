
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


let number1 = 10
let number2 = 20
let number3 = 30

function addition3NumbersWithArg(somme)
{
    if (somme === 123)
console.log("Le résultat de la somme est :", number1+ number2+number3)
    else if (somme ===223)
        console.log("Le résyktat de la somme est :", number2+number2+number3)
    else if (somme === 111)
        console.log("Le résyktat de la somme est :", number1+ number1 + number1)

}

addition3NumbersWithArg(123)
addition3NumbersWithArg(223)
addition3NumbersWithArg(111)

//