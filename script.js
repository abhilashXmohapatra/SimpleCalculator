const buttons = document.querySelectorAll('button')
let input = document.querySelector('input')
let string = ''

buttons.forEach((items) => {
    items.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = String(eval(string))
            input.value = string
        }
        else if (e.target.innerHTML == 'AC') {
            string = ''
            input.value = '0'
        }
        else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1)
            input.value = string
            if (string == '') {
                input.value = '0'
            }
        }
        else if(e.target.innerHTML=='%'){

            input.value=String(eval(string*1/100))
        }
        else if(e.target.innerHTML=='+/-'){
            string=String(-eval(string))
            input.value=string
        }
        else if (e.target.innerHTML == '×') {
            string += '*'
            input.value = string
        }
        else if (e.target.innerHTML == '÷') {
            string += '/'
            input.value = string
        }
        else {
            string += e.target.innerHTML
            input.value = string
        }
    })
})