<?php
include_once 'connection.php';
if (isset($_POST["register"])) {
	// print_r($_POST);
	$fname=$_POST['fname'];
	$lname=$_POST['lname'];
	$dob=$_POST['dob'];
	$gender=$_POST['gender'];
	$email=$_POST['email'];
	$address=$_POST['address'];
	$department=$_POST['department'];

	$sql = "INSERT INTO students (fname, lname, dob, sex, email, address, department)
	VALUES ('$fname', '$lname', '$dob', '$gender', '$email', '$address' , '$department')";

	if ($conn->query($sql) === TRUE) {
	  // echo "New record created successfully";
	  header("Location: ../index.php?record=added");
	  exit();
	} else {
	  echo "Error: " . $sql . "<br>" . $conn->error;
	}
}