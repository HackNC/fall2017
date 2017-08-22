$.getJSON("schedule.json", function(data) {
    data.forEach(function(date) {
        $("#schedule-container").append(
           $('<h3>')
             .text(date['date'])
        );

        var $table = $('<table>', {'class': 'schedule'});
        var $schBody = $('<tbody>');

        $table.append(
            $('<thead>').append(
                $('<tr>')
                  .append($('<th>').text('Event'))
                  .append($('<th>').text('Time'))
                  .append($('<th>').text('Location'))
            )
        );

        date['schedule'].forEach(function(element) {
            var row = $('<tr>')
            row.append('<td>')
            $schBody.append(
                $('<tr>')
                  .append($('<td>').text(element['event']))
                  .append($('<td>').text(element['time']))
                  .append($('<td>').text(element['location']))
            )
        });

        console.log($schBody);

        $table.append($schBody);
        $('#schedule-container').append($table);

    });
});
