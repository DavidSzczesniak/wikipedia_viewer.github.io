$(document).ready(function(){
    // Run when search-btn clicked
    $('#search-btn').click(function(){
      // Takes search input
      var searchTerm = $('#search-bar').val();
      // API URL with seach input
      var url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search='+searchTerm+'&format=json&callback=?'
      
      $.ajax({
        type: 'GET',
        url: url,
        async: false,
        dataType: 'json',
        // If it's able to fetch the information successfuly
        success: function(data){
          
          // Get heading
         // console.log(data[1][0]);
          // Get description
         // console.log(data[2][0]);
          // Get link
         // console.log(data[3][0]);
          
          // Deletes previous search
          $('#output').html('');
       // Displays output    
       for (var i = 0; i < data[1].length; i++) {
          $('#output').prepend('<div class="result-tabs"<li><a href= '+data[3][i]+' style="text-decoration: none; color: #338AC3;" target="_blank"><h4 class="result-titles">'+data[1][i]+'</h4></a><p>'+data[2][i]+'</p></li></div>');
          }
          
        },
        // If theres a problem fetching information from the API
        error: function(errorMessage){
          alert('Error');
        }
        
      });
      
    });
  });
  
  
  
  