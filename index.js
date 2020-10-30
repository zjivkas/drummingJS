function DrumSound (fileLocation){
    this.fileLocation = fileLocation;
    this.play = function(){
        //Tap into audiohardware
        //check the file at file Location exists
        //Check the file at fileLocation is a soundfile
        //Play the file at fileLocation
    }
}

function  playAfterKeydown(key){
    switch (key){
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
         break;
        case "a":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
         break; 
        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
        break; 
        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
         break; 
        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
         break; 
         case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
         break; 
         case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
         break;
         
         default: console.log("")
    }
}    


function animation(currentKey){
    var activeButton = document.querySelector("."+ currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){activeButton.classList.remove("pressed")}, 100);
}

//Detecting Keyboard Press, added to entire keyboard, with the event of keypress
    
document.addEventListener("keydown", function(event){
    playAfterKeydown(event.key);
    animation(event.key);
});


//Detecting click events. 
for (var i = 0; i < document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    playAfterKeydown(buttonInnerHTML);
    animation(buttonInnerHTML);
});
}



