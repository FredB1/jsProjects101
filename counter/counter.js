const counter = document.getElementById('count');
let count = 0;
counter.innerText = count;
function decrease() {
    count--;
counter.innerText = count;
}
function increase() {
    count++;
counter.innerText = count;
}