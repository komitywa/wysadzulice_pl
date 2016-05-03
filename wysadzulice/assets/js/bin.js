//getGeolocation: function () {
//  this.model.set({
//    latitude: 0
//  });
//  if ("geolocation" in navigator) {
//    navigator.geolocation.getCurrentPosition(function (pos) {
//      var crd = pos.coords;
//      //this.model.set({
//      //  latitude: crd.latitude
//      //});
//      //this.model.latitude = crd.latitude;
//
//      console.log('Latitude : ' + crd.latitude);
//      console.log('Longitude: ' + crd.longitude);
//    });
//  } else {
//    console.log("elos");
//  }
//}