window.onload = function(){
	if(navigator.webkitGetUserMedia){
	
		/*カメラから撮った映像のモニター*/
		var video = document.getElementById('monitor');
	
		/*イメージのタイプ*/
		var type = 'image/png';
		
		/*写真撮った時の音声*/
		var audio = new Audio("sound/se_01.ogg");
		audio.preload = "auto";
		
		/*canvas、cが結合用、fがフレーム用*/
		var f, c;
		c = document.getElementById("combine");
		f = document.getElementById("frame");
		
		/*各canvasコンテクスト*/
		var context_c = c.getContext('2d');
		var context_f = f.getContext('2d');
		
		/*フレーム、スタンプ等画像*/
		var img_v, img_f, img_c, img_p;

		/*文字用*/
		var wordc = document.dos.sdo1;
		var word = document.dos.sdo2;
			
		/*フレーム、スタンプ等の条件用*/
		var frame_on = false;
		var frame_no = false;
		//frame_no = 0;
		var stamp_on = false;
		var stamp_no;
		//stamp_no = 0;
		
			
		/*これ何に使ってるかわからないけどたぶんなににも使ってない*/
		var get_bin = false;
			
		/*以下カメラからの映像取得用*/
		var videoSelect = document.querySelector("select#videoSource");
			
		function gotSources(sourceInfos) {
			for (var i = 0; i != sourceInfos.length; ++i) {
				var sourceInfo = sourceInfos[i];
				var option = document.createElement("option");
				option.value = sourceInfo.id;
				if(sourceInfo.kind === 'video') {
					option.text = sourceInfo.label || 'カメラ '　+　(videoSelect.length);
					videoSelect.appendChild(option);
				}
			}
		}
			
		function start(){
			if (!!window.stream) {
				video.src = null;
				window.stream.stop();
			}
			var videoSource = videoSelect.value;
			var constraints = {
				video: {
					optional: [{sourceId: videoSource}]
				}
			};
			navigator.webkitGetUserMedia(constraints,succesCallback,errorCallback);
		}
		
		if(typeof MediaStreamTrack === 'undefind'){
			alert('Cannot Use By Your Device');
		}else{
			MediaStreamTrack.getSources(gotSources);
		}
		
		function succesCallback(stream){
			window.stream = stream;
			video.src = window.URL.createObjectURL(stream);
			video.play();
		}
		
		function errorCallback(){
			console.log("Error !");
		}

		videoSelect.onchange = start;
		start();
		
		
		/*スタンプの番号*/
		var stamp1 = function(){
			stamp_no = 1;
		};
		var stamp2 = function(){
			stamp_no = 2;
		};
		var stamp3 = function(){
			stamp_no = 3;
		};
		var stamp4 = function(){
			stamp_no = 4;
		};
		var stamp5 = function(){
			stamp_no = 5;
		};
		var stamp6 = function(){
			stamp_no = 6;
		};
		var stamp7 = function(){
			stamp_no = 7;
		};
		var stamp8 = function(){
			stamp_no = 8;
		};

		/*canvasクリックでスタンプ貼っつけ*/
		f.onmousedown = mouseDownListener;
		function mouseDownListener(b){		
			/*マウスカーソルの座標*/
			var mouseX;
			var mouseY;
			var rectb = b.target.getBoundingClientRect();
			mouseX = Math.floor(b.clientX - rectb.left);
			mouseY = Math.floor(b.clientY - rectb.top);
		
			if(stamp_no == 1){
				img_f = new Image();
				img_f.src = "images/stamp1.png"
				img_f.onload = function(){
					context_c.drawImage(img_f,mouseX - 10, mouseY - 10, 170, 170);
				}
			}
			if(stamp_no == 2){
				img_f = new Image();
				img_f.src = "images/stamp2.png"
				img_f.onload = function(){
					context_c.drawImage(img_f,mouseX - 10, mouseY - 10, 70, 70);
				}
			}
			if(stamp_no == 3){
				img_f = new Image();
				img_f.src = "images/stamp3.png"
				img_f.onload = function(){
					context_c.drawImage(img_f,mouseX - 10, mouseY - 10, 90, 90);
				}
			}
			if(stamp_no == 4){
				img_f = new Image();
				img_f.src = "images/stamp4.png"
				img_f.onload = function(){
					context_c.drawImage(img_f,mouseX - 10, mouseY - 10, 90, 90);
				}
			}
			if(stamp_no == 5){
				img_f = new Image();
				img_f.src = "images/stamp5.png"
				img_f.onload = function(){
					context_c.drawImage(img_f,mouseX - 10, mouseY - 10, 100, 100);
				}
			}
			if(stamp_no == 6){
				img_f = new Image();
				img_f.src = "images/stamp6.png"
				img_f.onload = function(){
					context_c.drawImage(img_f,mouseX - 10, mouseY - 10, 160, 160);
				}
			}
			if(stamp_no == 7){
				img_f = new Image();
				img_f.src = "images/stamp7.png"
				img_f.onload = function(){
					context_c.drawImage(img_f,mouseX - 10, mouseY - 10, 160, 160);
				}
			}
			if(stamp_no == 8){
				img_f = new Image();
				img_f.src = "images/stamp8.png"
				img_f.onload = function(){
					context_c.drawImage(img_f,mouseX - 10, mouseY - 10, 70, 70);
				}
			}

			/*文字スタンプの色変更*/
			if(wordc.value == "black"){
				context_c.fillStyle = "black";
			}
			if(wordc.value == "white"){
				context_c.fillStyle = "white";
			}
			if(wordc.value == "red"){
				context_c.fillStyle = "red";
			}
			if(wordc.value == "blue"){
				context_c.fillStyle = "blue";
			}
			if(wordc.value == "yellow"){
				context_c.fillStyle = "yellow";
			}
			if(wordc.value == "green"){
				context_c.fillStyle = "green";
			}
			if(wordc.value == "brown"){
				context_c.fillStyle = "brown";
			}
			if(wordc.value == "purple"){
				context_c.fillStyle = "purple";
			}
			if(wordc.value == "skyblue"){
				context_c.fillStyle = "skyblue";
			}
			if(wordc.value == "lightgreen"){
				context_c.fillStyle = "lightgreen";
			}

			context_c.font = "40px 'HG 創英角ポップ体'";
			context_c.fillText(word.value,mouseX,mouseY);
	
		}
			
		/*フレーム選択・撮影・消去・決定*/
		var framechange1 = function(){
			frame_no = 1;
			context_f.clearRect(0, 0, 640, 480);
			img_f = new Image();
			img_f.src = "images/frame1.png";
			img_f.onload = function(){
				context_f.drawImage(img_f, 0, 0, 640, 480);
			};
		};
		var framechange2 = function(){
			frame_no = 2;
			context_f.clearRect(0, 0, 640, 480);
			img_f = new Image();
			img_f.src = "images/frame2.png";
			img_f.onload = function(){
			context_f.drawImage(img_f, 0, 0, 640, 480);
			};
		};
		var framechange3 = function(){
			frame_no = 3;
			context_f.clearRect(0, 0, 640, 480);
			img_f = new Image();
			img_f.src = "images/frame3.png";
			img_f.onload = function(){
				context_f.drawImage(img_f, 0, 0, 640, 480);
			};
		};
		var framechange4 = function(){
			frame_no = 4;
			context_f.clearRect(0, 0, 640, 480);
			img_f = new Image();
			img_f.src = "images/frame4.png";
			img_f.onload = function(){
				context_f.drawImage(img_f, 0, 0, 640, 480);
			};
		};
		var framechange5 = function(){
			frame_no = 5;
			context_f.clearRect(0, 0, 640, 480);
		};


		/*決定ボタン後*/
		decide.addEventListener('click', function(){
			audio.play();
			img_v = context_c.drawImage(video, 0, 0, 640, 480);
			frame_on = true;
			if(frame_on == true){
				if(frame_no == 1){
					img_f = new Image();
					img_f.src = "images/frame1.png"
					img_f.onload = function(){
						context_c.drawImage(img_f, 0, 0, 640, 480);
					}
				}
				if(frame_no == 2){
					img_f = new Image();
					img_f.src = "images/frame2.png"
					img_f.onload = function(){
						context_c.drawImage(img_f, 0, 0, 640, 480);
					}
				}	
				if(frame_no == 3){
					img_f = new Image();
					img_f.src = "images/frame3.png";
					img_f.onload = function(){
						context_c.drawImage(img_f, 0, 0, 640, 480);
					}
				}
				if(frame_no == 4){
					img_f = new Image();
					img_f.src = "images/frame4.png";
					img_f.onload = function(){
						context_c.drawImage(img_f, 0, 0, 640, 480);
					}
				}
			}
		});

	/*撮られた写真消します*/
	syokyo.addEventListener('click', function(){
		context_c.clearRect(0,0,640,480);
	});

	/*文字入れる前に一押し*/
	mozimozi.addEventListener('click',function(){
		console.log(tweet);
	});

	/*以下エンコード・ダウソ*/
	encode.addEventListener('click', function(){
		/*ベース64*/
		var base64;
		base64 = c.toDataURL();
		
		var filename = (new Date()).getTime();

		/*Tweet用文言*/
		var tweet = document.dos2.twemo.value;
	
		$(document).ready(function(){
			//POSTメソッドで送るデータを定義します var data = {パラメータ名 : 値};
			console.log(base64);
 
			$.ajax({
				type: "POST",
				url: "post.php",
				data: { request: base64, tweets: tweet },
				success: function(msg){ 
					alert('Photo Uploaded!');
				}
			});
             
			return false;
		});
	
	});
	
	function base64toBlob(_base64){
		var i;
		var tmp = _base64.split(',');
		var data = atob(tmp[1]);
		var mime = tmp[0].split(':')[1].split(';')[0];
		var buff = new ArrayBuffer(data.length);
		var arr = new Uint8Array(buff);
		for (i = 0; i < data.length; i++) {arr[i] = data.charCodeAt(i);}
		var blob = new Blob([arr], { type: mime });
		return blob;
	}

	/*使い方説明*/
	introduction.addEventListener('click', function(){
		alert("右上の「送信ページ」で写真の送信ページ\n①～④でフレームを選択\n「☆撮るよ☆」で写真を撮る\n「☆戻すよ☆」で撮った写真を戻す\n「☆ダウンロード☆」でダウンロード\n「カメラを選んでね！」でカメラ切り替え\n");
	})

	$("#frame1").click(function() {
		console.log("button_frame1");
		framechange1();
	});
	$("#frame2").click(function() {
		console.log("button_frame2");
		framechange2();
	});
	$("#frame3").click(function() {
		console.log("button_frame3");
		framechange3();
	});
	$("#frame4").click(function() {
		console.log("button_frame4");
		framechange4();
	});
	$("#frame5").click(function(){
		console.log("button_frame5");
		framechange5();
	});
	$("#stamp1").click(function() {
		console.log("button_stamp1");
		stamp1();
	});
	$("#stamp2").click(function() {
		console.log("button_stamp2");
		stamp2();
	});
	$("#stamp3").click(function() {
		console.log("button_stamp3");
		stamp3();
	});
	$("#stamp4").click(function() {
		console.log("button_stamp4");
		stamp4();
	});
	$("#stamp5").click(function(){
		console.log("button_stamp5");
		stamp5();
	});
	$("#stamp6").click(function() {
		console.log("button_stamp6");
		stamp6();
	});
	$("#stamp7").click(function() {
		console.log("button_stamp7");
		stamp7();
	});
	$("#stamp8").click(function() {
		console.log("button_stamp8");
		stamp8();
	});
	
	}
}
