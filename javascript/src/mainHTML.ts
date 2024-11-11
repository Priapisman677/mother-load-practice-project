import { tankList, findTankById } from "./tankObjects.js";
import { Tank } from "./tankClass.js";
// import { tankMessage } from "./tankClass.js";

function renderHTML() {
  let menuHTML: string = "";
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
      <div class="remove-message">
        <button>Remove message</button>
      </div>
    </div>
  `;
  });

  const tankMenu: Element = document.querySelector(".tank-menu")!;
  tankMenu.innerHTML = menuHTML;

  document.querySelectorAll(".speedUp-button").forEach((button) => {
    button.addEventListener("click", () => {
      const tankId: string = (button as HTMLElement).dataset.tankId!;

      let matchingTank: Tank = findTankById(tankId)!;

      matchingTank!.go();
      setToLocalStorage(matchingTank.id, matchingTank);
      renderHTML();
      renderMessageSection(matchingTank);
      startRemoveMessageTimer(matchingTank);
    });
  });

  document.querySelectorAll(".slow-down-button").forEach((button) => {
    button.addEventListener("click", () => {
      const tankId: string = (button as HTMLElement).dataset.tankId!;
      let matchingTank: Tank = findTankById(tankId)!;
      matchingTank.break();
      setToLocalStorage(matchingTank.id,  matchingTank);
      renderHTML();
      renderMessageSection(matchingTank);
      startRemoveMessageTimer(matchingTank);
    });
  });

  document.querySelectorAll(".open-storage-button").forEach((button) => {
    button.addEventListener("click", () => {
      const tankId: string = (button as HTMLElement).dataset.tankId!;
      let matchingTank: Tank = findTankById(tankId)!;
      matchingTank.openStorage();
      setToLocalStorage(matchingTank.id,  matchingTank);
      renderHTML();
      renderMessageSection(matchingTank);
      startRemoveMessageTimer(matchingTank);
    });
  });

  document.querySelectorAll(".close-storage-button").forEach((button) => {
    button.addEventListener("click", () => {
      const tankId: string = (button as HTMLElement).dataset.tankId!;
      let matchingTank: Tank = findTankById(tankId)!;
      matchingTank.closeStorage();
      setToLocalStorage(matchingTank.id,  matchingTank);
      renderHTML();
      renderMessageSection(matchingTank);
      startRemoveMessageTimer(matchingTank);
    });
  });

 

  function renderMessageSection(matchingTank: Tank): void {
    let message: Element = document.querySelector(`.js-message${matchingTank.id}`)!;
    console.log(matchingTank.tankMessage);
    message.innerHTML = matchingTank.tankMessage;
    //!This will not work because the message is not being updated.To fix it I need to pass the matchingTank as a parameter to the renderMessageSection function.
  }

  // //*Functionality of remove message button:
  // let removeMessage: Element = document.querySelector(".remove-message")!;
  // removeMessage.addEventListener("click", () => {
  //   t1tank.tankMessage = "";
  //   renderMessageSection();
  // });

  // renderMessageSection();
}
renderHTML();

let timeOutId1: number = 0;
function startRemoveMessageTimer(matchingTank: Tank): void {
  //I need to be careful and think about where I am going to initialize the "timeOutId" And where I am going to run the "clearTimeOut".
  clearTimeout(timeOutId1);
  timeOutId1 = setTimeout(() => {
    console.log(" timer Test");
    let message: Element = document.querySelector(`.js-message${matchingTank.id}`)!;
    message.innerHTML = "";
    matchingTank.tankMessage = "";
  }, 3300);
}

function setToLocalStorage(tankId: string, matchingTank : Tank): void {
  localStorage.setItem(tankId, JSON.stringify(matchingTank));
}

//* This is a new function that I created to test the localStorage functionality:
// function new1(param: string) {
//   const LOCSTOR = localStorage.getItem(param);
//   console.log(LOCSTOR); // This will log the string retrieved from localStorage

//   if (LOCSTOR) {
//     // Check if there is data before parsing
//     const parsedData = JSON.parse(LOCSTOR);
//     console.log(parsedData); // Logs the parsed data, which should be an object
//     console.log(typeof parsedData); // Logs "object"
//   } else {
//     console.log("No data found for this key in localStorage.");
//   }
// }
// new1("1");
