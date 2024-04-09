const p1button = document.querySelector("#p1button");
const p2button = document.querySelector("#p2button");
const p1display = document.querySelector("#p1display");
const p2display = document.querySelector("#p2display");
const resetbutton = document.querySelector("#resetbutton");
let p1score = 0;
let p2score = 0;
let winnerScore = 5;
let isgameover = false;
p1button.addEventListener("click", function () {
    if (!isgameover) {
        p1score += 1;
        if (p1score === winnerScore) {
            isgameover = true;
            p1display.classList.add('winner');
            p2display.classList.add('looser');

        }
        p1display.innerText = p1score;
    }
});

p2button.addEventListener("click", function () {
    if (!isgameover) {
        p2score += 1;
        if (p2score === winnerScore) {
            isgameover = true;
            p2display.classList.add('winner');
            p1display.classList.add('looser');
        }
        p2display.innerText = p2score;
    }
});
selectscore.addEventListener("change", function () {
    winnerScore = parseInt(this.value);
    reset();
})
resetbutton.addEventListener("click", reset);
function reset() {
    isgameover = false;
    p1score = 0;
    p2score = 0;
    p1display.textContent = 0;
    p2display.textContent = 0;
    p1display.classList.remove('winner', 'looser');
    p2display.classList.remove('winner', 'looser');
}  