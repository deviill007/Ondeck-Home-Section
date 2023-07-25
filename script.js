const hoverElement = document.getElementById("products");
const popup = document.getElementById("popup");
hoverElement.addEventListener("click", togglePopup);
document.addEventListener("click", (event) => {
    const target = event.target;
    if (target !== popup && target !== hoverElement) {
      popup.style.display = "none";
    }
  });
function togglePopup() {
  if (popup.style.display === "flex") {
    popup.style.display = "none";
  } else {
    popup.style.display = "flex";
  }
}

const menuElement = document.getElementById("menuicon");
const closeElement = document.getElementById("closebutton");
const pop = document.getElementById("popup2");
menuElement.addEventListener("click", togglePopup2);
closeElement.addEventListener("click", hidePopup);

document.addEventListener("click", (event) => {
    const target = event.target;
    if (target !== pop && target !== menuElement) {
      pop.style.display = "none";
    }
  });
function togglePopup2() {
  if (pop.style.display === "flex") {
    pop.style.display = "none";
  } else {
    pop.style.display = "flex";
  }
}
function hidePopup() {
    pop.style.display = "none";
}