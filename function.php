<?php

	function RemoveBS($Str) {  
	  $StrArr = str_split($Str); $NewStr = '';
	  foreach ($StrArr as $Char) {    
		$CharNo = ord($Char);
		if ($CharNo == 163) { $NewStr .= $Char; continue; } // keep £ 
		if ($CharNo > 31 && $CharNo < 127) {
		  $NewStr .= $Char;    
		}
	  }  
	  return $NewStr;
	}
	
	function _display($q, $s, $u, $l, $d){
		global $dbLink;
		
				switch ($s) {
					case 1 :
						$star = "Ye";
					break;
					case 2 :
						$star = "Somewhat dissatisfied";
					break;
					case 3 :
						$star = "Somewhat satisfied";
					break;
					case 4 :
						$star = "satisfied";
					break;
					case 5 :
						$star = "Very satisfied";
					break;
				}
			$ui = (!empty($u)) ? explode(":",base64_decode($u)): NULL;
			$li = (!empty($l)) ? base64_decode($l): NULL;
			$di = (!empty($d)) ? base64_decode($d): NULL;
			$s = (!empty($s)) ? " and rating = '".$star."'" : NULL;
			$q = (!empty($q)) ? " question = '" .$q. "'" : NULL;
			$l = (!empty($l)) ? " location = '" .$li. "'" : NULL;
			$d = (!empty($d)) ? " department = '" .$di. "'" : NULL;
			$ui = (!empty($ui[0])) ? " system = '" .$ui[0]. "' and ip = '".$ui[1]."'" : NULL;
			$w = (!empty($s) || !empty($q) || !empty($u) || !empty($l) || !empty($d)) ? ' where': NULL;
			$sql = "SELECT * FROM sy_hr_result".$w.$q.$s.$l.$d.$ui;
			$result = $dbLink->query($sql);
			$numRows = $result->num_rows;
			
			$set = 1;
			
			if ($numRows > 0) {
					while($row = $result->fetch_array(MYSQLI_ASSOC)) {
							
							$GetQuestionNo = str_replace("q","",$row['question']);
							
							$link = base64_encode($row['system'].":".$row['ip']);
							$link3 = base64_encode($row['location']);
							$link4 = base64_encode($row['department']);
							
							if ($set == 1 && (empty($q)) || $q == "q17") {
							$output .= "<tr>\n";						
							$output .= "<td>".$set."</td>\n";							
							$output .= "<td style=\"text-align:left;\"><a href='?q=q17'>How many years have you been working with this company?</a></td>\n";
							$output .= "<td>".$row['experience']."</td>\n";
							$output .= "<td style=\"text-align:left;\"><a href='?l=".$link3."'>".$row['location']."</a></td>\n";
							$output .= "<td style=\"text-align:left;\"><a href='?d=".$link4."'>".$row['department']."</a></td>\n";
							$output .= "<td><a href='?u=".$link."'>".$row['ip']."</a></td>\n";
							$output .= "<td>".$row['rdatetime']."</td>\n";							
							$output .= "</tr>\n";
							}
							
							$set++;
							
							$output .= "<tr>\n";						
							$output .= "<td>".$set."</td>\n";							
							$output .= "<td style=\"text-align:left;\"><a href='?q=".$row['question']."'>"._questions($GetQuestionNo, 1)."</a></td>\n";
							$output .= "<td>".$row['rating']."</td>\n";
							$output .= "<td style=\"text-align:left;\"><a href='?l=".$link3."'>".$row['location']."</a></td>\n";
							$output .= "<td style=\"text-align:left;\"><a href='?d=".$link4."'>".$row['department']."</a></td>\n";
							$output .= "<td><a href='?u=".$link."'>".$row['ip']."</a></td>\n";
							$output .= "<td>".$row['rdatetime']."</td>\n";							
							$output .= "</tr>\n";

					}
					
					
			}
			
							$output .= (!empty($u)) ? _last($u) : NULL;
			
		return ($numRows > 0) ? $output : NULL;
	} 
	
	function _last($u){
		global $dbLink;

			$u = explode(":",base64_decode($u));
			$sql = "SELECT * FROM sy_review where system = '" .$u[0]. "' and ip = '".$u[1]."'";
			$result = $dbLink->query($sql);
			$numRows = $result->num_rows;
			if ($numRows > 0) {
					while($row = $result->fetch_array(MYSQLI_ASSOC)) {
							$output .= "<tr>\n";
							$output .= "<td>R</td>\n";
							$output .= "<td>Review</td>\n";
							$output .= "<td colspan=\"4\">".$row['review']."</td>\n";
							$output .= "</tr>\n";
					}
			}
		return ($numRows > 0) ? $output : NULL;
	} 
	
	function _total($q, $r, $opt){
		global $dbLink;
		$getu = _total_users();
			
			$sql = "SELECT DISTINCT question, rating FROM sy_hr_result Where question = '".$q."' and rating = '".$r."'";
			$result = $dbLink->query($sql);
			$numRows = $result->num_rows;
			$i = 0;
			if ($numRows > 0) {
					while($row = $result->fetch_array(MYSQLI_ASSOC)) {
							$output .= $i + 1;
					}
			}
			
		return ($numRows > 0) ? ($opt == 1) ? round(($output * 100) / $getu) : $output : 0;
	} 
	
	function _totalpie($r){
		global $dbLink;
			
			$sql = "SELECT count(rating) as icount FROM sy_hr_result Where rating = '".$r."'";
			$result = $dbLink->query($sql);
			$numRows = $result->num_rows;
			if ($numRows > 0) {
					while($row = $result->fetch_array(MYSQLI_ASSOC)) {
							$output .= $row['icount'];
					}
			}
			
		return ($numRows > 0) ? $output : 0;
	} 
	
	function _total_users(){
		global $dbLink;
			
			$sql = "SELECT DISTINCT system, ip FROM sy_hr_result";
			$result = $dbLink->query($sql);
			$numRows = $result->num_rows;
		return ($numRows > 0) ? $numRows : 0;
	}
	
	function _system($mechine, $ip){
		global $dbLink;
			
			$sql = "SELECT DISTINCT system, ip FROM sy_hr_result WHERE system = '".trim($mechine)."' and ip = '".trim($ip)."'";
			$result = $dbLink->query($sql);
			$numRows = $result->num_rows;
			if ($numRows > 0) {
					while($row = $result->fetch_array(MYSQLI_ASSOC)) {
							$output = $row['system'];
					}
			}
		return ($numRows > 0) ? 1 : 0;
	} 

	function _questions($q, $opt){
				
		$qsl = explode(":",":I am proud to work for this company. It is a good employer.:The company's leadership is doing a good job.:I feel secure about the company’s future.:The company is a leader in the industry.:I am happy in my job.:I am treated with respect.:My work environment is satisfactory.:The job and task instructions given to me is clear and fair.:My superior treats me well and with respect and trust me to do my work.:I am recognized for good work delivered.:I can ask for advice and support from my boss.:My boss is achieving the targets and objectives set for our department.:I am rewarded fairly for the work I do.:My salary enables me to cope with the cost of living.:The company salary scheme is fair for everyone.:The company benefits are fair to all.:Halfway through already! How are you feeling?:I have received all the training I need to effectively carry out my job.:The company values people development.:I have access to learning resources that help me execute my work.:I am trained well enough to be considered for career moves and succession.:The team spirit and morale of employees are high.:People with whom I work are competent and professional.:There is no conflict in our department.:I trust my fellow team members.:I am kept informed about work and company matters.:Instructions from  top management are clear.:I have access to my boss to communicate any work or company related matter.:I have access to talk to someone if I have a personal problem.");
		
		return ($opt == 1) ? $qsl[$q] : count($qsl);
	} 

?>