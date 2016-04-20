<?php

$id = $_GET['id'];

if ($id) {

	$data = file_get_contents('php://input');
	$inp = file_get_contents('pandoraNES.json');
	$tempArray = json_decode($inp, true);
	$tempData = json_decode($data,true);

	foreach ($tempArray[$id] as $key => $value) {
    	$tempArray[$id][$key] = $tempData[$key];
    }

	$jsonData = json_encode($tempArray);
	$lastgame = json_encode($tempData);
	file_put_contents('pandoraNES.json', $jsonData);
	file_put_contents('lastAdded.json', $lastgame);

	
  
} else {

	$data = file_get_contents('php://input');
	$inp = file_get_contents('pandoraNES.json');
	$tempArray = json_decode($inp, true);
	$tempData = json_decode($data,true); // Had to decode $data coz php was escaping it
	array_push($tempArray, $tempData);
	$jsonData = json_encode($tempArray);
	$lastgame = json_encode($tempData);
	file_put_contents('pandoraNES.json', $jsonData);
	file_put_contents('lastAdded.json', $lastgame);
}


?>
