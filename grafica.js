let progressBar = document.querySelector(".circular-progress");
let valueContainer = document.querySelector(".value-container");

let progressValue = 0;
let progressEndValue = 100;
let speed = 50;

let progress = setInterval(() => {
  progressValue++;
  valueContainer.textContent = `${progressValue}%`;
  progressBar.style.background = `conic-gradient(
      #4d5bf9 ${progressValue * 3.6}deg,
      #cadcff ${progressValue * 3.6}deg
  )`;
  if (progressValue == progressEndValue) {
    clearInterval(progress);
  }
}, speed);


let progressBar2 = document.querySelector(".circular-progress2");
let valueContainer2 = document.querySelector(".value-container2");

let progressValue2 = 0;
let progressEndValue2 = 100;
let targetProgress2 = 19.6; // Целевият процент, на който искате да спрете
let speed2 = 50;

let progress2 = setInterval(() => {
  progressValue2++;
  valueContainer2.textContent = `${progressValue2}%`;
  progressBar2.style.background = `conic-gradient(
      #4d5bf9 ${progressValue2 * 3.6}deg,
      #cadcff ${progressValue2 * 3.6}deg
  )`;
  if (progressValue2 >= targetProgress2) { // Прекратяване на анимацията при достигане на целевия процент
    clearInterval(progress2);
  }
}, speed);



let progressBar3 = document.querySelector(".circular-progress3");
let valueContainer3 = document.querySelector(".value-container3");

let progressValue3 = 0;
let progressEndValue3 = 100;
let targetProgress3 = 29; // Целевият процент, на който искате да спрете
let speed3 = 50;

let progress3 = setInterval(() => {
  progressValue3++;
  valueContainer3.textContent = `${progressValue3}%`;
  progressBar3.style.background = `conic-gradient(
      #4d5bf9 ${progressValue3 * 3.6}deg,
      #cadcff ${progressValue3 * 3.6}deg
  )`;
  if (progressValue3 >= targetProgress3) { // Прекратяване на анимацията при достигане на целевия процент
    clearInterval(progress3);
  }
}, speed);
