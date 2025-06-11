/*
On souhaite creer une app qui permet de dire qui a les clefs de l'ecole
L'objectif est de creer une fonction qui retourne 'oui' ou 'non'
On donne en parametre, le prenom
function hasKey(firstname)
On va avoir un tableau avec les noms
des personnes qui ont les clefs :
['Pierre', 'Laure', 'Mathilde', 'Vi']
console.log(hasKey('Jerem')) // affiche 'non'
console.log(hasKey('Laure')) // affiche 'oui'

*/

/*
const hasKey = (firstname) => {
let name = ["Pierre", "Laure", "Mathilde", "Vi"]

for(let i =0 ; i<name.length; i++){
   if (name[i] === firstname)
    return "oui"
}
return "non"
    
}

console.log(hasKey('Jereeeem'))
console.log(hasKey("Laure"))

*/


const haskey1 = () => {
    let tableau = [
        { firstname1: "Pierre", hasKey1: true },
        { firstname1: "Jerem", hasKey1: false },
        { firstname1: "Laure", hasKey1: true },
        { firstname1: "Mathilde", hasKey1: true }
    ]
    let array= []
    for (let i = 0; i < tableau.length; i++) {
        if (tableau[i].hasKey1)
            array.push(tableau[i].firstname1)       
    }

    return array
}

console.log(haskey1())
/*

const estDisponible = (nom) => {
    let produits =
        [
            { nom: "Pommes", enStock: true },
            { nom: "Bananes", enStock: false },
            { nom: "Oranges", enStock: true },
            { nom: "Poires", enStock: false },
        ]
    for (let i = 0; i < produits.length; i++) {
        if (produits[i].nom === nom && produits[i].enStock)
            return "En stock"

    }

    return "Rupture"
}

console.log(estDisponible("Pommes"))
*/



/*
const estDisponible = (nom) => {
    let produits =
        [
            { nom: "Pommes", enStock: true },
            { nom: "Bananes", enStock: false },
            { nom: "Oranges", enStock: true },
            { nom: "Poires", enStock: false },
        ]
    for (let i = 0; i < produits.length; i++) {
        if (produits[i].nom === nom && produits[i].enStock)
            return "En stock"

    }

    return "Rupture"
}

console.log(estDisponible("Pommes"))

*/

const peutEntrer = () => {
    let utilisateur = [
        {nom : "Ali", autorise : true},
        {nom : "Nina", autorise : false},
        {nom : "Sami", autorise : true},
        {nom : "Gertrude", autorise : false}
    ]
    let tableau = []
    for (let i = 0; i<utilisateur.length; i++){
        if  (utilisateur[i].autorise)
            tableau.push(utilisateur[i].nom)
    }
    return tableau
}

console.log(peutEntrer())

