<!DOCTYPE html>
<html>
<head>
	<title>cdi college</title>
	<link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<bodys>
	<center>
	<h1>Cdi College</h1>	
	<p style="color:red">
		<?php
			if (isset($_GET["record"]))
			{
				if ($_GET["record"]=="added") 
				{
					echo "Student Registered";
				}
				if ($_GET["record"]=="deleted") {
					echo "Student deleted successfully";
				}
			} 
		?>
	</p>
	<h2>Student Registration Form</h2>
	<form action="include/register.php" method="POST">
	  <label for="fname">First name:</label>
	  <input required type="text" id="fname" name="fname"><br>
	  <label for="lname">Last name:</label>
	  <input required type="text" id="lname" name="lname"><br>
	  <label for="dob">DOB:</label>
	  <input required type="date" id="dob" name="dob"><br>
	  <label for="sex">Sex:</label>
	  <input required type="radio" id="male" name="gender" value="male">
	  <label for="male">Male</label>
	  <input required type="radio" id="female" name="gender" value="female">
	  <label for="female">Female</label>
	  <input required type="radio" id="other" name="gender" value="other">
	  <label for="other">Other</label><br>
	  <label for="email">Email:</label>
	  <input required type="email" id="email" name="email"><br>
	  <label for="address">Address:</label>
  	  <input required type="text" id="address" name="address"><br>
  	  <label for="address">Department:</label>
  	  <select name="department">
  	  	<option selected disabled>Choose Department</option>
  	  	<option value="medical">Medical</option>
  	  	<option value="nonMedical">Non-Medical</option>
  	  	<option value="arts">Arts</option>
  	  </select><br>
  	  <button name="register">Register</button>
  	  <button><a href="delete_student.php">Delete</a></button>
	</form>
	</center>
</body>
</html>