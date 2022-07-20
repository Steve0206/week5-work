"use strict";

$('document').ready(function () {
  $(".nav-link").each(function () {
    if ($(this)[0].href == String(window.location)) {
      $(this).addClass("menu-active").siblings().removeClass("menu-active");
    }
  }); //這是網路上找到的寫法 我不太知道 $(this) 讀出來是怎樣的陣列 然後第一個物件有 href 屬性
  //另外如果要使用ejs current 變數 要如何寫

  $(".reply-check").click(function (event) {
    event.preventDefault();
    $(".reply-window").addClass("reply-active");
  });
  $(".reply-cancel").click(function (event) {
    event.preventDefault();
    $(".reply-window").removeClass("reply-active");
  });
});
//# sourceMappingURL=all.js.map
