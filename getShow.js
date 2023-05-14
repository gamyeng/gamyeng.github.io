// 2022-10-29
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
var link11=document.getElementById("links11"),link12=document.getElementById("links12"),link13=document.getElementById("links13"),link14=document.getElementById("links14"),link21=document.getElementById("links21"),link22=document.getElementById("links22"),link23=document.getElementById("links23"),link24=document.getElementById("links24"),link31=document.getElementById("links31"),link32=document.getElementById("links32"),link33=document.getElementById("links33"),link34=document.getElementById("links34"),link41=document.getElementById("links41"),link42=document.getElementById("links42"),link43=document.getElementById("links43"),link44=document.getElementById("links44"),link51=document.getElementById("links51"),link52=document.getElementById("links52"),link53=document.getElementById("links53"),link54=document.getElementById("links54"),link61=document.getElementById("links61"),link62=document.getElementById("links62"),link63=document.getElementById("links63"),link64=document.getElementById("links64");
function show(links,n){links.href=getCookie(n).split("|")[1];links.innerHTML=getCookie(n).split("|")[0]};
if (document.cookie.indexOf("link11=") != -1){show(link11,"link11")}else{link11.text="OA"};
if (document.cookie.indexOf("link12=") != -1){show(link12,"link12")}else{link12.text="搜 狐"};
if (document.cookie.indexOf("link13=") != -1){show(link13,"link13")}else{link13.text="网 易"};
if (document.cookie.indexOf("link14=") != -1){show(link14,"link14")}else{link14.text="腾 讯"};
if (document.cookie.indexOf("link21=") != -1){show(link21,"link21")}else{link21.text="新 华"};
if (document.cookie.indexOf("link22=") != -1){show(link22,"link22")}else{link22.text="人 民"};
if (document.cookie.indexOf("link23=") != -1){show(link23,"link23")}else{link23.text="央 视"};
if (document.cookie.indexOf("link24=") != -1){show(link24,"link24")}else{link24.text="央 廣"};
if (document.cookie.indexOf("link31=") != -1){show(link31,"link31")}else{link31.text="环 球"};
if (document.cookie.indexOf("link32=") != -1){show(link32,"link32")}else{link32.text="光 明"};
if (document.cookie.indexOf("link33=") != -1){show(link33,"link33")}else{link33.text="中 青"};
if (document.cookie.indexOf("link34=") != -1){show(link34,"link34")}else{link34.text="中 新"};
if (document.cookie.indexOf("link41=") != -1){show(link41,"link41")}else{link41.text="早 报"};
if (document.cookie.indexOf("link42=") != -1){show(link42,"link42")}else{link42.text="凤 凰"};
if (document.cookie.indexOf("link43=") != -1){show(link43,"link43")}else{link43.text="观 察"};
if (document.cookie.indexOf("link44=") != -1){show(link44,"link44")}else{link44.text="参 考"};
if (document.cookie.indexOf("link51=") != -1){show(link51,"link51")}else{link51.text="界 面"};
if (document.cookie.indexOf("link52=") != -1){show(link52,"link52")}else{link52.text="澎 湃"};
if (document.cookie.indexOf("link53=") != -1){show(link53,"link53")}else{link53.text="知 乎"};
if (document.cookie.indexOf("link54=") != -1){show(link54,"link54")}else{link54.text="豆 瓣"};
if (document.cookie.indexOf("link61=") != -1){show(link61,"link61")}else{link61.text="政 府"};
if (document.cookie.indexOf("link62=") != -1){show(link62,"link62")}else{link62.text="水 木"};
if (document.cookie.indexOf("link63=") != -1){show(link63,"link63")}else{link63.text="微 博"};
if (document.cookie.indexOf("link64=") != -1){show(link64,"link64")}else{link64.text="设 置";link64.style.color="#f00"};