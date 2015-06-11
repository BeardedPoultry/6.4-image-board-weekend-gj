var Image = Backbone.Model.extend({
  defaults: function() {
    return {
      url: '',
      caption: '',
      created_at: new Date()
    };
  },

  idAttribute: '_id'
});

var ImageCollection = Backbone.Collection.extend({
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/images',
  model: Image,

  comparator: function(a, b) {
    return (new Date(b.get('created_at'))) - (new Date(a.get('created_at')));
  }
});

export default {Image, ImageCollection};
