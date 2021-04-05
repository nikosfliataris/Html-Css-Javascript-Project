<?php
echo "Your order request submited successfully";

echo htmlspecialchars($_POST['firstname']);
echo htmlspecialchars($_POST['lastname']);
echo htmlspecialchars($_POST['products']);
echo htmlspecialchars($_POST['colors']);
echo htmlspecialchars($_POST['quantity']);
?>
