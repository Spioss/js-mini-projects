
function rollDice(){
    const numOfDice = document.getElementById("diceNumber").value
    const diceResult = document.getElementById("diceResult")
    const diceImages = document.getElementById("diceImages")

    const values = []
    const images = []

    for(let i = 0; i < numOfDice; i++){
        const value = Math.floor(Math.random() * 6) + 1 // 1-6
        values.push(value)
        images.push(`<img src=assets/dice-${value}.png>`)
    }

    diceResult.textContent = `${values.join(', ')}`
    diceImages.innerHTML = images.join('');
}