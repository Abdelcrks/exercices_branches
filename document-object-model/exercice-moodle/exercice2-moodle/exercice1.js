const horoscope = [
    {
      sign: 'Bélier',
      description: "Cette développeuse·eur est toujours prête à débugger avec le casque de la bravoure, même si cela signifie se lancer tête la première dans un tas d'erreurs de syntaxe.",
    },
    {
      sign: 'Taureau',
      description: "Aussi obstiné·e qu'un bug qui ne veut pas être résolu, cette développeuse·eur ne s'arrêtera pas avant que son code soit aussi solide qu'un mur de pierre.",
    },
    {
      sign: 'Gémeaux',
      description: "Capable de parler Java et Python en même temps, cette développeuse·eur est aussi adaptable qu'un caméléon dans une boîte de crayons de couleur.",
    },
    {
      sign: 'Cancer',
      description: 'La personne développeuse qui protège son code comme une maman lionne avec ses petits. Elle vous donnera un coup de patte si vous touchez à sa précieuse base de données.',
    }
  ];
  
  // TODO: recupère l'élément <div id="horoscope">

  let element=document.getElementById("horoscope")
// Je déclare une variable élement qui reprend l'id de la div html "horoscope"

  for (const item of horoscope) {
// boucle for of pour parcourir chaque item du tableau d'objet d'horoscope
    let article = document.createElement("article")
// créer une variable article qui sera également un <article> dans le html
    element.appendChild(article)
// j'ajoute article article à element donc en gros j'ajoute <article> a <div>
    let h2= document.createElement("h2")
// je crée une variable h2 qui sera également un <h2> dans le html
    article.appendChild(h2)
// h2 est l'enfant de article donc il sera <article><h2></h2><article>
    h2.innerText= item.sign
// je change le texte de h2 par le sign
    let paragraph=document.createElement("p")
// je crée une variable paragraph qui sera également <p> dans le html
    paragraph.innerText= item.description
// on modifie le <p> par la description  
    article.appendChild(paragraph)
// paragraph devient l'enfant d'article donc  <article><p></p><article>
}

      // TODO: remplace le console.log par le code qui ajoute un article
      // pour chaque item avec le format suivant :
      // <article>
      //   <h2>Sign</h2>
      //   <p>Description</p>
      // </article>

