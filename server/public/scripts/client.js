console.log('client.js has been loaded')

$(document).ready(readyNow)

function readyNow() {
    $('#newQuoteButton').on('click', function () {
        console.log('something')

        $.ajax({
            method: 'POST',
            url: '/quotes/new',
            data: { quote_to_add: $('input').val() },
            success: function (response) {
                console.log('new quote post response:', response);

                $.ajax({
                    method: 'GET',
                    url: '/quotes/all',
                    success: function (response) {
                        getAllQuotes()

                    }
                })
            }
        })

    });
    function getAllQuotes() {
        $.ajax({
            method: 'GET',
            url: '/quotes/all',
            success: function (response) {
                $('ul').html('')
                for (let index = 0; index < response.length; index++) {
                    $('ul').append ('<li>'+response[index].quoteText+'</li>');
                    
                }

            }
        })


    }
    $.ajax({
        method: 'GET',
        url: '/quotes/all',
        success: function (response) {
            $('p').html(response.quoteText)

            console.log(response);

        },
        error: function (error) {
            console.log("There was an error getting a random quote")
        }
    })
    $.ajax({
        method: 'GET',
        url: '/quotes/first',
        success: function (response) {
            $('p').html(response.quoteText)
            console.log('first quote response', response)
        }
    })
};