function getChatMessages() {
  const linkApi = "https://run.mocky.io/v3/74207643-6171-40fc-86bb-ca2588e5d97e";

  fetch(linkApi)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
}

function getChatPeople() {
  const linkApi = "https://run.mocky.io/v3/0d5fc185-ff53-42ab-abc1-ee2a8d4457d0";

  fetch(linkApi)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
}

getChatPeople()
getChatMessages();