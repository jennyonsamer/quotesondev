<?php

get_header(); ?>

<div class= "content-area">
<main id="main" class= "site-main">
  <section>
    <header>
    <?php the_title('<h1 class="entry-title>"', '</h1>'); ?>
    </header>
    
      <?php if( is_user_logged_in() && current_user_can('edit_posts' ) ): ?>

    <div class="quotes-submission-wrapper">
    <form name="quoteForm" id="quote-submission-form" >

      <div>
        <label for="quote-author">Author of Quote</label>
        <input type="text" name="quote_author" id="quote-author" >
      </div>
      <!-- var quoteAuthor = $('#quote-author').val(); -->
      <div>
        <label for="quote-content">Quote</label>
        <textarea rows="3" cols="20" name="quote_content" id="quote-content" ></textarea>
      </div>

      <div>
        <label for="quote-source">where did u find this quote</label>
        <input type="text" name="quote_source" id="quote-source" >
      </div>

      <div>
        <label for="quote-source-url">Provide a URL</label>
        <input type="url" name="quote_source_url" id="quote-source-url" >
      </div>

      <input type="submit" value="submit quote" id="submit-button">      
      </form>

      <p class="submit-success-message"></p>

    </div>
    <?php else:?>
      <p>none shall post!</p>
      <p><?php echo sprintf('<a href= "%1s">%2s</a>',
      esc_url( wp_login_url()) , 'Click here to login.' );?></p>
    <?php endif;?>
  </section>
</main>
</div>

<?php get_footer(); ?>