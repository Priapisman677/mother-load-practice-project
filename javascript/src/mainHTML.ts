import { tankList } from "./tankObjectList.js";
import { Tank, Tier1Tank, Tier2Tank, Tier3Tank } from "./tankClass.js";

//!Delete this: I just typed this because to rid of the error "not being used"
// console.log("🚀 ~ Tier3Tank:", Tier3Tank)

import {
  setToLocalStorage,
  issueMessage,
  startRemoveMessageTimer,
} from "./utils.js";

//$ Couldn't I just pass tanks as a parameter to the function below?
function renderHTML() {
  let menuHTML: string = "";
  tankList.forEach((tank) => {
    menuHTML += `
    <div class="functions-container">
      <div class="speedUp-button-container">
        <button class="speedUp-button"
        data-tank-id="${tank.id as string}">Speed Up</button>
      </div>
      <div class="slowDown-button-container">
        <button class="slow-down-button"
        data-tank-id="${tank.id as string}">Slow down</button>
      </div>
      <div class="open-storage-button-container">
        <button class="open-storage-button"
        data-tank-id="${tank.id as string}">Open storage</button>
      </div>
      <div class="close-storage-button-container">
        <button class="close-storage-button"
        data-tank-id="${tank.id as string}">Close storage</button>
      </div>
    </div>

    <div class="status-container">
      <div class="moving-status-container">
        <p class="moving-status">Moving <br/>status: ${
          tank.movingStatus as string
        }</p>
      </div>
      <div class="storage-status-container">
        <p>
          Storage <br />
          status: ${
            (tank.isStorageOpen as boolean) === true ? "Open" : "Closed"
          }
        </p>
      </div>
      <div class="speed">
        <p>Speed: ${tank.speed as number}</p>
      </div>
    </div>

    <div class="features-container">
      <div class="drill-container">
        <img class="item-feature" src="../../images/${
          tank.drill.name as string
        }-drill.PNG">
      </div>
      <div class="engine-container">
        <img class="item-feature" src="../../images/${
          tank.engine.name as string
        }-engine.PNG">
      </div>
      <div class="fuel-type-container">
        <img class="item-feature" src="../../images/${
          tank.fuelType.name as string
        }-fuel.PNG">
      </div>
    </div>
    
    <div class="message-container">
      <div class="message js-message${tank.id as string}">${
      tank.tankMessage as string
    }</div>
      <div class="remove-message-button-container">
        <button class="remove-message-button"
        data-tank-id="${tank.id as string}"">Remove message</button>
      </div>
    </div>
  `;
  });

  const tankMenu: Element = document.querySelector(".tank-menu")!;
  tankMenu.innerHTML = menuHTML;

  //*Functionality of the "speed up" button
  const speedUpButtons: NodeListOf<HTMLElement> =
    document.querySelectorAll(".speedUp-button");
  speedUpButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const tankId: string = button.dataset.tankId as string;
      const matchingTank: Tank = tankList.find((tank: Tank): boolean => {
        return (tank.id as string) === (tankId as string);
      }) as Tank;
      if (matchingTank instanceof Tank) {
        console.log("All tanks should print this");
      }
      if (matchingTank instanceof Tier1Tank) {
        // matchingTank.test1();
        matchingTank.go()
        console.log('Test')
      }
      if (matchingTank instanceof Tier2Tank) {
        // matchingTank.test1();
        matchingTank.go()
      }
      if (matchingTank instanceof Tier3Tank) {
        // matchingTank.test1();
        matchingTank.go()
      }
      setToLocalStorage(matchingTank.id, matchingTank);
      renderHTML();
      issueMessage(matchingTank);
      startRemoveMessageTimer(matchingTank);
    });
  });

  //*Functionality of the "slow down" button
  const slowDownButtons: NodeListOf<HTMLElement> =
    document.querySelectorAll(".slow-down-button");
  slowDownButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const tankId: string = button.dataset.tankId as string;
      const matchingTank: Tank = tankList.find((tank: Tank): boolean => {
        return (tank.id as string) === (tankId as string);
      }) as Tank;

      if(matchingTank instanceof Tier1Tank){
        matchingTank.break()
      }
      if(matchingTank instanceof Tier2Tank){
        matchingTank.break()
      }
      if(matchingTank instanceof Tier3Tank){
        matchingTank.break()
      }
      
      setToLocalStorage(matchingTank.id, matchingTank);
      renderHTML();
      issueMessage(matchingTank);
      startRemoveMessageTimer(matchingTank);
    });
  });

  //*Functionality of the open storage button
  const openStorageButtons: NodeListOf<HTMLElement> = document.querySelectorAll(
    ".open-storage-button"
  );
  openStorageButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const tankId: string = button.dataset.tankId as string;
      const matchingTank: Tank = tankList.find((tank: Tank): boolean => {
        return (tank.id as string) === (tankId as string);
      }) as Tank;
      matchingTank.openStorage();
      setToLocalStorage(matchingTank.id, matchingTank);
      renderHTML();
      issueMessage(matchingTank);
      startRemoveMessageTimer(matchingTank);
    });
  });

  //*Functionality of the close storage button:
  const closeStorageButtons: NodeListOf<HTMLElement> =
    document.querySelectorAll(".close-storage-button");
  //! I also could add the word void to all functions:
  closeStorageButtons.forEach((button): void => {
    button.addEventListener("click", () => {
      const tankId: string = button.dataset.tankId as string;
      const matchingTank: Tank = tankList.find((tank: Tank): boolean => {
        return (tank.id as string) === (tankId as string);
      }) as Tank;
      matchingTank.closeStorage();
      renderHTML();
      issueMessage(matchingTank as Tank);
      setToLocalStorage(matchingTank.id as string, matchingTank as Tank);
      startRemoveMessageTimer(matchingTank as Tank);
    });
  });

  //*Functionality of remove message button:
  const removeMessageButtons: NodeListOf<HTMLElement> =
    document.querySelectorAll(".remove-message-button");
  removeMessageButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const tankId: string = button.dataset.tankId as string;
      const matchingTank: Tank = tankList.find((tank: Tank): boolean => {
        return (tank.id as string) === (tankId as string);
      }) as Tank;
      matchingTank.tankMessage = "";
      issueMessage(matchingTank);
    });
  });
}
renderHTML();
