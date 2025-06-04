
const tempBox = document.getElementById("tempBox")
const toFahrenheit = document.getElementById("toFahrenheit")
const toCelsius = document.getElementById("toCelsius")
const result = document.getElementById("result")
let temp;

function convert(){
    if(toFahrenheit.checked){
        temp = Number(tempBox.value)
        temp = temp * 9 / 5 + 32
        result.textContent = temp.toFixed(1) + " °F"
        return
    }

    if(toCelsius.checked){
        temp = Number(tempBox.value)
        temp = (temp - 32) * 5/9
        result.textContent = temp.toFixed(1) + " °C"
        return
    }
    result.textContent = "Select a unit!"
}