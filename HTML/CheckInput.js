function getfirstdropdownvalue() {
    var e = document.getElementById("slt_side");
    var strUser = e.options[e.selectedIndex].value;
    return strUser;
}

function getseconddropdownvalue() {
    var e = document.getElementById("slt_angle");
    var strUser = e.options[e.selectedIndex].value;
    return strUser;
}

function getthirddropdownvalue() {
    var e = document.getElementById("slt_angle_side");
    var strUser = e.options[e.selectedIndex].value;
    return strUser;
}

function getfirstinput(){
    var x = document.getElementById("slt_first_input").value;
    return x;
}

function getsecondinput(){
    var x = document.getElementById("slt_second_input").value;
    return x;
}

function getthirdinput(){
    var x = document.getElementById("slt_third_input").value;
    return x;
}




//Combine Input with drop down decision
function combine(wichone){
    docment.write(wichone)
    var slt_dropdown;
    var put;

    if(wichone===1) {
        slt_dropdown = getfirstdropdownvalue();
        put = getfirstinput();
    }else if(wichone===2){
        slt_dropdown = getseconddropdownvalue();
        put = getsecondinput();
    }else if(wichone===3){
        slt_dropdown = getthirddropdownvalue();
        put = getthirdinput();
    }


    switch (slt_dropdown) {
        case "s1":
            var side_A="A"+put;
            return  side_A;
            break;
        case "s2":
            var side_B="B"+put;
            document.write(side_B);
            return side_B;
            break;
        case "s3":
            var side_C="C"+put;
            document.write(side_C);
            return side_C;
            break;

        default :
            return "Error";
    }
}


function order() {
    var firstdropdownvalue=getfirstdropdownvalue();
    var seconddropdownvalue=getseconddropdownvalue();

    var wichone=0;

    var firstinputvalue = combine(wichone);
    var secondinputvalue= combine(2);

    document.write(firstinputvalue);
    document.write(secondinputvalue);

    if(firstdropdownvalue===("sa" || "sb" || "sc") && seconddropdownvalue===("sa" || "sb" || "sc")){
        document.write(firstinputvalue);
        if(firstinputvalue.charAt(0)==="sa"||"sb"&&secondinputvalue==="sa"||"sb"){
            pythagoraskathete(firstinputvalue,secondinputvalue);
        }
    }
}




