<?php
require_once('twitteroauth.php');
 
session_start();
 
$_SESSION['consumer_key'] = "Le0NjXplHPFSSIq0okOfGA";
$_SESSION['consumer_secret'] = "7JMoIm0Vs9YDG2XSv0LXQ3cKHxEC9uWHcvm1PDr5re4";
$callbackUri = 'http://www.studio-app.sakura.ne.jp/member/g031l149/works/3c_twitcam/oauth-end.php';
 
$connection = new TwitterOAuth($_SESSION['consumer_key'], $_SESSION['consumer_secret']);
$request_token = $connection->getRequestToken($callbackUri);
$_SESSION['oauth_token'] = $token = $request_token['oauth_token'];
$_SESSION['oauth_token_secret'] = $request_token['oauth_token_secret'];
 
$authUrl = $connection->getAuthorizeURL($token);
?>
<!doctype html>
<html>

  <head>
    <meta charset="UTF-8" />
    <title>3C TwitCam</title>
	<link rel="stylesheet" href="http://code.jquery.com/mobile/1.3.2/jquery.mobile-1.3.2.min.css" />
	<script type="text/javascript" src="http://code.jquery.com/jquery-1.7.1.min.js"></script>
	<script type="text/javascript" src="http://code.jquery.com/mobile/1.3.2/jquery.mobile-1.3.2.min.js"></script>
  </head>

  <body>
	<div data-role="header" data-theme="b">
		<h1>3C TwitCam!</h1>
	</div>
	<p><a data-role="button" href="<?php echo $authUrl; ?>">3C TwitCamを認証する</a></p>
	<p></p>
	<a data-role="button" href="https://twitter.com/IPUDigigei" class="twitter-follow-button" data-show-count="false" data-lang="en">Follow @IPUDigigei</a>
	<center><p>Copyright 2013- IPU Digigei,Hazel Magic Orchestra</p></center>
    <!--<p><a href="logout.php">logout</a></p>-->
  </body>
  
</html>