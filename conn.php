<?php

	$servername		= 'localhost';
	$dbusername		= 'itdept';
	$dbpassword		= '6ysamyzyz';
	$dbname			= 'ipromis_survey';

	$dbLink = new mysqli($servername, $dbusername, $dbpassword, $dbname);
	if (mysqli_connect_errno())
		die("Failed to connect: " . mysqli_connect_error());


?>