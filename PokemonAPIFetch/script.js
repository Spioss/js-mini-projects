// ---------- 1 metoda
// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then(response => {
//         if(!response.ok){
//             throw new Error("Could not fetch resource")
//         }
//         return response.json();
//     })
//     .then(data => console.log(data.name))
//     .catch(error => console.error(error))
// ----------

// ---------- async metoda
// async function fetchData() {
//     try{
//         const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//         if(!response.ok) { throw new Error("Could not fetch resource") }
        
//         const data = await response.json();
//         console.log(data.name)
//     } catch(error){
//         console.error(error)
//     }
// }
// ----------

async function fetchData() {
    const pokemonName = document.getElementById("pokemonName").value.toLowerCase()
    const pokemonImg = document.getElementById("pokemonImage")
    try{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        if(!response.ok) { throw new Error("Could not fetch resource") }
        
        const data = await response.json()
        const pokemonSprite = data.sprites.front_default

        pokemonImg.src = pokemonSprite
        pokemonImg.style.display = "block"
        
    } catch(error){
        console.error(error)
    }
}