window.addEventListener("load", function () {
  const formContact = document.querySelector("#form-contact");
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const message = document.getElementById("message");

  const nameError = document.getElementById("name-error");
  const emailError = document.getElementById("email-error");
  const phoneError = document.getElementById("phone-error");
  const messageError = document.getElementById("message-error");

  function validateFields() {
    let isValid = true;
    const nameValue = name.value.trim().toLowerCase();
    const emailValue = email.value.trim().toLowerCase();
    const phoneValue = phone.value.trim();
    const messageValue = message.value;

    if (nameValue === "") {
      validationFails(nameError, "Please fill the name field");
      isValid = false;
    } else if (nameValue === "ironhack") {
      validationFails(nameError, "You cannot be Ironhack, because I am Ironhack.");
      alert("You cannot be Ironhack, because I am Ironhack.");
      isValid = false;
    } else {
      validationSuccess(nameError);
    }

    if (emailValue === "") {
      validationFails(emailError, "Please fill the email field");
      isValid = false;
    } else if (!isValidEmail(emailValue)) {
      validationFails(emailError, "Please enter a valid email address");
      isValid = false;
    } else {
      validationSuccess(emailError);
    }


    if (phoneValue === "") {
      validationFails(phoneError, "Please fill the phone number field");
      isValid = false;
    } else if (!isValidPhoneNumber(phoneValue)) {
      validationFails(phoneError, "Please enter a valid phone number with at least 7 digits");
      isValid = false;
    } else {
      validationSuccess(phoneError);
    }

    if (messageValue === "") {
      validationFails(messageError, "Please fill the message field");
      isValid = false;
    } else {
      validationSuccess(messageError);
    }

    return isValid;
  }
  function isValidPhoneNumber(phone) {
    const regex = /^\d{7,}$/;
    return regex.test(phone);
  }
  function isValidEmail(email) {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(email);
  }

  function validationFails(input, message) {
    const errorMessage = input;
    errorMessage.textContent = message;
    errorMessage.style.display = "block";
  }

  function validationSuccess(errorMessage) {
    errorMessage.textContent = "";
    errorMessage.style.display = "none";
  }

  formContact.addEventListener("submit", function (e) {
    e.preventDefault();
    const validField = validateFields();
    if (validField) {
      alert(
        "Thank you for your message " +
          name.value +
          "!\n" +
          " We will call you back to this number: " +
          phone.value +
          ",\n" +
          " as soon as possible."
      );
      console.log(
        "Thank you for your message!\n" +
          "Name: " +
          name.value +
          "\n" +
          "Email: " +
          email.value +
          "\n" +
          "Phone: " +
          phone.value +
          "\n" +
          "Message: " +
          message.value
      );
    }
  });
});

const nav = document.querySelector(".nav-bar");
const openMenu = document.querySelector("#open-menu");
const closeMenu = document.querySelector("#close-menu");
console.log(openMenu);
openMenu.addEventListener("click", () => {
  nav.classList.add("show");
});

closeMenu.addEventListener("click", () => {
  nav.classList.toggle("show");
  console.log("hola");
});
