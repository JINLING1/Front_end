// 加载本地信息
let calculation = localStorage.getItem('calculation') || '';
displayCalculation();
function updateCalculation(value){
    calculation += value;
    displayCalculation();
    localStorage.setItem('calculation', calculation);
}
function displayCalculation(){
    document.querySelector('.js-calculation').innerHTML = calculation;
}
function clearCalculation(){
    calculation = '';
    displayCalculation();
    localStorage.removeItem('calculation');
}
function getResult(){
        calculation = eval(calculation);
        displayCalculation();
        localStorage.setItem('calculation', calculation);
}
