      <?php get_header(); ?>

      <main id="wrapper">
        <article class="article">
          <?php if(have_posts()): while(have_posts()): the_post(); ?>
            <time class="article-date"><?php echo get_the_date(); ?></time>
            <h2 class="article-title"><?php the_title(); ?></h2>
            <div class="article-text">
              <?php the_content(); ?>
            </div>
          <?php endwhile; endif; ?>
        </article>
        <div class="snsBookmark">
          <!-- Go to www.addthis.com/dashboard to customize your tools -->
          <div class="addthis_sharing_toolbox"></div>
        </div>
        <div class="comment">
          <?php comments_template(); ?>
        </div>
      </main>

      <?php get_footer(); ?>