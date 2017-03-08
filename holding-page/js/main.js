// var source = Rx.Observable
//     .interval(10000 /* ms */)
//     .timeInterval()
//     .take(3)
//     .startWith(0);
//
// var subscription = source.subscribe(
//   function (x) {
//       console.log(x);
//       if (x === 0) {
//         renderLoadingScreen()
//       }
//       $('#root').html('Next: ' + x.value)
//   },
//   function (err) {
//       console.log('Error: ' + err);
//   },
//   function () {
//       console.log('Completed');
//   });

renderLoadingScreen()

function renderLoadingScreen() {
  var rootElement = document.getElementById('root')
  var dots = 0
  var interval = 1000

  renderTitle()
  renderLoader()
  // animateLoader()

  function renderTitle() {
    var show = true
    var LOADING_MSG = 'Loading Awesomes'
    var titleElement = document.createElement('h1')
    titleElement.innerHTML = LOADING_MSG
    rootElement.appendChild(titleElement)
    // setInterval(function() {
    //   show = !show
    //   titleElement.className = show ? '' : 'hidden'
    // }, 700)
  }

  function renderLoader() {
    var width = 0
    var loaderElement = document.createElement('div')
    loaderElement.setAttribute('id', 'loader')
    var blockElement = document.createElement('span')
    blockElement.setAttribute('id', 'block')
    loaderElement.appendChild(blockElement)
    console.log(loaderElement, blockElement)
    rootElement.appendChild(loaderElement)
    setInterval(function() {
      console.log('LOADER')
      if (width <= 100) {
        blockElement.style.width = width + '%'
        width += 10
        console.log('BLOCKELEMENT', blockElement)
      }
    }, interval)
  }
}

// var MEETUP_API_URL = 'https://api.meetup.com/2/events?&sign=true&photo-host=public&group_urlname=CodeHub-Bristol&page=20'
//
// $.ajax({
//   url: MEETUP_API_URL,
//   type: "GET",
//   dataType: 'jsonp',
//   success: function (response) {
//     console.log('RESPONSE', response)
//     var js101Events = response.results.filter(function(event) {
//       return event.name === 'JavaScript 101'
//     })
//     var nextEvent = js101Events.shift()
//     console.log('NEXTEVENT', nextEvent)
//     $('#about').append('<h1>'+nextEvent.name+'</h1>')
//     $('#about').append('<p>Time: '+new Date(nextEvent.time)+'</p>')
//     $('#about').append('<p>Venue: '+nextEvent.venue.name+', ' + nextEvent.venue.city + '</p>')
//     $('#about').append(nextEvent.description)
//     $('#about').append('<br><a href="'+nextEvent.event_url+'" target="_blank" id="next-event">Join the next event on Meet up</a>')
//
//     setInterval(function() {
//       $('#next-event').toggleClass('hidden')
//     }, 700)
//   },
//   error: function (xhr, status) {
//     var eventUrl = 'https://www.meetup.com/CodeHub-Bristol/events/'
//     $('#about').append('<br><br><a href="'+eventUrl+'" target="_blank">Join the next JavaScript101 event on Meetup</a>')
//   }
// });
