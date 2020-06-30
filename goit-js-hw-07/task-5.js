const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
nameInput.addEventListener("input", () => {
    nameOutput.textContent = nameInput.nodeValue;
    if (nameInput.value === "") {
        nameOutpun.textContent = "незнакомец"
    }
})