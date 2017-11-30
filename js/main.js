let toggleTheme = document.querySelector(".toggle-theme");
const numberGamersTop = () => {
  let gamers = document.querySelectorAll(".gamer__name");

  for (let gamerIndex = 0; gamerIndex < gamers.length; gamerIndex++) {
    gamers[gamerIndex].innerHTML = gamerIndex + 1 + ". " + gamers[gamerIndex].innerHTML ;
  }
},
toggleThemeFunc = () => {
let page = document.querySelector(".container");

  if (page.className !== "dark container") {
    page.className = "dark container";
  } else {
    page.className = "container";
  }
  
};

window.onload = numberGamersTop;

toggleTheme.onclick = toggleThemeFunc;
