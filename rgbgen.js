let btn1 = document.getElementById("mybutton1");
let btn2 = document.getElementById("mybutton2");
let copyD = document.querySelector(".copy-code");
let rgb1 = "#ddfffd";
let rgb2 = "#aabbcc";
const hexaValue = () => {
  let hexaV = "0123456789abcdef";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color = color + hexaV[Math.floor(Math.random() * 16)];
  }
  return color;
};

const handlerButton1 = () => {
  rgb1 = hexaValue();
  console.log(rgb1);
  btn1.innerText = rgb1;
  document.body.style.backgroundImage = ` linear-gradient(
          to right,
         ${rgb1},
         ${rgb2})`;
  copyD.innerHTML = `background: linear-gradient(to right, ${rgb1}, ${rgb2});`;
};

const handlerButton2 = () => {
  rgb2 = hexaValue();
  console.log(rgb2);
  btn2.innerText = rgb2;
  document.body.style.backgroundImage = ` linear-gradient(
          to right,
         ${rgb1},
         ${rgb2})`;
  copyD.innerHTML = `background: linear-gradient(to right, ${rgb1}, ${rgb2});`;
};

btn1.addEventListener("click", handlerButton1);
btn2.addEventListener("click", handlerButton2);
