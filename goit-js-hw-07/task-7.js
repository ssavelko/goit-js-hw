const fontSizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
fontSizeControl.addEventListener("input", () => {
    text.getElementsByClassName.fontSize = `${fontSizeControl.value}px`;
})