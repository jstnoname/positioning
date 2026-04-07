const dialog = document.querySelector("#dialog")
const openButton = document.querySelector("#openButton");
const closeButton = document.querySelector("#closeButton");

openButton.onclick = () => dialog.showModal();
closeButton.onclick = () => dialog.close();