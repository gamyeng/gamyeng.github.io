var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?e25e33e6927e0f25df7c6c3a990cb445";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();

function getCookie(cookieName) {
	var strCookie = document.cookie;
	var arrCookie = strCookie.split("; ");
	for(var i = 0; i < arrCookie.length; i++){
		var arr = arrCookie[i].split("=");
		if(cookieName == arr[0]){
			return arr[1];
		}
	}
	return "";
}
if(getCookie("skin")=="black"){
	document.getElementById('skin').href="black.css";
	document.getElementById('tbg').setAttribute('content','#25262a')
}