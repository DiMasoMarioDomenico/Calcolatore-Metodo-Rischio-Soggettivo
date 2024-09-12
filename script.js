function calcola() {
    var guadagni = parseFloat(document.getElementById("guadagni").value);
    var rinuncia = parseFloat(document.getElementById("rinuncia").value);
    var rischio = parseFloat(document.getElementById("rischio").value);
    var puntata = parseFloat(document.getElementById("puntata").value);
    var rimborso = parseFloat(document.getElementById("rimborso").value);
    var puntataProgressiva = parseFloat(document.getElementById("puntataProgressiva").value);
    var rimborsoProgressivo = parseFloat(document.getElementById("rimborsoProgressivo").value);

    if (isNaN(guadagni) || isNaN(rinuncia) || isNaN(rischio) || isNaN(puntata) || isNaN(rimborso) || isNaN(puntataProgressiva) || isNaN(rimborsoProgressivo)) {
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

    var spinAgg1 = puntataProgressiva / 20;
    var spinAgg2 = puntataProgressiva / 10;
    var spinAgg3 = puntataProgressiva / 4;

    var spinMod1 = puntataProgressiva / 40;
    var spinMod2 = puntataProgressiva / 20;
    var spinMod3 = puntataProgressiva / 10;
    var spinMod4 = puntataProgressiva / 5;

    var spinMM1 = puntataProgressiva / 40;
    var spinMM2 = puntataProgressiva / 20;
    var spinMM3 = puntataProgressiva / 8;

    document.getElementById("spinAggressiva").innerHTML = 
        `n.4 spin da €2,00 = €${spinAgg1.toFixed(2)}<br>
         n.3 spin da €4,00 = €${spinAgg2.toFixed(2)}<br>
         n.2 spin da €10,00 = €${spinAgg3.toFixed(2)}<br>
         Totale = €40,00`;

    document.getElementById("spinModerata").innerHTML = 
        `n.8 spin da €1,00 = €${spinMod1.toFixed(2)}<br>
         n.6 spin da €2,00 = €${spinMod2.toFixed(2)}<br>
         n.3 spin da €4,00 = €${spinMod3.toFixed(2)}<br>
         n.2 spin da €8,00

