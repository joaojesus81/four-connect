document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".grid");
  const width = 7;
  let squares = Array.from(document.querySelectorAll(".grid div"));
  const ScoreDisplay = document.querySelector("#score");
  const StartBtn = document.querySelector("#start-button");

  //player discs
  const redDisc = [0];
  const yellowDisc = [0];

  const discs = [redDisc, yellowDisc];

  let currentPosition = 3;

  //randomly select current
  let random = Math.floor(Math.random() * discs.length);
  let current = discs[0];

  function draw() {
    current.forEach((index) => {
      console.log(index);
      squares[currentPosition + index].classList.add("reddisc");
    });
  }

  function undraw() {
    current.forEach((index) => {
      squares[currentPosition + index].classList.remove("reddisc");
    });
  }

  timerId = setInterval(moveDown, 1000);

  function moveDown() {
    undraw();
    currentPosition += width;
    draw();
    freeze();
  }

  function freeze() {
    if (
      current.some((index) =>
        squares[currentPosition + index + width].classList.contains("taken")
      )
    ) {
      current.forEach((index) =>
        squares[currentPosition + index].classList.add("taken")
      );
      random = Math.floor(Math.random() * discs.length);
      current = discs[random];
      currentPosition = 3;
      draw();
    }
  }
});
