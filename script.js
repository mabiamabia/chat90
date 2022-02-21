let messages = [];
let count = 0;
let userBoxMessages = document.querySelector("#box-messages");


function showMessage(messageData) {
  console.log(count)
  userBoxMessages.innerHTML += `
    <section class="user-message">
      <strong class="user-username">
        ${messageData[count].userWhoSent.username} falou:
      </strong>

      <span>
        ${messageData[count].content}
      </span>
    </section>`;

  count++;

  if (count >= messageData.length) {
    console.log('aqui')
    return count = 0;
  }
}

function getChatMessages() {
  const linkApi = "https://run.mocky.io/v3/e8156de8-7bb9-4a2d-8bd7-7fcdd91c2c03";


  fetch(linkApi)
    .then(response => response.json())
    .then(data => {
      count = 0;

      let messageLength = data.length;

      setInterval(() => showMessage(data), 1000)

      
    });
}

function getChatPeople() {
  const linkApi = "https://run.mocky.io/v3/bb916e64-a07f-4ab3-a486-8b24c9bbff30";

  fetch(linkApi)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
}

function sendMessage() {

}

// Criar função de enviar

getChatMessages();

sendMessage();
getChatMessages();