/*
Accède au tableau pour afficher dans la console “Le Filip”
Accède au tableau pour afficher dans la console “Edeha Noire”
Parcours le tableau pour afficher dans la console ligne par ligne chaque nom des candidates
(Bonus) Parcours le tableau candidates pour afficher la liste des candidates dans une page HTML :

*/


const candidates = ['Le Filip','Ruby On The Nail','Leona Winter','Lula Strega','Misty Phoenix',
    'Perseo','Norma Bell','Edeha Noire','Magnetica','Afrodite Amour'];

console.log(candidates[0])
console.log(candidates[7])
console.log(candidates)

const ul = document.querySelector("#ul")

for(let i= 0 ; i<candidates.length ; i++ ){
let li = document.createElement("li")
ul.appendChild(li)
li.innerText= candidates[i]
}
