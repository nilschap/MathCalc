// Converts from degrees to radians.
Math.radians = function(degrees) {
    return degrees * Math.PI / 180;
};

// Converts from radians to degrees.
Math.degrees = function(radians) {
    return radians * 180 / Math.PI;
};

//Test combine
function test(){
    var test=combine();
}

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





