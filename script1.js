var url = "http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?";
var getQuote = function(data) {
    
    $('.quote-text').text(data.quoteText);
    if(data.quoteAuthor === ""){
        dat.quoteAuthor = 'Unknown';
    }
    $('.author-text').text('Author : '+data.quoteAuthor);
    var quot = 'https://twitter.com/intent/tweet?text=' + data.quoteText + ' Author ' + data.quoteAuthor +' @Rafase282 goo.gl/2h0NHo';
    $('.twitter-share-button').attr('href',quot);
}
$(document).ready(function(){
    $.getJSON(url,getQuote,'jsonp');
    
    $('#quote').click(function(){
    console.log("clicked");
      $.getJSON(url,getQuote,'jsonp');
});
});

