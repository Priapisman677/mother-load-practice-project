import { t1tank } from "./tankObjects.js";
// import { tankMessage } from "./tankClass.js";
const buttonsContainer = document.querySelector(".buttons");
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
          <p class="moving-status">Moving <br/>status: ${t1tank.movingStatus}</p>
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
          <img class="item-feature" src="../../images/${t1tank.drill}-drill.PNG">
        </div>
        <div class="engine-container">
          <img class="item-feature" src="../../images/${t1tank.engine}-engine.PNG">
        </div>
        <div class="fuel-type-container">
          <img class="item-feature" src="../../images/${t1tank.fuelType}-fuel.PNG">
        </div>
      </div>
    </div>
`;
    const speedUpButton = document.querySelector(".speedUp-button");
    speedUpButton.addEventListener("click", () => {
        t1tank.go();
        renderHTML();
        renderMessageSection();
    });
    const slowDownButton = document.querySelector(".slow-down-button");
    slowDownButton.addEventListener("click", () => {
        t1tank.break();
        renderHTML();
        renderMessageSection();
    });
    const openStorageButton = document.querySelector(".open-storage-button");
    openStorageButton.addEventListener("click", () => {
        t1tank.openStorage();
        renderHTML();
        renderMessageSection();
    });
    const closeStorageButton = document.querySelector(".close-storage-button");
    closeStorageButton.addEventListener("click", () => {
        t1tank.closeStorage();
        renderHTML();
        renderMessageSection();
    });
}
renderHTML();
function renderMessageSection() {
    const messageContainer = document.querySelector(".message");
    messageContainer.innerHTML = t1tank.tankMessage;
}
let removeMessage = document.querySelector('.remove-message');
removeMessage.addEventListener('click', () => {
    t1tank.tankMessage = '';
    renderMessageSection();
});
renderMessageSection();
//* Now I need to make the button be able to remove the message
