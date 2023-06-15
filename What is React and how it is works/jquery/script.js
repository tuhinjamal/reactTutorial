let numberOne = 0 ;
let numberTwo = 0 ;
const buttonOne = document.querySelector("#buttonOne");
const displayOne = document.querySelector("#displayOne");
buttonOne.addEventListener("click",()=>{
    numberOne ++;
    displayOne.textContent = numberOne;
});
const buttonTwo = document.querySelector("#buttonTwo");
const displayTwo = document.querySelector("#displayTwo");
buttonTwo.addEventListener("click",()=>{
    numberTwo ++;
    displayTwo.textContent = numberTwo;
});