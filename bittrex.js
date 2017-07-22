$( document ).ready(function() {
    $( "#reloadBittrex" ).click(function() {
      reloadBittrex();
    });
});

function reloadBittrex() {
  $.get( "https://bittrex.com/api/v1.1/public/getmarketsummaries",
    function( data ) {

      var data = data.result
      console.log(data)
      var body = $('#bittrexTable'),

      props = [
        "Ask",
        "BaseVolume",
        "Bid",
        "Created",
        "High",
        "Last",
        "Low",
        "MarketName",
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

