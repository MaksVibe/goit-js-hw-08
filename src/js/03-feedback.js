import throttle from "lodash.throttle";

const STOR_KEY = "feedback-form-state";

const formRef = document.querySelector(".feedback-form");

// Add feedback to the localStorage
function inputForm(e) {
  e.preventDefault();
  const elems = {
    mail: formRef.elements.email.value,
    message: formRef.elements.message.value,
  };
  console.log(elems);
  formRef.reset();
}

formRef.addEventListener("submit", inputForm);

// Add saved data to inputs
// throttle 500ms
const formData = {};
formRef.addEventListener(
  "input",
  throttle((e) => {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STOR_KEY, JSON.stringify(formData));
  }, 500)
);

const parsedData = JSON.parse(localStorage.getItem(STOR_KEY));
function savedData() {
  if (parsedData) {
    formRef.elements.email.value = parsedData.email;
    formRef.elements.message.value = parsedData.message;
  }
}
savedData();
