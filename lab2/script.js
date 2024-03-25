// файл script.js
window.onload = function(){ 

    let a = ''
    let b = ''
    let expressionResult = ''
    let selectedOperation = null
    
    // окно вывода результата
    outputElement = document.getElementById("result")
    outputExpression = document.getElementById("res")
    
    // список объектов кнопок циферблата (id которых начинается с btn_digit_)
    digitButtons = document.querySelectorAll('[id ^= "btn_digit_"]')
    
    function onDigitButtonClicked(digit) {
        if (!selectedOperation) {
            if ((digit != '.') || (digit == '.' && !a.includes(digit))) { 
                a += digit
            }
            outputElement.innerHTML = a
            outputExpression.innerHTML += digit
        } else {
            if ((digit != '.') || (digit == '.' && !b.includes(digit))) { 
                
                b += digit
                outputElement.innerHTML = b
                outputExpression.innerHTML += digit

            }
        }
    }
    
    // устанавка колбек-функций на кнопки циферблата по событию нажатия
    digitButtons.forEach(button => {
        button.onclick = function() {
            const digitValue = button.innerHTML
            onDigitButtonClicked(digitValue)
        }
    });
    
    // установка колбек-функций для кнопок операций
    document.getElementById("btn_op_mult").onclick = function() { 
        if (a === '') return
        selectedOperation = 'x'
        outputExpression.innerHTML += selectedOperation + ' '
    }
    document.getElementById("btn_op_plus").onclick = function() { 
        if (a === '') return
        selectedOperation = '+'
        outputExpression.innerHTML += selectedOperation + ' '
    }
    document.getElementById("btn_op_minus").onclick = function() { 
        if (a === '') return
        selectedOperation = '-'
        outputExpression.innerHTML += selectedOperation + ' '
    }
    document.getElementById("btn_op_div").onclick = function() { 
        if (a === '') return
        selectedOperation = '/'
        outputExpression.innerHTML += selectedOperation + ' '
    }
    
    // кнопка очищения
    document.getElementById("btn_op_clear").onclick = function() { 
        a = ''
        b = ''
        selectedOperation = ''
        expressionResult = ''
        outputElement.innerHTML = 0
        outputExpression.innerHTML = ''
    }
    
    // кнопка расчёта результата
    document.getElementById("btn_op_equal").onclick = function() { 
        if (a === '' || b === '' || !selectedOperation)
            return
            
        switch(selectedOperation) { 
            case 'x':
                expressionResult = (+a) * (+b)
                break;
            case '+':
                expressionResult = (+a) + (+b)
                break;
            case '-':
                expressionResult = (+a) - (+b)
                break;
            case '/':
                expressionResult = (+a) / (+b)
                break;
        }
        
        a = expressionResult.toString()
        b = ''
        selectedOperation = null
        outputElement.innerHTML = a
        outputExpression.innerHTML += '= ' + a + ' '
    }

    document.getElementById("btn_op_sign").onclick = function() { 
        a = -a
        outputElement.innerHTML = a
    }

    document.getElementById("btn_op_percent").onclick = function() { 
        outputElement.style.background = 'red'
    }

    };