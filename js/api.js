(function($){
 
  $('#new-quote-button').on('click', function(e) {
    
    e.preventDefault ();
    console.log('hi');
  
    // console.log('click');
    $('.entry-content').empty();
    $('.entry-title').empty();  

      $.ajax({
        method:'GET',
        url: api_vars.root_url + 'wp/v2/posts/?filter[orderby]=rand&filter[posts_per_page]=1',

      }).done(function(data){
        
        data = data.shift(); 

        console.log(data);

        history.pushState(null, null, data.slug);
        
        $('.entry-content').append(data.content.rendered);
        $('.entry-title').append(data.title.rendered).prepend('&mdash;');
        // $('.entry-title').append(data._qod_quote_source);

        if(data._qod_quote_source){
          $('.entry-title').append( ' - ' + '<a href="' + data._qod_quote_source_url + '">' + data._qod_quote_source + '</a>');
          
        }
        else{
          $('.entry-title').append(data._qod_quote_source);
        }

        });
     });

     $('#submit-button').on('click', function(e){
       e.preventDefault();
        
      $.ajax({
        method: 'post',
        url: api_vars.root_url + 'wp/v2/posts',
        data: {

         'status': 'publish',
         'title': $('#quote-author').val(),
         'content': $('#quote-content').val(),
         '_qod_quote_source': $('#quote-source').val(),
         '_qod_quote_source_url': $('#quote-source-url').val()

        },
        beforeSend: function(xhr) {
           xhr.setRequestHeader( 'X-WP-Nonce', api_vars.nonce );
        }
        
      }).done( function() {
        alert('Thanks for the submission!');
      })
      // .always( function() {
      //   // $('#quote-submission-form').trigger('reset');
      //   });
     });

})(jQuery)
