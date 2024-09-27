function calcular(){
    var K = 9000000000
    var Q = parseFloat(document.getElementById('Q').value);
    var q = parseFloat(document.getElementById('q').value);
    var d = parseFloat(document.getElementById('d').value);

    var Força = (K * Q * q) / (d*d);

    document.getElementById('Força').innerText = Força;
}



