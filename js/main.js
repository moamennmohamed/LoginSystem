let signUpYourNameInput = document.querySelector("#signUpYourName");
let signUpYourEmailInput = document.querySelector("#signUpYourEmail");
let signUpYourPasswordInput = document.querySelector("#signUpYourPassword");
let signUpBtn = document.querySelector("#signUpBtn");

let signUpList = [];

if (JSON.parse(localStorage.getItem("SignData")) != null) {
  signUpList = JSON.parse(localStorage.getItem("SignData"));
} else {
}

function signUp() {
  let signUpObject = {
    signName: signUpYourNameInput.value,
    SignEmail: signUpYourEmailInput.value,
    SignPassword: signUpYourPasswordInput.value,
  };

  signUpList.push(signUpObject);
  localStorage.setItem("SignData", JSON.stringify(signUpList));

  if (
    signUpYourNameInput.value == "" ||
    signUpYourEmailInput.value == "" ||
    signUpYourPasswordInput.value == ""
  ) {
    document.getElementById(
      "messageError"
    ).innerHTML = ` <span id="messageError" class="text-danger  ">All inputs is required</span>`;
  } else {
    document.getElementById(
      "messageError"
    ).innerHTML = ` <span id="messageError" class="text-success">Sucess</span>`;
  }

  signUpclearList();
}

function signUpclearList() {
  signUpYourNameInput.value = "";
  signUpYourEmailInput.value = "";
  signUpYourPasswordInput.value = "";
}
function validationSignUp(input) {
  let regex = {
    signUpYourName: /^[a-zA-Z]{5,15}$/,
    signUpYourEmail: /^[A-Za-z]{5,15}@gmail\.com$/,
    signUpYourPassword: /^\w{6,15}$/,
  };

  let isValid = regex[input.id].test(input.value);
  console.log(isValid);
  console.log(input);
}
console.log(document.title);

//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

let loginYourEmailInput = document.querySelector("#loginYourEmail");
let loginYourPasswordInput = document.querySelector("#loginYourPassword");
let wrong = document.querySelector("#wrong");

let btnSubmit = document.querySelector(".btnSubmit");

function signin() {
  for (let i = 0; i < signUpList.length; i++) {
    if (
      loginYourEmailInput.value == signUpList[i].SignEmail &&
      loginYourPasswordInput.value == signUpList[i].SignPassword
    ) {
      localStorage.setItem("currentUser", JSON.stringify(signUpList[i]));

      location.assign("welcome.html");
    } else {
      wrong.classList.remove("d-none");
    }
  }
}

//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
////g//////////////////////////////////////////////////////////////////////////////////////////

var curentUserName = "";
function welcome() {
  var x = JSON.parse(localStorage.getItem("currentUser"));
  console.log(x);

  if (x) {
    var welcomeInput = document.getElementById("welcomeInput");

    welcomeInput.innerHTML = x.signName;
  }
}
welcome();

//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
////g//////////////////////////////////////////////////////////////////////////////////////////////
function logOut() {
  localStorage.removeItem("currentUser");
  location.assign("index.html");
}
