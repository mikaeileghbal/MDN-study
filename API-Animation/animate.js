document.getElementById("cube").animate(
  [
    {
      transform: "translateY(0px)",
    },
    {
      transform: "translateY(-300px)",
    },
  ],
  {
    duration: 1000,
    iterations: Infinity,
  }
);

document
  .getElementById("cube1")
  .animate([{ transform: "rotate(360deg)" }], 1000);

// seperating arguments
let cubeRoate = [
  { transform: "rotate(0deg)", opacity: 0 },
  {
    transform: "rotate(180deg)",
    opacity: 1,
  },
];

let cubeTiming = {
  duration: 1000,
  iterations: Infinity,
};

document.getElementById("cube2").animate(cubeRoate, cubeTiming);
