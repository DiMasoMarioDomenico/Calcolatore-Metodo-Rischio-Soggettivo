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

    // Calcolo Rischio Soggettivo
    var importoMax = (((guadagni * 0.2) + rinuncia) / 2) / 10;
    var spin = rischio;
    var valoreSpin = importoMax / rischio;  
    var fermati = importoMax * 1.2;

    document.getElementById("importoMax").innerHTML = "Importo Massimo da Investire nelle Slot: €" + importoMax.toFixed(2);
    document.getElementById("spin").innerHTML = "Spin: " + spin.toFixed(2);
    document.getElementById("valoreSpin").innerHTML = "Valore Spin: €" + valoreSpin.toFixed(2);
    document.getElementById("fermati").innerHTML = "Fermati appena superi: €" + fermati.toFixed(2);

    // Metodo Slot RTP a Puntata Progressiva
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

    // Calcolo dei totali per le sequenze di spin
    var totaleAggressiva = (4 * spinAgg1) + (3 * spinAgg2) + (2 * spinAgg3);
    var totaleModerata = (8 * spinMod1) + (6 * spinMod2) + (3 * spinMod3) + (1 * spinMod4);
    var totaleMoltoModerata = (5 * spinMM1) + (5 * spinMM2) + (5 * spinMM3);

    document.getElementById("spinAggressiva").innerHTML = 
        `n.4 spin da  = €${spinAgg1.toFixed(2)}<br>
         n.3 spin da  = €${spinAgg2.toFixed(2)}<br>
         n.2 spin da  = €${spinAgg3.toFixed(2)}<br>
         Totale = €${totaleAggressiva.toFixed(2)}`;

    document.getElementById("spinModerata").innerHTML = 
        `n.8 spin da  = €${spinMod1.toFixed(2)}<br>
         n.6 spin da  = €${spinMod2.toFixed(2)}<br>
         n.3 spin da  = €${spinMod3.toFixed(2)}<br>
         n.1 spin da  = €${spinMod4.toFixed(2)}<br>
         Totale = €${totaleModerata.toFixed(2)}`;

    document.getElementById("spinMoltoModerata").innerHTML = 
        `n.5 spin da  = €${spinMM1.toFixed(2)}<br>
         n.5 spin da  = €${spinMM2.toFixed(2)}<br>
         n.5 spin da  = €${spinMM3.toFixed(2)}<br>
         Totale = €${totaleMoltoModerata.toFixed(2)}`;

    document.getElementById("result").style.display = "block";
    document.getElementById("resultSlotRTP").style.display = "block";
    document.getElementById("resultSlotRTPProgressiva").style.display = "block";
}
