const drumsLength = document.querySelectorAll(".drum").length;
const drums = document.querySelectorAll(".drum");

for(let i = 0; i < drumsLength; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        
      let buttonInnerHTML = this.innerHTML;

      switch (buttonInnerHTML) {
        case "w":
          let audio1 = new Audio("sounds/crash.mp3");
          audio1.play();
          break;
        
        case "a":
          let audio2 = new Audio("sounds/crash.mp3");
          audio2.play();
                  
        case "s":
          let audio3 = new Audio("sounds/crash.mp3");
          audio3.play();
                  
        case "d":
          let audio4 = new Audio("sounds/crash.mp3");
          audio4.play();
                  
        case "j":
          let audio5 = new Audio("sounds/crash.mp3");
          audio5.play();
                  
        case "k":
          let audio6 = new Audio("sounds/crash.mp3");
          audio6.play();
                  
        case "l":
          let audio7 = new Audio("sounds/crash.mp3");
          audio7.play();

        default:
          console.log(buttonInnerHTML);
          break;
      }

  });
}

console.log(drums);