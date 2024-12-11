/* Create an instance of CSInterface */
let csInterface = new CSInterface();
let currentInterval = 0;

let intervalValueElem = document.getElementById("intervalRange");
let intervalValue = intervalValueElem.value;
intervalValueElem.addEventListener("input", () => {
    if (currentInterval !== 0) {
        csInterface.evalScript(`stopAutoSave(${currentInterval})`, () => {})
    }

    intervalValue = intervalValueElem.value;
    csInterface.evalScript(`runAutoSave(${intervalValue})`, (result) => {
        currentInterval = result;
    })
});


let openButton = document.querySelector("#open-button");

document.querySelector("#start-button").addEventListener("click", () => {
    csInterface.evalScript(`runAutoSave(${intervalValue})`, (result) => {
        currentInterval = result;
    })
});

document.querySelector("#stop-button").addEventListener("click", () => {
    csInterface.evalScript(`stopAutoSave(${currentInterval})`, () => {
        currentInterval = 0;
    })
})


