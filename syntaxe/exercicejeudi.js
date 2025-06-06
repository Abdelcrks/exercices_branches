
/*
function makeTea(clientName, sugar) {
    console.log("Faire chauffer l'eau");
    console.log("Mettre du thé dans la théière");
    console.log("Mettre l'eau dans la théière");
  
    if (sugar === true) {
      console.log("Ajouter du sucre");
    }
  
    console.log(`Servir le thé à ${clientName}`);
    console.log("---");
  }
  
  makeTea("Xinzhu");
  makeTea("Vincent");
  makeTea("Samir", true);


/*
*/


// Écrire une fonction qui prend en paramètre
// un moment de la journée (soit "matin", "midi", "après-midi", "soir")
// "matin" -> "J'ai trop hâte de continuer de coder !"
// "midi" -> "J'ai faim, j'en ai marre des bugs..."
// "après-midi" -> "Tchao les copins"
// "soir" -> "ZzzzZZZzzz"
// Appeler la fonction pour tester tous les cas possibles





function momentOfDay(moment){
 
    if (moment === "matin")
        console.log("J'ai trop hâte de continuer de coder !")
    else if (moment === "midi")
        console.log("J'ai faim, j'en ai marre des bugs...")
        else if (moment === "apresMidi")
            console.log("Tchao les copins")
    else if (moment === "soir")
    console.log("ZzzzZZZzzz")


}

//momentOfDay("matin")
//momentOfDay("midi")
//momentOfDay("apresMidi")
// momentOfDay("soir")




// Écrire une fonction qui prend en paramètre une heure (ex: 9, 12, 18, etc.)
// et qui RETOURNE le moment correspondant
// getMomentFromHour(12) -> "midi"
// getMomentFromHour(18) -> "après-midi"


function getMomentFromHour(time){
   if (time === 9)
    return "matin"

    else if (time === 12)
       return "midi"

    else if (time === 18)
        return "soir"

}

//console.log(getMomentFromHour())






// Combiner la fonction printEmotionFromMoment(moment)
// et getMomentFromHour(hour) pour dans une fonction
// printEmotionFromHour(hour)
// Exemples :
// printEmotionFromHour(12) -> affiche "J'ai faim, j'en ai marre des bugs..."
// printEmotionFromHour(22) -> affiche "ZzzzZzzz"


//momentOfDay
//getMomentFromHour

function printEmotionFromHour(hour){
    let a = getMomentFromHour(hour)
    let b = momentOfDay(a)

}

printEmotionFromHour(18)




