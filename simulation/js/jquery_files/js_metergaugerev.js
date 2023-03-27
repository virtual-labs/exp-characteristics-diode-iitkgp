/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//---------------------------------------------Metergauge1(Voltmeter)----------------------------------------------//
$(document).ready(function () {
    s1 = [0];
    plot3 = $.jqplot('chart3', [s1], {
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
    plot3 = $.jqplot('chart4', [s2], {
        grid: {
            background: "transparent"
        },
        seriesDefaults: {
            renderer: $.jqplot.MeterGaugeRenderer,
            rendererOptions: {
                min: 0,
                max: 8,
                intervals: [2,4,6,8],
                intervalColors: ['#66cc66', '#cc6666', '#cc6666', '#E7E658']
            }
        }
    });
});

var rs, rss, ids, ids1, vds, vrs, rds;
var cs = 0.026, iss = 0.000000000001;
var tables,clmnss,vlts;
//------------------------------------------------------------- Simulation------------------------------------------------------------------------------//

function checks() {

    rs = document.getElementById("ress").value;

    rss = rs * 1000;
    vrs = document.getElementById("dcs").value;

    ids1 = parseFloat(vrs) / parseInt(rs);
    
    document.getElementById("amps").value = ids1.toPrecision(3);

    ids = parseFloat(vrs) / parseInt(rss);
    
    var ts = Math.log(ids / iss);

                vds = cs * ts;

    document.getElementById("volts").value = vds.toPrecision(3);

    rds = parseInt(vds) / parseInt(ids);

    if (vrs == "") {
        Alert.render("Enter the input voltage");
        // document.getElementById("dltr").innerHTML="Enter the Input Voltage";
        document.getElementById("add").style.display = "none";
    }
    
    else if (rs == "") {
        Alert.render("Enter the Resistance Value");
        // document.getElementById("dltr").innerHTML="Enter the Resistance Value";
        document.getElementById("adds").style.display = "none";
    }
    else if (rs !=1) {
        Alert.render("Set the Resistance Value to 1 Kohm");
        // document.getElementById("dltr").innerHTML="Enter the Resistance Value";
        document.getElementById("adds").style.display = "none";
    }

    else {
        document.getElementById("adds").style.display = "block";
    }

    s1[0] = parseFloat(document.getElementById('volts').value);
    plot3 = $.jqplot('chart3', [s1], {
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

    s2[0] = parseFloat(document.getElementById('amps').value);
    plot3 = $.jqplot('chart4', [s2], {
        grid: {
            background: "transparent"
        },
        seriesDefaults: {
            renderer: $.jqplot.MeterGaugeRenderer,
            rendererOptions: {
                min: 0,
                max: 8,
                intervals: [2,4,6,8],
                intervalColors: ['#66cc66', '#cc6666', '#cc6666', '#E7E658']
            }
        }
    });

    tables = document.getElementById("mytables");

//    columns = table.rows[tabrowindex].cells[1];
//    rest = columns.innerHTML;

    clmnss = tables.rows[tabrowindexs].cells[1];
    vlts = clmnss.innerHTML;
    
    if (vlts == document.getElementById("volts").value) {
        document.getElementById("adds").style.display = "none";
        Alert.render("Vary  DC voltage");
       
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
    