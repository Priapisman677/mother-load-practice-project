import { tankList } from "./tankObjects.js";
import { Tank } from "./tankClass.js";
import { setToLocalStorage, findTankById, issueMessage, startRemoveMessageTimer } from "./utils.js";

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
        <p class="moving-status">Moving <br/>status: ${tank.movingStatus as string}</p>
      </div>
      <div class="storage-status-container">
        <p>
          Storage <br />
          status: ${tank.isStorageOpen as boolean === true ? "Open" : "Closed"}
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

  const tankMenu: Element = document.querySelector(".tank-menu")!;
  tankMenu.innerHTML = menuHTML;

  //*Functionality of the "speed up" button
  const speedUpButtons: NodeListOf<HTMLElement> =
    document.querySelectorAll(".speedUp-button");
  speedUpButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const tankId: string = button.dataset.tankId!;
      let matchingTank: Tank = findTankById(tankId)!;
      //$ I need to find "How the hell does .find() work?" to replace "findTankById" with it.
      matchingTank!.go();
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
      //!Down here I used the keyword as instead of the question mark and I believe it is very important to understand why.
      const tankId: string = button.dataset.tankId as string;
      let matchingTank: Tank = findTankById(tankId)!;
      //$ I need to find "How the hell does .find() work?" to replace "findTankById" with it.
      matchingTank.break();
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
      const tankId: string = button.dataset.tankId!;
      let matchingTank: Tank = findTankById(tankId)!;
      //$ I need to find "How the hell does .find() work?" to replace "findTankById" with it.
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
      const tankId: string = button.dataset.tankId!;
      let matchingTank: Tank = findTankById(tankId)!;
      matchingTank.closeStorage();
      renderHTML();
      issueMessage(matchingTank as Tank);
      setToLocalStorage(matchingTank.id as string, matchingTank as Tank);
      startRemoveMessageTimer(matchingTank as Tank);
    });
  });

  //*Functionality of remove message button:
  //! this just needs review for a better understanding:
  document.querySelectorAll(".remove-message-button").forEach((button) => {
    button.addEventListener("click", () => {
      const tankId: string = (button as HTMLElement).dataset.tankId!;
      let matchingTank: Tank = findTankById(tankId)!;
      matchingTank.tankMessage = "";
      issueMessage(matchingTank);
    });
  });
}
renderHTML();



