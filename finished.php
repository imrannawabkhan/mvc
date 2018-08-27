<?php 
	include_once("conn.php"); 
	include_once("function.php"); 

	$ip		= $_SERVER['REMOTE_ADDR'];
	$date	  = preg_replace("/[^0-9\/]/", "", urldecode(RemoveBS($_POST['q31'])));
	$mechine= gethostbyaddr($ip);
			
	if (
	!empty($_POST)	
	){
	
 	$qus	= _questions(NULL,2);

	$dbLink->set_charset("utf8");
	
	for ($k = 1; $k < $qus; $k++) {
	//$k = ($k == 0) ? 1 : $k;
	
	$rating = htmlspecialchars($_POST['q'.$k], ENT_QUOTES);
	$result = $dbLink->query("INSERT INTO sy_hr_result (
														ip, 
														system, 
														question, 
														rating, 
														rdatetime,
														location,
														selecteddate,
														department,
														experience,
														language
													 ) VALUES (
														'".$ip."',
														'".$mechine."',
														'q".$k."',
														'".urldecode($rating)."',
														'".date("Y-m-d H:i:s")."',
														'".urldecode($_POST['q30'])."',
														'".urldecode($_POST['q31'])."',
														'".urldecode($_POST['q32'])."',
														'".urldecode($_POST['q33'])."',
														'".urldecode($_POST['lng'])."'
													);"
							);				
	}
	
	if(!$result) die('Error : ('. $dbLink->errno .') '. $dbLink->error);
	$dbLink->close();
} else {
	echo "return";
}
	
?>