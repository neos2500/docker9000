<?php
/* フッターに CSS や Javascript 等を追加したい場合は、?> 以降に書いてください。
 (To add CSS or Javascript in the footer, please write them after the below ?>. ) */
?>
<!-- jQuery CDN読み込み 8/14 -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<!-- slick CDN読み込み 8/15    -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js"></script>
<script src="<?php echo get_stylesheet_directory_uri(); ?>/slick/slick.min.js"></script>


<!-- 映像作品slick 動かし方 読み込み 8/16-->
<script>
$('.slick').slick({
  autoplay: true,
  // 自動再生で切り替えをする時間
  autoplaySpeed: 3000,
});


// サムネイルのスライダー 8/16
$('.thumbnail').slick({
asNavFor: '.slick',
slidesToShow: 3,
slidesToScroll: 1,
centerMode: true,
focusOnSelect: true,
});
</script>

<!-- 名刺タイトルを自己紹介の直前で止める -->
<!-- <script> 
$(window).on("scroll", function() {
  scrollPosition = $(window).scrollTop();

  if (scrollPosition >= 670) {
    $("#panel-15-0-0-1").css({
      position: "absolute",
      top: 1110
    });
  } else {
    $("#panel-15-0-0-1").css({
      position: "fixed",
      top: 500
    });
  }
});
</script> -->