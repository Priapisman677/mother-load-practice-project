import { Tank } from "./tankClass.js";
import { tankList } from "./tankObjects.js";

//*Function to set to local storage:
export function setToLocalStorage(tankId: string, matchingTank: Tank): void {
  localStorage.setItem(tankId, JSON.stringify(matchingTank));
}

//*function to find the tank object based on an ID:
//$This line worked succesfully because of a miracle :D
//$I need to try replacing the current code for finding a tank by:
//$ function findTankById(id: string): Tank {
//$   return tankList.find((tank) => tank.id === id)!;

export function findTankById(id: string): Tank | null {
  let matchingTank: Tank | null = null;
  tankList.forEach((tank) => {
    if (tank.id === id) {
      matchingTank = tank;
    }
  });
  return matchingTank;
}

//*Function to issue a message to the correct tank:
//! this just needs review for a better understanding:
export function issueMessage(matchingTank: Tank): void {
  let message: Element = document.querySelector(`.js-message${matchingTank.id}`)!;
  message.innerHTML = matchingTank.tankMessage;
}

//* Function to remove message after three seconds;
//*Includes the declaration for timeOutId1 outside of the function:
let timeOutId1: number = 0;
export function startRemoveMessageTimer(matchingTank: Tank): void {
  //I need to be careful and think about where I am going to initialize the "timeOutId" And where I am going to run the "clearTimeOut".
  clearTimeout(timeOutId1);
  timeOutId1 = setTimeout(() => {
    console.log(" timer Test");
    let message: Element = document.querySelector(
      `.js-message${matchingTank.id}`
    )!;
    message.innerHTML = "";
    matchingTank.tankMessage = "";
  }, 3300);
}
