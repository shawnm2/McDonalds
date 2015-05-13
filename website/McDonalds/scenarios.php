<html>
  <head>
  	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>McScenarios</title>
    <script type="text/javascript" src="https://www.google.com/jsapi"></script>
    <link href="chart.css" rel="stylesheet" type="text/css" />
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script>window.jQuery || document.write('<script src="js/vendor/jquery-1.8.3.min.js"><\/script>')</script>
<script src="js/plugins.js"></script>
<script src="js/main.js"></script>
    <script type="text/javascript">
      google.load('visualization', '1.1', {'packages': ['bar']});
google.setOnLoadCallback(drawStuff);

function drawStuff() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Choose a Scenario');
    data.addColumn('number', 'Sales');
    data.addColumn('number', 'Incremental');
	data.addColumn('number', 'Loss', 'purple');
    data.addColumn('number', 'Payroll');
    data.addColumn('number', 'Other Expenses');
	data.addColumn('number', 'Taxes');
	data.addColumn('number', 'Income');
	
	//data.addColumn({type: 'string', role: 'style' });
    var data_2014 = ['2014', 18169.30, 0, 0, 4756, 10532, 922.02,1959.28];
	//data.addRows([data_2014]);
	var scenario = [' ', 0, 0, 0, 0, 0, 0,0];
	data.addRows([data_2014,scenario]);
	//data.addRows([
    //    ['2014', 18169.30, 0, 0, 4756, 10532, 922.02,1959.28]
    //]);

    // Set chart options
    var options = {
        isStacked: true,
        width: 800,
        height: 600,
		animation: {duration: 2000,
		easing: 'in',
		startup: true,
		},
		
		
        chart: {
            title: 'Revenue, Expenses and Profits Comparison',
            //subtitle: '2014 vs Various Scenarios'
        },
        vAxis: {
            viewWindow: {
                min: -500,
                max: 25000
            }
        },
        series: {
            3: {
                targetAxisIndex: 1
            },
            4: {
                targetAxisIndex: 1
            },
			5: {
                targetAxisIndex: 1
            },
			6: {
                targetAxisIndex: 1
            }
			
        }
		
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.charts.Bar(document.getElementById('content'));
	var button1 = document.getElementById('s1');
	var button2 = document.getElementById('s2');
	var button3 = document.getElementById('s3');
	var button4 = document.getElementById('s4');
	var button4a = document.getElementById('s4a');
	var button5 = document.getElementById('s5');
	var button6 = document.getElementById('s6');
	
	function drawChart() {
      // Disabling the button while the chart is drawing.
      		button1.disabled = true;
			button2.disabled = true;
			button3.disabled = true;
			button4.disabled = true;
			button4a.disabled = true;
			button5.disabled = true;
			button6.disabled = true;
			
      google.visualization.events.addListener(chart, 'ready',
          function() {
            button1.disabled = false;
			button2.disabled = false;
			button3.disabled = false;
			button4.disabled = false;
			button4a.disabled = false;
			button5.disabled = false;
			button6.disabled = false;
			
            //button1.value = 'Scenario1';
          });
      //options['title'] = 'Monthly ' + (current ? 'Coffee' : 'Tea') + ' Production by Country';

      //chart.draw(data[current], options);
	  chart.draw(data, google.charts.Bar.convertOptions(options));
    }
	drawChart();

    button1.onclick = function() {
      //current = 1 - current;
	  //var scenario = ['Scenario1', 18169.30, 0, 0, 4735.71, 10532, 928.51,1973.08];
	  //data.removeRow(1);
	  $('#sidebar1').load("html/sc1_text.html"); 
	  data.setValue(1,0,'Scenario 1');
	  data.setValue(1,1,18169.30);
	  data.setValue(1,2,0);
	  data.setValue(1,3,0);
	  data.setValue(1,4,4735.71);
	  data.setValue(1,5,10532);
	  data.setValue(1,6,928.51);
	  data.setValue(1,7,1973.08);
	  
	  
      drawChart();
    }
	
	button2.onclick = function() {
      //current = 1 - current;
	  $('#sidebar1').load("html/sc2_text.html");
	  var scenario = ['Scenario 2', 18169.30, 0, 0, 4756, 10532, 922.02, 1959.28];
	  data.removeRow(1);
	  data.addRows([scenario]);
      drawChart();
    }
	button3.onclick = function() {
      //current = 1 - current;
	  $('#sidebar1').load("html/sc3_text.html");
	  var scenario = ['Scenario 3', 18169.30, 0, 0, 7637.3, 10532, 0,0];
	  data.removeRow(1);
	  data.addRows([scenario]);
      drawChart();
	  
    }
	button4.onclick = function() {
      //current = 1 - current;
	  $('#sidebar1').load("html/sc4_text.html");
	  var scenario = ['Scenario 4', 18169.30, 0, -374.41, 8011.71, 10532, 0, 0];
	  data.removeRow(1);
	  data.addRows([scenario]);
      drawChart();
    }
	button4a.onclick = function() {
      //current = 1 - current;
	  $('#sidebar1').load("html/sc4a_text.html");
	  var scenario = ['Scenario 4a', 18169.30, 374.41, 0, 8011.71, 10532, 0, 0];
	  data.removeRow(1);
	  data.addRows([scenario]);
      drawChart();
    }
	button5.onclick = function() {
      //current = 1 - current;
	  $('#sidebar1').load("html/sc5_text.html");
	  var scenario = ['Scenario 5', 18169.30, 3255.71, 0, 8011.71, 10532, 922.02,1959.28];
	  data.removeRow(1);
	  data.addRows([scenario]);
      drawChart();
    }
	button6.onclick = function() {
      //current = 1 - current;
	  $('#sidebar1').load("html/sc6_text.html");
	  var scenario = ['Scenario 6', 18169.30, 3866.32, 0, 8011.71, 10532, 1117.40,2374.50];
	  data.removeRow(1);
	  data.addRows([scenario]);
      drawChart();
    }
	
	var scenario6text = ("testing variable loading");
	
	
    //chart.draw(data, google.charts.Bar.convertOptions(options));
};
    </script>
    
   <script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-62931013-1', 'auto');
  ga('send', 'pageview');

</script> 
  </head>
  <body>
  	<div class="container">
    <br><a href="index.php">Return to Main</a>
    &nbsp; &nbsp; &nbsp;
    <a href="scenarios.php">Reload</a>
    &nbsp; &nbsp; &nbsp;
    <a href="summary.html">Go to Summary</a>
  <div class="sidebar1" id ="sidebar1" height="600">
  	<h3>Introduction</h3>
  	<p> The 2014 company owned revenue and expense numbers are presented on the chart to the left. </p>
    <p> Overall profits were approx. 10.78% for the company owned portion of the business. </p>
    <p> Click any of the scenario buttons to compare: </p>
    <p> Scenario 1: Eliminate executive compensation </p>
    <p> Scenario 2: Redistribute executive compensation to the employees</p>
    <p> Scenario 3: Distribute all profits to the employees </p>
	<p> Scenario 4: Raise salaries by $6/hour to get to  approx. $15 </p>  
    <p> Scenario 5: Maintain same absolute profit level with $6/hour raise</p>
    <p> Scenario 6: Maintain same profit level percentage with $6/hour raise</p>    
    
    
    <p>&nbsp;</p>
<!-- end .sidebar1 --></div>
    <br><br>
    <div id="content">
    </div><!-- end content div - chart will populate here-->
    <div id="buttons"> 
    <input id="s1" type="button" class="button" value="Scenario1" style="margin-left:125px;">
    <input id="s2" type="button" class="button" value="Scenario2">
    <input id="s3" type="button" class="button" value="Scenario3">
    <input id="s4" type="button" class="button" value="Scenario4">
    <input id="s4a" type="button" class="button" value="Scenario4a">
    <input id="s5" type="button" class="button" value="Scenario5">
    <input id="s6" type="button" class="button" value="Scenario6">
    </div>
    </div>
  </body>

  
</html>