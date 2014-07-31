(function() {

var random_events = [
  {
    id: 'ev1',
    name: 'Footbal Cup', 
    lat: 55.822083,
    lng: 37.665453,
    address: "Tverskaya Street, Moscow",
    date: "12 May",
    time: "11:30",
    vacancies: 4,
    price: 100,
    specs: {
      locationType: 'stadium',
      imgSrc: 'http://lorempixel.com/400/200/sports/1/',
      locationReviews: {
        reviewBody: 'The greatest place I\'ve ever been to',
        reviewDate: '10 Jan 2012',
        reviewAuthor: 'Johny Utah'
      }
    },
    teams: [{
      teamName: 'Eagles',
      teamPlayers: ['Andrew Reynols', 'Shane O\'Neil', 'Steve Berra']
    },
    {
      teamName: 'The Devils',
      teamPlayers: ['Daewon Song', 'Garret Hill', 'Chris Cole']
    }],
    attendingEvent: ['Steve', 'Dave', 'Amily', ' Johny Scott']
    
  },
  {
    id: 'ev2',
    name: 'Footbal 2016', 
    lat: 55.604697,
    lng: 37.642107,
    address: "Red Square, Moscow",
    date: "12 May",
    time: "17:00",
    vacancies: 4,
    price: 100,
    specs: {
      locationType: 'stadium',
      imgSrc: 'http://lorempixel.com/400/200/sports/10/',
      locationReviews: {
        reviewBody: 'The greatest place I\'ve ever been to',
        reviewDate: '10 Jan 2012',
        reviewAuthor: 'Johny Utah'
      }
    },
    teams: [{
      teamName: 'Eagles',
      teamPlayers: ['Andrew Reynols', 'Shane O\'Neil', 'Steve Berra']
    },
    {
      teamName: 'The Devils',
      teamPlayers: ['Daewon Song', 'Garret Hill', 'Chris Cole']
    }],
    attendingEvent: []
    
  },
  {
    id: 'ev3',
    name: 'FIFA', 
    lat: 38.749402,
    lng: -9.120034,
    address: "Main Street, Lisbon",
    date: "12 May",
    time: "11:30",
    vacancies: 4,
    price: 100,
    specs: {
      locationType: 'stadium',
      imgSrc: 'http://lorempixel.com/400/200/sports/2/',
      locationReviews: {
        reviewBody: 'The greatest place I\'ve ever been to',
        reviewDate: '10 Jan 2012',
        reviewAuthor: 'Johny Utah'
      }
    },
    teams: [{
      teamName: 'Eagles',
      teamPlayers: ['Andrew Reynols', 'Shane O\'Neil', 'Steve Berra']
    },
    {
      teamName: 'The Devils',
      teamPlayers: ['Daewon Song', 'Garret Hill', 'Chris Cole']
    }],
    attendingEvent: ['Steve', 'Dave', 'Amily', ' Johny Scott']
    
  },
  {
    id: 'ev4',
    name: 'FIFA2', 
    lat: 38.708960,
    lng: -9.169130,
    address: "Sunset Street, Lisbon",
    date: "12 May",
    time: "11:30",
    vacancies: 4,
    price: 100,
    specs: {
      locationType: 'stadium',
      imgSrc: 'http://lorempixel.com/400/200/sports/3/',
      locationReviews: {
        reviewBody: 'The greatest place I\'ve ever been to',
        reviewDate: '10 Jan 2012',
        reviewAuthor: 'Johny Utah'
      }
    },
    teams: [{
      teamName: 'Eagles',
      teamPlayers: ['Andrew Reynols', 'Shane O\'Neil', 'Steve Berra']
    },
    {
      teamName: 'The Devils',
      teamPlayers: ['Daewon Song', 'Garret Hill', 'Chris Cole']
    }],
    attendingEvent: ['Steve', 'Dave', 'Amily', ' Johny Scott']
    
  },
  {
    id: 'ev12',
    name: 'Stadium', 
    lat: 39.749402,
    lng: -0.920034,
    address: "Main Street, Lisbon",
    date: "12 May",
    time: "11:30",
    vacancies: 4,
    price: 100,
    specs: {
      locationType: 'stadium',
      imgSrc: 'http://lorempixel.com/400/200/sports/4/',
      locationReviews: {
        reviewBody: 'The greatest place I\'ve ever been to',
        reviewDate: '10 Jan 2012',
        reviewAuthor: 'Johny Utah'
      }
    },
    teams: [{
      teamName: 'Eagles',
      teamPlayers: ['Andrew Reynols', 'Shane O\'Neil', 'Steve Berra']
    },
    {
      teamName: 'The Devils',
      teamPlayers: ['Daewon Song', 'Garret Hill', 'Chris Cole']
    }],
    attendingEvent: ['Amily', ' Johny Scott']
    
  },
  {
    id: 'ev13',
    name: 'Championship Finals', 
    lat: 36.708960,
    lng: -3.169130,
    address: "Sunset Street, Lisbon",
    date: "12 May",
    time: "11:30",
    vacancies: 4,
    price: 100,
    specs: {
      locationType: 'stadium',
      imgSrc: 'http://lorempixel.com/400/200/sports/5/',
      locationReviews: {
        reviewBody: 'The greatest place I\'ve ever been to',
        reviewDate: '10 Jan 2012',
        reviewAuthor: 'Johny Utah'
      }
    },
    teams: [{
      teamName: 'Eagles',
      teamPlayers: ['Andrew Reynols', 'Shane O\'Neil', 'Steve Berra']
    },
    {
      teamName: 'The Devils',
      teamPlayers: ['Daewon Song', 'Garret Hill', 'Chris Cole']
    }],
    attendingEvent: []
    
  },  
  {
    id: 'ev5',
    name: 'NewYork1', 
    lat: 40.784513,
    lng: -73.976630,
    address: "Baker Street, London",
    date: "12 May",
    time: "11:30",
    vacancies: 4,
    price: 100,
    specs: {
      locationType: 'stadium',
      imgSrc: 'http://lorempixel.com/400/200/sports/6/',
      locationReviews: {
        reviewBody: 'The greatest place I\'ve ever been to',
        reviewDate: '10 Jan 2012',
        reviewAuthor: 'Johny Utah'
      }
    },
    teams: [{
      teamName: 'Eagles',
      teamPlayers: ['Andrew Reynols', 'Shane O\'Neil', 'Steve Berra']
    },
    {
      teamName: 'The Devils',
      teamPlayers: ['Daewon Song', 'Garret Hill', 'Chris Cole']
    }],
    attendingEvent: ['Steve', 'Dave', 'Amily', ' Johny Scott']
    
  },
  {
    id: 'ev6',
    name: 'NewYork2', 
    lat: 40.707522,
    lng: -74.037055,
    address: "Baker Street, London",
    date: "12 May",
    time: "11:30",
    vacancies: 4,
    price: 100,
    specs: {
      locationType: 'stadium',
      imgSrc: 'http://lorempixel.com/400/200/sports/7/',
      locationReviews: {
        reviewBody: 'The greatest place I\'ve ever been to',
        reviewDate: '10 Jan 2012',
        reviewAuthor: 'Johny Utah'
      }
    },
    teams: [{
      teamName: 'Eagles',
      teamPlayers: ['Andrew Reynols', 'Shane O\'Neil', 'Steve Berra']
    },
    {
      teamName: 'The Devils',
      teamPlayers: ['Daewon Song', 'Garret Hill', 'Chris Cole']
    }],
    attendingEvent: ['Steve', 'Dave', 'Amily', ' Johny Scott']
    
  },
  {
    id: 'ev7',
    name: 'Bondi Beach', 
    lat: -33.890542,
    lng: 151.274856,
    address: "Baker Street, London",
    date: "12 May",
    time: "11:30",
    vacancies: 4,
    price: 100,
    specs: {
      locationType: 'stadium',
      imgSrc: 'http://lorempixel.com/400/200/sports/8/',
      locationReviews: {
        reviewBody: 'The greatest place I\'ve ever been to',
        reviewDate: '10 Jan 2012',
        reviewAuthor: 'Johny Utah'
      }
    },
    teams: [{
      teamName: 'Eagles',
      teamPlayers: ['Andrew Reynols', 'Shane O\'Neil', 'Steve Berra']
    },
    {
      teamName: 'The Devils',
      teamPlayers: ['Daewon Song', 'Garret Hill', 'Chris Cole']
    }],
    attendingEvent: ['Steve', 'Dave', 'Amily', ' Johny Scott']
    
  },
  {
    id: 'ev8',
    name: 'Coogee Beach', 
    lat: -33.923036,
    lng: 151.259052,
    address: "Baker Street, London",
    date: "12 May",
    time: "11:30",
    vacancies: 5,
    price: 100,
    specs: {
      locationType: 'stadium',
      imgSrc: 'http://lorempixel.com/400/200/sports/9/',
      locationReviews: {
        reviewBody: 'The greatest place I\'ve ever been to',
        reviewDate: '10 Jan 2012',
        reviewAuthor: 'Johny Utah'
      }
    },
    teams: [{
      teamName: 'Eagles',
      teamPlayers: ['Andrew Reynols', 'Shane O\'Neil', 'Steve Berra']
    },
    {
      teamName: 'The Devils',
      teamPlayers: ['Daewon Song', 'Garret Hill', 'Chris Cole']
    }],
    attendingEvent: ['Steve', 'Dave', 'Amily', ' Johny Scott']
    
  },
  {
    id: 'ev9',
    name: 'Cronulla Beach', 
    lat: -34.028249,
    lng: 151.157507,
    address: "Baker Street, London",
    date: "12 May",
    time: "11:30",
    vacancies: 3,
    price: 100,
    specs: {
      locationType: 'stadium',
      imgSrc: 'http://lorempixel.com/400/200/sports/11/',
      locationReviews: {
        reviewBody: 'The greatest place I\'ve ever been to',
        reviewDate: '10 Jan 2012',
        reviewAuthor: 'Johny Utah'
      }
    },
    teams: [{
      teamName: 'Eagles',
      teamPlayers: ['Andrew Reynols', 'Shane O\'Neil', 'Steve Berra']
    },
    {
      teamName: 'The Devils',
      teamPlayers: ['Daewon Song', 'Garret Hill', 'Chris Cole']
    }],
    attendingEvent: ['Steve', 'Dave', 'Amily', ' Johny Scott']
    
  },
  {
    id: 'ev10',
    name: 'Manly Beach', 
    lat: -33.80010128657071,
    lng: 151.28747820854187,
    address: "Baker Street, London",
    date: "12 May",
    time: "11:30",
    vacancies: 2,
    price: 100,
    specs: {
      locationType: 'stadium',
      imgSrc: 'http://lorempixel.com/400/200/sports/12/',
      locationReviews: {
        reviewBody: 'The greatest place I\'ve ever been to',
        reviewDate: '10 Jan 2012',
        reviewAuthor: 'Johny Utah'
      }
    },
    teams: [{
      teamName: 'Eagles',
      teamPlayers: ['Andrew Reynols', 'Shane O\'Neil', 'Steve Berra']
    },
    {
      teamName: 'The Devils',
      teamPlayers: ['Daewon Song', 'Garret Hill', 'Chris Cole']
    }],
    attendingEvent: ['Steve', 'Dave', 'Amily', ' Johny Scott']
    
  },
  {
    id: 'ev11',
    name: 'Maroubra Beach', 
    lat: -33.950198,
    lng: 151.259302,
    address: "Baker Street, London",
    date: "12 May",
    time: "11:30",
    vacancies: 1,
    price: 100,
    specs: {
      locationType: 'stadium',
      imgSrc: 'http://lorempixel.com/400/200/sports/13/',
      locationReviews: {
        reviewBody: 'The greatest place I\'ve ever been to',
        reviewDate: '10 Jan 2012',
        reviewAuthor: 'Johny Utah'
      }
    },
    teams: [{
      teamName: 'Eagles',
      teamPlayers: ['Andrew Reynols', 'Shane O\'Neil', 'Steve Berra']
    },
    {
      teamName: 'The Devils',
      teamPlayers: ['Daewon Song', 'Garret Hill', 'Chris Cole']
    }],
    attendingEvent: ['Steve', 'Dave', 'Amily', ' Johny Scott']
    
  }
];
var map;
var infowindow = new google.maps.InfoWindow();

var infobox = new InfoBox();

var map_styling = [{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":60}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","stylers":[{"visibility":"on"},{"lightness":30}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ef8c25"},{"lightness":40}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#b6c54c"},{"lightness":40},{"saturation":-40}]},{}];



function initialize() {
  var $flipContainer = $(".flip-container-overlay");
  
  var configs = {
    visibleEventCardConfig: {
      template: $("#visible-event-card").html(),
      container: $(".results-tab").find(".event-cards"),
      dataIds: []
    },
    
    eventCardConfig: {
      template: $("#event-card").html(),
      container: $flipContainer.find(".tab-content"),
      data: {}
    },
    
    eventDetailsConfig: {
      template: $("#event-details-template").html(),
      container: $flipContainer.find('.tab-back-details'),
      data: {}
    },
    
    animateConfig: {
      container: $flipContainer,
      element1: $flipContainer.find(".front-flipper"),
      element2: $flipContainer.find(".back-flipper"),
      $refTab: $(".results-tab"),
      minHeight: 540,
      animationSettings: {
        animateFrom: "-200px",
        animateDistance: "+=150",
        opacityFrom: ".1",
        opacityTo: ".99"
      }
    },

    flipConfig: {
      flipTriggerOn: '.btn-book',
      flipTriggerOff: '.turn-back',
      closeTrigger: '.close-tab-btn',
      switchKey: "turn"
    },

    infoboxConfig: {
      template: $("#infobox-template").html()
    },
    infoboxFlipConfig: {
      findBtn: '.btn-book'
    }
  };


  var markers = [];
  map = new google.maps.Map(document.getElementById('map-canvas'), {
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: map_styling,
    panControl: false,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.SMALL
    },
    streetViewControl: false,
    zoom: 5
  });

  map.setCenter(new google.maps.LatLng(49, 17));

  // map.setCenter(new google.maps.LatLng(-33.8902, 151.1759));

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = new google.maps.LatLng(position.coords.latitude,
                                       position.coords.longitude);
      map.setZoom(12);
      map.setCenter(pos);
    }, function() {
      handleNoGeolocation(true);
    });
  } else {
    handleNoGeolocation(false);
  }

  // var defaultBounds = new google.maps.LatLngBounds(
  //     new google.maps.LatLng(-33.8902, 151.1759),
  //     new google.maps.LatLng(-33.8474, 151.2631));
  // map.fitBounds(defaultBounds);

 
  var input = /** @type {HTMLInputElement} */(
      document.getElementById('pac-input'));
  var navtab = /** @type {HTMLInputElement} */(
      document.getElementById('main-nav'));

  // map.controls[google.maps.ControlPosition.RIGHT_TOP].push(navtab);

  var searchBox = new google.maps.places.SearchBox(
    /** @type {HTMLInputElement} */(input));



  // [START region_getplaces]
  // Listen for the event fired when the user selects an item from the
  // pick list. Retrieve the matching places for that item.
  google.maps.event.addListener(searchBox, 'places_changed', function() {
    var places = searchBox.getPlaces();

    for (var i = 0, marker; marker = markers[i]; i++) {
      marker.setMap(null);
    }

    // For each place, get the icon, place name, and location.
    markers = [];
    var bounds = new google.maps.LatLngBounds();

    for (var i = 0, place; place = places[i]; i++) {
      var image = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };

      // Create a marker for each place.
      var marker = new google.maps.Marker({
        map: map,
        icon: image,
        title: place.name,
        position: place.geometry.location
      });

      markers.push(marker);

      bounds.extend(place.geometry.location);

      if (place.geometry.viewport) {
        map.fitBounds(place.geometry.viewport);
      } else {
        map.setCenter(place.geometry.location);
        map.setZoom(15);  // Why 17? Because it looks good.
      }
    }

    

  });
  // [END region_getplaces]

  var placed_markers = [],
      placed_markers_id = [],
      relevant_cards =[],
      visiblePlaces = [];

  // Bias the SearchBox results towards places that are within the bounds of the
  // current map's viewport.

  // Make markers show if they are inside visible bounds
  google.maps.event.addListener(map, 'bounds_changed', function() {

    var bounds = map.getBounds();
    searchBox.setBounds(bounds);
        
    // Remove out of bounds markers from map and places from visible array
    for (var k = 0; k < placed_markers.length; k++) {
      var one_marker = placed_markers[k][0];
      var one_marker_id = placed_markers[k][1];
      if (!bounds.contains(one_marker.getPosition())) {
        one_marker.setMap(null); // remove marker
        placed_markers.splice(k, 1);

        var markerIdInd = placed_markers_id.indexOf(one_marker_id);
        placed_markers_id.splice(markerIdInd, 1); // remove place id

        // Repopulate results
        configs.visibleEventCardConfig.dataIds = placed_markers_id;
        PopulateVisibleTab.init(configs.visibleEventCardConfig);
        
      }
    }

    // Make array of visible places
    for (var i = 0; i < random_events.length; i++) {
      var rndPlace = random_events[i];
      var eventLatLng = new google.maps.LatLng(rndPlace.lat, rndPlace.lng);
      if ( bounds.contains(eventLatLng) && placed_markers_id.indexOf(rndPlace.id) == -1 ) {
        
        var visiblePlace = rndPlace;

        // Create marker for each visible place and a click event
        var marker = new google.maps.Marker({
          position: eventLatLng,
          map: map,
          title: visiblePlace.name,
          icon: 'assets/img/award-marker1.png'
        });

        google.maps.event.addListener(marker, 
                                    'click',
                                    click_marker(marker, visiblePlace.name, infowindow, visiblePlace, configs));

        // Kind of caching
        placed_markers.push([marker, visiblePlace.id]);
        placed_markers_id.push(visiblePlace.id);

        // Populate with visible events
        configs.visibleEventCardConfig.dataIds = placed_markers_id;
        PopulateVisibleTab.init(configs.visibleEventCardConfig);
      }
    }
  });
}

var PopulateVisibleTab = {
  init: function( config ) {
    this.ids = config.dataIds;
    this.fetchData();
    this.template = config.template;
    this.container = config.container.empty();
    this.attachTemplate();
  },
  attachTemplate: function() {
    var handl = Handlebars.compile(this.template);
    this.container.append( handl(this.places) );
  },
  fetchData: function() {
    var eventsToShow = [];
    $.each(this.ids, function(index, idValue) {
      eventsToShow.push(getById(idValue, random_events));
    }); 
    this.places = eventsToShow;
  }
};

var click_marker = function(marker, content, infowindow, rndPlace, configs) {
  
  return function()  {

    configs.eventCardConfig.data = rndPlace;
    configs.eventDetailsConfig.data = rndPlace;
    configs.eventDetailsConfig.data = rndPlace;

    CreateCard.init(configs.eventCardConfig);
    CreateCard.init(configs.eventDetailsConfig);
    CreateCard.infoCard(configs.infoboxConfig);

    AnimateBehavior.animate(configs.animateConfig);
    AnimateBehavior.flip(configs.flipConfig);
    
    var $infCardContent = CreateCard.getInfoCard();

    AnimateBehavior.infoboxFlipBtn($infCardContent, configs.infoboxFlipConfig);
    var $actionInfBxContent = AnimateBehavior.infoboxFlip();

    showInfobox($actionInfBxContent, marker);

    addTabBehavior();
  }
}

var CreateCard = {
  init: function(config) {
    
    this.template = config.template;
    this.container = config.container.empty();
    this.data = config.data;
    this.appendTemplate();
  },
  infoCard: function(infoConfig) {
    this.infoCardTemplate = infoConfig.template;
    // return this.returnInfoCard();
  },
  appendTemplate: function() {
    var handl = Handlebars.compile(this.template);
    this.container.append(handl(this.data));
  },
  getInfoCard: function() {
    var handl = Handlebars.compile(this.infoCardTemplate);
    return $(handl(this.data));
  }
};

var AnimateBehavior = {
  animate: function(config) {
    this.container = config.container;
    this.element1 = config.element1;
    this.element2 = config.element2;
    this.refHeight = config.$refTab.height() + 2 * parseInt(config.$refTab.css('paddingTop'), 10) + '';
    this.minHeight = config.minHeight;
    this.animationSettings = config.animationSettings;
    this.applyAnimation(this.animationSettings);
  },
  flip: function(flipConfig) {
    this.flipTriggerOn = this.container.find(flipConfig.flipTriggerOn),
    this.flipTriggerOff = this.container.find(flipConfig.flipTriggerOff),
    this.closeTrigger = this.container.find(flipConfig.closeTrigger);
    this.switchKey = flipConfig.switchKey;
    this.flipPanel();
  },
  applyAnimation: function(a) {
    this.container.hide();
    this.container.show().css({left: a.animateFrom,
                               opacity: a.opacityFrom,
                               height: this.refHeight});
    this.element1.css('height', this.refHeight);
    this.element2.css('height', this.minHeight);

    this.container.animate({left: a.animateDistance,
                            opacity: a.opacityTo}, 100);
  },
  flipPanel: function() {
    var self = this;
    this.flipTriggerOn.on('click', function(e) {
      e.preventDefault();
      self.container.addClass(self.switchKey);
    });
    this.flipTriggerOff.on('click', function(e) {
      e.preventDefault();
      self.container.removeClass(self.switchKey);
    });
    this.closeTrigger.on('click', function() {
      self.container.removeClass(self.switchKey).hide();
    });
  },
  infoboxFlipBtn: function(infoboxObj, config) {
    this.findBtn = config.findBtn;
    this.infoboxObj = infoboxObj;
    // infoboxFlip();
  },
  infoboxFlip: function() {
    var $self = this;
    this.infoboxObj.find(this.findBtn).on('click', function() {
      $self.container.show('fast', function() {
        $self.container.toggleClass($self.switchKey);
      });
    });
    return this.infoboxObj;
  }
};


function getById(id, arrayOfObjs) {
  var the_obj;
  $.each(arrayOfObjs, function(index, obj) {
    if (obj.id == id) {
      the_obj = obj;
    }
  });
  return the_obj;
}

function showInfobox($infCardContent, marker, infoboxFlipConfig) {
  
  var infoboxOptions = {
    content: $infCardContent[0],
    maxWidth: 500,
    pixelOffset: new google.maps.Size(-82, -63),
    alignBottom: true,
    closeBoxMargin: '5px',
    closeBoxURL: "assets/img/closebtn.png"
  };

  infobox.setOptions(infoboxOptions);
  infobox.open(map, marker);

}


function addTabBehavior(infoCard) {
  var $infoCardObj = $(".info-card");

  var $secondTab = $infoCardObj.find('.tab2-content').hide();
  var $firstTab = $infoCardObj.find('.tab1-content').show();
  var $trigger1 = $infoCardObj.find('.tab1').find('a');
  var $trigger2 = $infoCardObj.find('.tab2').find('a');

  $trigger1.on('click', function(e) {
    e.preventDefault();
    $(this).addClass('active');
    $trigger2.removeClass('active');
    $firstTab.show();
    $secondTab.hide();
  });

  $trigger2.on('click', function(e) {
    e.preventDefault();
    $(this).addClass('active');
    $trigger1.removeClass('active');
    $secondTab.show();
    $firstTab.hide();
  });
}

function handleNoGeolocation(errorFlag) {
  if (errorFlag) {
    var content = 'The Geolocation service failed.<br/>Please use search box ';
  } else {
    var content = 'Your browser doesn\'t support geolocation.<br/>Please use search box';
  }

  var options = {
    map: map,
    position: map.getCenter(),
    // maxWidth: 300,
    content: content
  };

  infowindow = new google.maps.InfoWindow(options);
  // map.zoom = 4;
  // map.setCenter(options.position);
}

google.maps.event.addDomListener(window, 'load', initialize);

})();