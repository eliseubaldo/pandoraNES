<?php

$id = $_GET['id'];


$data = file_get_contents('pandoraNES.json');
$tempArray = json_decode($data, true);
if(empty($id)){
	$jsonData = json_encode($tempArray);
}else{
	$jsonData = json_encode($tempArray[$id]);
}
//print_r();
echo $jsonData;
?>


