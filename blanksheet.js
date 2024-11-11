//$ Hello!

 //*Functionality of the close storage button
 document.querySelectorAll(".close-storage-button").forEach((button) => {
  button.addEventListener("click", () => {
    const tankId: string = (button as HTMLElement).dataset.tankId!;
    let matchingTank: Tank = findTankById(tankId)!;
    //$ I need to find "How the hell does .find() work?" to replace "findTankById" with it.
    matchingTank.closeStorage();
    setToLocalStorage(matchingTank.id, matchingTank);
    renderHTML();
    issueMessage(matchingTank);
    startRemoveMessageTimer(matchingTank);
  });
});
