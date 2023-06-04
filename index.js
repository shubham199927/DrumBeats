var countr = document.querySelectorAll(".drum").length;
for(var i =0; i<countr;i++){

document.querySelectorAll(".drum")[i].addEventListener("click", aclick);
}
function aclick(){
var textof = this.innerHTML;
switch (textof) {
    case "w":
        var kick = new Audio("./sounds/kick-bass.mp3");
               kick.play();
        break;
        case "a":
        var sanre = new Audio("./sounds/snare.mp3");
               sanre.play();
        break;
        case "s":
            var sanre = new Audio("./sounds/tom-1.mp3");
                   sanre.play();
            break;
       case "d":
                var sanre = new Audio("./sounds/crash.mp3");
                       sanre.play();
                break; 
        case "j":
                var sanre = new Audio("./sounds/tom-2.mp3");
                       sanre.play();
                break;  
        case "k":
                    var sanre = new Audio("./sounds/tom-3.mp3");
                           sanre.play();
                    break;          
         case "l":
                        var sanre = new Audio("./sounds/tom-4.mp3");
                               sanre.play();
                        break;        
    default:
        break;
}

}








