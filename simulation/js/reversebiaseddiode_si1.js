function checkreverse(){

    document.getElementById('frwdimage').src='./image/diodervrs.png';
    
    document.getElementById("dc").value = ""; //textbox
    document.getElementById("vdc").value = ""; //slidervalue
    document.getElementById("volt").value = ""; //diodevolt
    document.getElementById("amp").value = ""; //current
    //document.getElementById("res").value = "";//textbox
    //document.getElementById("res1").value = "";//slidervalue
   
    document.getElementById("volt").style.borderColor = "";
    document.getElementById("chartContainer").innerHTML = "";
    document.getElementById("demo").innerHTML = "";
   
document.getElementById("add").style.display = "none";
document.getElementById("plt").style.display = "none";
document.getElementById("addrvs").style.display = "block";
document.getElementById("pltrvs").style.display = "block";
document.getElementById("vdcrv").style.display = "block";
document.getElementById("vdc").style.display = "none";
document.getElementById("res1").style.display = "none";//slidervalue

    var rowCount = mytable.rows.length;
    for (var j = rowCount - 1; j > 0; j--) {
        mytable.deleteRow(j);
    }
    tabrowindex = 0;
    dataPoints = [];
    // window.location.reload();

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

}

function include(file) { 
  
  var script  = document.createElement('script'); 
  script.src  = file; 
  script.type = 'text/javascript'; 
  script.defer = true; 
  
  document.getElementsByTagName('head').item(0).appendChild(script); 
  
}
include('./js/jquery_files/js_metergaugefrd_si.js');
