const main = document.querySelector(".main");
const one = main.querySelector(".one");
const two = main.querySelector(".two");
const three = main.querySelector(".three");
const four = main.querySelector(".four");
const five = main.querySelector(".five");
const six = main.querySelector(".six");
const seven = main.querySelector(".seven");
const eight = main.querySelector(".eight");
const nine = main.querySelector(".nine");
const zero = main.querySelector(".zero");
const add = main.querySelector(".add");
const minus = main.querySelector(".minus");
const mul = main.querySelector(".mul");
const div = main.querySelector(".div");
const equal = main.querySelector(".equal");
const del = main.querySelector(".del");
const output = main.querySelector(".output");

const LS_OUTPUT = "output";
let equalClicked = false;

function addOutput(text) {
  const prevOutput = localStorage.getItem(LS_OUTPUT);
  let newOutput;
  prevOutput === null ? (newOutput = text) : (newOutput = prevOutput + text);
  localStorage.setItem(LS_OUTPUT, newOutput);
  output.innerText = newOutput;
}

function handleNumberClick(e) {
  if (equalClicked) {
    localStorage.setItem(LS_OUTPUT, "");
    equalClicked = false;
  }
  addOutput(e.target.innerText);
}

function handleMath(e) {
  if (equalClicked) {
    equalClicked = false;
  }
  addOutput(e.target.innerText);
}

function handleDel(e) {
  localStorage.setItem(LS_OUTPUT, "");
  output.innerText = "";
}

function handleEqual(e) {
  const curOutput = localStorage.getItem(LS_OUTPUT);
  const result = eval(curOutput);
  localStorage.setItem(LS_OUTPUT, String(result));
  output.innerText = result;
  equalClicked = true;
}

function loadOutput() {
  const curOutput = localStorage.getItem(LS_OUTPUT);
  if (curOutput !== null && curOutput !== "") {
    output.innerText = curOutput;
  }
}

function init() {
  loadOutput();
  one.addEventListener("click", handleNumberClick);
  two.addEventListener("click", handleNumberClick);
  three.addEventListener("click", handleNumberClick);
  four.addEventListener("click", handleNumberClick);
  five.addEventListener("click", handleNumberClick);
  six.addEventListener("click", handleNumberClick);
  seven.addEventListener("click", handleNumberClick);
  eight.addEventListener("click", handleNumberClick);
  nine.addEventListener("click", handleNumberClick);
  zero.addEventListener("click", handleNumberClick);
  add.addEventListener("click", handleMath);
  minus.addEventListener("click", handleMath);
  mul.addEventListener("click", handleMath);
  div.addEventListener("click", handleMath);
  del.addEventListener("click", handleDel);
  equal.addEventListener("click", handleEqual);
}

init();