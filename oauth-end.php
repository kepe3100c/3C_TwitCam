<?php
require_once('twitteroauth.php');
 
session_start();
 
$connection = new TwitterOAuth($_SESSION['consumer_key'], $_SESSION['consumer_secret'],
                $_SESSION['oauth_token'], $_SESSION['oauth_token_secret']);
$access_token = $connection->getAccessToken($_GET['oauth_verifier']);
unset($_SESSION['oauth_token']);
unset($_SESSION['oauth_token_secret']);
 
$_SESSION['access_token'] = $access_token;
?>
<!doctype html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>3C TwitCam認証完了</title>
		<link rel="stylesheet" href="http://code.jquery.com/mobile/1.3.2/jquery.mobile-1.3.2.min.css" />
		<script type="text/javascript" src="http://code.jquery.com/jquery-1.7.1.min.js"></script>
		<script type="text/javascript" src="http://code.jquery.com/mobile/1.3.2/jquery.mobile-1.3.2.min.js"></script>
  </head>
  
<body>
	<div data-role="page">
	<div data-role="header"　data-icon="info" data-iconpos="top" data-theme="b">
		<h1>操作説明</h1>
	</div>
	<div data-role="content">
	<p><a data-role="button" href="camera.html">3C TwitCamを起動</a></p>
	<!--<p><a href="logout.php">logout</a></p>-->
	<h2>3C TwitCam：操作説明</h2>
	<div data-role="header" data-theme="b">
		<h1>3C TwitCam!</h1>
	</div>
	<div><img src="images/introduction.jpg"></div>
	<h2>①：カメラ映像、フレーム・スタンプが出ます。<br>②：文字スタンプの色を決めます。<br>③：文字スタンプの中身を入れます。<br>④：カメラ映像とフレームを重ねて撮ります。<br>⑤：文字スタンプを押す前に押します。<br>⑥：撮られ、描画されたものを消去します。<br>⑦：Twitterで画像と一緒に投稿する文を入れます。<br>⑧：撮った写真と⑦の文をTwitterに投稿します。<br>⑨：カメラを選択できます。<br>⑩：フレームやスタンプを選択します。</h2>
	</div>
	</div>
</body>
</html>