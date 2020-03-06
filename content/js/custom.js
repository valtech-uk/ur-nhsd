jQuery(function(){
    $( "#search" ).submit(function( event ) {
        var term = $(this).find("input#query").val();
        window.location.href = "../search/search-results.html?area=all&query=" + term;
        event.preventDefault();
    });
});