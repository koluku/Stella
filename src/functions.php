<?php

  // # アップデート条件の指定
  // ## 開発バージョンとメジャーアップデートの自動更新の停止
  add_filter( 'allow_dev_auto_core_updates', '__return_false' );
  add_filter( 'allow_major_auto_core_updates', '__return_true' );
  add_filter( 'allow_minor_auto_core_updates', '__return_true' );

  // ## プラグインの自動更新の無効化
  add_filter( 'auto_update_plugin', '__return_true' );

  // ## 翻訳ファイルの自動更新
  add_filter( 'auto_update_translation', '__return_true' );


  // # 有効化
  register_sidebar();
  register_nav_menus(array(
      'navbar' => 'ナビゲーションバー'
    ));

  add_theme_support('automatic-feed-links');
  add_theme_support('custom-header');
  add_theme_support('custom-background');

?>