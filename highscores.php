<?php

//$id = $_GET['id'];

	$data = file_get_contents('php://input');
	$inp = file_get_contents('highscores.json');
	$tempArray = json_decode($inp, true);
	$tempData = json_decode($data,true); // Had to decode $data coz php was escaping it
	array_push($tempArray, $tempData);
	$jsonData = json_encode($tempArray);
	file_put_contents('highscores.json', $jsonData);

?>
