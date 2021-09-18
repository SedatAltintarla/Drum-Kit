const drumsLength = document.querySelectorAll(".drum").length;
const drums = document.querySelectorAll(".drum");

const sounds = ["crash", "kick-bass", "snare", "tom-1", "tom-2", "tom-3", "tom-4"];

function playSound(sound) {
  let audio = new Audio(`sounds/${sound}.mp3`);
  audio.play();
}

for(let i = 0; i < drumsLength; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        
      playSound(sounds[i]);
    
  });
}
