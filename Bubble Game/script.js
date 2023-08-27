const bubbles = document.querySelector(".bubbles");
const times = document.querySelector(".timer span");
const score = document.querySelector(".score span");
const hit = document.querySelector(".hit span");

let time = 60;
let newScore = 0;
function makeBubble() {
let bubble = "";
for(let i = 1; i<103; i++){
    const random = Math.floor(Math.random()*10)
    bubble += `<div class="bubble">${random}</div>`;
    hit.innerText = random;
}
bubbles.innerHTML = bubble;
}

function scoreUpdate(){
    newScore = newScore + 10;
    score.innerText = newScore;
}
function checkBubble(){
    bubbles.addEventListener("click", function(e){
        let det = Number(e.target.innerText);
        if(Number(hit.innerText) === det){
            makeBubble();
scoreUpdate()

        }
    })
}

setInterval(function timer(){
    if(time > 0){
        time--;
        times.innerText = time;

    }else {
        document.querySelector(".detail").style.display = "none";
        bubbles.innerHTML = `<div class="end">
        <p>The End</p>
        <h3>Your Score: ${newScore}</h3>
        <button class="play-again">Play Again</button>
   </div>`;
   playAgain()
    }

}, 1000)

function playAgain(){
document.querySelector(".play-again").addEventListener("click", function(){
    location.reload();
})
}

makeBubble()
checkBubble()
