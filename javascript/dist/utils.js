//*Function to set to local storage:
export function setToLocalStorage(tankId, matchingTank) {
    localStorage.setItem(tankId, JSON.stringify(matchingTank));
}
//*Function to issue a message to the correct tank:
export function issueMessage(matchingTank) {
    let message = document.querySelector(`.js-message${matchingTank.id}`);
    message.innerHTML = matchingTank.tankMessage;
}
//* Function to remove message after three seconds;
//*Includes the declaration for timeOutId1 outside of the function:
let timeOutId1 = 0;
export function startRemoveMessageTimer(matchingTank) {
    //I need to be careful and think about where I am going to initialize the "timeOutId" And where I am going to run the "clearTimeOut".
    clearTimeout(timeOutId1);
    timeOutId1 = setTimeout(() => {
        console.log(" timer Test");
        let message = document.querySelector(`.js-message${matchingTank.id}`);
        message.innerHTML = "";
        //! I could put this function below inside of issue message instead.
        matchingTank.tankMessage = "";
    }, 5000);
}
//$ The function below was deprecated because I added ".find()" instead
// export function findTankById(id: string): Tank | null {
//   let matchingTank: Tank | null = null;
//   tankList.forEach((tank) => {
//     if (tank.id === id) {
//       matchingTank = tank;
//     }
//   });
//   return matchingTank;
// }
