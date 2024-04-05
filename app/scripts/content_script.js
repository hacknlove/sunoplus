const createLink = document.querySelector('.chakra-link[href="/create/"]');
const navBar = createLink.parentElement;
const createPlusLink = navBar.querySelector(
  '.chakra-link[href="#create-plus"]',
);

const container = navBar.parentElement.nextElementSibling;
container.classList.add("sunoplus-container");

const newInterface = document.createElement("div");
fetch(chrome.runtime.getURL("pages/createPlus.html"))
  .then((response) => response.text())
  .then((text) => {
    console.log({ text });
    newInterface.innerHTML = text;
    newInterface.classList.add("sunoplus-interface");
  });

container.appendChild(newInterface);

createLink.addEventListener("click", () => {
  newInterface.style.display = "";
});
createPlusLink.addEventListener("click", () => {
  newInterface.style.display = "block";
});

createPlusLink.addEventListener("dblclick", () => {
  fetch(chrome.runtime.getURL("pages/createPlus.html"))
    .then((response) => response.text())
    .then((text) => {
      console.log({ text });
      newInterface.innerHTML = text;
      newInterface.classList.add("sunoplus-interface");
    });

  newInterface.style.display = "block";
});
