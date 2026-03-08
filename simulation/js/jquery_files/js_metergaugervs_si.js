


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
                max: 16,
                intervals: [4, 8, 12, 16],
                intervalColors: ['#66cc66', '#cc6666', '#cc6666', '#E7E658']
            }
        }
    });
});

var r, rs, ir, ir1, ir2, ir3,ir4,vd, vr, rd;
var vt = 0.026, n = 1, vdo = 0.7,isc = Math.pow(10, -12);//amp
var table, clmns, vlt;
var res_fd;

//-------------------------------------------------- Simulation----------------------------------------------------------------//
function setdiode(){ 
 diodetype = document.getElementById("diode_type");
 diodereversevalue = diodetype.options[diodetype.selectedIndex].value;
 document.getElementById("diodevalue").value=diodereversevalue;
 }
function check() {

    vr = document.getElementById("dc").value;//volt //input voltage
    r = document.getElementById("res").value; // in Ohm
    rs = r; // in ohm(rs=1000 ohm)
    rd=0.3;
 ir = ((parseFloat(vr) ) / ((parseInt(rs))+parseFloat(rd))) * Math.pow(10, 2);
   //in mamp diode current
    
    ir1 = (parseFloat(vr) / (parseInt(rs)));
// in amp
//ir=isc*Math.exp(parseFloat(vr)/vt);
    var ir1_is = Math.log(ir1 / isc);

    vrd =vr*n*vt * ir1_is;// in volt diode voltage
    // document.getElementById("volt").value = vd.toPrecision(3);
    if (vr < 5) {
        document.getElementById("amp").value = 0;
        document.getElementById("volt").value = vrd.toPrecision(3);
    }
   else if (5<=vr < parseFloat(diodereversevalue)) {
        document.getElementById("amp").value = ir.toPrecision(3);
        document.getElementById("volt").value = vrd.toPrecision(3);
    }
    else {
        document.getElementById("amp").value = ir.toPrecision(3);//in mamp
        document.getElementById("volt").value = vrd.toPrecision(3);//in volt
    }

    rd = parseInt(vd) / parseInt(ir);
 
    
    


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
                max: 16,
                intervals: [4, 8, 12, 16],
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
        //document.getElementById("add").style.display = "none";
        //Alert.render("Vary  DC voltage");
        document.getElementById("demo").innerHTML = "Vary  DC voltage";
        document.getElementById("volt").style.borderColor = "red";
        document.getElementById("dc").style.borderColor = "red";
    }


}
    
