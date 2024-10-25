const containerEl = document.querySelector(".container");

for (let index = 0; index < 30; index++) {
  const element = document.createElement("div");
  element.classList.add("class-container");
  containerEl.appendChild(element);
}

const classContainerEls = document.querySelectorAll(".class-container");

const generateColorCode = () => {
  classContainerEls.forEach((classContainer) => {
    const newColor = randomColor();
    classContainer.style.backgroundColor = `#${newColor}`;
    classContainer.innerText = "#" + newColor;
  });
};

const randomColor = () => {
  let chars = "0123456789abcdef";
  let colorCode = "";
  for (let index = 0; index < 6; index++) {
    let randomNumber = Math.floor(Math.random() * chars.length);
    colorCode += chars[randomNumber];
  }
  return colorCode;
};

generateColorCode();
