function calcola() {
    var guadagni = parseFloat(document.getElementById("guadagni").value);
    var rinuncia = parseFloat(document.getElementById("rinuncia").value);
    var rischio = parseFloat(document.getElementById("rischio").value);
    var puntata = parseFloat(document.getElementById("puntata").value);
    var rimborso = parseFloat(document.getElementById("rimborso").value);

    if (isNaN(guadagni) || isNaN(rinuncia) || isNaN(rischio) || isNaN(puntata) || isNaN(rimborso)) {
        alert("Per favore inserisci valori validi.");
        return;
    }

    var importoMax = (((guadagni * 0.2) + rinuncia) / 2) / 10;
    var spin = importoMax;
    var valoreSpin = 3;  
    var fermati = importoMax * 1.2;

    document.getElementById("importoMax").innerHTML = "Importo Massimo da Investire nelle Slot: €" + importoMax.toFixed(2);
    document.getElementById("spin").innerHTML = "Spin: " + spin.toFixed(2);
    document.getElementById("valoreSpin").innerHTML = "Valore Spin: €" + valoreSpin.toFixed(2);
    document.getElementById("fermati").innerHTML = "Fermati appena superi: €" + fermati.toFixed(2);

    var spinSlot = puntata / rimborso;
    var valoreSpinSlot = puntata / spinSlot;

    document.getElementById("spinSlot").innerHTML = "Spin: " + spinSlot.toFixed(2);
    document.getElementById("valoreSpinSlot").innerHTML = "Valore Spin: €" + valoreSpinSlot.toFixed(2);

    document.getElementById("result").style.display = "block";
    document.getElementById("resultSlotRTP").style.display = "block";
}
