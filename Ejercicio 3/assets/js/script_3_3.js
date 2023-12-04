let color;

document.addEventListener("keydown", (event) => {
  const keyword = event.key;

  if (keyword === "a" || keyword === 'A') {
    color = "pink";
  } else if (keyword === "s" || keyword === 'S') {
    color = "orange";
  } else if (keyword === "d" || keyword === 'D') {
    color = "teal";
  }
  element.style.backgroundColor = color;
});

const element = document.getElementById("key");