
const dates = ["2024-01-03", "2024-02-31", "2024-04-07", "2024-12-03"]

function formatDater(element){
    const parts = element.split("-")

    return `Year: ${parts[0]} Month: ${parts[1]} Day: ${parts[2]}`
}

const normalDatesH = document.getElementById("dates")
const formatedDatesH = document.getElementById("formatedDates")
const formatedDates = dates.map(formatDater)

normalDatesH.innerHTML = dates.join("<br>")
formatedDatesH.innerHTML = formatedDates.join("<br>")