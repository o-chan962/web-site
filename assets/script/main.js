var hamburger = $('.hamburger-menu');

// OPEN/CLOSEボタンをクリックしたら
$('.hamburger-button').on('click', function () {

    // .hamburgerの表示・非表示を繰り返す
    hamburger.toggleClass('hamburger-menu-active');

});

// 画面幅のサイズが変わったら
$(window).on('resize', function () {

    // ハンバーガーメニューを閉じる
    hamburger.removeClass('hamburger-menu-active');
});


//カルーセル
$('.gallery__slick').slick({
  dots:true,
  slidesToShow: 1
});

// アコーディオンのタイトルがクリックされたら
$('.qa__accordion-title').on('click', function(e) {

  // .qa__accordion-contentを選択
  var content = $(this).next();

  // .qa__accordion-contentを表示・非表示
  content.slideToggle()

  // .i.bi.bi-caret-down-fillを逆さまに
  $(this).toggleClass('is-open');

});

$(window).on('resize', function () {});
