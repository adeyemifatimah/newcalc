
function add(number1, number2) {
    return (number1 + number2);


}

function subtraction(number1, number2) {
    return (number1 - number2);


}

function division(number1, number2) {
    return (number1 / number2);


}

function multiplication(number1, number2) {
    return (number1 * number2);


}

function modulo(number1, number2) {
    return (number1 % number2);


}






$(document).ready(function () {
    $("#calculator").submit(function (event) {
        event.preventDefault()


        const number1 = parseInt($("input#number1").val());
        const number2 = parseInt($("input#number2").val());



        const operator = $("input:radio[name=operator]:checked").val();
let result;


        if (operator === addition) {

            let result = add(number1, number2);
        }


        else if (operator === subtraction) {

            let result = subtract(number1, number2);
        }

        else if (operator ===division) {

            let result = divide(number1, number2);

        }




        else if (operator === multiplication) {

            let result = multiply(number1, number2);

        }



        else if (operator === modulo) {

            let result = modulo(number1, number2);

        }

      return  $("#output").text(result);




    });
});
