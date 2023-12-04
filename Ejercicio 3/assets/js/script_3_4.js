let color;

const newElement = (color) => {
  container = document.getElementById("container");
  newDiv = document.createElement("div");
  newDiv.style.backgroundColor = color;
  container.appendChild(newDiv);
};

const deleteLastElement = () => {
  container = document.getElementById("container");
  elements = container.querySelectorAll("div");

  if (elements.length > 0) {
    container.removeChild(elements[elements.length - 1]);
  }
};

document.addEventListener("keydown", (event) => {
  const keyword = event.key;

  if (keyword === "q" || keyword === "Q") {
    color = "purple";
    newElement(color);
  } else if (keyword === "w" || keyword === "W") {
    color = "gray";
    newElement(color);
  } else if (keyword === "e" || keyword === "E") {
    color = "orange";
    newElement(color);
  } else if (keyword === "d" || keyword === "D") {
    deleteLastElement();
  }
});
