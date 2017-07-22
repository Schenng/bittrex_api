$( document ).ready(function() {
    $( "#reloadBittrex" ).click(function() {
      reloadBittrex();
    });
});

function reloadBittrex() {
  $.get( "http://cors.io/?u=https://bittrex.com/api/v1.1/public/getmarketsummaries",
    function( data ) {

      var data = data.result
      console.log(data)
      var body = $('#bittrexTable'),

      props = [
        "MarketName",
        "Last",
        "Ask",
        "BaseVolume",
        "Bid",
        "Created",
        "High",
        "Low",
        "OpenBuyOrders",
        "OpenSellOrders",
        "PrevDay",
        "TimeStamp",
        "Volume"
      ];

      $.each(data, function(i, data) {
        var tr = $('<tr>');
        $.each(props, function(i, prop) {
          $('<td>').html(data[prop]).appendTo(tr);
        });
        body.append(tr);
      });

    }
  );
}

