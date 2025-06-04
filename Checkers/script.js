
const checkBox = document.getElementById("subCheckBox");

const visaBtn = document.getElementById("visaBtn");
const mastercardBtn = document.getElementById("mastercardBtn");
const paypalBtn = document.getElementById("paypalBtn");

const submitBtn = document.getElementById("submitBtn");
const result = document.getElementById("result");

submitBtn.onclick = function() {
  if (!checkBox.checked) {
    result.textContent = "Do you want to Subscribe?";
    return;
  }

  const selectedCard = document.querySelector('input[name="cards"]:checked');
  if (!selectedCard) {
    result.textContent = "You must select payment Method!";
    return;
  }

  switch (selectedCard.id) {
    case "visaBtn":
      result.textContent = `Subscribed, paying with Visa!`;
      break;
    case "mastercardBtn":
      result.textContent = `Subscribed, paying with MasterCard!`;
      break;
    case "paypalBtn":
      result.textContent = `Subscribed, paying with PayPal!`;
      break;
    default:
      break;
  }
};