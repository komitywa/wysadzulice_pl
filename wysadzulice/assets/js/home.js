import jquery from 'jquery';
import { Model, View, Collection} from 'backbone';

const BannerView = View.extend({

  initialize: function(options) {
    this.parent = options.parent;
    this.setElement(jquery('#home-banner'));
    const markers = this.parent.collection.toApi();
    const apiKey = 'https://maps.googleapis.com/maps/api/staticmap?size=400x300&key=AIzaSyCRnnZblqETt7ivbluhDXDuF3B0HrbdVnI' + markers;
    this.$el.html(`<div id="banner-container"><img src="${apiKey}"></div>`);
  },

});

const SlideView = View.extend({
  initialize: function(options, slide) {
    this.parent = options.parent;
    this.setElement(jquery('#home-slider'));
  },
});


const CampaignModel = Model.extend({
  defaults: {
    id: null,
    lat: null,
    lng: null,
  },
});

const CampaignsCollection = Collection.extend({
  model: CampaignModel,
  url: '/api/campaigns/',

  toApi: function() {
    let apiString = '';

    this.map(function(location) {
      const lat = location.attributes.lat;
      const lng = location.attributes.lng;
      apiString = apiString + '&markers=color:blue%7Clabel:S%7C' + lat + ',' + lng;
    });

    return apiString;
  },
});

export default View.extend({

  initialize: function() {
    this.setElement(jquery('#home'));
    this.collection = new CampaignsCollection();
    this.listenTo(this.collection, 'add remove reset change', this.render);
    this.collection.fetch();
  },

  render: function() {
    const bannerView = new BannerView({
      parent: this,
    });
    this.$el.html(bannerView.render().el);
  },

});
