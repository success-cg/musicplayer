webpackJsonp([0],[function(n,i){},function(n,i){},function(n,i){},function(n,i){},function(n,i){},,function(n,i,t){"use strict";function a(){m.a.ajax({type:"get",url:"https://jirenguapi.applinzi.com/fm/getChannels.php",dataType:"json"}).then(function(n){c(n)},function(n){alert("获取专辑失败")})}function c(n){var i="";n.channels.forEach(function(n){i+="<li data-channel-id = "+n.channel_id+"> "+n.name+" </li>"}),b.html(i)}function s(n){var n=n||"public_yuzhong_huayu",i="https://jirenguapi.applinzi.com/fm/getSong.php?channel="+n;console.log(i),m.a.ajax({type:"get",url:i,dataType:"json"}).then(function(n){e(n),l()},function(n){alert("音乐播放失败")})}function e(n){S.artist=n.song[0].artist,S.lrc=n.song[0].lrc,S.picture=n.song[0].picture,S.sid=n.song[0].sid,S.title=n.song[0].title,S.url=n.song[0].url;S.atrist,S.lrc,S.picture,S.sid,S.title,S.url;m()("main>h2").text(S.title),m()("main>p").text(S.artist),m()("main .pic").html('<img src="'+S.picture+'">'),j.src=S.url,j.play()}function l(){var n="https://jirenguapi.applinzi.com/fm/getLyric.php?&sid="+S.sid;m.a.ajax({type:"get",url:n,dataType:"json"}).then(function(n){o(n)},function(n){alert("歌词获取失败")})}function o(n){var i=[],t=n.lyric,a=t.split("\n"),c=/\[\d{2}:\d{2}\.\d{2}\]/g;a.forEach(function(n){if(!c.test(n))return void a.splice(n,1);var t=n.match(c),s=n.split(t),e=600*t[0][1]+60*t[0][2]+10*t[0][4]+1*t[0][5];i.push([e,s[1]])}),r(i)}function r(n){var i=0,t='<div class="lyric-ani" data-height="20">';n.forEach(function(n,a){var c=void 0===n[1]?"歌词错误":n[1];t+='<p class="lyric-line" data-id="'+a+'"  data-time="'+n[0]+'" > '+c+" </p> \n",i++}),t+="</div>",O.html(t)}function d(){var n=j.currentTime/j.duration*E.width();P.width(n)}function u(){var n=parseInt(j.currentTime/60),i=parseInt(j.currentTime%60);i<10&&(i="0"+i),q.text(n+":"+i)}function p(){var n=j.volume;A.width(100*n+"%")}function f(){for(var n=m()(".lyric-ani"),i=n.data("height"),t=O.find(".lyric-ani p"),a=j.currentTime,c=(j.duration,0);c<t.length;c++){var s=t.eq(c).data("time"),e=t.eq(c+1).data("time");a>s&&a<e&&t.eq(c).addClass("active"),a>e&&(t.removeClass("active"),n.css({height:i*t.length+"px",marginTop:-parseInt(i*c-100)+"px",transition:"2s"}))}}Object.defineProperty(i,"__esModule",{value:!0});var h=t(5),m=t.n(h),y=t(0),v=(t.n(y),t(1)),g=(t.n(v),t(2)),x=(t.n(g),t(4)),k=(t.n(x),t(3)),j=(t.n(k),new Audio);j.autoPlay=!0;var w=m()(".album"),b=m()(".album-list"),C=m()(".control .icon-play"),I=m()(".control .icon-pause"),T=m()(".control .next"),_=m()(".control .pre"),z=m()(".disc"),q=m()(".musicbox .time"),E=m()(".timeline .progress .bar"),P=m()(".timeline .progress-now"),X=m()(".adjust-volume .progress .bar"),A=m()(".adjust-volume .progress-now"),J=m()(".lrc .icon-lrc"),L=m()(".lrc .icon-dis"),M=m()("main .pic-ct"),O=m()("main .lrc-ct"),S={channelId:"",atrist:"",lrc:"",picture:"",sid:"",title:"",url:""};m()(function(){s()}),w.on("click",function(){a(),b.toggleClass("hidden")}),w.on("click","li",function(n){n.stopPropagation();var i=m()(this).data("channel-id");S.channelId=i,s(S.channelId),I.css("display","none"),C.css("display","flex"),z.addClass("active"),b.addClass("hidden")}),T.on("click",function(){s(S.channelId),I.css("display","none"),C.css("display","flex"),z.addClass("active")}),_.on("click",function(){s(S.channelId),I.css("display","none"),C.css("display","flex"),z.addClass("active")}),C.on("click",function(){j.pause(),C.css("display","none"),I.css("display","flex"),z.removeClass("active")}),I.on("click",function(){j.play(),I.css("display","none"),C.css("display","flex"),z.addClass("active")}),E.on("click",function(n){var i=n.offsetX/parseInt(m()(this).width());j.currentTime=i*j.duration,P.width(100*i+"%")}),j.ontimeupdate=function(){d(),u(),p(),f()},X.on("click",function(n){var i=n.offsetX/parseInt(m()(this).width());j.volume=i,A.width(100*i+"%")}),J.on("click",function(){J.css("display","none"),L.css("display","inline-block"),M.css("display","none"),O.css("display","flex")}),L.on("click",function(){J.css("display","inline-block"),L.css("display","none"),M.css("display","flex"),O.css("display","none")})}],[6]);
//# sourceMappingURL=app.24b2bc99af0a1f535edc.js.map