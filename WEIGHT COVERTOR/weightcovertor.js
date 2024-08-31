document.querySelector('.input').addEventListener('keyup',function(){
    let input = parseFloat(document.querySelector('.input').value);
    let inputt = document.querySelector('.input');

    inputt.style.backgroundColor = 'red';
    let con = parseFloat(input*1000);
    let result = document.querySelector('.result');
    result.style.backgroundColor = 'green';


result.textContent = con;
})