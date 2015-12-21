      <?php get_header(); ?>

      <main id="wrapper">
        <div class="carousel">
          <img src="<?php header_image(); ?>" alt="">
        </div>

        <?php if(have_posts()): ?>
          <div class="articleList">
            <h2 class="articleList-headline">Articles</h2>
            <ul class="articleList-nav">
              <?php while(have_posts()): the_post(); ?>
                <li><time class="articleList-date"><?php echo get_the_date(); ?></time> <a href="<?php the_permalink(); ?>" class="articleList-title"><?php the_title(); ?></a></li>
              <?php endwhile; ?>
            </ul>
          </div>
        <?php endif; ?>

      </main>

      <?php get_footer(); ?>