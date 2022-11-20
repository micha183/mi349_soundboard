// Get Button and Sound Variables

var buttonElementBD = document.getElementById('button-1')
var buttonElementS = document.getElementById('button-2')
var buttonElementHH = document.getElementById('button-3')
var buttonElementOH = document.getElementById('button-4')


const BDSound = document.getElementById('BDAudio')
const SnareSound = document.getElementById('SnareAudio')
const HHSound = document.getElementById('HHAudio')
const OHSound = document.getElementById('OHAudio')
const HoverSound = document.getElementById('HoverAudio')



// Add event listeners

buttonElementBD.addEventListener('mouseover', function () {
    HoverSound.play();
})
buttonElementS.addEventListener('mouseover', function () {
    HoverSound.play();
})
buttonElementHH.addEventListener('mouseover', function () {
    HoverSound.play();
})
buttonElementOH.addEventListener('mouseover', function () {
    HoverSound.play();
})



buttonElementBD.addEventListener('click', function () {
    BDSound.play();
})
buttonElementS.addEventListener('click', function () {
    SnareSound.play();
})
buttonElementHH.addEventListener('click', function () {
    HHSound.play();
})
buttonElementOH.addEventListener('click', function () {
    OHSound.play();
})
