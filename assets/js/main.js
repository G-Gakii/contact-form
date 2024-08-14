const button = document.querySelector(".btn");
const formValidate = (e) => {
  e.preventDefault();
  // get input values
  const form = document.querySelector(".container");
  const firstName = document.getElementById("fname").value.trim();
  const lastName = document.getElementById("lname").value.trim();
  const Email = document.getElementById("email").value.trim();
  const Type = document.querySelector('input[name="query"]:checked')?.value;
  const message = document.getElementById("message").value.trim();
  const consent = document.getElementById("consent");

  //  error message
  const nameError = "This field is required";
  const emailError = "Please enter a valid email address";
  const typeError = "Please select a query type";
  const messageError = "This field is required";
  const consentError = "To submit this form, please consent to being contacted";

  // validate
  let isValid = true;
  const regex = /^[A-Za-z\s'-]+$/;
  if (firstName === "" || !regex.test(firstName)) {
    document.querySelector(".fname_error").innerHTML = nameError;
    document.getElementById("fname").classList.add("error-input");
    isValid = false;
  }
  if (lastName === "" || !regex.test(firstName)) {
    document.querySelector(".lname_error").innerHTML = nameError;
    document.getElementById("lname").classList.add("error-input");
    isValid = false;
  }
  if (Email === "" || !Email.includes("@")) {
    document.querySelector(".email_error").innerHTML = emailError;
    document.getElementById("email").classList.add("error-input");
    isValid = false;
  }
  if (!Type) {
    document.querySelector(".query_error").innerHTML = typeError;
    isValid = false;
  }
  if (message.length < 20) {
    document.querySelector(".message_error").innerHTML = messageError;
    document.getElementById("message").classList.add("error-input");
    isValid = false;
  }
  if (!consent.checked) {
    document.querySelector(".consent_error").innerHTML = consentError;
    isValid = false;
  }
  // if (!isValid) {
  //   const inputs = document.querySelectorAll("input");
  //   inputs.forEach((input) => {
  //     input.style.border = "1px solid red";
  //   });
  //   const textarea = document.querySelector("textarea");
  //   textarea.style.border = "1px solid red";
  // }
  if (isValid) {
    form.submit();
    alert(
      "Message Sent! Thanks for completing the form. We'll be in touch soon!"
    );
  }
};
button.addEventListener("click", formValidate);
