const fortunes = 
["It is easier to run down a hill than up one.",
"If God had meant for us to be naked, we would have been born that way.",
"All true wisdom is found on T-shirts.",
"If God had a beard, he'd be a UNIX programmer.",
"If you refuse to accept anything but the best you very often get it."
];

const buttonPress = document.querySelectorAll('[data-input]');
// const previousButtonPress = document.querySelectorAll()
const fortune = document.querySelector('[data-output]');

// let num = 0;
// function fortInc(fortuna){
//     for(i= 0, i < fortuna.length, i++){
//         fortuna[i]+= 1
//         console.log(fortuna[i])
//     }
// }
let num=0; 

function respondToClick() {
    console.log('Yuh')
    console.log(num);
    fortune.textContent = fortunes[num];
    num +=1 
    if (num == fortunes.length+1) {
        num =0;
    }
    
    // fortunes.forEach(function(i){
    //     return fortunes[i+1]
    // });

    fortune.classList.add('shown')
    console.log(fortune)
}
function respondToClickPrevious() {
    console.log('Yuh')
    console.log(num);
    fortune.textContent = fortunes[num];
    num -=1 
    // if (num == fortunes.length+1) {
    //     num =0;
    // }
    
    // fortunes.forEach(function(i){
    //     return fortunes[i+1]
    // });

    fortune.classList.add('shown')
    console.log(fortune)
}
function attachClickHandler(oneElement) {
    oneElement.addEventListener('click', respondToClick)
}
// buttonPress.addEventListener('click', respondToClick)
buttonPress.forEach(attachClickHandler)