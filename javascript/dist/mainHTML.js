import { t1tank } from "./tankObjects.js";
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
    // const slowDownButton = document.querySelector('.slow-down-button')!;
    // const openStorageButton = document.querySelector('.open-storage-button')!;
    // const closeStorageButton = document.querySelector('.close-storage-button')!;
    speedUpButton.addEventListener("click", () => {
        t1tank.go();
        console.log("Test");
        // const speed: Element = document.querySelector('.speed')!;
        // speed.innerHTML = `Speed: ${t1tank.speed} !`
        renderHTML();
    });
    const slowDownButton = document.querySelector(".slow-down-button");
    slowDownButton.addEventListener("click", () => {
        t1tank.break();
        console.log(t1tank.speed, "test");
        renderHTML();
    });
    const openStorageButton = document.querySelector(".open-storage-button");
    openStorageButton.addEventListener("click", () => {
        t1tank.openStorage();
        console.log("storage:", t1tank.isStorageOpen === true ? "Open" : "Closed");
        renderHTML();
    });
    const closeStorageButton = document.querySelector(".close-storage-button");
    closeStorageButton.addEventListener("click", () => {
        t1tank.closeStorage();
        console.log("storage:", t1tank.isStorageOpen === true ? "Open" : "Closed");
        renderHTML();
    });
}
renderHTML();
