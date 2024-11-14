import { tankList } from "./tankObjectList.js";
import { Tank, Tier1Tank, Tier2Tank, Tier3Tank } from "./tankClass.js";
//!Delete this: I just typed this because to rid of the error "not being used"
// console.log("🚀 ~ Tier3Tank:", Tier3Tank)
import { setToLocalStorage, issueMessage, startRemoveMessageTimer, } from "./utils.js";
//$ Couldn't I just pass tanks as a parameter to the function below?
function renderHTML() {
    let menuHTML = "";
    tankList.forEach((tank) => {
        menuHTML += `
    <div class="functions-container">
      <div class="button-container">
        <button class="speedUp-button"
        data-tank-id="${tank.id}">Speed Up</button>
      </div>
      <div class="button-container">
        <button class="slow-down-button"
        data-tank-id="${tank.id}">Slow down</button>
      </div>
      <div class="button-container">
        <button class="open-storage-button"
        data-tank-id="${tank.id}">Open storage</button>
      </div>
      <div class="button-container">
        <button class="close-storage-button"
        data-tank-id="${tank.id}">Close storage</button>
      </div>
      <div class="button-container">
        <button class="refill-fuel-button"
        data-tank-id="${tank.id}">Refill fuel</button>
      </div>
      ${tank.reserveFuelButton()}

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

       <div class="fuel-status-container">Current fuel:  <br /> ${tank.fuelCapacity}</div>

    </div>

    <div class="items-container">
      <div class="image-container">
        <img class="item-image" src="../../images/${tank.drill.name}-drill.PNG">
      </div>
      <div class="image-container">
        <img class="item-image" src="../../images/${tank.engine.name}-engine.PNG">
      </div>
      <div class="image-container">
        <img class="item-image" src="../../images/${tank.fuelType.name}-fuel.PNG">
      </div>
      
      ${tank.reserveFuelImage()}
    </div>
    
    <div class="message-container">
      <div class="message js-message${tank.id}">${tank.tankMessage}</div>
      <div class="remove-message-button-container">
        <button class="remove-message-button"
        data-tank-id="${tank.id}">Remove message</button>
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
            if (matchingTank instanceof Tank) {
                console.log("All tanks should print this");
            }
            if (matchingTank instanceof Tier1Tank) {
                // matchingTank.test1();
                matchingTank.go();
                console.log("Test");
            }
            if (matchingTank instanceof Tier2Tank) {
                // matchingTank.test1();
                matchingTank.go();
            }
            if (matchingTank instanceof Tier3Tank) {
                // matchingTank.test1();
                matchingTank.go();
            }
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
            if (matchingTank instanceof Tier1Tank) {
                matchingTank.break();
            }
            if (matchingTank instanceof Tier2Tank) {
                matchingTank.break();
            }
            if (matchingTank instanceof Tier3Tank) {
                matchingTank.break();
            }
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
    //*Functionality of the refill fuel button:
    const refillFuelButtons = document.querySelectorAll(".refill-fuel-button");
    refillFuelButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const tankId = button.dataset.tankId;
            const matchingTank = tankList.find((tank) => {
                return tank.id === tankId;
            });
            matchingTank.reFillFuel();
            renderHTML();
            issueMessage(matchingTank);
            setToLocalStorage(matchingTank.id, matchingTank);
            startRemoveMessageTimer(matchingTank);
        });
    });
    //*Functionality of the refill fuel button:
    const reserveFuelButtons = document.querySelectorAll(".reserve-fuel-button");
    reserveFuelButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const tankId = button.dataset.tankId;
            const matchingTank = tankList.find((tank) => {
                return tankId === tank.id;
            });
            matchingTank.useReserveFuel();
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
