<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['success' => false, 'message' => 'Méthode non autorisée.']);
    exit;
}

$name    = htmlspecialchars(strip_tags($_POST['name'] ?? ''));
$email   = htmlspecialchars(strip_tags($_POST['email'] ?? ''));
$phone   = htmlspecialchars(strip_tags($_POST['phone'] ?? ''));
$service = htmlspecialchars(strip_tags($_POST['service'] ?? ''));
$message = htmlspecialchars(strip_tags($_POST['message'] ?? ''));

// Validation
if (empty($name) || empty($email) || empty($message)) {
    echo json_encode(['success' => false, 'message' => 'Champs obligatoires manquants.']);
    exit;
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['success' => false, 'message' => 'Email invalide.']);
    exit;
}

// ── METS TON EMAIL ICI ──
$to      = 'sn871510@gmail.com';
$subject = "Nouveau message de $name — NDIAYE-TECH";

$body = "
Nouveau message reçu depuis le site NDIAYE-TECH
================================================

Nom     : $name
Email   : $email
Téléphone : $phone
Service : $service

Message :
$message

================================================
Envoyé le : " . date('d/m/Y à H:i') . "
";

$headers  = "From: noreply@ndiaye-tech.com\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

$sent = mail($to, $subject, $body, $headers);

if ($sent) {
    echo json_encode(['success' => true, 'message' => 'Message envoyé avec succès !']);
} else {
    echo json_encode(['success' => false, 'message' => 'Erreur envoi. Contactez-nous directement.']);
}
?>
