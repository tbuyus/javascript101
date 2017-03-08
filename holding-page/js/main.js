// Run
$(document).ready(function() {
  animateLoader(renderNextEventPage)
});

function animateLoader(callback) {
  var barElement = document.getElementById('bar')
  var barSpeed = 1000
  var barWidth = 0
  var interval = setInterval(function() {
    if (barWidth <= 100) {
      barElement.style.width = barWidth + '%'
      barWidth += 10
    } else {
      clearInterval(interval)
      callback()
    }
  }, barSpeed)
}

function iCanHazCheezburger() {
  $('#root')
    .empty()
    .append('<marquee direction="down" width="100%" height="600px" behavior="alternate" style="border:solid"><marquee behavior="alternate"><img src="holding-page/img/cheezburger.jpg"></marquee></marquee>')
}

function bindMouseTrapEvents() {
  Mousetrap.bind(['up down left right enter', 'j s'], function() {
    iCanHazCheezburger();
  });
  Mousetrap.bind(['esc', 'space', 'enter'], function() {
    renderNextEventPage();
  });
}

function renderNextEventPage() {
  var EVENT_NAME = 'JavaScript 101'
  var NEXT_EVENT_URL = 'https://api.meetup.com/2/events?&sign=true&photo-host=public&group_urlname=CodeHub-Bristol&page=20'
  var EVENT_CALENDAR_URL = 'https://www.meetup.com/CodeHub-Bristol/'
  var SECRECT_URL_SHH_DONT_TELL_ANYONE = 'https://goo.gl/CxoGZk'
  $.ajax({
    url: NEXT_EVENT_URL,
    type: "GET",
    dataType: 'jsonp',
    success: function (response) {
      var js101Events = response.results.filter(function(event) {
        return event.name === EVENT_NAME
      })
      var nextEvent = js101Events.shift()

      $('#root')
        .empty()
        .append('<h1>'+nextEvent.name+'</h1>')
        .append('<p>Time: '+new Date(nextEvent.time)+'</p>')
        .append('<p>Venue: '+nextEvent.venue.name+', ' + nextEvent.venue.city + '</p>')
        .append('<br>'+nextEvent.description)
        .append('<br><a href="'+nextEvent.event_url+'" target="_blank" id="next-event">Join the next event on Meet up</a>')
        .append('<br><br><a href="'+SECRECT_URL_SHH_DONT_TELL_ANYONE+'" target="_blank">The secret to Javascripts</a>')

      bindMouseTrapEvents()
    },
    error: function (xhr, status) {
      $('#root')
        .empty()
        .append('<h1>Error</h1>')
        .append('<h2>Something went wrong!</h2>')
        .append('<h2>Please try refreshing the page or try the meetup link below.</h2>')
        .append('<br><br><a href="'+EVENT_CALENDAR_URL+'" target="_blank">Join the next JavaScript101 event on Meetup</a>')
    }
  });
}
