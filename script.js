// global variables
const numberContainer = document.getElementById("number-container");
const generateNumber  = document.getElementById("generate-number");
// random color generator
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }



// Random Number Generator
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// promt minimum and maximum Value
const minimumValue = prompt("what is your minimum value");
const maximumValue = prompt("what is your maximum value");
const minValue = minimumValue;
const maxValue = maximumValue;

// Event Listener
generateNumber.addEventListener("click", numberGenerateClick);

function numberGenerateClick(event){
const numberContainerWidth = numberContainer.clientWidth;
const numberContainerHeight = numberContainer.clientHeight;
const numberContainerFontSize = window.innerWidth < 767 ? 26 : 50;

const randomXPosition = Math.floor(Math.random()*(numberContainerWidth - numberContainerFontSize));
const randomYPosition = Math.floor(Math.random()*(numberContainerHeight - numberContainerFontSize));

    const newNumber =document.createTextNode(getRandomInt(minValue,maxValue))
   const newElement = document.createElement("p");
   newElement.classList.add("mainPClass");
   newElement.setAttribute("style", `left:${randomXPosition}px; top:${randomYPosition}px; color:${getRandomColor()}`);
   numberContainer.appendChild(newElement);
   newElement.appendChild(newNumber);

   setTimeout(()=>{
    newElement.remove()
   },3000);
}