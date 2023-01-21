const container = document.querySelector(".container");
const btn = document.querySelector("button");
const input = document.querySelector("input");
const qrImg = document.querySelector("img");
const audio = document.querySelector("#audio");

btn.addEventListener("click", () => {
  let inputValue = input.value;
  if (!inputValue) return; //if input is empty return from here//
  btn.innerText = "Generating QR Code...";

  //calling API from server and change the input value to generate qr code
  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
  qrImg.addEventListener("load", () => {
    //once qr img loaded//
    container.classList.add("active");
    btn.innerText = "Generate QR Code";
    audio.play(); // as code is generated audio will play//
  });
});
//if input is empty then active class will removed//
input.addEventListener("keyup", () => {
  if (!input.value) {
    container.classList.remove("active");
  }
});
