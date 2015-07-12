<?php
header('Content-type:text/plain; charset=utf-8');
require_once('twitteroauth.php');
require_once('UltimateOAuth.php');

session_start();

//canvas data
//$data = 'data:image/jpeg......';
$data = $_POST['request'];
$tweeet = $_POST['tweets'];
echo $data;

//delete MIME and decode base64 data.
$data = base64_decode(preg_replace('@^data:image/[^;]*+;base64,@','',$data));

//load local image
//$data = 'img/Untitled.png';
 
$access_token = $_SESSION['access_token'];
$connection = new UltimateOAuth($_SESSION['consumer_key'], $_SESSION['consumer_secret'],
                $access_token['oauth_token'], $access_token['oauth_token_secret']);
 
$message = $tweeet . "\nApp @ http://www.studio-app.sakura.ne.jp/member/g031l149/works/3c_twitcam/\n";
$parameters = array('status' => $message,
					'media[]' => $data,
					);

//send data to twitter
$status = $connection->postMultipart('statuses/update_with_media', $parameters);
 
 
 
if (isset($status->errors)) { //ƒGƒ‰[‚ª‚ ‚é
  $errors = $status->errors;
  $error = $errors[0];
  echo $error->message."\n";
}
 
print_r($status);

?>

