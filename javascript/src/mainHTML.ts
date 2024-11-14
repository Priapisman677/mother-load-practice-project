import { tankList } from "./tankObjectList.js";
import { Tank} from "./tankClass.js";
import {
  setToLocalStorage,
  issueMessage,
  startRemoveMessageTimer,
  buttonFunction,
  speedUpButtons
} from "./utils.js";


export function renderHTML() {
  let menuHTML: string = "";

  tankList.forEach((tank) => {
    menuHTML += `
    <div class="functions-container">
      <div class="button-container">
        <button class="speedUp-button"
        data-tank-id="${tank.id as string}">Speed Up</button>
      </div>
      <div class="button-container">
        <button class="slow-down-button"
        data-tank-id="${tank.id as string}">Slow down</button>
      </div>
      <div class="button-container">
        <button class="open-storage-button"
        data-tank-id="${tank.id as string}">Open storage</button>
      </div>
      <div class="button-container">
        <button class="close-storage-button"
        data-tank-id="${tank.id as string}">Close storage</button>
      </div>
      <div class="button-container">
        <button class="refill-fuel-button"
        data-tank-id="${tank.id}">Refill fuel</button>
      </div>
      ${tank.reserveFuelButton()}
      ${tank.flyButton()}
      
    </div>

    <div class="status-container">
      <div class="status">
        <p class="moving-status">Moving <br/>status: ${
          tank.movingStatus as string
        }</p>
      </div>
      <div class="status">
        <p>
          Storage <br />
          status: ${
            (tank.isStorageOpen as boolean) === true ? "Open" : "Closed"
          }
        </p>
      </div>
      <div class="status">
        <p>Speed: ${tank.speed as number}</p>
      </div>

       <div class="status">Current fuel:  <br /> ${
         tank.fuelCapacity
       }</div>
    </div>

    <div class="items-container">
      <div class="image-container">
        <img class="item-image" src="../../images/${
          tank.drill.name as string
        }-drill.PNG">
      </div>
      <div class="image-container">
        <img class="item-image" src="../../images/${
          tank.engine.name as string
        }-engine.PNG">
      </div>
      <div class="image-container">
        <img class="item-image" src="../../images/${
          tank.fuelType.name as string
        }-fuel.PNG">
      </div>
      
      ${tank.reserveFuelImage()}
      ${tank.fanImage()}
    </div>
    
    <div class="message-container">
      <div class="message js-message${tank.id as string}">${
      tank.tankMessage as string
    }</div>
      <div class="remove-message-button-container">
        <button class="remove-message-button"
        data-tank-id="${tank.id as string}">Remove message</button>
      </div>
    </div>
  `;
  });
  const tankMenu: Element = document.querySelector(".tank-menu")!;
  tankMenu.innerHTML = menuHTML;


  //*Functionality of the "speed up" button

  buttonFunction(speedUpButtons);










  //*Functionality of the "slow down" button
  const slowDownButtons: NodeListOf<HTMLElement> =
    document.querySelectorAll(".slow-down-button");
  slowDownButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const tankId: string = button.dataset.tankId as string;
      const matchingTank: Tank = tankList.find((tank: Tank): boolean => {
        return (tank.id as string) === (tankId as string);
      }) as Tank;
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

  //*Functionality of the refill fuel button:
  const refillFuelButtons: NodeListOf<HTMLElement> = document.querySelectorAll(
    ".refill-fuel-button"
  );
  refillFuelButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const tankId = button.dataset.tankId;
      const matchingTank: Tank = tankList.find((tank: Tank): boolean => {
        return tank.id === tankId;
      }) as Tank;
      matchingTank.reFillFuel()
      renderHTML()
      issueMessage(matchingTank as Tank)
      setToLocalStorage(matchingTank.id as string, matchingTank as Tank)
      startRemoveMessageTimer(matchingTank as Tank)
      
    });
  });
  //*Functionality of the refill fuel button:
  const reserveFuelButtons: NodeListOf<HTMLElement> = document.querySelectorAll(
    ".reserve-fuel-button"
  );
  reserveFuelButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const tankId = button.dataset.tankId;
      const matchingTank: Tank = tankList.find((tank: Tank):boolean=>{
        return tankId as string === tank.id as string}) as Tank;
      matchingTank.useReserveFuel()
      renderHTML()
      issueMessage(matchingTank as Tank)
      setToLocalStorage(matchingTank.id as string, matchingTank as Tank)
      startRemoveMessageTimer(matchingTank as Tank)
      
    });
  });

  //*Functionality of the fly button:
  const flyButtons: NodeListOf<HTMLElement> = document.querySelectorAll(
    ".fly-button"
  );
  flyButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const tankId = button.dataset.tankId;
      const matchingTank: Tank = tankList.find((tank: Tank):boolean=>{
        return tankId as string === tank.id as string}) as Tank;
      matchingTank.fly()
      renderHTML()
      issueMessage(matchingTank as Tank)
      setToLocalStorage(matchingTank.id as string, matchingTank as Tank)
      startRemoveMessageTimer(matchingTank as Tank)
      
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

