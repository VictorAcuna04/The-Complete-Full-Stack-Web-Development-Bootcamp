let myCounter = document.getElementById("myCounter");
let resetBtn = document.getElementById("resetBtn");
let decreaseBtn = document.getElementById("decreaseBtn");
let increaseBtn = document.getElementById("increaseBtn");

let count = 0;

decreaseBtn.onclick = function () {
  count--;
  myCounter.textContent = count;
};

increaseBtn.onclick = function () {
  count++;
  myCounter.textContent = count;
};

resetBtn.onclick = function () {
  count = 0;
  myCounter.textContent = count;
};
