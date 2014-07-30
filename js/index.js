var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        navigator.geolocation.getCurrentPosition(this.onGeoSuccess, this.onGeoError);
        alert("hola");
    },
    // Update DOM on a Received Event
    onGeoSuccess: function(position) {
    alert('Latitude: '          + position.coords.latitude          + '\n');
    },
    // onError Callback receives a PositionError object
    //
    onGeoError: function(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
    }
};
