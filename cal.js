let box = document.getElementById('inputbox');
let button = document.querySelectorAll('button');

let string = "";
let arr = Array.from(button); // button ka array banega
arr.forEach(button => {
    button.addEventListener('click',(e) => {
        if(e.target.innerHTML == '=') {
            string = eval(string);
            box.value = string;
        }
        else if(e.target.innerHTML == 'C') {
            string = "";
            box.value = string;

        }
        else 
        string+= e.target.innerHTML;
        box.value = string;

    })
})