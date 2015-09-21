      <footer id="footer">
        <small class="copyright">Copyright © 2014-<?php echo date('Y'); ?> <a href="https://twitter.com/koluku">@koluku</a> All Rights Reserved.</small>
      </footer>
    </div>
    <?php if(is_single()): ?>
      <!-- Go to www.addthis.com/dashboard to customize your tools -->
      <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-532e80f32f7f0c03" async="async"></script>
    <?php endif ?>

    <?php wp_footer(); ?>

  </body>
</html>