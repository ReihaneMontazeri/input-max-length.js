let input = document.querySelector('input');
let counter = document.querySelector('.counter')
let counterValue = input.getAttribute('maxlength')

input.addEventListener('keydown', function(){  
    counter.innerHTML = counterValue-input.value.length
})
