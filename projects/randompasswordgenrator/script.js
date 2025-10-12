const button = document.querySelector(".btn"); // fixed selector
const input = document.querySelector(".input-container .input");
const icon = document.querySelector(".fa-copy");
const alertBox = document.querySelector(".alert-container");

button.addEventListener("click", () => {
  createPassword();
});

icon.addEventListener("click", () => {
  copyPassword();
  if (input.value) {
    alertBox.classList.add("active"); // show alert
    setTimeout(() => {
      alertBox.classList.remove("active"); // hide after 2s
    }, 2000);
  }
});


function createPassword() {
  const chars =
    "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const passlength = 14;
  let password = "";
  for (let i = 0; i < passlength; i++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNum, randomNum + 1);
  }
  input.value = password;
  alertBox.innerText = password + "  copied!";
}

function copyPassword() {
  input.select();
  input.setSelectionRange(0, 9999);
  navigator.clipboard.writeText(input.value);
}
