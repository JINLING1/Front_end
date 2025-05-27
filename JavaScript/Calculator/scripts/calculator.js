// 加载本地信息
let calculation = localStorage.getItem("calculation") || "";
const display = document.querySelector(".js-calculation");
function displayCalculation() {
  display.textContent = calculation;
}
function updateCalculation(value) {
  const lastChar = calculation.slice(-1);
  // 检查是否为运算符
  const isOperator = /[+\-*/]/.test(value);
  const wasLastOperator = /[+\-*/]/.test(lastChar);

  // 如果当前是运算符且上一个也是运算符，替换最后一个运算符
  if (isOperator && wasLastOperator) {
    calculation = calculation.slice(0, -1) + value;
  } else {
    calculation += value;
  }
  displayCalculation();
  localStorage.setItem("calculation", calculation);
}

function clearCalculation() {
  calculation = "";
  displayCalculation();
  localStorage.removeItem("calculation");
}
function getResult() {
  try {
    // calculation = eval(calculation);
    calculation = Function('"use strict";return (' + calculation + ")")().toString();
    //相当于
    /*
    function func(){
    "use strict";   //启用严格模式，防止变量提升
    return (calculation);
    }
    func().toString();
     */
    displayCalculation();
    localStorage.setItem("calculation", calculation);
  } catch {
    display.textContent = "Error";
  }
}
document.querySelector(".calculator").addEventListener("click", (e) => {
  const value = e.target.dataset.value;
  if (value !== undefined) {
    updateCalculation(value);
  } else if (e.target.id === "clear") {
    clearCalculation();
  } else if (e.target.id === "equals") {
    getResult();
  }
});
displayCalculation();
