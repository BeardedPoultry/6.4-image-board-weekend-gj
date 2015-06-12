import IndexView from './views/index';
import CreateView from './views/create';
import ShowView from './views/show';

import CreateFormVM from './view-models/create-form';

import {ImageCollection} from './models/image';

var Router = Backbone.Router.extend({

  routes: {
    '': 'index',
    'images/:id': 'show'
  },

  initialize: function(){
    this.createFormVM = new CreateFormVM();

    this.images = new ImageCollection();

    this.createView = new CreateView({
      model: this.createFormVM,
      collection: this.images
    });
    $('body').prepend(this.createView.el);
  },

  /*
   * Route handlers
   */

  index: function(){
    this.showView(new IndexView({collection: this.images}));
    this.images.fetch();
  },

  show: function(id) {
    this.images.fetch().then(function(){
      var image = this.images.get(id);
      this.showView(new ShowView({model: image}));
    }.bind(this));
  },

  /*
   * Helper functions
   */

  showView: function(view) {
    if(this.currentView) this.currentView.remove();
    this.currentView = view;
    $('#app').html(view.el);
    return view;
  },
});

export default new Router();
