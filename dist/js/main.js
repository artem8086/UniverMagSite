"use strict";(function(){var t;$(".preloader").removeClass("hidden"),t=function(){var t,e,a,o,n,r,s,d;return t=$(window),(o=$(".main-menu")).length&&(a=o.offset().top,s=function(){return t.scrollTop()<a?o.removeClass("fixed"):o.addClass("fixed")},(r=function(){return t.width()<=768?(t.unbind("scroll",s),o.removeClass("fixed")):(a=o.offset().top,t.scroll(s),s())})(),t.resize(r),(d=function(){var t,e,a,o,n,r,s;if((a=window.location.hash)?n=!1:(n=!0,a=$(document.body).attr("data-default-page")),r=!1,$(".js-buttom-page").each(function(){var t,e;return t=$(this),e=$(t.attr("href")),a===t.attr("href")?(t.addClass("active"),e.removeClass("hidden"),$(document).prop("title",t.text()+$(document.body).attr("data-title")),r=!0):(t.removeClass("active"),e.addClass("hidden"))}),e=$(a),r||(t=e.closest(".container"),o="#"+t.attr("id"),$(".js-buttom-page").each(function(){var e;if(e=$(this),o===e.attr("href"))return e.addClass("active"),t.removeClass("hidden"),$(document).prop("title",e.text()+$(document.body).attr("data-title"))})),!n)return s=e.offset().top,$("body,html").animate({scrollTop:s},250)})(),t.on("popstate",d)),$(".table__head").click(function(){return $(this).toggleClass("is-open")}),n=$(".nav-menu"),e=function(){return $("body, html").removeClass("overlay"),n.removeClass("active")},$(".nav-link").click(e),$(".nav-button").click(function(){return n.hasClass("active")?e():(n.addClass("active"),$("body, html").addClass("overlay"))})},$(document).ready(function(){return setTimeout(function(){return $(".preloader").addClass("done"),$(".js-loader").removeClass("hidden"),t()},250)})}).call(void 0);