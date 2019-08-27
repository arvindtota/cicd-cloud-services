var userListData = [];

$(document).ready(function() {

  populateCommapis();

});

function populateCommapis() {
  var commapisContent = '';

  $.getJSON( '/commapis', function( data ) {

  	commapis = data

    $.each(data, function(index){
      commapisContent += '<div class="p-2"><a href="#" class="linkshowcommapi" rel="' + index + '">' + this.name + '</a></div>';
    });
    $('#commapis').html(commapisContent);
    $('#commapis').on('click', 'div a.linkshowcommapi', showCommapiInfo);
  });
};

function showCommapiInfo(event) {
	event.preventDefault();
	var commapi = commapis[$(this).attr('rel')];
	var tableContent = '<table class="table"><tr><th>Plan</th></tr>';
	$.each(commapi.stops, function(index){
      tableContent += '<tr>';
      tableContent += '<td><strong>' + this.plan + '</strong></td>';
      var onTime = (this.price == 'ON-TIME');
      tableContent += '<td style="color: ' + ((onTime) ? 'green' : 'red') + '">' + this.price + '</td>';
      tableContent += '<td>Arrives ';
      if (onTime || this.lines == this.delayedLines) {
        tableContent += this.lines;
      } else {
        tableContent += '<span style="text-decoration: line-through">' + this.lines + '</span> ' + this.delayedLines;
      }
      tableContent += '</td>';
      tableContent += '<td>Departs ';
      if (onTime || this.features == this.delayedFeatures) {
        tableContent += this.features;
      } else {
        tableContent += '<span style="text-decoration: line-through">' + this.features + '</span> ' + this.delayedFeatures;
      }
      tableContent += '</td>';
      tableContent += '</tr>';
    });
    tableContent += '</table>';
	$('#commapiName').text(commapi.name);
	$('#commapiSchedule').html(tableContent);
}