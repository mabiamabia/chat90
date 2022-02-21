let messages = [];
let count = 0;
let userBoxMessages = document.querySelector("#box-messages");
let userListContainer = document.querySelector('#user-list-container');
let inputSendMessage = document.querySelector("#input-send-message");


function mountMessage(user, content) {
  userBoxMessages.innerHTML += `
    <section class="user-message">
      <strong class="user-username">
        ${user} falou:
      </strong>

      <span>
        ${content}
      </span>
    </section>`;
}


function showMessage(messageData) {
  mountMessage(messageData[count].userWhoSent.username, messageData[count].content);
  count++;

  if (count >= messageData.length) {
    return count = 0;
  }
}

function getChatMessages() {
  const linkApi = "https://run.mocky.io/v3/e8156de8-7bb9-4a2d-8bd7-7fcdd91c2c03";


  fetch(linkApi)
    .then(response => response.json())
    .then(data => {
      count = 0;

      setInterval(() => showMessage(data), 2000)
    });
}

function getChatPeople() {
  const linkApi = "https://run.mocky.io/v3/bb916e64-a07f-4ab3-a486-8b24c9bbff30";

  fetch(linkApi)
    .then(response => response.json())
    .then(data => {
      data.forEach(user => {
        userListContainer.innerHTML += `
          <div class="user-item-container">
            <strong class="user-username">
              ${user.name}
            </strong>
    
            <span class="user-status">
              ${user.status}
            </span>
          </div>
        `;

      })
    })

}

function sendMessage() {
  const inputValue = inputSendMessage.value;
  
  if (inputValue) {
    mountMessage("Você", inputValue);
  }

  inputSendMessage.value = "";
}

getChatMessages();
sendMessage();
getChatPeople();