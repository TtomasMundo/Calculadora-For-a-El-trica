function calcular(){
    var K = 9000000000
    var Q = parseFloat(document.getElementById('Q').value);
    var q = parseFloat(document.getElementById('q').value);
    var d = parseFloat(document.getElementById('d').value);

    var Força = (K * Q * q) / (d*d);
   

    document.getElementById('Força').innerText = Força;
}

function calcular2(){
    var q2 = parseFloat(document.getElementById('q2').value);
    var v = parseFloat(document.getElementById('v').value);
    var B = parseFloat(document.getElementById('B').value);
    var sen = parseFloat(document.getElementById('sen').value);

    var ForçaM = (q2 * v * B  * sen);
   

    document.getElementById('ForçaM').innerText = ForçaM;

    }



