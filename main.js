const btn = document.querySelector(".btn");

const name = document.getElementById("name");
const number = document.getElementById("number");
const mm = document.getElementById("mm");
const yy = document.getElementById("yy");
const cvc = document.getElementById("cvc");

const nameError = document.querySelector(".name-error");
const numError = document.querySelector(".num-error");
const expError = document.querySelector(".exp-error");
const cvcError = document.querySelector(".cvc-error");

name.addEventListener("input", () => {
  document.querySelector(".card-name").textContent = name.value;
});
number.addEventListener("input", () => {
  document.querySelector(".card-number").textContent =
    number.value.toUpperCase();
});
mm.addEventListener("input", () => {
  document.querySelector(".month").textContent = mm.value;
});
yy.addEventListener("input", () => {
  document.querySelector(".year").textContent = yy.value;
});
cvc.addEventListener("input", () => {
  document.querySelector(".cvc-no").textContent = cvc.value;
});

// Function to format the card number with spaces after every 4 digits
function formatCardNumber(inputValue) {
  const regex = /(.{1,4})/g;
  const groups = inputValue.match(regex);
  return groups ? groups.join(" ") : "";
}

// Function to handle card number input changes
function handleCardNumberInput() {
  const inputValue = number.value.replace(/\s/g, "").toUpperCase(); // Remove existing spaces
  const formattedValue = formatCardNumber(inputValue);
  number.value = formattedValue;
}

// Add event listener to the card number input field
number.addEventListener("input", handleCardNumberInput);

btn.addEventListener("click", (e) => {
  e.preventDefault();

  const numRegex = /^[0-9\s]+$/;

  if (name.value.trim() == "") {
    name.classList.add("error");
    nameError.textContent = "Can't be blank";
  } else {
    name.classList.remove("error");
    nameError.textContent = "";
  }

  if (number.value.trim() == "") {
    number.classList.add("error");
    numError.textContent = "Can't be blank";
  } else if (!numRegex.test(number.value.trim())) {
    number.classList.add("error");
    numError.textContent = "Wrong format, numbers only";
  } else {
    number.classList.remove("error");
    numError.textContent = "";
  }

  if (mm.value.trim() == "") {
    mm.classList.add("error");
    expError.textContent = "Can't be blank";
  } else {
    mm.classList.remove("error");
    expError.textContent = "";
  }

  if (yy.value.trim() == "") {
    yy.classList.add("error");
    expError.textContent = "Can't be blank";
  } else {
    yy.classList.remove("error");
    expError.textContent = "";
  }

  if (cvc.value.trim() == "") {
    cvc.classList.add("error");
    cvcError.textContent = "Can't be blank";
  } else {
    cvc.classList.remove("error");
    cvcError.textContent = "";
  }

  if (
    nameError.textContent == "" &&
    numError.textContent == "" &&
    expError.textContent == "" &&
    cvcError.textContent == ""
  ) {
    document.querySelector(".form-container").classList.add("hidden");
    document.querySelector(".thank-you").classList.remove("hidden");
  }
});
