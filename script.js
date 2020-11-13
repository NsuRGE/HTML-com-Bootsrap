var valores = "";
function addVal(x) {
    valores += x;
    document.getElementById("resultados").value = valores;
}

function addOperation(op) {
    valores += op;
    if (op != 'C') {
        document.getElementById("resultados").value = valores;
    }
    else if (op == 'C') {
        valores = ("");
        document.getElementById("resultados").value = ("");
    }
}

function calculate() {
    valores = eval(valores);
    document.getElementById("resultados").value = valores;
}