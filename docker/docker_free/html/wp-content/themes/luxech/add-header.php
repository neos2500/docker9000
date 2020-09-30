<?php
/* ヘッダーに CSS や Javascript 等を追加したい場合は、以下の ?> 以降にに書いてください
 *
 * 記事や固定ページ単位でヘッダーを追加したい場合は、
 * 記事投稿(編集)画面で、カスタムフィールドに addhead という名前を追加し、
 * 値の部分に CSS や Javascript を書くことで、ヘッダーを追加することもできます。
 *
 * To add CSS or Javascript in the header, please write them after the below ?>.
 *
 * If you want to。add elements in header for certain posts or pages,
 * create a customfield with the name of "addhead" and write your own CSS or Javascript.
 * These elements will be added in the header.
*/
?>
<!-- scrollrevealのCDN挿入 8/14 -->
<script src="https://unpkg.com/scrollreveal"></script>
<!-- slick CSS読み込み 8/15 -->
<link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri(); ?>/slick/slick.css" media="screen" />
<link rel="stylesheet" type="text/css" href="<?php echo get_stylesheet_directory_uri(); ?>/slick/slick-theme.css" media="screen" />