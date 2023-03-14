let display1El = document.querySelector(".display-1");
let display2El = document.querySelector(".display-2");
const tempresultEl = document.querySelector(".tempresult");
const numbersEl = document.querySelectorAll(".number");
const operatorEl = document.querySelectorAll(".operation");
const clearAllEntity = document.querySelector(".clearall");
const deletebtn = document.querySelector(".deletebtn");
const timeshundredbtn = document.querySelector(".timeshundred");
const equalel = document.querySelector(".equals");

let dis1Num = "";
let dis2Num = "";
let result = null;
let lastOperation = "";
let haveDot = false;

numbersEl.forEach((number) => {
    number.addEventListener("click", (e) => {
        if (e.target.innerText === "." && !haveDot) {
            haveDot = true;
        }
        else if (e.target.innerText === "." && haveDot) {
            return;
        }
        dis2Num += e.target.innerText;
        display2El = dis2Num;
    })
})


operatorEl.forEach((operation) => {
    operation.addEventListener('click', (e) => {
        if (!dis2Num) return;
        haveDot = false;
        const OperationName = e.target.innerText;
        if (dis1Num && dis2Num && lastOperation) {
            mathOperation()
        }
        else {
            result = parseFloat(dis2Num);
        }
        clearVar(operationName);
        lastOperation = OperationName;
        console.log(result);
    })
})

function clearVar(name = "") {
    dis1Num += dis2Num + " " + name + " ";
    display1El.innerText = dis1Num;
    display2el.innerText = "";
    dis2Num = "";
    tempresultEl.innerText = result;
}

function mathOperation() {
    if (lastOperation === "*") {
        result = parseFloat(result) * parseFloat(dis2Num);
    }
    else if (lastOperation === "+") {
        result = parseFloat(result) + parseFloat(dis2Num);
    }
    else if (lastOperation === "/") {
        result = parseFloat(result) + parseFloat(dis2Num);
    }
    else if (lastOperation === "-") {
        result = parseFlaot(result) - parseFloat(dis2Num);
    }
    else if (lastOperaation === "%") {
        result = parseFloat(result) % parseFloat(dis2Num);
    }
}

equalel.addEventListener("click", () => {
    if (!dis2Num || !dis1Num) return;
    haveDot = false;
    mathOperation();
    clearVar();
    display2El.innerText = result;
    tempresultEl.innerText = "";
    dis2Num = result;
    dis1Num = "";
})

clearAllEntity.addEventListener("click", () => {
    dis1Num = "";
    dis2NUm = "";
    display1El.innerText = "";
    display2El.innerText = "";
    result = "";
    tempresultEl.innerText = "";
})

deletebtn.addEventListener("click", () => {
    display2El.innerText = "";
    dis2Num = "";
})

//for using keyboard 

window.addEventListener("keydown", (e) => {
    if (
        e.key === "0" ||
        e.key === "1" ||
        e.key === "2" ||
        e.key === "3" ||
        e.key === "4" ||
        e.key === "5" ||
        e.key === "6" ||
        e.key === "7" ||
        e.key === "8" ||
        e.key === "9" ||
        e.key === "."
    ) {
        clickButtonEl(e.key);
    } else if (e.key === "+" || e.key === "-" || e.key === "/" || e.key === "%") {
        clickOperation(e.key);
    } else if (e.key === "*") {
        clickOperation("*")
    } else if (e.key == "Enter" || e.key === "=") {
        clickEqual()
    }
})

function clickButtonEl(key) {
    numbersEl.forEach((button) => {
        if (button.innerText === key) {
            button.click();
        }
    })
}

function clickOperation(key) {
    operationEl.forEach((operation) => {
        if (operatorEl.innerText === key) {
            operation.click();
        }
    })
}

function clickEqual() {
    equalel.click();
}