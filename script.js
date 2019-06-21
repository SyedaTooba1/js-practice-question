//      FIRST TASK
// const speedLimit = 60;
// let carRace = 30;

// if(carRace > speedLimit) {
// console.log("OVERSPEEDING");
// } else {
// console.log("NOT");
// }
//       SECOND TASK
// let box = document.getElementById("box");
// let yes = document.getElementById("yes");
// let no = document.getElementById("no");
// function choice() {
//     if(yes.clicked == true) {
//         alert("WELCOME");
//     } else{
//        alert("PLEASE LOGIN");
//     }

// }
//      THIRD TASK
// const temperatureLimit = 40;
// let temperature = 42;
// if(temperature > temperatureLimit) {
//     alert("IMPORTANT ANNOUNCEMENT!!! UIT is closed tomorrow due to heat wave");
// }

//      FORTH TASK
// rupees = 1000000;
// rupeesLimit = 1000000;
// if(rupees >= rupeesLimit) {
//     alert("Congratulations! You are a millionaire");
// } else {
// alert("I'm sorry, you are not a millionaire");
// }

//      FIFTH TASK
// let electric = false;

// if(electric == true ) {
//     alert("MADE BY TESLA");
// } else {
//     alert("NOT MADEN BY TESLA")
// }

//       SIXTH TASK
// let highScore = 800;
// let yourScore =700;

// if(highScore < yourScore) {
//     alert("Congratulations!! Your new high score is " + yourScore)
// } else{
//     alert("Try Again. You just need" + (highScore - yourScore) )
// }

//       SEVENTH TASK
// let value = 3;
// let evenOdd =value % 2;

// if(evenOdd == 0) {
//     alert("This is EVEN");
// }
//  else {
//     alert("This is ODD");
// }

//      EIGHT TASK
// let balance =-50;

// if (balance < 1) {
//     alert("Moazziz Sarif, aap ka mojooda balance iss call k lye naa kaafi hai. Please re-charge karain");
// }
// if(balance >= 1 && balance <= 10) {
//     alert("Moazziz sarif, aap ka balance khatam honay wala hai ");
// }
// if(balance > 10) {
//     alert("Ring Ring");
// }
//      NINTH TASK
// let mathScore = 0;
// let compScore = 0;
// let engScore = 0;
// function mathValue(){
//     mathScore = document.getElementById('math').value;

// }
// function compValue(){
//     compScore = document.getElementById('comp').value;

// }
// function engValue(){
//     engScore = document.getElementById('eng').value;

// }

// function result(){
//     if(mathScore > 10 || compScore >20 || engScore > 8) {
//         alert("!!CONGRATULATIONS!! YOU HAVE PASSED THE TEST")
//     }
//     else{
//         alert("NOT PASSED")
//     }
// }

//      TENTH TASK
let mathScore = 0;
let compScore = 0;
let engScore = 0;
function mathValue(){
    mathScore = document.getElementById('math').value;

}
function compValue(){
    compScore = document.getElementById('comp').value;

}
function engValue(){
    engScore = document.getElementById('eng').value;

}

function result(){
    if(mathScore > 10 && compScore > 20 && engScore > 8) {
        alert("!!CONGRATULATIONS!! YOU HAVE PASSED THE TEST")
    }
    else{
        alert("NOT PASSED")
    }
}