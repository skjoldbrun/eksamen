const btn = document.querySelector(".toggle-btn");
const nav = document.querySelector("nav");

window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("sidenVises");

  // //Skjul funfactskærm
  // document.querySelector("#funfact").classList.add("hidescreen");
}

//burgermenu
function toggleMenu() {
  console.log("toggleMenu");
  nav.classList.toggle("shown");

  const menuShown = nav.classList.contains("shown");

  if (menuShown) {
    btn.textContent = "X";
  } else {
    btn.textContent = "☰";
  }
}

btn.addEventListener("click", toggleMenu);

// //klik på start_knap
// document.querySelector("#start_knap").addEventListener("click", visFunfact);

// function visFunfact() {
//   console.log("visFunfact");

//   //vis funfact skærm
//   document.querySelector("#funfact").classList.remove("hidescreen");
// }
