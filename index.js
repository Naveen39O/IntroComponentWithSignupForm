
const input = $(".input-box");
const input2 = document.querySelectorAll(".input-box");
const form = $(".signup-form")[0];
const submit = $(".claim-button");
const inputErrorFname = $(".error-fname");
// const spanFname = $("span.error-fname");
const inputErrorLname = $(".error-lname");
const inputErrorEmail = $(".error-email");
const inputErrorPswd = $(".error-pwd");

const firstName = $("input[name='fName']");
const lastName = $("input[name='lName']");
const email = $("input[name='eMail']");
const password = $("input[name='pswd']");

console.log(typeof(input));
console.log(input);
console.log(inputErrorFname);
console.log(firstName);
// console.log(spanFname);

// firstName.addEventListener("input", ()=> {
//   if(firstName.validity.valueMissing){
//
//   }
// });

form.addEventListener("submit", (event)=>{
  console.log("submit triggered");
  // Validity object is child of HTMLInput element
  if(firstName[0].validity.valueMissing){
    firstName.addClass("error-active");
    firstName[0].placeholder = "";
    inputErrorFname.text("First Name cannot be empty");
    inputErrorFname.addClass("error error-span");

    event.preventDefault();

  }

  if(lastName[0].validity.valueMissing){
    lastName.addClass("error-active");
    lastName[0].placeholder = "";
    inputErrorLname.text("First Name cannot be empty");
    inputErrorLname.addClass("error error-span");

    event.preventDefault();

  }

  if(email[0].validity.valueMissing){
    email.addClass("error-active");
    email[0].placeholder = "email@example/com";
    inputErrorEmail.text("First Name cannot be empty");
    inputErrorEmail.addClass("error error-span");

    event.preventDefault();

  }

  if(password[0].validity.valueMissing){
    password.addClass("error-active");
    password[0].placeholder = "";
    inputErrorPswd.text("First Name cannot be empty");
    inputErrorPswd.addClass("error error-span");

    event.preventDefault();

  }


});
