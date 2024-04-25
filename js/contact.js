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

  // Validación de campos
  function validateFields() {
    let isValid = true;
    const nameValue = name.value;
    const emailValue = email.value;
    const phoneValue = phone.value;
    const messageValue = message.value;

    if (nameValue === "") {
      validationFails(nameError, "Please fill the name field");
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

  // Adjuntar evento submit fuera de la función validationFails
  formContact.addEventListener("submit", function (e) {
    e.preventDefault();
    const validField = validateFields();
    if (validField) {
      console.log(
        "Thank you for your message! We will get back to you as soon as possible.\n" +
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