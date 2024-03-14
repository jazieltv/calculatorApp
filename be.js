function addition(){

    const x = document.getElementById("firstInt");
    const xvalue = parseInt(x.value);

    const z = document.getElementById("secondInt");
    const zvalue = parseInt(z.value);


    document.getElementById("output").innerHTML = (xvalue + zvalue);
}


function multiplication(){

    const x = document.getElementById("firstInt");
    const xvalue = parseInt(x.value);

    const z = document.getElementById("secondInt");
    const zvalue = parseInt(z.value);


    document.getElementById("output").innerHTML = (xvalue * zvalue) ;
}

function division(){

    const x = document.getElementById("firstInt");
    const xvalue = parseInt(x.value);

    const z = document.getElementById("secondInt");
    const zvalue = parseInt(z.value);


    document.getElementById("output").innerHTML = (xvalue / zvalue) ;
}

function subtraction(){

    const x = document.getElementById("firstInt");
    const xvalue = parseInt(x.value);

    const z = document.getElementById("secondInt");
    const zvalue = parseInt(z.value);


    document.getElementById("output").innerHTML = (xvalue - zvalue) ;
}

