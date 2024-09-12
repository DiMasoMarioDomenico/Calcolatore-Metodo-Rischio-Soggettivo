function calcola() {
    var guadagni = parseFloat(document.getElementById("guadagni").value);
    var rinuncia = parseFloat(document.getElementById("rinuncia").value);
    var rischio = parseFloat(document.getElementById("rischio").value);

    if (isNaN(guadagni) || isNaN(rinuncia) || isNaN(rischio)) {
        alert("Per favore inserisci valori validi.");
        return;
    }

    var importoMax = (((guadagni * 0.2) + rinuncia) / 2) / 10;
    var spin = importoMax;
    var valoreSpin = importoMax / 3; // Assumendo che il valore dello spin sia 3 (da verificare)
    var fermati = importoMax * 1.2;

    document.getElementById("importoMax").innerHTML = "Importo Massimo da Investire nelle Slot: €" + importoMax.toFixed(2);
    document.getElementById("spin").innerHTML = "Spin: " + spin.toFixed(2);
    document.getElementById("valoreSpin").innerHTML = "Valore Spin: €" + valoreSpin.toFixed(2);
    document.getElementById("fermati").innerHTML = "Fermati appena superi: €" + fermati.toFixed(2);
    
    document.getElementById("result").style.display = "block";
}
