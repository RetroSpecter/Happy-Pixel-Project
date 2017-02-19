<?php
	$title ="";
	
	if(isset ($_GET["title"])){
		$title = $_GET["title"];
		header("Content-type: application/json");
		print json_encode(getPlanDetails($title));
	}
	
	function getPlanDetails($title){
		$file = file_get_contents("testGroups.txt");
		$file_contents = explode("|",$file);
		return $file_contents;
	}
?>