const fortunes = 
["It is easier to run down a hill than up one.",
"If God had meant for us to be naked, we would have been born that way.",
"All true wisdom is found on T-shirts.",
"If God had a beard, he'd be a UNIX programmer.",
"If you refuse to accept anything but the best you very often get it."
];

const buttonPress = document.querySelectorAll('[data-input]');
const previousButtonPress = document.querySelectorAll('[data-input2]');
const randomButtonPress = document.querySelector('[data-input3]');
const fortune = document.querySelector('[data-output]');

// let num = 0;
// function fortInc(fortuna){
//     for(i= 0, i < fortuna.length, i++){
//         fortuna[i]+= 1
//         console.log(fortuna[i])
//     }
// }
let num = -1; 

function respondToClick() {
    console.log('Yuh')
    console.log(num);
    num +=1 
    if (num == fortunes.length) {
        num =0;
    }
    fortune.textContent = fortunes[num];
    
    console.log(num)
    
    // fortunes.forEach(function(i){
    //     return fortunes[i+1]
    // });

    fortune.classList.add('shown')
    console.log(fortune)
}
function respondToClickPrevious() {
    console.log('Nuhuh')
    console.log(num);
    if (num == 0 || num == -1) {
        num = fortunes.length;
    }
    num -=1 
    fortune.textContent = fortunes[num];
    console.log(num);
   
    
    // if (num == fortunes.length+1) {
    //     num =0;
    // }
    
    // fortunes.forEach(function(i){
    //     return fortunes[i+1]
    // });

    fortune.classList.add('shown')
    console.log(fortune)
}
function respondToRandom(){
    num = Math.floor(Math.random()*5);
    fortune.textContent = fortunes[num];
}
function attachClickHandler(oneElement) {
    oneElement.addEventListener('click', respondToClick)
}
function attachClickHandlerPrevious(oneElement) {
    oneElement.addEventListener('click', respondToClickPrevious)
}
// buttonPress.addEventListener('click', respondToClick)
buttonPress.forEach(attachClickHandler)
previousButtonPress.forEach(attachClickHandlerPrevious)
randomButtonPress.addEventListener('click', respondToRandom)