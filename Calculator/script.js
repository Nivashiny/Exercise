var output = document.getElementById("outputScreen");

function display(num){
    // if(num=== 'π'){
    //     output.value += 'π' ;
    // }
    // else{
    // output.value += num;
    // }
    output.value += num;
}

function Calculate(){
    try{
        output.value = eval(output.value);

    }
    catch(error){
        output.value='ERROR';
    }
}

function Clear(num){
    output.value = ' ';
}

function Del(num){
    output.value = output.value.slice(0,-1);
}


function calculateSqrt(){
    var output = document.getElementById('outputScreen');
    output.value=Math.sqrt(parseFloat(output.value));
}


function calculateTrig(func){
    var output = document.getElementById('outputScreen');
    const value=parseFloat(output.value);
    let result
    switch (func){
        case 'sin':
            result=Math.sin(value);
            break;
        case 'cos':
            result=Math.cos(value);
            break;
        case 'tan':
            result=Math.tan(value);
            break;
    }
    output.value=result;
}

function calculateLog(){
    var output = document.getElementById('outputScreen');
    output.value=Math.log10(parseFloat(output.value));
}

function calculateLn(){
    var output = document.getElementById('outputScreen');
    output.value=Math.log(parseFloat(output.value));
}

function calculatePower(){
    var output = document.getElementById('outputScreen');
    output.value=Math.pow(output.value,2);
}

// function displayPi(){
//     var output = document.getElementById('outputScreen');
//     output.value=output.value*3.14;
// }

function calculateFactorial(){
    var output = document.getElementById('outputScreen');
    var value=parseInt(output.value);
    if(value<0 || isNaN(value)){
        output.value='ERROR';
        return;
    }
    output.value=factorial(value);
}

function factorial(n){
    if(n===0 || n===1){
        return 1;
    }
    else{
        return n*factorial(n-1);
    }
}


// function parseExpression(expression){
//     expression = expression.replace(/'π'/g,'Math.PI');
//     return eval(expression);
// }


