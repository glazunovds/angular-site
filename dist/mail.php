<?php
header('Access-Control-Allow-Origin: https://www.centerservice.com.ua');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");

$postdata = file_get_contents("php://input");
if ($postdata) {
  $request = json_decode($postdata);
  $body = $request->body;
  $name = $body->name;
  $phone = $body->phone;
  $emails = 'g.s.dima@mail.ru, darkrifleman1@gmail.com';

  $subject = 'Новый вызов';
  $message = '
<html>
<head>
  <title>Новый вызов</title>
</head>
<body>
  <div>Имя: ' . $name . '</div>
  <div>Номер телефона: ' . $phone . '</div>
</body>
</html>
';

  $headers = 'MIME-Version: 1.0' . "\r\n";
  $headers .= 'From: Сервисный центр "Центр Сервис" <admin@centerservice.com.ua>' . "\r\n";
  $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";

  if (mail($emails, $subject, $message, $headers)) {
    echo 'ok';
  } else {
    echo 'error';
  };

}
