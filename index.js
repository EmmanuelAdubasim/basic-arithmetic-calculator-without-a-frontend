let num1 = prompt("input first number> ");
let num2 = prompt("input second number> ");
let operator = prompt("select: + or - or * or /");

    if (operator == "+"){
        result =  num1 - (-num2);
        console.log (result)
    }
    else if (operator == "*"){
        result = num1 * num2;
        console.log(result)
    }
    else if (operator == "-"){
        result = num1 - num2;
        console.log(result)
    }
    else if (operator == "/"){
        result = num1 / num2;
        console.log(result)
    }
    else{
        console.log("Not a valid operator")
    }
    

