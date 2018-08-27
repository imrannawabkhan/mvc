<?php 
	include_once("file:///D|/desktop bk/BK/Survay/x/conn.php"); 
	include_once("file:///D|/desktop bk/BK/Survay/x/function.php"); 	
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Masafi Survey</title>
    
    <!-- Favicons-->
    <link rel="shortcut icon" href="file:///D|/desktop bk/BK/Survay/x/img/favicon.ico" type="image/x-icon"/>
    <link rel="apple-touch-icon" type="image/x-icon" href="file:///D|/desktop bk/BK/Survay/x/resources/img/apple-touch-icon-57x57-precomposed.png">
    <link rel="apple-touch-icon" type="image/x-icon" sizes="72x72" href="file:///D|/desktop bk/BK/Survay/x/resources/img/apple-touch-icon-72x72-precomposed.png">
    <link rel="apple-touch-icon" type="image/x-icon" sizes="114x114" href="file:///D|/desktop bk/BK/Survay/x/resources/img/apple-touch-icon-114x114-precomposed.png">
    <link rel="apple-touch-icon" type="image/x-icon" sizes="144x144" href="file:///D|/desktop bk/BK/Survay/x/resources/img/apple-touch-icon-144x144-precomposed.png">

    <!-- CSS -->
    <link href="file:///D|/desktop bk/BK/Survay/x/resources/css/bootstrap.min.css" rel="stylesheet">
    <link href="file:///D|/desktop bk/BK/Survay/x/resources/css/style.css" rel="stylesheet">
    <link href="file:///D|/desktop bk/BK/Survay/x/resources/css/fontello.css" rel="stylesheet">
	<link rel="resources/stylesheet" href="file:///D|/desktop bk/BK/Survay/x/css/jquery.switch.css">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="http://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="http://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
	<!-- JQUERY UI-->
	<link rel="stylesheet" type="text/css" href="file:///D|/desktop bk/BK/Survay/x/resources/js/jquery-ui-1.10.3.custom/css/custom-theme/jquery-ui-1.10.3.custom.min.css" />
	<!-- BOOTSTRAP SWITCH -->
	<link rel="stylesheet" type="text/css" href="file:///D|/desktop bk/BK/Survay/x/resources/js/bootstrap-switch/bootstrap-switch.min.css" />
	<!-- DATA TABLES -->
	<link rel="stylesheet" type="text/css" href="file:///D|/desktop bk/BK/Survay/x/resources/js/datatables/media/css/jquery.dataTables.min.css" />
	<link rel="stylesheet" type="text/css" href="file:///D|/desktop bk/BK/Survay/x/resources/js/datatables/media/assets/css/datatables.min.css" />
	<link rel="stylesheet" type="text/css" href="file:///D|/desktop bk/BK/Survay/x/resources/js/datatables/extras/TableTools/media/css/TableTools.min.css" />
	<link rel="stylesheet" type="text/css" href="file:///D|/desktop bk/BK/Survay/x/resources/js/datatables/Col/dataTables.colVis.css"/>
</head>
<body style="background:url(file:///D|/desktop%20bk/BK/Survay/x/resources/img/main-bg.jpg) fixed;">

<!-- Preloader -->
<div id="preloader">
	<div id="status"><img src="file:///D|/desktop bk/BK/Survay/x/resources/img/logo_preload.png" alt="" data-retina="true" width="121" height="22"></div>
</div>
<!--  end Preloader -->
  
<div class="stretchMe">
<div id="wrapper">
	<header>
	<div class="container-fluid">
		<div class="row">
			<div class="col-md-4 col-xs-3" id="logo">
				<!--<a href="index.html"><img src="resources/img/logo.png" alt="Logo" width="132" height="21" data-retina="true"></a>-->
			</div>
			<div class="btn-responsive-menu">
				<span class="bar"></span><span class="bar"></span><span class="bar"></span>
			</div>
		</div><!-- End row -->
	</div><!-- End container -->
	</header><!-- End header -->
        
			<div class="col-md-12 main-title">
				<h1>We appreciate <span>your rate</span></h1>
				<p>
					Help us to improve our service and for better satisfaction.
				</p>
			</div>
            
			<section class="container">
			<!-- Start Review container -->
			<div id="review_container">
				<div id="top-wizard">
					 <strong>Survey Analytics | <a href="file:///D|/desktop bk/BK/Survay/x/admin.php">View All</a></strong>
					<div class="shadow"></div>
				</div><!-- end top-wizard -->
                <div class="row">
        		<div class="col-md-12" style="text-align:center;">                                
				<div style="width:90%; margin:20px auto;">
                <?php if (empty($_GET['details']) && empty($_GET['u']) ) {?>
                <div id="report" style="height: 400px;"></div>
                <div style="clear:both"></div>
                <?php } ?>
								<div class="col-md-8" style="margin:0 10% auto;">
                                <?php 
								$qus	= _questions(NULL,2);
								$cstar = $_GET['star'];
								
									echo   "<div class=\"a_rating_wp clearfix\">\n";
									echo 		"<label class=\"a_rating_type\">Survey Result by Rating</label>\n";
									echo 		"<span class=\"a_rating\">\n";
									echo 		"<label for=\"rating-input-1-5\" class=\"";
									echo			($cstar > 4 || empty($cstar)) ? "v_rating-star" : "a_rating-star";
									echo 		"\" onclick=\"_open('1','5');\"></label>\n";
									echo 		"<label for=\"rating-input-1-4\" class=\"";
									echo			($cstar > 3 || empty($cstar)) ? "v_rating-star" : "a_rating-star";
									echo 		"\" onclick=\"_open('1','4');\"></label>\n";
									echo 		"<label for=\"rating-input-1-3\" class=\"";
									echo			($cstar > 2 || empty($cstar)) ? "v_rating-star" : "a_rating-star";
									echo 		"\" onclick=\"_open('1','3');\"></label>\n";
									echo 		"<label for=\"rating-input-1-2\" class=\"";
									echo			($cstar > 1 || empty($cstar)) ? "v_rating-star" : "a_rating-star";
									echo 		"\" onclick=\"_open('1','2');\"></label>\n";
									echo 		"<label for=\"rating-input-1-1\" class=\"";
									echo			($cstar >= 1 || empty($cstar)) ? "v_rating-star" : "a_rating-star";
									echo 		"\" onclick=\"_open('1','1');\"></label>\n";
									echo   "</span>\n";
									echo   "</div>\n";
									
								
								?>
                                </div>
                 <div style="clear:both"></div>
                <?php if ($_GET['details'] == 1) { 
				
								switch ($_GET['star']) {
									case 1 :
										$star = "Very dissatisfied";
										$color = "#c80909";
									break;
									case 2 :
										$star = "Somewhat dissatisfied";
										$color = "#e54600";
									break;
									case 3 :
										$star = "Somewhat satisfied";
										$color = "#f38f00";
									break;
									case 4 :
										$star = "satisfied";
										$color = "#00a8ff";
									break;
									case 5 :
										$star = "Very satisfied";
										$color = "#88cd2a";
									break;
									default :
										$star = "Very satisfied";
										$color = "#88cd2a";
									break;
								}
								
				for ($k = 0; $k < $qus; $k++) {
					$i = ($k < 1) ? 1 : $k + 1;
					echo "<div style=\"cursor:pointer; cursor:hand\" onClick=\"_open('".'qus'.$i."','".$cstar."');\" class=\"skillbar clearfix\" data-percent=\""._total('qus'.$i,$star,1)."%\">\n";
                    echo "<div class=\"skillbar-title\" style=\"background:".$color.";\"><span>"._questions($k,1)."</span></div>\n";
                    echo "<div class=\"skillbar-bar\" style=\"background:".$color.";\"></div>\n";
                    echo "<div class=\"skill-bar-percent\">"._total('qus'.$i,$star,2)."/"._total_users()." ("._total('qus'.$i,$star,1)."%)</div>\n";
                	echo "</div>\n";
				}
				?>
                </div>
                <?php } else { ?>                

							<table <?php echo (empty($_GET['u'])) ? 'id="datatable"': NULL ?> cellpadding="0" cellspacing="0" border="0" class="datatable table table-striped table-bordered table-hover" width="90%">
										 <thead>
											<tr>
                                               <th> ID</th>
											   <th> Question</th>
											   <th> System</th>
                                               <th> IP</th>
											   <th> Rate</th>
                                               <th> Date</th>
											</tr>
										 </thead>
										 <tbody>
                                         <?php echo _display($_GET['details'],$_GET['star'],$_GET['u']);?>
                                         </tbody>
                                         <div style="clear:both"></div>
                  <?php } ?> 
                      <div style="float:right; margin:20px 20px 20px 0;">Powered by Masafi IT Team</div>                      
                </div>
                </div>
			</div><!-- end Review container -->            
	</section><!-- end section main container -->
    </div><!-- End wrapper -->
</div><!-- End background image -->

<!--<footer class="no_margin_top"></footer><!-- End footer -->

    <!-- Scroll to top -->     
	<div id="toTop"><i class="icon-up-open"></i></div>      
    
    <!-- Jquery -->
    <script src="file:///D|/desktop bk/BK/Survay/x/resources/js/jquery-1.10.2.min.js"></script>
    <script src="file:///D|/desktop bk/BK/Survay/x/resources/js/jquery-ui-1.8.22.min.js"></script>
    <script src="file:///D|/desktop bk/BK/Survay/x/resources/js/jquery.anystretch.min.js"></script>
        
    <!-- OTHER JS --> 
    <script src="file:///D|/desktop bk/BK/Survay/x/resources/js/jquery.wizard.js"></script>
    <script src="file:///D|/desktop bk/BK/Survay/x/resources/js/jquery.validate.js"></script>
    <script src="file:///D|/desktop bk/BK/Survay/x/resources/js/jquery.placeholder.js"></script>
    <script src="file:///D|/desktop bk/BK/Survay/x/resources/js/jquery.tweet.min.js"></script>
	<script src="file:///D|/desktop bk/BK/Survay/x/resources/js/jquery.bxslider.min.js"></script>
    <script src="file:///D|/desktop bk/BK/Survay/x/resources/js/bootstrap.min.js"></script>
    <script src="file:///D|/desktop bk/BK/Survay/x/resources/js/retina-replace.min.js"></script>
    <script src="file:///D|/desktop bk/BK/Survay/x/resources/js/functions.js"></script>
	<script src="file:///D|/desktop bk/BK/Survay/x/resources/js/jquery-ui-1.10.3.custom/js/jquery-ui-1.10.3.custom.min.js"></script>
	<!-- BOOTSTRAP -->
	<script src="file:///D|/desktop bk/BK/Survay/x/resources/js/bootstrap-dist/js/bootstrap.min.js"></script>	
	<!-- DATA TABLES -->
	<script type="text/javascript" language="javascript" src="file:///D|/desktop bk/BK/Survay/x/resources/js/datatables/media/js/jquery.dataTables.js"></script>
	<script type="text/javascript" src="file:///D|/desktop bk/BK/Survay/x/resources/js/datatables/media/assets/js/datatables.min.js"></script>
	<script type="text/javascript" src="file:///D|/desktop bk/BK/Survay/x/resources/js/datatables/extras/TableTools/media/js/TableTools.min.js"></script>
	<script type="text/javascript" src="file:///D|/desktop bk/BK/Survay/x/resources/js/datatables/extras/TableTools/media/js/ZeroClipboard.min.js"></script>
	<script type="text/javascript" src="file:///D|/desktop bk/BK/Survay/x/resources/js/datatables/Col/dataTables.colVis.js"></script>
    <script type="text/javascript">
	$("#datatable").dataTable({
		sPaginationType:"bs_full",
		sDom:"<'row'<'dataTables_header clearfix'<'col-md-2'l><'col-md-8'f><'col-md-2 manage'>r>>t<'row'<'dataTables_footer clearfix'<'col-md-6'i><'col-md-6'p>>>"
	});
	
	jQuery('.skillbar').each(function(){
	jQuery(this).find('.skillbar-bar').animate({
		width:jQuery(this).attr('data-percent')
	},2000);
});

	function _open(x,y){
		window.location.href = "admin.php?details="+ x +"&star="+ y;
	}

    </script>
    <script type="text/javascript" src="https://www.google.com/jsapi"></script>
    <script type="text/javascript">
      google.load("visualization", "1", {packages:["corechart"]});
      google.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
		  <?php 
		  
		  $qsl = explode(":","Very dissatisfied:Somewhat dissatisfied:Somewhat satisfied:Satisfied:Very satisfied");
		  $rows = array();

				for ($a = 0; $a < count($qsl); $a++) {
					$rows[] =  "['".$qsl[$a]."',"._totalpie($qsl[$a])."]";
				}
				
				echo implode(",",$rows);
		  ?>
        ]);

        var options = {
          title: 'Overall Report',
          pieStartAngle: 135,
          slices: {
					0:{color: '#c80909'},
					1:{color: '#e54600'},
					2:{color: '#f38f00'},
					3:{color: '#00a8ff'},
					5:{color: '#88cd2a',offset: 0.2}
          }
        };

        var chart = new google.visualization.PieChart(document.getElementById('report'));
        chart.draw(data, options);
      }
    </script>
  </body>
</html>