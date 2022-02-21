let messages = [];
let userBoxMessages = document.querySelector("#box-messages");


function showMessage() {

}

function getChatMessages() {
  const linkApi = "https://run.mocky.io/v3/e8156de8-7bb9-4a2d-8bd7-7fcdd91c2c03";


  fetch(linkApi)
    .then(response => response.json())
    .then(data => {
      messages = data;

      console.log(data);
      data.forEach(message => {
        userBoxMessages.innerHTML += `
          <section class="user-message">
            <strong class="user-username">
              ${message.userWhoSent.username} falou:
            </strong>
        
            <span>
              ${message.content}
            </span>
          </section>`;
    
      })
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

setInterval(getChatMessages, 1000);

sendMessage();
getChatMessages();