
const input = $(".input-box");
const input2 = document.querySelectorAll(".input-box");
const form = $(".signup-form")[0];
const submit = $(".claim-button");
const errorMsg = $("span.error");

const inputErrorFname = $(".error-fname");
const inputErrorLname = $(".error-lname");
const inputErrorEmail = $(".error-email");
const inputErrorPswd = $(".error-pwd");

const firstName = $("input[name='fName']");
const lastName = $("input[name='lName']");
const email = $("input[name='eMail']");
const password = $("input[name='pswd']");


console.log(typeof(firstName));
console.log(typeof(firstName[0]));
console.log(input);
console.log(inputErrorFname);
console.log(firstName);
console.log(errorMsg);

// firstName.addEventListener("input", ()=> {
//   if(firstName.validity.valueMissing){
//
//   }
// });

form.addEventListener("submit", (event)=>{
  console.log("submit triggered");

//if the form data is not valid add error-span css class
  if(!form.checkValidity()){
    for(i=0; i < errorMsg.length; i++){
      errorMsg.addClass("error-span");
    }
  }

// Validity object is child of HTMLInput element
  if(firstName[0].validity.valueMissing){
    firstName.addClass("error-active error-img");
    firstName[0].placeholder = "";
    inputErrorFname.text("First Name cannot be empty");
    // inputErrorFname.addClass("error error-span");

    event.preventDefault();

  }

  if(lastName[0].validity.valueMissing){
    lastName.addClass("error-active error-img");
    lastName[0].placeholder = "";
    inputErrorLname.text("Last Name cannot be empty");
    // inputErrorLname.addClass("error error-span");

    event.preventDefault();

  }

  if(email[0].validity.valueMissing || email[0].validity.typeMismatch){
    email.addClass("error-active error-img");
    email[0].placeholder = "email@example/com";
    inputErrorEmail.text("Looks like this is not an email");
    // inputErrorEmail.addClass("error error-span");

    event.preventDefault();
  }

  if(email[0].validity.tooShort){
    email.addClass("error-active error-img");
    email[0].placeholder = "";
    inputErrorEmail.text("email is too short, minimum 8 characters required");

    event.preventDefault();
  }

  if(password[0].validity.valueMissing){
    password.addClass("error-active error-img");
    password[0].placeholder = "";
    inputErrorPswd.text("Password cannot be empty");
    // inputErrorPswd.addClass("error error-span");

    event.preventDefault();

  }

  if(password[0].validity.tooShort){
    password.addClass("error-active error-img");
    password[0].placeholder = "";
    inputErrorPswd.text("Password is too short, minimum 8 characters required");
  }


});
