import { t1tank } from "./tankObjects.js";
// import { tankMessage } from "./tankClass.js";

const buttonsContainer = document.querySelector(".buttons")!;
function renderHTML() {
  buttonsContainer.innerHTML = `
<div class ="buttons">
      <div class="functions-container">
        <div class="speedUp-button-container">
          <button class="speedUp-button">Speed Up</button>
        </div>
        <div class="slowDown-button-container">
          <button class="slow-down-button">Slow down</button>
        </div>
        <div class="open-storage-button-container">
          <button class="open-storage-button">Open storage</button>
        </div>
        <div class="close-storage-button-container">
          <button class="close-storage-button">Close storage</button>
        </div>
      </div>

      <div class="status-container">
        <div class="moving-status-container">
          <p class="moving-status">Moving <br/>status: ${
            t1tank.movingStatus
          }</p>
        </div>
        <div class="storage-status-container">
          <p>
            Storage <br />
            status: ${t1tank.isStorageOpen === true ? "Open" : "Closed"}
          </p>
        </div>
        <div class="speed">
          <p>Speed: ${t1tank.speed}</p>
        </div>
      </div>

      <div class="features-container">
        <div class="drill-container">
          <img class="item-feature" src="../../images/${
            t1tank.drill
          }-drill.PNG">
        </div>
        <div class="engine-container">
          <img class="item-feature" src="../../images/${
            t1tank.engine
          }-engine.PNG">
        </div>
        <div class="fuel-type-container">
          <img class="item-feature" src="../../images/${
            t1tank.fuelType
          }-fuel.PNG">
        </div>
      </div>
    </div>
`;

  const speedUpButton: Element = document.querySelector(".speedUp-button")!;
  speedUpButton.addEventListener("click", () => {
    t1tank.go();
    setToLocalStorage()
    renderHTML();
    renderMessageSection();
    startRemoveMessageTimer();
  });

  const slowDownButton: Element = document.querySelector(".slow-down-button")!;
  slowDownButton.addEventListener("click", () => {
    t1tank.break();
    setToLocalStorage()
    renderHTML();
    renderMessageSection();
    startRemoveMessageTimer();
  });

  const openStorageButton: Element = document.querySelector(
    ".open-storage-button"
  )!;
  openStorageButton.addEventListener("click", () => {
    t1tank.openStorage();
    setToLocalStorage()
    renderHTML();
    renderMessageSection();
    startRemoveMessageTimer()
  });

  const closeStorageButton: Element = document.querySelector(
    ".close-storage-button"
  )!;
  closeStorageButton.addEventListener("click", () => {
    t1tank.closeStorage();
    setToLocalStorage()
    renderHTML();
    renderMessageSection();
    startRemoveMessageTimer()
  });
}
renderHTML();

let message: Element = document.querySelector(".message")!;

function renderMessageSection(): void {
  message.innerHTML = t1tank.tankMessage;
}

//*Functionality of remove message button:
let removeMessage: Element = document.querySelector(".remove-message")!;
removeMessage.addEventListener("click", () => {
  t1tank.tankMessage = "";
  renderMessageSection();
});

renderMessageSection();

let timeOutId1: number = 0;
function startRemoveMessageTimer(): void {
  //I need to be careful and think about where I am going to initialize the "timeOutId" And where I am going to run the "clearTimeOut".
  clearTimeout(timeOutId1);

  timeOutId1 = setTimeout(() => {
    console.log(" timer Test");
    message.innerHTML = "";
    t1tank.tankMessage = "";
  }, 3300);
}

function setToLocalStorage() {
  localStorage.setItem('t1tank', JSON.stringify(t1tank));
}








//* This is a new function that I created to test the localStorage functionality:
function new1(param: string) {
  const LOCSTOR = localStorage.getItem(param);
  console.log(LOCSTOR);  // This will log the string retrieved from localStorage

  if (LOCSTOR) {  // Check if there is data before parsing
    const parsedData = JSON.parse(LOCSTOR);
    console.log(parsedData);  // Logs the parsed data, which should be an object
    console.log(typeof parsedData);  // Logs "object"
  } else {
    console.log("No data found for this key in localStorage.");
  }
}
new1('t1tank');