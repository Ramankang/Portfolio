<?php
include_once 'connection.php';
if (isset($_POST["studentId"])) {
	// print_r($_POST);
	$studentId = $_POST['studentId'];

	$sql = "DELETE FROM students WHERE studentId=$studentId";

	if ($conn->query($sql) === TRUE) {
	  // echo "Record deleted successfully";
		header("Location: ../index.php?record=deleted");
		exit();
	} else {
	  echo "Error deleting record: " . $conn->error;
	}
	
}