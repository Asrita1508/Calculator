let string = "";
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {

        let value = e.target.innerHTML;

        if (value == '=') {
            string = eval(string).toString();
            document.querySelector('input').value = string;
        }

        else if (value == 'C') {
            string = "";
            document.querySelector('input').value = "";
        }

        else if (value == 'DEL') {
            string = string.slice(0, -1);
            document.querySelector('input').value = string;
        }

        else {
            string += value;
            document.querySelector('input').value = string;
        }

    });
});