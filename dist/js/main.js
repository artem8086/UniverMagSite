"use strict";(function(){var e,t,a;e=null,$(".preloader").removeClass("hidden"),t=function(){return e&&(e.removeClass("active"),$(e.attr("href")).addClass("hidden")),(e=$(this)).addClass("active"),$(e.attr("href")).removeClass("hidden"),$(document).prop("title",e.text()+$(document.body).attr("data-title"))},a=window.location.hash||$(document.body).attr("data-default-page"),$(".js-buttom-page").each(function(){var d;if((d=$(this)).click(t),a===d.attr("href"))return e=d,t.call(d)}),$(document).ready(function(){return setTimeout(function(){return $(".preloader").addClass("done"),$(".js-loader").removeClass("hidden")},1e3)})}).call(void 0);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uY29mZmVlIl0sIm5hbWVzIjpbImFjdGl2ZVBhZ2UiLCJhZGRBY3RpdmUiLCJoYXNoIiwiJCIsInJlbW92ZUNsYXNzIiwiYXR0ciIsImFkZENsYXNzIiwidGhpcyIsImRvY3VtZW50IiwicHJvcCIsInRleHQiLCJib2R5Iiwid2luZG93IiwibG9jYXRpb24iLCJlYWNoIiwiYnV0dG9uIiwiY2xpY2siLCJjYWxsIiwicmVhZHkiLCJzZXRUaW1lb3V0Il0sIm1hcHBpbmdzIjoiY0FBQSxlQUFBQSxFQUtDQyxFQUFBQyxFQUxERixFQUFhLEtBRWJHLEVBQUUsY0FBY0MsWUFBWSxVQUczQkgsRUFBWSxrQkFDUkQsSUFDRkEsRUFBV0ksWUFBWSxVQUN2QkQsRUFBRUgsRUFBV0ssS0FBSyxTQUFTQyxTQUFTLFlBQ3JDTixFQUFhRyxFQUFFSSxPQUNKRCxTQUFTLFVBQ3BCSCxFQUFFSCxFQUFXSyxLQUFLLFNBQVNELFlBQVksVUFDdkNELEVBQUVLLFVBQVVDLEtBQUssUUFBU1QsRUFBV1UsT0FBU1AsRUFBRUssU0FBU0csTUFBTU4sS0FBSyxnQkFFckVILEVBQU9VLE9BQU9DLFNBQVNYLE1BQVFDLEVBQUVLLFNBQVNHLE1BQU1OLEtBQUsscUJBQ3JERixFQUFFLG1CQUFtQlcsS0FBSyxlQUN6QkMsRUFFQSxJQUZBQSxFQUFTWixFQUFFSSxPQUNKUyxNQUFNZixHQUNWQyxJQUFRYSxFQUFPVixLQUFLLGVBQ3RCTCxFQUFhZSxFQUNiZCxFQUFVZ0IsS0FBS0YsS0FFbEJaLEVBQUVLLFVBQVVVLE1BQU0sa0JBQ2pCQyxXQUFBLGtCQUNDaEIsRUFBRSxjQUFjRyxTQUFTLFFBQ3pCSCxFQUFFLGNBQWNDLFlBQVksV0FDMUIiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImFjdGl2ZVBhZ2UgPSBudWxsXHJcblxyXG4kKCcucHJlbG9hZGVyJykucmVtb3ZlQ2xhc3MgJ2hpZGRlbidcclxuXHJcbmRvIC0+XHJcblx0YWRkQWN0aXZlID0gLT5cclxuXHRcdGlmIGFjdGl2ZVBhZ2VcclxuXHRcdFx0YWN0aXZlUGFnZS5yZW1vdmVDbGFzcyAnYWN0aXZlJ1xyXG5cdFx0XHQkKGFjdGl2ZVBhZ2UuYXR0cignaHJlZicpKS5hZGRDbGFzcyAnaGlkZGVuJ1xyXG5cdFx0YWN0aXZlUGFnZSA9ICQodGhpcylcclxuXHRcdGFjdGl2ZVBhZ2UuYWRkQ2xhc3MgJ2FjdGl2ZSdcclxuXHRcdCQoYWN0aXZlUGFnZS5hdHRyKCdocmVmJykpLnJlbW92ZUNsYXNzICdoaWRkZW4nXHJcblx0XHQkKGRvY3VtZW50KS5wcm9wICd0aXRsZScsIGFjdGl2ZVBhZ2UudGV4dCgpICsgJChkb2N1bWVudC5ib2R5KS5hdHRyICdkYXRhLXRpdGxlJ1xyXG5cclxuXHRoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2ggfHwgJChkb2N1bWVudC5ib2R5KS5hdHRyICdkYXRhLWRlZmF1bHQtcGFnZSdcclxuXHQkKCcuanMtYnV0dG9tLXBhZ2UnKS5lYWNoIC0+XHJcblx0XHRidXR0b24gPSAkKHRoaXMpXHJcblx0XHRidXR0b24uY2xpY2sgYWRkQWN0aXZlXHJcblx0XHRpZiBoYXNoID09IGJ1dHRvbi5hdHRyICdocmVmJ1xyXG5cdFx0XHRhY3RpdmVQYWdlID0gYnV0dG9uXHJcblx0XHRcdGFkZEFjdGl2ZS5jYWxsIGJ1dHRvblxyXG5cclxuJChkb2N1bWVudCkucmVhZHkgLT5cclxuXHRzZXRUaW1lb3V0ICgtPlxyXG5cdFx0JCgnLnByZWxvYWRlcicpLmFkZENsYXNzICdkb25lJ1xyXG5cdFx0JCgnLmpzLWxvYWRlcicpLnJlbW92ZUNsYXNzICdoaWRkZW4nXHJcblx0KSwgMTAwMCJdfQ==
