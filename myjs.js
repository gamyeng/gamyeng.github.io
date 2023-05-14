//切换信息
function show(i) {
	document.getElementById("div_" + i).style.display = 'block';
	document.getElementById("more_" + i).href = 'javascript:hide(' + i + ');';
	document.getElementById("span_" + i).className = "up";
}
function hide(i) {
	document.getElementById("div_" + i).style.display = 'none';
	document.getElementById("more_" + i).href = 'javascript:show(' + i + ');';
	document.getElementById("span_" + i).className = "dw";
}
//初始搜索
var now = -1;
var resLength = 0;
var thisSearch = 'https://www.baidu.com/s?wd=';
var thisSearchIcon = 'skin/baidu.png';
var storage = window.localStorage;
if (!storage.stopHot) {
	storage.stopHot = true
}
storage.stopHot == 'false' ? $('#hot-btn')
	.addClass('off') : $('#hot-btn')
	.removeClass('off');
var ssData = storage.searchEngine;
if (storage.searchEngine != undefined) {
	ssData = ssData.split(',');
	thisSearch = ssData[0];
	$('.search-icon')
		.attr('src', ssData[1])
}
//百度热词
$('#txt')
	.keyup(function(e) {
		if ($('#txt').val() != '') {
			$('.search-clear').css('display', 'block');
			$('.search-clear').click(function() {
			$('#txt').val('');
			$('#box ul').html('');
			$('#box').css('display', 'none');
			$('.search-clear').css('display', 'none')})
		} else {
			$('.search-clear').css('display', 'none')
		}
		if (e.keyCode == 38 || e.keyCode == 40 || storage.stopHot != 'true') {return};
		var dat = {wd: $('#txt').val()};
		if ($('#txt').val() != '') {
			$('#box ul').text('');
			$('#box').css('display', 'block');
			$.ajax({
				type: "GET",
				url: "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su",
				async: true,
				data: dat,
				dataType: 'jsonp',
				jsonp: 'cb',
				success: function(res) {
					for (var i = 0; i < res.s.length; i++) {
						resLength = res.s.length;
						oli_i = '<li>' + res.s[i] + '</li>';
						$('#box ul').append(oli_i);
						$('#box ul li').eq(i).click(function() {$('#txt').val(this.innerHTML);window.open(thisSearch + this.innerHTML);$('#box ul').html('');$('#box').css('display', 'none')})
					};
				},
				error: function(res) {console.log(res)}
			});
		} else {$('#box ul').html('');$('#box').css('display', 'none')};
	});
$('#txt')
	.keydown(function(ev) {
		if (ev.keyCode == 40) {
			now++;
			if (now > resLength - 1) {now = 0;}
			$('#box ul li').eq(now).addClass('current').siblings().removeClass('current')
			$('#txt').val($('#box ul li').eq(now).text())
		};
		if (ev.keyCode == 38) {
			if (now == -1 || now == 0) {
				now = resLength
			}
			now--
			$('#box ul li').eq(now).addClass('current').siblings().removeClass('current');
			$('#txt').val($('#box ul li').eq(now).text())
		};
		if (ev.keyCode == 13) {
			var textValue = $('#txt').val();
			if (textValue != '') {
				window.open(thisSearch + $('#txt').val())
				$('#box ul').html('')
			}
		}
	})
//搜索引擎
$(function() {
	var search = {
		data: [{
			name: 'google',
			img: 'skin/google.png',
			url: 'https://www.google.com.hk/search?q='
		},{
			name: 'baidu',
			img: 'skin/baidu.png',
			url: 'https://www.baidu.com/s?wd='
		},{
			name: 'bing',
			img: 'skin/bing.png',
			url: 'https://cn.bing.com/search?q='
		},{
			name: 'sogou',
			img: 'skin/sogou.png',
			url: 'https://wap.sogou.com/web/searchList.jsp?keyword='
		},{
			name: 'yandex',
			img: 'skin/yandex.png',
			url: 'https://yandex.com/search/?text='
		}]
	}
	for (var i = 0; i < search.data.length; i++) {
		var addList = '<li><img src="' + search.data[i].img + '"/>' + search.data[i].name + '</li>'
		$('.search-engine-list').append(addList);
	}
	$('.search-icon, .search-engine')
		.hover(function() {
			$('.search-engine').css('display', 'block')
		}, function() {
			$('.search-engine').css('display', 'none')
		});
	$('#hot-btn')
		.on('click', function() {
			$(this).toggleClass('off');
			if (storage.stopHot == 'true') {storage.stopHot = false} else {storage.stopHot = true}
			console.log(storage.stopHot)
		});
	$('.search-engine-list li')
		.click(function() {
			var _index = $(this).index();
			var thisImg = $(this).children().attr('src');
			$('.search-icon').attr('src', thisImg)
			thisSearch = search.data[_index].url;
			$('.search-engine').css('display', 'none')
			storage.searchEngine = [thisSearch, thisImg]
		})
})
$("#search-btn").click(function() {
		var textValue = $('#txt').val();
		if (textValue != '') {
			window.open(thisSearch + $('#txt').val())
			$('#box ul').html('')
		}
	});