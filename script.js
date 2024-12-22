const textInput = document.querySelector("#text-input");
const textOutput = document.querySelector("#result");
const checkButton = document.querySelector("#check-button");

const validString = (str) => {
  const regex = /^[a-z0-9]+$/;

  return str.match(regex) ? true : false;
};

const correctStr = (str) => {
  if (validString(str)) {
    return str;
  } else {
    return str.replace(/[^a-z0-9]/g, "");
  }
};

const polindrome = (str) => {
  if (str === "") {
    alert("Please input a value");
    return;
  }

  const filteredStr = correctStr(str.toLowerCase());

  textOutput.innerText = `${str} is ${
    filteredStr === filteredStr.split("").reverse().join("") ? "" : "not"
  } a palindrome.`;
};

checkButton.addEventListener("click", () => {
  polindrome(textInput.value);
  textInput.value = "";
});
