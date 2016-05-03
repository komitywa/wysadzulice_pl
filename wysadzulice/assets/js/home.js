import jquery from 'jquery';
import { Model, View, Collection} from 'backbone';

const BannerView = View.extend({

  initialize: function(options){
    this.parent = options.parent;
    this.setElement(jquery('#home-banner'));
    var markers = this.parent.collection.toApi();
    const apiKey = 'https://maps.googleapis.com/maps/api/staticmap?size=400x300&scale=2&key=AIzaSyCRnnZblqETt7ivbluhDXDuF3B0HrbdVnI' + markers;
    this.$el.html('<div id="banner-container"><img src="' + apiKey +'"></div>');
  },

  //render: function(data){
  //}
});


const CampaignModel = Model.extend({
  defaults: {
    id: null,
    lat: null,
    lng: null
  },
});

const CampaignsCollection = Collection.extend({
  model: CampaignModel,
  url: '/api/campaigns/',

  toApi: function(){
    var apiString = "";

    this.map(function (location) {
      const lat = location.attributes.lat;
      const lng = location.attributes.lng;
      apiString = apiString + "&markers=color:blue%7Clabel:S%7C" + lat + "," + lng;
    });

    return apiString;
  }
});

export default View.extend({

  initialize: function (options) {
    this.setElement(jquery('#home'));
    this.collection = new CampaignsCollection();
    this.collection.fetch().then(this.render.bind(this));
  },

  render: function(){

    const bannerView = new BannerView({
      parent: this,
    });
    this.$el.html(bannerView.render().el);
  }

});