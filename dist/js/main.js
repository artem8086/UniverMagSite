"use strict";(function(){var t;$(".preloader").removeClass("hidden"),t=function(){var t,e,a,o,n,r,s,d;return t=$(window),(o=$(".main-menu")).length&&(a=o.offset().top,s=function(){return t.scrollTop()<a?o.removeClass("fixed"):o.addClass("fixed")},(r=function(){return t.width()<=768?(t.unbind("scroll",s),o.removeClass("fixed")):(a=o.offset().top,t.scroll(s),s())})(),t.resize(r),(d=function(){var t,e,a,o,n,r,s;if((a=window.location.hash)?n=!1:(n=!0,a=$(document.body).attr("data-default-page")),r=!1,$(".js-buttom-page").each(function(){var t,e;return t=$(this),e=$(t.attr("href")),a===t.attr("href")?(t.addClass("active"),e.removeClass("hidden"),$(document).prop("title",t.text()+$(document.body).attr("data-title")),r=!0):(t.removeClass("active"),e.addClass("hidden"))}),e=$(a),r||(t=e.closest(".container"),o="#"+t.attr("id"),$(".js-buttom-page").each(function(){var e;if(e=$(this),o===e.attr("href"))return e.addClass("active"),t.removeClass("hidden"),$(document).prop("title",e.text()+$(document.body).attr("data-title"))})),!n)return s=e.offset().top,$("body,html").animate({scrollTop:s},250)})(),t.on("popstate",d)),$(".table__head").click(function(){return $(this).toggleClass("is-open")}),n=$(".nav-menu"),e=function(){return $("body, html").removeClass("overlay"),n.removeClass("active")},$(".nav-link").click(e),$(".nav-button").click(function(){return n.hasClass("active")?e():(n.addClass("active"),$("body, html").addClass("overlay"))})},$(document).ready(function(){return setTimeout(function(){return $(".preloader").addClass("done"),$(".js-loader").removeClass("hidden"),t()},250)})}).call(void 0);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uY29mZmVlIl0sIm5hbWVzIjpbImxvYWQiLCIkIiwicmVtb3ZlQ2xhc3MiLCIkd2luZG93IiwiY2xvc2VNZW51IiwiaGVhZF9oZWlnaHQiLCJtYWluX21lbnUiLCJuYXZfbWVudSIsIm9uUmVzaXplIiwib25TY3JvbGwiLCJzdGF0ZUNoYW5nZSIsIndpbmRvdyIsImxlbmd0aCIsIm9mZnNldCIsInRvcCIsInNjcm9sbFRvcCIsImFkZENsYXNzIiwid2lkdGgiLCJ1bmJpbmQiLCJzY3JvbGwiLCJyZXNpemUiLCJjb250YWluZXIiLCJlbGVtIiwiaGFzaCIsImlkIiwiaXNJbmRleCIsImp1bXAiLCJsb2NhdGlvbiIsImRvY3VtZW50IiwiYm9keSIsImF0dHIiLCJlYWNoIiwiYnV0dG9uIiwidGhpcyIsInByb3AiLCJ0ZXh0IiwiY2xvc2VzdCIsImFuaW1hdGUiLCJvbiIsImNsaWNrIiwidG9nZ2xlQ2xhc3MiLCJoYXNDbGFzcyIsInJlYWR5Iiwic2V0VGltZW91dCJdLCJtYXBwaW5ncyI6ImNBQUEsZUFBQUEsRUFBQUMsRUFBRSxjQUFjQyxZQUFZLFVBRTVCRixFQUFPLGVBQ05HLEVBQUFDLEVBQUFDLEVBQUFDLEVBQUFDLEVBQUFDLEVBQUFDLEVBQUFDLFNBQUFQLEVBQVVGLEVBQUVVLFNBRVpMLEVBQVlMLEVBQUUsZUFDRFcsU0FDWlAsRUFBY0MsRUFBVU8sU0FBU0MsSUFDakNMLEVBQVcsV0FFVixPQURNTixFQUFRWSxZQUNMVixFQUNSQyxFQUFVSixZQUFZLFNBRXRCSSxFQUFVVSxTQUFTLFdBRWxCUixFQUFXLFdBQ2IsT0FBR0wsRUFBUWMsU0FBVyxLQUNyQmQsRUFBUWUsT0FBTyxTQUFVVCxHQUN6QkgsRUFBVUosWUFBWSxXQUV0QkcsRUFBY0MsRUFBVU8sU0FBU0MsSUFDakNYLEVBQVFnQixPQUFPVixHQUNaQSxTQUVMTixFQUFRaUIsT0FBT1osSUFFWkUsRUFBYyxlQUNoQlcsRUFBQUMsRUFBQUMsRUFBQUMsRUFBQUMsRUFBQUMsRUFBQVosRUE2QkEsSUE3QkFTLEVBQU9aLE9BQU9nQixTQUFTSixNQUV0QkUsR0FBVSxHQUVWQSxHQUFVLEVBQ1ZGLEVBQU90QixFQUFFMkIsU0FBU0MsTUFBTUMsS0FBSyxzQkFDOUJKLEdBQU8sRUFDUHpCLEVBQUUsbUJBQW1COEIsS0FBSyxlQUN6QkMsRUFBQVYsRUFFQSxPQUZBVSxFQUFTL0IsRUFBRWdDLE1BQ1hYLEVBQU9yQixFQUFFK0IsRUFBT0YsS0FBSyxTQUNsQlAsSUFBUVMsRUFBT0YsS0FBSyxTQUN0QkUsRUFBT2hCLFNBQVMsVUFDaEJNLEVBQUtwQixZQUFZLFVBQ2pCRCxFQUFFMkIsVUFBVU0sS0FBSyxRQUFTRixFQUFPRyxPQUFTbEMsRUFBRTJCLFNBQVNDLE1BQU1DLEtBQUssZUFDaEVKLEdBQU8sSUFFUE0sRUFBTzlCLFlBQVksVUFDbkJvQixFQUFLTixTQUFTLGFBRWhCTSxFQUFPckIsRUFBRXNCLEdBQ0ZHLElBQ05MLEVBQVlDLEVBQUtjLFFBQVEsY0FDekJaLEVBQUssSUFBTUgsRUFBVVMsS0FBSyxNQUMxQjdCLEVBQUUsbUJBQW1COEIsS0FBSyxlQUN6QkMsRUFDQSxHQURBQSxFQUFTL0IsRUFBRWdDLE1BQ1JULElBQU1RLEVBQU9GLEtBQUssZUFDcEJFLEVBQU9oQixTQUFTLFVBQ2hCSyxFQUFVbkIsWUFBWSxVQUN0QkQsRUFBRTJCLFVBQVVNLEtBQUssUUFBU0YsRUFBT0csT0FBU2xDLEVBQUUyQixTQUFTQyxNQUFNQyxLQUFLLG1CQUM1REwsU0FDTlgsRUFBTVEsRUFBS1QsU0FBU0MsSUFDcEJiLEVBQUUsYUFBYW9DLFFBQVEsQ0FBQXRCLFVBQVdELEdBQUssU0FFekNYLEVBQVFtQyxHQUFHLFdBQVk1QixJQUd4QlQsRUFBRSxnQkFBZ0JzQyxNQUFNLGtCQUN2QnRDLEVBQUVnQyxNQUFNTyxZQUFZLGFBRXJCakMsRUFBV04sRUFBRSxhQUNiRyxFQUFZLGtCQUNYSCxFQUFFLGNBQWNDLFlBQVksV0FDNUJLLEVBQVNMLFlBQVksV0FFdEJELEVBQUUsYUFBYXNDLE1BQU1uQyxHQUVyQkgsRUFBRSxlQUFlc0MsTUFBTSxXQUN0QixPQUFHaEMsRUFBU2tDLFNBQVMsVUFDakJyQyxLQUVIRyxFQUFTUyxTQUFTLFVBQ2xCZixFQUFFLGNBQWNlLFNBQVMsZUFFNUJmLEVBQUUyQixVQUFVYyxNQUFNLGtCQUNqQkMsV0FBQSxrQkFDQzFDLEVBQUUsY0FBY2UsU0FBUyxRQUN6QmYsRUFBRSxjQUFjQyxZQUFZLFVBQ3pCRixLQUNEIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKCcucHJlbG9hZGVyJykucmVtb3ZlQ2xhc3MgJ2hpZGRlbidcclxuXHJcbmxvYWQgPSAtPlxyXG5cdCR3aW5kb3cgPSAkIHdpbmRvd1xyXG5cdCMgZml4ZWQgbWVudVxyXG5cdG1haW5fbWVudSA9ICQgJy5tYWluLW1lbnUnXHJcblx0aWYgbWFpbl9tZW51Lmxlbmd0aFxyXG5cdFx0aGVhZF9oZWlnaHQgPSBtYWluX21lbnUub2Zmc2V0KCkudG9wXHJcblx0XHRvblNjcm9sbCA9IC0+XHJcblx0XHRcdHRvcCA9ICR3aW5kb3cuc2Nyb2xsVG9wKClcclxuXHRcdFx0aWYgdG9wIDwgaGVhZF9oZWlnaHRcclxuXHRcdFx0XHRtYWluX21lbnUucmVtb3ZlQ2xhc3MgJ2ZpeGVkJ1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0bWFpbl9tZW51LmFkZENsYXNzICdmaXhlZCdcclxuXHJcblx0XHRkbyBvblJlc2l6ZSA9IC0+XHJcblx0XHRcdGlmICR3aW5kb3cud2lkdGgoKSA8PSA3NjhcclxuXHRcdFx0XHQkd2luZG93LnVuYmluZCAnc2Nyb2xsJywgb25TY3JvbGxcclxuXHRcdFx0XHRtYWluX21lbnUucmVtb3ZlQ2xhc3MgJ2ZpeGVkJ1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0aGVhZF9oZWlnaHQgPSBtYWluX21lbnUub2Zmc2V0KCkudG9wXHJcblx0XHRcdFx0JHdpbmRvdy5zY3JvbGwgb25TY3JvbGxcclxuXHRcdFx0XHRkbyBvblNjcm9sbFxyXG5cclxuXHRcdCR3aW5kb3cucmVzaXplIG9uUmVzaXplXHJcblxyXG5cdFx0ZG8gc3RhdGVDaGFuZ2UgPSAtPlxyXG5cdFx0XHRoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2hcclxuXHRcdFx0aWYgaGFzaFxyXG5cdFx0XHRcdGlzSW5kZXggPSBmYWxzZVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0aXNJbmRleCA9IHRydWVcclxuXHRcdFx0XHRoYXNoID0gJChkb2N1bWVudC5ib2R5KS5hdHRyICdkYXRhLWRlZmF1bHQtcGFnZSdcclxuXHRcdFx0anVtcCA9IGZhbHNlXHJcblx0XHRcdCQoJy5qcy1idXR0b20tcGFnZScpLmVhY2ggLT5cclxuXHRcdFx0XHRidXR0b24gPSAkKHRoaXMpXHJcblx0XHRcdFx0ZWxlbSA9ICQgYnV0dG9uLmF0dHIgJ2hyZWYnXHJcblx0XHRcdFx0aWYgaGFzaCA9PSBidXR0b24uYXR0ciAnaHJlZidcclxuXHRcdFx0XHRcdGJ1dHRvbi5hZGRDbGFzcyAnYWN0aXZlJ1xyXG5cdFx0XHRcdFx0ZWxlbS5yZW1vdmVDbGFzcyAnaGlkZGVuJ1xyXG5cdFx0XHRcdFx0JChkb2N1bWVudCkucHJvcCAndGl0bGUnLCBidXR0b24udGV4dCgpICsgJChkb2N1bWVudC5ib2R5KS5hdHRyICdkYXRhLXRpdGxlJ1xyXG5cdFx0XHRcdFx0anVtcCA9IHRydWVcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRidXR0b24ucmVtb3ZlQ2xhc3MgJ2FjdGl2ZSdcclxuXHRcdFx0XHRcdGVsZW0uYWRkQ2xhc3MgJ2hpZGRlbidcclxuXHRcdFx0I1xyXG5cdFx0XHRlbGVtID0gJCBoYXNoXHJcblx0XHRcdGlmIG5vdCBqdW1wXHJcblx0XHRcdFx0Y29udGFpbmVyID0gZWxlbS5jbG9zZXN0ICcuY29udGFpbmVyJ1xyXG5cdFx0XHRcdGlkID0gJyMnICsgY29udGFpbmVyLmF0dHIgJ2lkJ1xyXG5cdFx0XHRcdCQoJy5qcy1idXR0b20tcGFnZScpLmVhY2ggLT5cclxuXHRcdFx0XHRcdGJ1dHRvbiA9ICQodGhpcylcclxuXHRcdFx0XHRcdGlmIGlkID09IGJ1dHRvbi5hdHRyICdocmVmJ1xyXG5cdFx0XHRcdFx0XHRidXR0b24uYWRkQ2xhc3MgJ2FjdGl2ZSdcclxuXHRcdFx0XHRcdFx0Y29udGFpbmVyLnJlbW92ZUNsYXNzICdoaWRkZW4nXHJcblx0XHRcdFx0XHRcdCQoZG9jdW1lbnQpLnByb3AgJ3RpdGxlJywgYnV0dG9uLnRleHQoKSArICQoZG9jdW1lbnQuYm9keSkuYXR0ciAnZGF0YS10aXRsZSdcclxuXHRcdFx0aWYgbm90IGlzSW5kZXhcclxuXHRcdFx0XHR0b3AgPSBlbGVtLm9mZnNldCgpLnRvcFxyXG5cdFx0XHRcdCQoJ2JvZHksaHRtbCcpLmFuaW1hdGUgc2Nyb2xsVG9wOiB0b3AsIDI1MFxyXG5cclxuXHRcdCR3aW5kb3cub24gJ3BvcHN0YXRlJywgc3RhdGVDaGFuZ2VcclxuXHRcdCMgJCgnLmpzLWJ1dHRvbS1wYWdlJykuY2xpY2sgc3RhdGVDaGFuZ2VcclxuXHJcblx0JCgnLnRhYmxlX19oZWFkJykuY2xpY2sgLT5cclxuXHRcdCQodGhpcykudG9nZ2xlQ2xhc3MgJ2lzLW9wZW4nXHJcblxyXG5cdG5hdl9tZW51ID0gJCAnLm5hdi1tZW51J1xyXG5cdGNsb3NlTWVudSA9IC0+XHJcblx0XHQkKCdib2R5LCBodG1sJykucmVtb3ZlQ2xhc3MgJ292ZXJsYXknXHJcblx0XHRuYXZfbWVudS5yZW1vdmVDbGFzcyAnYWN0aXZlJ1xyXG5cclxuXHQkKCcubmF2LWxpbmsnKS5jbGljayBjbG9zZU1lbnVcclxuXHJcblx0JCgnLm5hdi1idXR0b24nKS5jbGljayAtPlxyXG5cdFx0aWYgbmF2X21lbnUuaGFzQ2xhc3MgJ2FjdGl2ZSdcclxuXHRcdFx0ZG8gY2xvc2VNZW51XHJcblx0XHRlbHNlXHJcblx0XHRcdG5hdl9tZW51LmFkZENsYXNzICdhY3RpdmUnXHJcblx0XHRcdCQoJ2JvZHksIGh0bWwnKS5hZGRDbGFzcyAnb3ZlcmxheSdcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5IC0+XHJcblx0c2V0VGltZW91dCAoLT5cclxuXHRcdCQoJy5wcmVsb2FkZXInKS5hZGRDbGFzcyAnZG9uZSdcclxuXHRcdCQoJy5qcy1sb2FkZXInKS5yZW1vdmVDbGFzcyAnaGlkZGVuJ1xyXG5cdFx0ZG8gbG9hZFxyXG5cdCksIDI1MCJdfQ==
