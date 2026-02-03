<?php 

if (!empty($_POST['website'])) {
    // si le champ caché est rempli => spam
    header("Location: contact.html");
    exit();
}

$to = "tom.beaurain@univ-rouen.fr";
$from = $_POST['mail'];
$subject = "PORTFOLIO :".$_POST['objet'];
$message = $_POST['message'];

$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=UTF-8\r\n";
$headers .= "From: $from\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

mail($to, $subject, $message, $headers);

header("Location: contact.html?sent=1");
exit();

?>