// Nous souhaitons créer un décompte.

// Demande à l'utilisateur (à l'aide de prompt) un nombre entre 0 et 10.
// Affiche ensuite tous les nombres sous le nombre indiqué par l'utilisateur (s'il rentre 4, on affichera 4, 3, 2, 1, 0).
// Attention, si l'utilisateur rentre un chiffre erroné il faudra afficher message d'erreur.

let number = prompt("Choisis un chiffre entre 0 et 10")

while(number<0 || number>10){
   number = prompt("erreur choisi un chiffre entre 0 et 10")
}

for(number; number>=0 ; number--){
  alert(number)
}

