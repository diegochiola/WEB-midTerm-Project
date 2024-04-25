
/*
const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("message");
const error = document.getElementsByClassName("error");


const formContact = document.getElementById("form-contact");
formContact.addEventListener("submit", function(event){
    event.preventDefault();
    const errorMessage = [];
    if (name.value === "" || name.value === null) {
      errorMessage.push("Please fill in the name field");
    }
    if (email.value === "" || email.value === null) {
      errorMessage.push("Please fill in the email field");
    }
    if (phone.value === "" || phone.value === null) {
      errorMessage.push("Please fill in the phone number field");
    }
    if (message.value === "" || message.value === null) {
      errorMessage.push("Please fill in the message field");
    }
    error.innerHTML = errorMessage.join(" , ");
    //console.log("Thank you for your message! We will get back to you as soon as possible.")
});
*/





window.addEventListener("load", function () {
    const formContact = document.querySelector("#form-contact");
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const message = document.getElementById("message");
  
    //validation
    function validateFields() {
      const nameValue = name.value.trim();
      const emailValue = email.value.trim();
      const phoneValue = phone.value.trim();
      const messageValue = message.value;
  
      if (nameValue === "") {
        validationFails(name, "Please fill in the name field");
      } else {
        validationSuccess(name);
      }
  
      if (emailValue === "") {
        validationFails(email, "Please fill in the email field");
      } else if (!isValidEmail(emailValue)) {
        validationFails(email, "Please enter a valid email address");
      } else {
        validationSuccess(email);
      }
  
      if (phoneValue === "") {
        validationFails(phone, "Please fill in the phone field");
      } else {
        validationSuccess(phone);
      }
  
      if (messageValue === "") {
        validationFails(message, "Please fill in the message field");
      } else {
        validationSuccess(message);
      }
    }
  
    function isValidEmail(email) {
      const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return regex.test(email);
    }
  
    function validationFails(input, message) {
        const formContent = input.closest('.form-content'); 
      
        errorMessage.innerText = message;
        formContent.classList.add("fails");
    } 

      function validationSuccess(input) {
        const formContent = input.closest('.form-content'); 
        formContent.classList.remove("fails");
      }
  
    formContact.addEventListener("submit", function (e) {
      e.preventDefault();
      validateFields();
    });
  });

