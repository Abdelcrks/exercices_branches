/*const pierre = {
    firstname : "Pierre",
    hasKey : true,
    city : "Paris",
    delegate : false,
    langs : ["js", "html"]
}


const samir = {
    firstname : "Samir",
    hasKey : false,
    city : "Meaux",
    delegate : true,
    langs : ["js", "html", "css"]
}

console.log(`Pierre habite à ${pierre.city}`)
*/




let array = [
    {name : "pierre", hasKey : true , city : "Paris" , delegate : false},
    {name : "pierre", hasKey : true , city : "Paris" , delegate : false},
    {name : "pierre", hasKey : true , city : "Paris" , delegate : false},
    {name : "pierre", hasKey : true , city : "Paris" , delegate : false},
    {name : "pierre", hasKey : true , city : "Paris" , delegate : false},
]



const restaurant = {
    name : "McDonalds",
    menus : [
        {name :"McFirst",price : 8, avalaible : "Semaine"},
        {name :"Best Of",price : 10,avalaible : "Weekend"},
        {name :"Happy Meal", price : 7, avalaible : "Weekend",},
        {name :"Big Mac", price : 10, avalaible : "Semaine",},
        {name :"Mc Chicken", price : 12, avalaible : "Semaine"},
        {name :"Royal Deluxe",price : 11, avalaible : "Weekend"},
        ]
}

function choixDuMenu(jour){
    for(let i=0 ; i<restaurant.menus.length ; i++)
        
        if(restaurant.menus[i].avalaible === jour){
            console.log(`Le restaurant : ${restaurant.name} propose en semaine ces menus : ${restaurant.menus[i].name}`)

        }

        console.log(`Le restaurant : ${restaurant.name} propose en week end ces menus : ${restaurant.menus[i].name}`)



    }

    choixDuMenu("Semaine")


// console.log(`le restaurant : ${restaurant.name} a ${restaurant.menus.length} menus, le best seller est : ${restaurant.menus[4].name} a ${restaurant.menus[4].price}€`)


//console.log(`Le restaurant : ${restaurant.name} propose du lundi au Jeudi ces menus : ${restaurant}`)
//console.log(`Le restaurant : ${restaurant.name} propose du Vendredi au Dimanche ces menus :`)








