function append(Val){
    document.getElementById("expression").value += Val;
}

function calculateResult (){
    const sum=document.getElementById("expression").value;

    try {
        const result = eval(sum);
        document.getElementById("expression").value = result;
    } catch (error) {
        document.getElementById("expression").value = "Error";
    }
}

function clearExpression() {
    document.getElementById("expression").value = "";
}