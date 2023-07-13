let player1 = document.getElementById('player1')
let player2 = document.getElementById('player2')
let s1=document.getElementById('score-p1')
let s2=document.getElementById('score-p2')
let btn_Go=document.getElementById('go')
let btn_PlayAgain=document.getElementById('playAgain')
let boxes = Array.from(document.getElementsByClassName('box'))
let scorePlayer1 = 0;
let scorePlayer2 = 0;
let arr=Array(9).fill("")
const O="O"
const X="X"
let currentPlayer=X
let winner=''
playerT=document.getElementById('playerText')
btn_Go.addEventListener('click', go)
// console.log(arr)
function go() {
    btn_Go.style.display='none'
    span_p1=document.getElementById('P1-disabled')
    span_p2=document.getElementById('P2-disabled')
    span_p1.textContent=player1.value
    span_p2.textContent=player2.value
    span_p1.style.display="block"
    span_p2.style.display="block"
    for(let i=0; i<boxes.length;i++){
        boxes[i].addEventListener('click',boxClicked)
    }
//     console.log(boxes)
//     console.log(player1.value)
//     console.log(player2.value)
// }
}
