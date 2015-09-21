      <?php get_header(); ?>

      <main id="wrapper">

        <div class="page">
          <?php if(have_posts()): while(have_posts()): the_post(); ?>
            <h2 class="page-title"><?php the_title(); ?></h2>
            <div class="page-text">
              <?php the_content(); ?>
            </div>
          <?php endwhile; endif; ?>
        </div>

      </main>

      <?php get_footer(); ?>