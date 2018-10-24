// Converts from degrees to radians.
Math.radians = function(degrees) {
    return degrees * Math.PI / 180;
};

// Converts from radians to degrees.
Math.degrees = function(radians) {
    return radians * 180 / Math.PI;
};

function CalcSideA(seiteb,winkela,winkelb){

    var sinofa=Math.sin(Math.radians(winkela));
    document.write("Sin of A"+sinofa.toFixed(2));

    var sinofb=Math.sin(Math.radians(winkelb));
    document.write("Sin of B"+sinofb.toFixed(2));

    var solution= seiteb*sinofa/sinofb;
    document.write("Solution"+solution);

}

function CalcSideB(seitea,winkelb,winkela){

    var sinofb=Math.sin(Math.radians(winkelb));
    document.write("Sin of b "+sinofb.toFixed(2));

    var sinofa=Math.sin(Math.radians(winkela));
    document.write("Sin of a "+sinofa.toFixed(2));

    var solution = seitea*sinofb/sinofa
    document.write("Solution"+solution.toFixed(2));

}

function CalcSideC