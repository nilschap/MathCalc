function getfirstdropdownvalue() {
    var e = document.getElementById("slt_side");
    var strUser = e.options[e.selectedIndex].value;
    return strUser;
}

function getseconddropdownvalue() {
    var e = document.getElementById("slt_side");
    var strUser = e.options[e.selectedIndex].value;
    return strUser;
}

function getthirddropdownvalue() {
    var e = document.getElementById("slt_side");
    var strUser = e.options[e.selectedIndex].value;
    return strUser;
}




if(getfirstdropdownvalue().localeCompare("s1"||"s2"||"s3")&&getseconddropdownvalue().localeCompare("s1"||"s2"||"s3")){
    //Pythagoras
}else if(getseconddropdownvalue().localeCompare("s1"||"s2"||"s3")&&getthirddropdownvalue().localeCompare("s1"||"s2"||"s3")){
    //Pythagoras
}else if(getfirstdropdownvalue().localeCompare("s1"||"s2"||"s3")&&getthirddropdownvalue().localeCompare("s1"||"s2"||"s3")&&getseconddropdownvalue("s1"||"s2"||"s3")){
    //Wan muss welche Funktion verwenden
    //Cosinus Satzt winkel berechnung
}

if(getfirstdropdownvalue().localeCompare("w1","w2","w3")&&getseconddropdownvalue().localeCompare("w1"+"w2"+"w3")){
    //Wann welche Funktion verwenden
    //Letzten Wicklen mit summe von beiden Winkeln berechnen
    //Und fehlende Seiten berechnen
}else if(getseconddropdownvalue().localeCompare("w1","w2","w3")&&getthirddropdownvalue().localeCompare("w1"+"w2"+"w3")){
    //Wann welche Funktion verwenden
    //Letzte Wickel mit summe von beiden Winkeln berechnen
    //Und fehlende Seiten Berchnen
}





