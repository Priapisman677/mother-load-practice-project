import { tankList } from "./tankObjects.js";
import { setToLocalStorage, issueMessage, startRemoveMessageTimer, } from "./utils.js";
//$ Couldn't I just pass tanks as a parameter to the function below?
function renderHTML() {
    let menuHTML = "";
    tankList.forEach((tank) => {
        menuHTML += `
    <div class="functions-container">
      <div class="speedUp-button-container">
        <button class="speedUp-button"
        data-tank-id="${tank.id}">Speed Up</button>
      </div>
      <div class="slowDown-button-container">
        <button class="slow-down-button"
        data-tank-id="${tank.id}">Slow down</button>
      </div>
      <div class="open-storage-button-container">
        <button class="open-storage-button"
        data-tank-id="${tank.id}">Open storage</button>
      </div>
      <div class="close-storage-button-container">
        <button class="close-storage-button"
        data-tank-id="${tank.id}">Close storage</button>
      </div>
    </div>

    <div class="status-container">
      <div class="moving-status-container">
        <p class="moving-status">Moving <br/>status: ${tank.movingStatus}</p>
      </div>
      <div class="storage-status-container">
        <p>
          Storage <br />
          status: ${tank.isStorageOpen === true ? "Open" : "Closed"}
        </p>
      </div>
      <div class="speed">
        <p>Speed: ${tank.speed}</p>
      </div>
    </div>

    <div class="features-container">
      <div class="drill-container">
        <img class="item-feature" src="../../images/${tank.drill}-drill.PNG">
      </div>
      <div class="engine-container">
        <img class="item-feature" src="../../images/${tank.engine}-engine.PNG">
      </div>
      <div class="fuel-type-container">
        <img class="item-feature" src="../../images/${tank.fuelType}-fuel.PNG">
      </div>
    </div>
    
    <div class="message-container">
      <div class="message js-message${tank.id}">${tank.tankMessage}</div>
      <div class="remove-message-button-container">
        <button class="remove-message-button"
        data-tank-id="${tank.id}"">Remove message</button>
      </div>
    </div>
  `;
    });
    const tankMenu = document.querySelector(".tank-menu");
    tankMenu.innerHTML = menuHTML;
    //*Functionality of the "speed up" button
    const speedUpButtons = document.querySelectorAll(".speedUp-button");
    speedUpButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const tankId = button.dataset.tankId;
            const matchingTank = tankList.find((tank) => {
                return tank.id === tankId;
            });
            matchingTank.go();
            setToLocalStorage(matchingTank.id, matchingTank);
            renderHTML();
            issueMessage(matchingTank);
            startRemoveMessageTimer(matchingTank);
        });
    });
    //*Functionality of the "slow down" button
    const slowDownButtons = document.querySelectorAll(".slow-down-button");
    slowDownButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const tankId = button.dataset.tankId;
            const matchingTank = tankList.find((tank) => {
                return tank.id === tankId;
            });
            matchingTank.break();
            setToLocalStorage(matchingTank.id, matchingTank);
            renderHTML();
            issueMessage(matchingTank);
            startRemoveMessageTimer(matchingTank);
        });
    });
    //*Functionality of the open storage button
    const openStorageButtons = document.querySelectorAll(".open-storage-button");
    openStorageButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const tankId = button.dataset.tankId;
            const matchingTank = tankList.find((tank) => {
                return tank.id === tankId;
            });
            matchingTank.openStorage();
            setToLocalStorage(matchingTank.id, matchingTank);
            renderHTML();
            issueMessage(matchingTank);
            startRemoveMessageTimer(matchingTank);
        });
    });
    //*Functionality of the close storage button:
    const closeStorageButtons = document.querySelectorAll(".close-storage-button");
    //! I also could add the word void to all functions:
    closeStorageButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const tankId = button.dataset.tankId;
            const matchingTank = tankList.find((tank) => {
                return tank.id === tankId;
            });
            matchingTank.closeStorage();
            renderHTML();
            issueMessage(matchingTank);
            setToLocalStorage(matchingTank.id, matchingTank);
            startRemoveMessageTimer(matchingTank);
        });
    });
    //*Functionality of remove message button:
    const removeMessageButtons = document.querySelectorAll(".remove-message-button");
    removeMessageButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const tankId = button.dataset.tankId;
            const matchingTank = tankList.find((tank) => {
                return tank.id === tankId;
            });
            matchingTank.tankMessage = "";
            issueMessage(matchingTank);
        });
    });
}
renderHTML();
