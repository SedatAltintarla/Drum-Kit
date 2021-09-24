const drumsLength = document.querySelectorAll(".drum").length;
const drums = document.querySelectorAll(".drum");

const keys = [];

const music = {
  sounds: ["crash", "kick-bass", "snare", "tom-1", "tom-2", "tom-3", "tom-4"],
  keys
}

const sounds = ["crash", "kick-bass", "snare", "tom-1", "tom-2", "tom-3", "tom-4"];


function playSound(sound) {
  let audio = new Audio(`sounds/${sound}.mp3`);
  audio.play();
}


for(let i = 0; i < drumsLength; i++) {
  keys.push(drums[i].innerHTML);
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        
      playSound(sounds[i]);
    
  });
}


document.addEventListener("keydown", event => {

  for(let i = 0; i < music.keys.length; i++){
    if(event.key == music.keys[i]) {
      playSound(music.sounds[i]);
    }
  }

})
