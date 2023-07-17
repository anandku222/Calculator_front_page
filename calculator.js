const add = () =>{ 
    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;
    let sum = Number(a) +Number(b);
    document.getElementById("output1").innerHTML=sum;
}
const sub = () =>{ 
    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;
    let result = Number(a) - Number(b);
    document.getElementById("output1").innerHTML=result;
}
const mult = () =>{ 
    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;
    let multi = Number(a) *  Number(b);
    document.getElementById("output1").innerHTML=multi;

}
const divide= () =>{ 
    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;
    let divd = Number(a) /  Number(b);
    document.getElementById("output1").innerHTML=divd;

}
