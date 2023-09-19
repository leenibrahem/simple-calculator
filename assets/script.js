const firstNumber=document.querySelector('.firstnumber');
const secondNumber=document.querySelector('.secondnumber');
const operator=document.querySelector('.operator');
const submit=document.querySelector('.submit');
const result=document.querySelector('.result');



let firstNumberValue;
let secondNumberValue;
let operatorValue;

firstNumber.addEventListener('input',function(event){
    firstNumberValue=event.target.value;
})
secondNumber.addEventListener('input',function(event){
    secondNumberValue=event.target.value;
    console.log(secondNumberValue);
})
operator.addEventListener('change',function(event){
    operatorValue=event.target.value;
    console.log(operatorValue);
})
submit.addEventListener('click',function(event){
  event.preventDefault();
  switch (operatorValue) {
    case '+':
        result.innerHTML = parseInt(firstNumberValue) + parseInt(secondNumberValue);
        break;
        case '-':
            result.innerHTML = firstNumberValue - secondNumberValue;
            break;
            case '*':
                result.innerHTML = firstNumberValue * secondNumberValue;
                break;
                case '/':
                    result.innerHTML = firstNumberValue / secondNumberValue;
                    break;
  
    default:
        break;
  }
   
})
