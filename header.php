<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title><?php bloginfo('name'); ?></title>
    <meta name="pocket-site-verification" content="99770655dad949d04d0b6ffe82ab71">
    <link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>">

    <?php wp_head(); ?>

  </head>
  <body>
    <div id="container">
      <header id="header">
        <h1 class="logo"><a href="<?php bloginfo('url'); ?>"><?php bloginfo('name'); ?></a></h1>

        <?php wp_nav_menu(array(
          'theme_location' => 'navbar',
          'menu_class' => 'navbar',
          'container' => 'nav'
        )); ?>

      </header>