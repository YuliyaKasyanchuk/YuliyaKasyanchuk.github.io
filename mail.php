<?php
//Принимаем постовые данные
$name=$_POST['name'];
$email=$_POST['email'];
$tel=$_POST['tel'];
$message=$_POST['message'];
//Тут указываем на какой ящик посылать письмо
$to = "yuljakas@gmail.com";
//Далее идет тема и само сообщение
// Тема письма
$subject = "Заявка с сайта";
// Сообщение письма
$message = "
Имя пользователя: ".htmlspecialchars($name)."<br />
Email: ".htmlspecialchars($email)."<br />
Номер телефона: ".htmlspecialchars($tel)." <br />
Сообщение: ".htmlspecialchars($message)."
";

// Отправляем письмо при помощи функции mail();
$headers = "From: church.sl <mail@proj.sl>\r\nContent-type: text/html; charset=UTF-8 \r\n";
mail ($to, $subject, $message, $headers);
// Перенаправляем человека на страницу благодарности и завершаем скрипт
header('Location: thanks.html');
exit();
?>