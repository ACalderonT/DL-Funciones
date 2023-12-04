function pintar(element, color = "green") {
  element.style.backgroundColor = color;
}

const ele1 = document.getElementById("ele1");

ele1.addEventListener("click", function () {
  pintar(this, "yellow");
});