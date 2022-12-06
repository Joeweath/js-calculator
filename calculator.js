/*-------------------------------- Constants --------------------------------*/




/*-------------------------------- Variables --------------------------------*/
let screen = document.querySelector('display')


/*------------------------ Cached Element References ------------------------*/
const zeroBtn = document.querySelector('zero-btn');
const oneBtn = document.querySelector('one-btn');
const twoBtn = document.querySelector('two-btn')
const threeBtn = document.querySelector('three-btn')
const fourBtn = document.querySelector('four-btn')
const fiveBtn = document.querySelector('five-btn')
const sixBtn = document.querySelector('six-btn')
const sevenBtn = document.querySelector('svn-btn')
const eightBtn = document.querySelector('eight-btn')
const nineBtn = document.querySelector('nine-btn')






/*----------------------------- Event Listeners -----------------------------*/
document.getElementById('clear-btn').addEventListener("click", init)


/*-------------------------------- Functions --------------------------------*/

function init (){
 document.getElementById('display').innerHTML = " 0 "
}

