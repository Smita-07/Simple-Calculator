
// function cal(param) {


//     let a = document.getElementById("input1").value;
//     let b = document.getElementById("input2").value;
    
//     // if (param ==='Addition') {

//     //     document.getElementById("s1").innerHTML = `
//     // <h2>
//     // the sum of two number ${parseInt(a) + parseInt(b)}
//     // </h2>
//     // `
//     // }
//     // else if (param ==='Subtraction') {
//     //     document.getElementById("s1").innerHTML = `
//     // <h2>
//     // the sum of two number ${parseInt(a) - parseInt(b)}
//     // </h2>
//     // `
//     // }

//     // else if (param ==='Multiplication') {
//     //     document.getElementById("s1").innerHTML = `
//     // <h2>
//     // the sum of two number ${parseInt(a) * parseInt(b)}
//     // </h2>
//     // `
//     // }
//     // else (param ==='Division')
//     // {
//     //     document.getElementById("s1").innerHTML = `
//     // <h2>
//     // the sum of two number ${parseInt(a) / parseInt(b)}
//     // </h2>
//     // `
//     // }


// }

function additionBy()
{
        num1 = document.getElementById("input1").value;
        num2 = document.getElementById("input2").value;
        document.getElementById("s1").innerHTML = `The addition of numbers are ${parseInt(num1) + parseInt(num2)}`;
}

function subtractionBy()
{
        num1 = document.getElementById("input1").value;
        num2 = document.getElementById("input2").value;
        document.getElementById("s1").innerHTML = `The substraction of numbers are ${parseInt(num1) - parseInt(num2)}`;
}

function multiplyBy()
{
        num1 = document.getElementById("input1").value;
        num2 = document.getElementById("input2").value;
        document.getElementById("s1").innerHTML = `The multiplication of numbers are ${parseInt(num1) * parseInt(num2)}`;
}

function divisionBy()
{
        num1 = document.getElementById("input1").value;
        num2 = document.getElementById("input2").value;
        document.getElementById("s1").innerHTML = `The division of numbers are ${parseInt(num1) / parseInt(num2)}`;
}