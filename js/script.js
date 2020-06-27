//http://sachinchoolur.github.io/lightGallery/

//====================== calling the light gallery plug in ======================================
    $(document).ready(function() {
        $("#lightgallery").lightGallery({
            counter: false
        }); 
    });
//============================== search box ==============================       
$("#search").keyup(function() {
        let searchInput = $("#search").val().toLowerCase();
            $('#lightgallery > a').hide().filter(function() {
                return $(this).attr('title').toLowerCase().includes(searchInput);
                }).show();
  });
  