let saveNumber,operatorPressed, lowerNumber;
const numberButton = document.querySelectorAll('[data-number]');
const operators = document.querySelectorAll('[data-operator]');
const currentNumber = document.getElementById('currentNumber');
const reset = document.getElementById('reset');
const currentNumberUpper = document.getElementById('currentNumberUpper');
const equalButton = document.getElementById('equal');
const decimal = document.getElementById('decimal');
const deleteButton = document.getElementById('deleteButton');



reset.addEventListener('click', resetGrid)
equalButton.addEventListener('click',equalButtonClick)
decimal.addEventListener('click',decimalAppend)
deleteButton.addEventListener('click',deleteNumber)
window.addEventListener('keydown', handleKeyboardInput);

function deleteNumber(){
    currentNumber.textContent = currentNumber.textContent
    .toString()
    .slice(0, -1)
}

function decimalAppend(){

    if(currentNumber.innerHTML.includes('.')){

    } else{
        currentNumber.textContent = currentNumber.textContent + '.'
    }

}
function resetGrid(){
    currentNumber.textContent = '0';
    currentNumberUpper.textContent = '0';
    currentNumberUpper.style.color ='#f1faee'
}


numberButton.forEach((button) =>
  button.addEventListener('click', () => appendNumber(button.textContent))
)


operators.forEach((button) =>
  button.addEventListener('click', () => appendOperator(button.textContent))
)


function appendOperator(operator){
    let length = currentNumber.textContent.length +1;

    saveNumber = currentNumber.textContent
    console.log(saveNumber)
    operatorPressed = operator
    currentNumberUpper.style.color ='black'
    if (length<= 20 || saveNumber!=='0'){
        currentNumberUpper.textContent = currentNumber.textContent + ' ' + operator

        currentNumber.textContent = ''

    } else{
        // continue;
    }
}

function appendNumber(num){
    if (currentNumber.textContent === '0'){
        currentNumber.textContent = ''
    }
    let length = currentNumber.textContent.length +1;


    if (length<= 20){
        currentNumber.textContent = currentNumber.textContent + num

    } else{
        // continue;
    }
}


function equalButtonClick(){
    if ((currentNumber.textContent === '') && operatorPressed !=='!'){
        alert('You have to put another number!')
    }

    

    lowerNumber = parseFloat(currentNumber.textContent)
    saveNumber = parseFloat(saveNumber)



    if (operatorPressed === '+'){
        currentNumberUpper.textContent = saveNumber + ' ' + operatorPressed + ' ' + lowerNumber
        add(saveNumber,lowerNumber)
    } else if (operatorPressed === '-') {
        subtract(saveNumber,lowerNumber)
        currentNumberUpper.textContent = saveNumber + ' ' + operatorPressed + ' ' + lowerNumber
    } else if (operatorPressed === '×') {
        multiply(saveNumber,lowerNumber)
        currentNumberUpper.textContent = saveNumber + ' ' + operatorPressed + ' ' + lowerNumber
    } else if (operatorPressed === '÷') {
        divide(saveNumber,lowerNumber)
        currentNumberUpper.textContent = saveNumber + ' ' + operatorPressed + ' ' + lowerNumber
    } else if (operatorPressed === '^') {
        power(saveNumber,lowerNumber)
        currentNumberUpper.textContent = saveNumber + ' ' + operatorPressed + ' ' + lowerNumber
    } else if (operatorPressed === '!') {
        factorial(saveNumber)
        currentNumberUpper.textContent = saveNumber + ' ' + operatorPressed
    }
}

const add = function(num1, num2) {
    let addTotal = num1 + num2;
    // addTotal = addTotal.toFixed(2)

    console.log(addTotal)
    currentNumber.textContent = addTotal
    return addTotal
	
};

const subtract = function(num1,num2) {
    let subtractTotal = num1 - num2;
    // subtractTotal = subtractTotal.toFixed(2)
    console.log(subtractTotal)
    currentNumber.textContent = subtractTotal
    return subtractTotal
};


// const sum = function(numbers) {
//     let length = numbers.length;
//     let total = 0;

//     for (i=0;i<length; i++){
//         total = numbers[i] + total
//     }
	
//     return total
// };

const multiply = function(num1, num2) {
    // parseInt(num2)
    let ans = num2*num1;
    
    console.log(ans)
    let length = currentNumber.textContent.length +1;
    // ans = ans.toFixed(20-length)


    if (ans===Infinity){
        currentNumber.textContent = 'Not Possible'
    } else{
        currentNumber.textContent = ans
    }

    return ans
};

function divide (num1, num2) {
    // parseInt(num2)

    let ans = num1/num2;
    console.log(ans)
    // ans = ans.toFixed(20-length)
    if (ans===Infinity){
        currentNumber.textContent = 'Not Possible'
    } else{
        currentNumber.textContent = ans
    }

    return ans
	
};


const power = function(num, pow) {
    let ans = Math.pow(num, pow)
    if (ans===Infinity){
        currentNumber.textContent = 'Not Possible'
    } else{
        currentNumber.textContent = ans
    }
    return ans
	
};

const factorial = function(limit) {

    if (limit%1===0){
        let total = 1;
        for (i = 1; i <= limit; i++) {
            total =  total * i;
        }
        
        
        if (total===Infinity){
            currentNumber.textContent = 'Not Possible'
        } else{
            currentNumber.textContent = total
        }
        return total
    } else{
        currentNumber.textContent = 'Not Possible'
    }
};


function handleKeyboardInput(e) {
    if (e.key >= 0 && e.key <= 9) appendNumber(e.key)
    if (e.key === '.') decimalAppend()
    if (e.key === '=' || e.key === 'Enter') equalButtonClick()
    console.log(e.key)
    if (e.key === 'Backspace'){
        deleteNumber()
    }
    // if (e.key === 'Escape') clear()
    if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/')
      appendOperator(convertOperator(e.key))
  }

  function convertOperator(keyboardOperator) {
    if (keyboardOperator === '/') return '÷'
    if (keyboardOperator === '*') return '×'
    if (keyboardOperator === '-') return '-'
    if (keyboardOperator === '+') return '+'
  }

  
function operate(operator, num1, num2){

    if (operator==='+'){
        add(num1,num2)
    } else if (operator==='-'){
        subtract(num1,num2)
    } else if (operator==='*' || operator==='x'){
        multiply(num1,num2)
    } else if (operator==='/'){
        divide(num1,num2)
    }   
    
}


window.onload = () => {
    currentNumber.textContent = 0
}


operate('-',1,2)