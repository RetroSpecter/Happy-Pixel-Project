<?php
	$title ="";
	$mode = "";
	
	if(isset ($_GET["title"])){
		$title = $_GET["title"];
	}
	
	if(isset ($_GET["mode"])){
		if($_GET["mode"] === "single"){
			header("Content-type: application/json");
			print json_encode(getPlanDetails($title));
		} else if($_GET["mode"] === "getAll"){
			header("Content-type: application/json");
			print json_encode(getAll());
		}
	}
	
	function getAll(){
		$files = glob("healthCareOptions/*");
		$projects = array();
		foreach($files as $file){
			$name = str_replace("healthCareOptions/", "", $file);
			$name = str_replace(".txt", "", $name);
			array_push($projects, getPlanDetails($name));
		}
		return $projects ;
	}
	
	function getPlanDetails($title){
		$file = file_get_contents("healthCareOptions/" .  $title . ".txt");
		$file_contents = explode("|",$file);
		return $file_contents;
	}
?>