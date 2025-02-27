let lightTheme = "styles/light.css";
let darkTheme = "styles/dark.css";

// Clears the screen on click of C button.
function clearScreen() {
  document.getElementById("result").value = "";
}
// Displays entered value on screen.
function liveScreen(value) {
  let res = document.getElementById("result");
  if(res.value == "undefined"){
    res.value = "";
  }
  res.value += value;
}
function doubleValue() {
  let res = document.getElementById("result");
  if(res.value == "undefined"){
    res.value = "1";
  }
  res.value = res.value * 2;
}
// Swaps the style sheet in order to  achieve dark mode.
function changeTheme() {
  let darkMode = document.getElementById("dark-mode");
  let theme = document.getElementById("theme");
  if (theme.getAttribute("href") == lightTheme) {
    theme.href = darkTheme;
    darkMode.innerHTML = "Light Mode 🌞";
  } else {
    theme.href = lightTheme;
    darkMode.innerHTML = "Dark Mode 🌙";
  }
}
