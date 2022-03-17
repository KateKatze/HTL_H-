// 1.Umfang und Flächeninhalt eines Rechtecks Schreibe ein Programm, das Umfang und Flächeninhalt eines Rechtecks berechnet.Eingaben:Länge und Breite.Ausgaben:Umfang und Flächeninhalt.

function Rechteck(width, height) {
    Flächeninhalt = width * height;
    Umfang = 2 * width + 2 * height;
    return ("1. <br> Flächeninhalt ist: " + Flächeninhalt + "<br>" + "Umfang ist: " + Umfang + "<br>")
}

document.write(Rechteck(2, 7));

// 2.Umrechnung von Grad Fahrenheit in Grad Celsius Schreibe ein Programm, das eine Temperatur von Grad Fahrenheit in Grad Celsius umrechnet. Formel: TC = (TF -32) * (5/9) Eingaben:Temperatur in Fahrenheit. Ausgaben:Temperatur in Grad Celsius.

function Temperatur(TF) {
    TC = (TF - 32) * (5 / 9);
    return ("2. <br> Temperatur in Fahrenheit: " + TF + "<br>" + "Temperatur in Grad Celsius: " + TC + "<br>");
}

document.write(Temperatur(32));

// 3.Ziffernsumme einer Dreistelligen Zahl Schreibe ein Programm, das von einer eingegebenen, dreistelligen positiven Ganzzahl die Ziffernsumme berechnet. (Tipp: x%10 liefert die letzte Ziffer der Zahl x, x/10 entfernt die letzte Ziffer der Zahl x.) Beispiel: Die Ziffernsumme von 495 ist 4+9+5 (ergibt 18)Eingaben:Dreistellige ganze Zahl.Ausgaben:Ziffernsumme

function Ziffernsumme(zahl) {
    a = zahl % 10;
    // 5
    zahl = parseInt(zahl / 10);

    console.log(zahl);

    b = zahl % 10;
    // 9

    zahl = parseInt(zahl / 10);
    // 4

    summe = zahl + b + a;
    return ("3. <br> Ziffernsumme: " + summe);
}

document.write(Ziffernsumme(495));


// 4.Durchschnittlicher Treibstoffverbrauch eines PKW Schreibe ein Programm, das den durchschnittlichen Treibstoffverbrauch eines PKW berechnet. Annahme: Der Autofahrer startet eine Fahrt mit vollem Tank und tankt am Ende der Fahrt wieder voll. Eingaben:Anfangskilometerstand, Endkilometerstand, wie viele Liter Treibstoff wurden getankt. Ausgabe:Durchschnittlicher Verbrauch (Liter pro 100 km).

function Treibstoffverbrauch(Anfangskilometerstand, Endkilometerstand, Liter) {
    a = Endkilometerstand - Anfangskilometerstand;
    b = Liter * 100;
    ausgabe = Math.round(b / a);
    return ("<br> 4. <br> Durchschnittlicher Verbrauch (Liter pro 100 km) = " + ausgabe);
}

document.write(Treibstoffverbrauch(1, 310, 120));

// 5.Sekunden in Tage/Stunden/Minuten/Sekunden umrechnen Schreibe ein Programm, das eine eingegebene Anzahl an Sekundenin Tage/Stunden/Minuten/Sekunden umrechnet.Eingaben:Sekunden Ausgaben:Tage/Stunden/Minuten/Sekunden

function timeConv(sec) {
    day = Math.floor(sec / (3600 * 24));
    hour = Math.floor(sec % (3600 * 24) / 3600);
    min = Math.floor(sec % 3600 / 60);
    rest = Math.floor(sec % 60);
    return ("<br> 5. <br>" + sec + " Sekunden" + " sind " + day + " Tage " + hour + " Stunden " + min + " Minuten " + rest + " Sekunden ");
}

document.write(timeConv(32500));

/* 6. Flaschen befüllen 
Erstelle ein Programm, das für einen Weinbauern die Anzahl der benötigten Abfüllflaschen berechnet. 
Eingaben: Radius und Höhe der Flasche (Einheit: cm) (Annahme: Flaschen haben Zylinderform), Gewicht der geernteten Trauben (Tonnen) und die Anzahl der Liter die aus einer Tonne Trauben gewonnen werden.
Ausgaben: Liter, die in eine Flasche passen und die Menge an Flaschen, die man benötigt.
Hinweis: Wenn du für die Volumenberechnung einer Flasche als Einheit Dezimeter verwendest dann erhältst du als Ergebnis dm3 (= Liter) */

function flaschen(radius, hoehe, liter) {
    vol = Math.trunc(3, 14 * Math.pow(radius, 2) * hoehe / 4);
    flasche = Math.trunc(liter / vol);
    return ("<br> 6. <br>" + vol + " Liter passen in eine Flasche " + " und man braucht " + flasche + " Flaschen");
}

document.write(flaschen(2, 15, 770));

/* 7. Berechnungen im Dreieck – Pythagoras
Schreibe ein Programm, das die Hypotenuse eines rechtwinkeligen Dreiecks berechnet. 
Formel: a2+b2=c2.
Eingaben:a und b.
Ausgaben:c */

function dreieck(a, b) {
    z = Math.pow(a, 2) + Math.pow(b, 2);
    c = Math.sqrt(z, 2).toFixed(2);
    return ("<br> 6. <br>" + "Die Hypotenuse = " + c);
}

document.write(dreieck(4, 5));

// 8. Berechnung des Ostersonntags

function Ostersonntag(jahreszahl) {
    a = jahreszahl % 19;
    b = jahreszahl / 100;
    c = jahreszahl % 100;
    d = b / 4;
    e = b % 4;
    f = (b + 8) / 25;
    g = (b - f + 1) / 3;
    h = (19 * a + b - d - g + 15) % 30;
    i = c / 4;
    k = c % 4;
    l = (32 + 2 * e + 2 * i - h - k) % 7;
    m = (a + 11 * h + 22 * l) / 451;
    n = Math.trunc((h + l - 7 * m + 114) / 31);
    p = (h + l - 7 * m + 114) % 31;
    os = Math.trunc(p + 1);

    switch (n) {
        case 3:
            z = 'März';
            break;
        case 4:
            z = 'April';
            break;
        case 5:
            z = 'Mai';
            break;
        default:
            break;
    }

    return ("<br> 8. <br> Der Ostersonntag im Jahr " + jahreszahl + " fällt auf den " + os + ". " + z + ".");
}

document.write(Ostersonntag(2015));