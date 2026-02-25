function updateLength() {
  const val = document.getElementById("length-slider").value;
  document.getElementById("length-value").innerText = val;
}

function generatePassword() {
  const length = document.getElementById("length-slider").value;
  const hasUpper = document.getElementById("upper").checked;
  const hasLower = document.getElementById("lower").checked;
  const hasNumber = document.getElementById("numbers").checked;
  const hasSymbol = document.getElementById("symbols").checked;

  const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_+[]{}";

  let allowedChars = "";
  if (hasUpper) allowedChars += upperChars;
  if (hasLower) allowedChars += lowerChars;
  if (hasNumber) allowedChars += numberChars;
  if (hasSymbol) allowedChars += symbolChars;

  if (allowedChars === "") {
    alert("Оберіть хоча б один параметр!");
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }

  document.getElementById("password-result").value = password;
  updateStrength(length, allowedChars.length);
}

function updateStrength(len, pool) {
  const label = document.getElementById("strength-label");
  if (len < 10) {
    label.innerHTML = "🔴 Слабкий";
    label.style.color = "#ff4d4d";
  } else if (len < 16) {
    label.innerHTML = "🟡 Середній";
    label.style.color = "#ffd11a";
  } else {
    label.innerHTML = "🔥 Сильний";
    label.style.color = "#03dac6";
  }
}

function copyPassword() {
  const copyText = document.getElementById("password-result");
  copyText.select();
  document.execCommand("copy");
  alert("Пароль скопійовано!");
}
