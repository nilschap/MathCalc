// Converts from degrees to radians.
Math.radians = function(degrees) {
    return degrees * Math.PI / 180;
};

// Converts from radians to degrees.
Math.degrees = function(radians) {
    return radians * 180 / Math.PI;
};

// Get Inputs from drop Downs
function getvalue() {
    var e = document.getElementById("slt_side");
    var strUser = e.options[e.selectedIndex].value;
    return strUser;
}

// Get value from Input field
function getinp(){
    var x = document.getElementById("slt_side_input").value;
    return x;
}

//Combine Input with drop down decision
function combine(){
    var slt_dropdown=getvalue();
    var put=getinp();

    switch (slt_dropdown) {
        case "A":
        var side_A="A"+put;
        document.write(side_A);
        return  side_A;
            break;
        case "B":
            var side_B="B"+put;
            document.write(side_B);
            return side_B;
            break;
        case "C":
            var side_C="C"+put;
            document.write(side_C);
            return side_C;
            break;

        default :
            return "Error";
    }
}


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

    var solution = seitea*sinofb/sinofa;
    document.write("Solution"+solution.toFixed(2));

}

//Noch nicht fertig
function CalcSideC(seitb,winkelc,winkelb) {

    var sinofc=Math.sin(Math.radians(winkelc));
    document.write(sinofc.toFixed(2));

    var sinofb=Math.sin(Math.radians(winkelb));
    document.write(sinofb.toFixed(2));

    var solution=seitb*sinofc/sinofb;
    document.write("Solution"+solution.toFixed(2));
}


//Calc Angles
function CalcAngleA(seitb,winkelb,seita){
    var sinofb=Math.sin(Math.radians(winkelb));
    document.write("Sin of b"+sinofb.toFixed(2));

    var betweensolution=sinofb*seita/seitb;
    document.write("betweensolution"+betweensolution.toFixed(2));

    var solution=Math.degrees(Math.asin(betweensolution));
    document.write("Solution"+solution.toFixed(2));

}

function CalcAngleB(seita,winkela,seitb){
    var sinofa=Math.sin(Math.radians(winkela));
    document.write("Sin of b"+sinofa.toFixed(2));

    var betweensolution=sinofa*seitb/seita;
    document.write("betweensolution"+betweensolution.toFixed(2));

    var solution=Math.degrees(Math.asin(betweensolution));
    document.write("Solution"+solution.toFixed(2));
}



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////Cosinus///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Seite A berechnen
    function CosCalcSideA(sideb,sidec,anglea){

    var firstside=Math.pow(sideb,2)+Math.pow(sidec,2);
    document.write("First side"+firstside.toFixed(2));
    var secondside=2*sideb*sidec*Math.cos(Math.radians(anglea));
    document.write("Second side"+secondside.toFixed(2));

    var solution=Math.sqrt(firstside-secondside);
    document.write("solution"+solution.toFixed(2));
}

//Seite B berechnen
function CosCalcSideB(sidea,sidec,anglb){

    var firstside=Math.pow(sidea,2)+Math.pow(sidec,2);

    var secondside=2*sidea*sidec*Math.cos(Math.radians(anglb));

    var solution=Math.sqrt(firstside-secondside);
    document.write(solution);
}

//Seite C Berechnen
function CosCalcSideC(sidea,sideb,angley){

    var firstside=Math.pow(sidea,2)+Math.pow(sideb,2);

    var secondside=2*sidea*sideb*Math.cos(Math.radians(angley));

    var solution=Math.sqrt(firstside-secondside);
    document.write(solution);
}


//Winkel A Berechnen
function CosCalcAngleA(seitea,seiteb,seitec){

    var lower=-2*seiteb*seitec;
    document.write(lower+" l ");


    var uper=Math.pow(seitea,2)-Math.pow(seiteb,2)-Math.pow(seitec,2);
    document.write(uper+" u ");

    var solution=uper/lower;
    document.write(" s "+solution);

    var changed=Math.degrees(Math.acos(solution));
    document.write(" c "+changed);

    return changed;
}

//Winkel mit drei seiten Berechnen
function CosCalcAngleB(seitea,seitec,seiteb){
    //Erste Seite der Gleichung
    var lower=2*seitea*seitec;
    document.write(lower+" l ");

    //Zweite Seite der Gleichung
    var uper=Math.pow(seitea,2)+Math.pow(seitec,2)-Math.pow(seiteb,2);
    document.write(uper+" u ");

    //Cosinus wert
    var solution= uper/lower;
    document.write(solution+" s ");

    var changed=Math.degrees(Math.acos(solution));
    document.write(changed);

    return changed;
}

//Winkel C Berechnen
function CosCalcAngleC(seitec,seitea,seiteb){

    var angleb=CosCalcAngleB(seitea,seitec,seiteb);
    var anglea=CosCalcAngleA(seitea,seiteb,seitec);
    var angles=anglea+angleb;
    var missingangle=180-angles;

    document.write("Missing angle:"+missingangle);
}


function pythagoraskathete(sA,sC){
   var kathete= Math.sqrt(Math.pow(sC,2)-Math.pow(sA,2));
   document.write(kathete);
}

function pythagoraskathete(sB,sC){
    var kathete= Math.sqrt(Math.pow(sC,2)-Math.pow(sB,2));
    document.write(kathete);
}

function phytagorashypotenuse(sA,sB) {
    var hypotenuse = Math.sqrt(Math.pow(sA,2)+Math.pow(sB,2));
    document.write(hypotenuse);
}









