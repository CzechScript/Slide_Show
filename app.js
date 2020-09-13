const firstclone = document.querySelector("#margintarget");
const radios = document.getElementsByName("r");
const bars = document.querySelectorAll(".bar");
const navigation = document.querySelector(".navigation");
const prevBtn = document.querySelector("#prevbtn");
const nextBtn = document.querySelector("#nextbtn");

let counter = 1;
let lenght = -10;
bars[counter - 1].style.background = "white";

nextBtn.addEventListener("click", moveRight);
prevBtn.addEventListener("click", moveLeft);
navigation.addEventListener("click", barClick);

function moveRight() {
    counter++;
    if (counter > 8) {
        counter = 1;
        barUpdate();
        firstclone.style.marginLeft = `${lenght * counter}%`;
    }
    barUpdate();
    firstclone.style.marginLeft = `${lenght * counter}%`;
    console.log(counter);
}
function moveLeft() {
    counter--;
    if (counter < 1) {
        counter = 8;
        barUpdate();
        firstclone.style.marginLeft = `${lenght * counter}%`;
    }
    barUpdate();
    firstclone.style.marginLeft = `${lenght * counter}%`;
    console.log(counter);
}
function barUpdate() {
    var i = 0;
    while (i < 8) {
        bars[i].style.background = "none";
        i++;
    }
    bars[counter - 1].style.background = "white";
}
function barClick(e) {
    const item = e.target.innerHTML;
    counter = item;
    barUpdate();
    firstclone.style.marginLeft = `${lenght * counter}%`;
}