function renderPlayerInputs() {
  const form = document.getElementById('player-form');
  const count = parseInt(document.getElementById('player-count').value, 10);
  form.innerHTML = '';
  for (let i = 1; i <= count; i++) {
    const label = document.createElement('label');
    label.setAttribute('for', 'player' + i);
    label.textContent = 'Player ' + i;

    const input = document.createElement('input');
    input.type = 'text';
    input.id = 'player' + i;
    input.name = 'player' + i;
    input.placeholder = 'Player name';
    input.setAttribute('list', 'players-list');
    form.appendChild(label);
    form.appendChild(input);
  }
}

// listener for team size change
document.getElementById('player-count').addEventListener('change', renderPlayerInputs);
renderPlayerInputs();

// Fisher-Yates algorithm
function shuffle(array){
  for(let i = array.length - 1; i > 0; i--){
    const random = Math.floor(Math.random() * (i + 1));
    [array[i], array[random]] = [array[random], array[i]];
  }
}

function split(array){
  const mid = Math.ceil(array.length / 2)
  const firstHalf = array.slice(0, mid)
  const secondHalf = array.slice(mid);
  return [firstHalf, secondHalf]
}


// submit
function drawPlayers(red, blue) {
  const redteam = document.getElementById("redteam")
  redteam.innerHTML = red.join("<br>")
  const blueteam = document.getElementById("blueteam")
  blueteam.innerHTML = blue.join("<br>")
}

document.getElementById('submit-btn').addEventListener('click', () => {
  const players = [];
  const count = parseInt(document.getElementById('player-count').value, 10)
  for (let i = 1; i <= count; i++) {
    players.push(document.getElementById('player' + i).value)
  }

  shuffle(players)
  const [red_team, blue_team] = split(players)
  drawPlayers(red_team, blue_team)
})

document.getElementById('copy-btn').addEventListener('click', async () => {
  const redText = document.getElementById('redteam').innerText
  const blueText = document.getElementById('blueteam').innerText
  const combined = "RedTeam:\n" + redText + '\n\n' + "BlueTeam:\n" + blueText

  try{
    await navigator.clipboard.writeText(combined);
    alert('Team copied 👍')
  }catch(err){
    alert('Cannot copy teams 😢');
  }
})



