// target elements
let username = document.querySelector("#username");
let password = document.querySelector("#password");
let passwordConfirm = document.querySelector("#password-confirmation");
let terms = document.querySelector("#terms");
let errors = document.querySelector(".errors");
let errorsList = document.querySelector(".errors-list");
let button = document.querySelector("#button");

// array data
let myArray = [];

function ClearErrors() {
  errorsList.innerHTML = "";
  myArray.length = 0;
  errors.classList.remove("show");
}

function showErrors() {
  let filterArray = myArray.filter((e) => e);    

  for (let i = 0; i < filterArray.length; i++) {
    let listItem = document.createElement("li");
    listItem.innerText = filterArray[i];
    errorsList.appendChild(listItem);
  }

  errors.classList.add("show");
}

button.addEventListener("click", (e) => {
  ClearErrors();

  if (username.value.length < 6) {
    myArray[0] = "Username Should be Atleast 6 Character Long";
    e.preventDefault();
  }

  if (password.value.length < 10) {
    myArray[1] = "Password Should be Atleast 10 Character Long";
    e.preventDefault();
  }

  if (password.value !== passwordConfirm.value) {
    myArray[2] = "Password and confrim does not match";
    e.preventDefault();
  }

  if (terms.checked === false) {
    myArray[3] = "Please accept the terms and condition";
    e.preventDefault();
  }

  showErrors();
});
