webpackJsonp([0],[function(n,i){},function(n,i){},function(n,i){},function(n,i){},function(n,i){},,function(n,i,t){"use strict";function a(){y.a.ajax({type:"get",url:"https://jirenguapi.applinzi.com/fm/getChannels.php",dataType:"json"}).then(function(n){c(n)},function(n){alert("获取专辑失败")})}function c(n){var i="";n.channels.forEach(function(n){i+="<li data-channel-id = "+n.channel_id+"> "+n.name+" </li>"}),w.html(i)}function s(n){var n=n||"public_yuzhong_huayu",i="https://jirenguapi.applinzi.com/fm/getSong.php?channel="+n;y.a.ajax({type:"get",url:i,dataType:"json"}).then(function(n){e(n),o()},function(n){alert("音乐播放失败")})}function e(n){D.artist=n.song[0].artist,D.lrc=n.song[0].lrc,D.picture=n.song[0].picture,D.sid=n.song[0].sid,D.title=n.song[0].title,D.url=n.song[0].url;D.atrist,D.lrc,D.picture,D.sid,D.title,D.url;y()("main>h2").text(D.title),y()("main>p").text(D.artist),y()("main .pic").html('<img src="'+D.picture+'">'),O.css({"background-image":"url("+D.picture+")","background-size":"cover","background-repeat":"no-repeat","background-position":"center","box-shadow":"inset 0px 0px 20px #fff"}),j.src=D.url,j.play()}function o(){var n="https://jirenguapi.applinzi.com/fm/getLyric.php?&sid="+D.sid;y.a.ajax({type:"get",url:n,dataType:"json"}).then(function(n){l(n)},function(n){alert("歌词获取失败")})}function l(n){var i=[],t=n.lyric,a=t.split("\n"),c=/\[\d{2}:\d{2}\.\d{2}\]/g;a.forEach(function(n){if(!c.test(n))return void a.splice(n,1);var t=n.match(c),s=n.split(t),e=600*t[0][1]+60*t[0][2]+10*t[0][4]+1*t[0][5];i.push([e,s[1]])}),r(i)}function r(n){var i=0,t='<div class="lyric-ani" data-height="20">';n.forEach(function(n,a){var c=void 0===n[1]?"歌词错误^_^":n[1];t+='<p class="lyric-line" data-id="'+a+'"  data-time="'+n[0]+'" > '+c+" </p> \n",i++}),t+="</div>",O.html(t)}function d(){var n=j.currentTime/j.duration*E.width();P.width(n)}function p(){var n=parseInt(j.currentTime/60),i=parseInt(j.currentTime%60),t=parseInt(j.duration/60),a=parseInt(j.duration%60);i<10&&(i="0"+i),a<10&&(a="0"+a),isNaN(a)&&(a="00"),isNaN(t)&&(t="00"),q.text(n+":"+i+" / "+t+":"+a)}function u(){var n=j.volume;A.width(100*n+"%")}function f(){for(var n=y()(".lyric-ani"),i=n.find("p").height(),t=O.find(".lyric-ani p"),a=j.currentTime,c=(j.duration,0);c<t.length;c++){var s=t.eq(c).data("time"),e=t.eq(c+1).data("time");a>s&&a<e&&t.eq(c).addClass("active"),a>e&&(t.removeClass("active"),n.css({height:i*t.length+"px",marginTop:-parseInt(i*c-100)+"px",transition:"2s"}))}}Object.defineProperty(i,"__esModule",{value:!0});var h=t(5),y=t.n(h),m=t(0),g=(t.n(m),t(1)),v=(t.n(g),t(2)),k=(t.n(v),t(4)),x=(t.n(k),t(3)),b=(t.n(x),!1),j=new Audio;j.autoPlay=!0,j.loop=b;var I=y()(".album"),w=y()(".album-list"),C=y()(".control .icon-play"),T=y()(".control .icon-pause"),_=y()(".control .next"),z=y()(".control .pre"),N=y()(".disc"),q=y()(".timeline .time"),E=y()(".timeline .progress .bar"),P=y()(".timeline .progress-now"),X=y()(".adjust-volume .progress .bar"),A=y()(".adjust-volume .progress-now"),J=y()(".lrc .icon-lrc"),L=y()(".lrc .icon-dis"),M=y()("main .pic-ct"),O=y()("main .lrc-ct"),S=y()(".adjust-loop .icon-loop"),B=y()(".adjust-loop .icon-random"),D={channelId:"",atrist:"",lrc:"",picture:"",sid:"",title:"",url:""};y()(function(){s(),j.play()}),I.on("click",function(){a(),w.toggleClass("hidden")}),I.on("click","li",function(n){n.stopPropagation();var i=y()(this).data("channel-id");D.channelId=i,s(D.channelId),T.css("display","none"),C.css("display","flex"),N.addClass("active"),w.addClass("hidden")}),_.on("click",function(){s(D.channelId),T.css("display","none"),C.css("display","flex"),N.addClass("active")}),z.on("click",function(){s(D.channelId),T.css("display","none"),C.css("display","flex"),N.addClass("active")}),C.on("click",function(){j.pause(),C.css("display","none"),T.css("display","flex"),N.removeClass("active")}),T.on("click",function(){j.play(),T.css("display","none"),C.css("display","flex"),N.addClass("active")}),E.on("click",function(n){var i=n.offsetX/parseInt(y()(this).width());j.currentTime=i*j.duration,P.width(100*i+"%")}),j.ontimeupdate=function(){d(),p(),u(),f(),j.ended&&b&&j.play(),j.ended&&!b&&(s(D.channelId),j.play())},X.on("click",function(n){var i=n.offsetX/parseInt(y()(this).width());j.volume=i,A.width(100*i+"%")}),J.on("click",function(){J.css("display","none"),L.css("display","inline-block"),M.css("display","none"),O.css("display","flex")}),L.on("click",function(){J.css("display","inline-block"),L.css("display","none"),M.css("display","flex"),O.css("display","none")}),S.on("click",function(){S.css("display","none"),B.css("display","inline-block"),b=!1}),B.on("click",function(){B.css("display","none"),S.css("display","inline-block"),b=!0})}],[6]);
//# sourceMappingURL=app.63cbc1f554212a0c878e.js.map