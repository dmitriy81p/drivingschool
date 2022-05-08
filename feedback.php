<?php
// shkola.avtoprogress@gmail.com, avtoprogress2017@gmail.com
	$mail = 'dmitiy81p@gmail.com, berdanskavtoskola@gmail.com';
	if(isset($_POST['name'])){$name = $_POST['name'];}
	if(isset($_POST['phone'])){$phone = $_POST['phone'];}
	$body = "Клиент ".$name." ждет звонка на номер: ".$phone." хочет получить скидку";
	$header = "From: \"Сайт berdanskavtoskola.com.ua\" <server@berdanskavtoskola.com.ua>\n";
	$header .= "Content-type: text/plain; charset=\"utf-8\"";
	

		$result = mail($mail, 'Заявка с сайта', $body, $header);
		if($result == 'true'){
			echo "Ваша заявка успешно отправлена!\n\rМы свяжемся с Вами в ближайшее время.\n\r";
		} else {
			echo 'При отправке заявки произошла ошибка...';
		}

	unset($_POST);
?>