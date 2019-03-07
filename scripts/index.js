const fortunes = 
["It is easier to run down a hill than up one.",
"If God had meant for us to be naked, we would have been born that way.",
"All true wisdom is found on T-shirts.",
"If God had a beard, he'd be a UNIX programmer.",
"If you refuse to accept anything but the best you very often get it."
];

const buttonPress = document.querySelector('[data-input]');
const fortune = document.querySelector('[data-output]');

function fortInc(fortuna){
    for(i= 0, i < fortuna.length, i++){
        fortuna[i]+= 1
        console.log(fortuna[i])
    }
}
function respondToClick() {
    console.log('Yuh')
    
    fortune.textContent = fortunes[0] ;
    fortune.classList.add('shown')
    console.log(fortune)
}

buttonPress.addEventListener('click', respondToClick)