<?php 
include_once 'include/connection.php'; 
$sql = "SELECT * FROM students";
$result = $conn->query($sql);
?>
<!DOCTYPE html>
<html>
<head>
	<title>cdi college</title>
	<link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<bodys>
	<center>
		<h1>Cdi College</h1>	
		<h2>Delete Student</h2>
		<table>
		  <tr>
		  	<th>Remove</th>
		    <th>First Name</th>
		    <th>Last Name</th>
		    <th>DOB</th>
		    <th>Sex</th>
		    <th>Email</th>
		    <th>Address</th>
		    <th>Department</th>
		  </tr>
		  <form action="include/delete.php" method="POST">
		  <?php 
		  	if ($result->num_rows > 0) {
			  // output data of each row
			  while($row = $result->fetch_assoc()) {
			  	echo "<tr><td><button name='studentId' value=".$row["studentId"].">Delete</button></td><td>".$row["fname"]."</td><td>".$row["lname"]."</td><td>".$row["dob"]."</td><td>".$row["sex"]."</td><td>".$row["email"]."</td><td>".$row["address"]."</td><td>".$row["department"]."</td></tr>";
			  }
			} else {
			  echo "0 results";
			}
		  ?>
		  </form>
		</table>
	</center>
</body>
</html>