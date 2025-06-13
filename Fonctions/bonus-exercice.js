const preparerPate = (farine, lait, oeufs, sucre) => {


    return `Pâte prête avec ${farine}g de farine,${lait}ml de lait, ${oeufs} oeufs et ${sucre}g de sucre`

}
preparerPate(250,500,3,50)
// console.log(preparerPate(250, 500, 3, 50))


const cuireCrepe = (farine,lait,oeufs,sucre) =>{

return ` Crêpe cuite avec ${farine} g de farine, ${lait}ml de lait, ${oeufs} oeufs et ${sucre}g de sucre.`
}

//console.log(cuireCrepe(250, 500, 3, 50))

const servirCrepe = () => {
    result = preparerPate(250,500,3,50)
    let b = cuireCrepe(250,500,3,50)
    
    console.log(result)
    console.log(b)

}

servirCrepe()
