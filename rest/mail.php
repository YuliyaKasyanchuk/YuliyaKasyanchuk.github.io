<?php

$recepient = "yuljakas@gmail.com";
$siteName = "KOLYBA";

$name = trim($_POST["name"]);
$email=trim($_POST["email"]);
$phone = trim($_POST["tel"]);
$mes=trim($_POST["message"]);
$message = "Имя: $name \nТелефон: $phone";

$subject = "Заявка с сайта";
// Сообщение письма
$message = "
Имя пользователя: ".htmlspecialchars($name)."<br />
Номер телефона: ".htmlspecialchars($tel)." <br />
Email: ".htmlspecialchars($email)."<br />
Сообщение: ".htmlspecialchars($message)."
";

// Отправляем письмо при помощи функции mail();
mail ($recepient, $subject, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

?>




