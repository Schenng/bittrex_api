$( document ).ready(function() {
    console.log( "ready!" );
    $( "#reloadBittrex" ).click(function() {
      reloadBittrex();
    });
});

function reloadBittrex() {
  $.get( "https://bittrex.com/api/v1.1/public/getmarketsummaries",
    function( data ) {
      console.log(data);
    }
  );
}

