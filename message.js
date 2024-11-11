//!Now I need to generate the HTML for the menus for each item in the tank list but I also need to give functionality to the buttons based on IDs that will be stored on the HTML for each item on the tank list
//$So what I need to do once I have generated 3 images is to give all of her buttons IDs and once I call any of the buttons, Trigger an action based on the IDBCursor.


document.querySelectorAll(".remove-message").forEach((button)=>{
  button.addEventListener("click", () => {
    const tankId: string = (button as HTMLElement).dataset.tankId!;
    let matchingTank: Tank = findTankById(tankId)!;
        matchingTank.tankMessage = "";
        renderMessageSection(matchingTank);
  })

});
  




  // let removeMessage: Element = document.querySelector(".remove-message")!;
  // removeMessage.addEventListener("click", () => {
     t1tank.tankMessage = "";
   renderMessageSection();
  // });