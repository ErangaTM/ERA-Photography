 <?php
	$Name = $_POST['Name'];
	$Email = $_POST['Email'];
	$Phone = $_POST['Phone'];
	$Address = $_POST['Address'];
	$Message = $_POST['Message'];
	

	// Database connection
	$conn = new mysqli('localhost', 'root', 'root', 'eraphotography');
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	}

	// Prepare and execute the SQL statement
	$stmt = $conn->prepare("INSERT INTO user_infor(Name, Email, Phone, Address, Message ) VALUES (?, ?, ?, ?, ?)");
	$stmt->bind_param("sssss", $Name, $Email, $Phone, $Address, $Message);
	$execval = $stmt->execute();

	if (!$execval) {
		die("Error: " . $stmt->error);
	}

	// Close the statement and the connection
	$stmt->close();
	$conn->close();

	// Redirect to the home page after successful registration
	header("Location: index.html#Contact");
	exit();
?>