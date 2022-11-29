//Document Name:js_metergaugefrd.js
//Created On:27-05-2016
//Author:Sukriti

//---------------------------------------------Metergauge1(Voltmeter)----------------------------------------------//
$(document).ready(function () {
    s1 = [0];
    plot3 = $.jqplot('chart1', [s1], {
        grid: {
            background: "transparent"
        },
        seriesDefaults: {
            renderer: $.jqplot.MeterGaugeRenderer,
            rendererOptions: {
                min: 0,
                max: 2,
                intervals: [0.5, 1, 1.5, 2],
                intervalColors: ['#66cc66', '#93b75f', '#E7E658', '#cc6666', '#579575']
            }
        }
    });
});

//---------------------------------------------Metergauge2(Ammeter)---------------------------------------------------//
$(document).ready(function () {
    s2 = [0];
    plot3 = $.jqplot('chart2', [s2], {
        grid: {
            background: "transparent"
        },
        seriesDefaults: {
            renderer: $.jqplot.MeterGaugeRenderer,
            rendererOptions: {
                min: 0,
                max: 30,
                intervals: [5, 15, 25, 30],
                intervalColors: ['#66cc66', '#cc6666', '#cc6666', '#E7E658']
            }
        }
    });
});
//is-saturation current 10^-12 Amp
//vd-diode voltage
//id-forward current

var r, rs, id, id1, vd, vr, rd;
var vt = 0.026, n =1, vdo = 0.7;
var isc = Math.pow(10, -12);//amp
var table, clmns, vlt;
//-------------------------------------------------- Simulation----------------------------------------------------------------//

function check() {
// vt = nkt/q where n=2
    r = document.getElementById("res").value; // in kOhm( 1Kohm)
    rs = r * 1000; // in ohm(rs=1000 ohm)
    vr = document.getElementById("dc").value; // in volt

    id = ((parseFloat(vr) - parseFloat(vdo)) / (parseInt(rs))) * Math.pow(10, 3);//in mamp diode current
    // document.getElementById("amp").value = id;//in mamp
    id1 = (parseFloat(vr) / (parseInt(rs)));// in amp

    var t = Math.log(id1 / isc);

    vd =n*vt * t;// in volt diode voltage
    // document.getElementById("volt").value = vd.toPrecision(3);
    if (vr < vdo) {
        document.getElementById("amp").value = 0;
        document.getElementById("volt").value = 0;
    }
    else {
        document.getElementById("amp").value = id.toPrecision(3);//in mamp
        document.getElementById("volt").value = vd.toPrecision(3);//in volt
    }

    rd = parseInt(vd) / parseInt(id);

//    if (vr == "") {
//        Alert.render("Enter the Input Voltage");
//        // document.getElementById("dltr").innerHTML="Enter the Input Voltage";
//        document.getElementById("add").style.display = "none";
//    }
//    
//    else if (r == "") {
//        Alert.render("Enter the Resistance Value");
//        // document.getElementById("dltr").innerHTML="Enter the Resistance Value";
//        document.getElementById("add").style.display = "none";
//    }
//    else if (r !=1) {
//        Alert.render("Set the Resistance Value to 1 Kohm");
//        // document.getElementById("dltr").innerHTML="Enter the Resistance Value";
//        document.getElementById("add").style.display = "none";
//    }
//
////    else {
////        document.getElementById("add").style.display = "block";
////    }

    s1[0] = parseFloat(document.getElementById('volt').value);
    plot3 = $.jqplot('chart1', [s1], {
        grid: {
            background: "transparent"
        },
        seriesDefaults: {
            renderer: $.jqplot.MeterGaugeRenderer,
            rendererOptions: {
                min: 0,
                max: 2,
                intervals: [0.5, 1, 1.5, 2],
                intervalColors: ['#66cc66', '#93b75f', '#E7E658', '#cc6666', '#579575']
            }
        }
    });

    s2[0] = parseFloat(document.getElementById('amp').value);
    plot3 = $.jqplot('chart2', [s2], {
        grid: {
            background: "transparent"
        },
        seriesDefaults: {
            renderer: $.jqplot.MeterGaugeRenderer,
            rendererOptions: {
               min: 0,
                max: 30,
                intervals: [5, 15, 25, 30],
                intervalColors: ['#66cc66', '#cc6666', '#cc6666', '#E7E658']
            }
        }
    });

    table = document.getElementById("mytable");

//    columns = table.rows[tabrowindex].cells[1];
//    rest = columns.innerHTML;

    clmns = table.rows[tabrowindex].cells[1];
    vlt = clmns.innerHTML;

    if (vlt == document.getElementById("volt").value) {
        // document.getElementById("add").style.display = "none";
        //Alert.render("Vary  DC voltage");
        document.getElementById("demo").innerHTML = "Vary  DC voltage";
        document.getElementById("volt").style.borderColor = "red";
        document.getElementById("dc").style.borderColor = "red";
    }

//    if (r == rest) {
//        document.getElementById("add").style.display = "none";
//        Alert.render("Vary the resistance value");
//        //document.getElementById("dltr").innerHTML="Same resistance value required for linear graph";
//    }

//    else {
//        document.getElementById("add").style.display = "block";
//
//    }
}
    