function quickviewSidebar(){function t(){$("#quickview-toggle").on("click",function(t){t.preventDefault(),$("#quickview-sidebar").hasClass("open")?$("#builder").removeClass("open"):$("#quickview-sidebar").addClass("open")})}$(".chat-back").on("click",function(){$(".chat-conversation").removeClass("current"),$(".chat-body").addClass("current")}),$(".chat-list").on("click","li",function(){var t=$(this).find(".user-name").html(),e=$(this).find(".user-txt").html(),i=$(this).find(".user-status").html(),a=$(this).find("img").attr("src");$(".chat-conversation .user-name").html(t),$(".chat-conversation .user-txt").html(e),$(".chat-conversation .user-status").html(i),$(".chat-conversation .user-img img").attr("src",a),$(".chat-conversation .conversation-body .conversation-img img").attr("src",a),$(".chat-body").removeClass("current"),$(".chat-conversation").addClass("current")}),$("#quickview-toggle").on("click",function(){$("#chat-notification").hide(),setTimeout(function(){$(".mm-panel .badge-danger").each(function(){$(this).removeClass("hide").addClass("animated bounceIn")})},1e3)}),$(".have-message").on("click",function(){$(this).removeClass("have-message"),$(this).find(".badge-danger").fadeOut()}),$(".send-message").keypress(function(t){if(13==t.keyCode){var e='<li class="img"><span><div class="chat-detail chat-right"><img src="assets/images/avatars/avatar1.png" data-retina-src="assets/images/avatars/avatar1_2x.png"/><div class="chat-detail"><div class="chat-bubble">'+$(this).val()+"</div></div></div></span></li>";$(e).hide().appendTo($(this).parent().parent().parent().find(".conversation-body ul")).fadeIn(),$(this).val(""),quickviewHeight(),customScroll()}}),content.addEventListener("click",function(t){chatSidebar=document.getElementById("quickview-sidebar");var e=t.target;e!==chatSidebar&&$("#quickview-sidebar").hasClass("open")&&($("#quickview-sidebar").addClass("closing"),$("#quickview-sidebar").removeClass("open"),setTimeout(function(){$("#quickview-sidebar").removeClass("closing")},400))}),$(".settings-chart .progress-bar").length&&$(".settings-tab").on("click",function(){setTimeout(function(){$(".settings-chart .setting1").progressbar(),window.myRadar=new Chart(document.getElementById("setting-chart").getContext("2d")).Radar(e,{responsive:!0,tooltipCornerRadius:0,animationSteps:60})},200),setTimeout(function(){$(".settings-chart .setting2").progressbar()},400)});var e={labels:["Eating","Drinking","Sleeping","Designing","Coding","Cycling","Running"],datasets:[{label:"My Second dataset",fillColor:"rgba(151,187,205,0.2)",strokeColor:"rgba(151,187,205,1)",pointColor:"rgba(151,187,205,1)",pointStrokeColor:"#fff",pointHighlightFill:"#fff",pointHighlightStroke:"rgba(151,187,205,1)",data:[38,48,40,89,96,27,90]}]};t()}function quickviewHeight(){$(".chat-conversation").height(""),chatConversationHeight=$(".chat-conversation").height(),windowHeight=$(window).height(),chatConversationHeight<windowHeight&&$(".chat-conversation").height($(window).height()-50)}$(document).ready(function(){quickviewSidebar(),quickviewHeight()}),$(window).resize(function(){noteTextarea(),quickviewHeight()});