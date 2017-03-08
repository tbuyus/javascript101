// var waitElement = document.getElementById('wait')
// var dots = 0
// var interval = 500
//
// setInterval(renderLoadingDots, interval)
//
// function renderLoadingDots() {
//   if (dots < 3) {
//     waitElement.innerHTML += '.'
//     dots++
//   } else {
//     waitElement.innerHTML = ''
//     dots = 0
//   }
// }

var MEETUP_API_URL = 'https://api.meetup.com/2/events?&sign=true&photo-host=public&group_urlname=CodeHub-Bristol&page=20'

$.ajax({
  url: MEETUP_API_URL,
  type: "GET",
  dataType: 'jsonp',
  success: function (response) {
    console.log('RESPONSE', response)
    var js101Events = response.results.filter(function(event) {
      console.log('EVENT NAME', event.name)
      return event.name === 'JavaScript 101'
    })
    var nextEvent = js101Events.shift()
    console.log('NEXTEVENT', nextEvent)
    $('#about').append('<h1>'+nextEvent.name+'</h1>')
    $('#about').append('<p>Time: '+new Date(nextEvent.time)+'</p>')
    $('#about').append('<p>Venue: '+nextEvent.venue.name+', ' + nextEvent.venue.city + '</p>')
    $('#about').append(nextEvent.description)
    $('#about').append('<br><a href="'+nextEvent.event_url+'" target="_blank" id="next-event">Join the next event on Meet up</a>')

    setInterval(function() {
      $('#next-event').toggleClass('hidden')
    }, 700)
  },
  error: function (xhr, status) {
    var eventUrl = 'https://www.meetup.com/CodeHub-Bristol/events/'
    $('#about').append('<br><br><a href="'+eventUrl+'" target="_blank">Join the next JavaScript101 event on Meetup</a>')
  }
});
