function pintar(element, color = "green") {
    element.style.backgroundColor = color;
  }
  
  const ele1 = document.getElementById("element-1");
  const ele2 = document.getElementById("element-2");
  const ele3 = document.getElementById("element-3");
  const ele4 = document.getElementById("element-4");
  
  ele1.addEventListener("click", function () {
    pintar(this, "black");
  });

  ele2.addEventListener("click", function () {
    pintar(this, "black");
  });

  ele3.addEventListener("click", function () {
    pintar(this, "black");
  });

  ele4.addEventListener("click", function () {
    pintar(this, "black");
  });
