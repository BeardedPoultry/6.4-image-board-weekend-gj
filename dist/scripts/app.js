require.register("a", function(exports, require, module){
  'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _scriptsRouter = require('./scripts/router');

var _scriptsRouter2 = _interopRequireDefault(_scriptsRouter);

(function () {
  'use strict';

  $(document).ready(function () {
    Backbone.history.start();
  });
})();

//updatedmain.js
  
});

require.register("b", function(exports, require, module){
  'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _scriptsRouter = require('./scripts/router');

var _scriptsRouter2 = _interopRequireDefault(_scriptsRouter);

(function () {
  'use strict';

  $(document).ready(function () {
    Backbone.history.start();
  });
})();

//updatedmain.js
  
});

require.register("c", function(exports, require, module){
  'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _scriptsRouter = require('./scripts/router');

var _scriptsRouter2 = _interopRequireDefault(_scriptsRouter);

(function () {
  'use strict';

  $(document).ready(function () {
    Backbone.history.start();
  });
})();

//updatedmain.js
  
});

require.register("d", function(exports, require, module){
  'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _scriptsRouter = require('./scripts/router');

var _scriptsRouter2 = _interopRequireDefault(_scriptsRouter);

(function () {
  'use strict';

  $(document).ready(function () {
    Backbone.history.start();
  });
})();

//updatedmain.js
  
});

require.register("e", function(exports, require, module){
  'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _scriptsRouter = require('./scripts/router');

var _scriptsRouter2 = _interopRequireDefault(_scriptsRouter);

(function () {
  'use strict';

  $(document).ready(function () {
    Backbone.history.start();
  });
})();

//updatedmain.js
  
});

require.register("router", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _viewsIndex = require('./views/index');

var _viewsIndex2 = _interopRequireDefault(_viewsIndex);

var _viewsCreate = require('./views/create');

var _viewsCreate2 = _interopRequireDefault(_viewsCreate);

var _viewsShow = require('./views/show');

var _viewsShow2 = _interopRequireDefault(_viewsShow);

var _viewModelsCreateForm = require('./view-models/create-form');

var _viewModelsCreateForm2 = _interopRequireDefault(_viewModelsCreateForm);

var _modelsImage = require('./models/image');

var Router = Backbone.Router.extend({

  routes: {
    '': 'index',
    'images/:id': 'show'
  },

  initialize: function initialize() {
    this.createFormVM = new _viewModelsCreateForm2['default']();

    this.images = new _modelsImage.ImageCollection();

    this.createView = new _viewsCreate2['default']({
      model: this.createFormVM,
      collection: this.images
    });
    $('body').prepend(this.createView.el);
  },

  /*
   * Route handlers
   */

  index: function index() {
    this.showView(new _viewsIndex2['default']({ collection: this.images }));
    this.images.fetch();
  },

  show: function show(id) {
    this.images.fetch().then((function () {
      var image = this.images.get(id);
      this.showView(new _viewsShow2['default']({ model: image }));
    }).bind(this));
  },

  /*
   * Helper functions
   */

  showView: function showView(view) {
    if (this.currentView) this.currentView.remove();
    this.currentView = view;
    $('#app').html(view.el);
    return view;
  }
});

exports['default'] = new Router();
module.exports = exports['default'];
  
});

require.register("a/router", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _viewsIndex = require('./views/index');

var _viewsIndex2 = _interopRequireDefault(_viewsIndex);

var _viewsCreate = require('./views/create');

var _viewsCreate2 = _interopRequireDefault(_viewsCreate);

var _viewsShow = require('./views/show');

var _viewsShow2 = _interopRequireDefault(_viewsShow);

var _viewModelsCreateForm = require('./view-models/create-form');

var _viewModelsCreateForm2 = _interopRequireDefault(_viewModelsCreateForm);

var _modelsImage = require('./models/image');

var Router = Backbone.Router.extend({

  routes: {
    '': 'index',
    'images/:id': 'show'
  },

  initialize: function initialize() {
    this.createFormVM = new _viewModelsCreateForm2['default']();

    this.images = new _modelsImage.ImageCollection();

    this.createView = new _viewsCreate2['default']({
      model: this.createFormVM,
      collection: this.images
    });
    $('body').prepend(this.createView.el);
  },

  /*
   * Route handlers
   */

  index: function index() {
    this.showView(new _viewsIndex2['default']({ collection: this.images }));
    this.images.fetch();
  },

  show: function show(id) {
    this.images.fetch().then((function () {
      var image = this.images.get(id);
      this.showView(new _viewsShow2['default']({ model: image }));
    }).bind(this));
  },

  /*
   * Helper functions
   */

  showView: function showView(view) {
    if (this.currentView) this.currentView.remove();
    this.currentView = view;
    $('#app').html(view.el);
    return view;
  }
});

exports['default'] = new Router();
module.exports = exports['default'];
  
});

require.register("b/router", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _viewsIndex = require('./views/index');

var _viewsIndex2 = _interopRequireDefault(_viewsIndex);

var _viewsCreate = require('./views/create');

var _viewsCreate2 = _interopRequireDefault(_viewsCreate);

var _viewsShow = require('./views/show');

var _viewsShow2 = _interopRequireDefault(_viewsShow);

var _viewModelsCreateForm = require('./view-models/create-form');

var _viewModelsCreateForm2 = _interopRequireDefault(_viewModelsCreateForm);

var _modelsImage = require('./models/image');

var Router = Backbone.Router.extend({

  routes: {
    '': 'index',
    'images/:id': 'show'
  },

  initialize: function initialize() {
    this.createFormVM = new _viewModelsCreateForm2['default']();

    this.images = new _modelsImage.ImageCollection();

    this.createView = new _viewsCreate2['default']({
      model: this.createFormVM,
      collection: this.images
    });
    $('body').prepend(this.createView.el);
  },

  /*
   * Route handlers
   */

  index: function index() {
    this.showView(new _viewsIndex2['default']({ collection: this.images }));
    this.images.fetch();
  },

  show: function show(id) {
    this.images.fetch().then((function () {
      var image = this.images.get(id);
      this.showView(new _viewsShow2['default']({ model: image }));
    }).bind(this));
  },

  /*
   * Helper functions
   */

  showView: function showView(view) {
    if (this.currentView) this.currentView.remove();
    this.currentView = view;
    $('#app').html(view.el);
    return view;
  }
});

exports['default'] = new Router();
module.exports = exports['default'];
  
});

require.register("c/router", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _viewsIndex = require('./views/index');

var _viewsIndex2 = _interopRequireDefault(_viewsIndex);

var _viewsCreate = require('./views/create');

var _viewsCreate2 = _interopRequireDefault(_viewsCreate);

var _viewsShow = require('./views/show');

var _viewsShow2 = _interopRequireDefault(_viewsShow);

var _viewModelsCreateForm = require('./view-models/create-form');

var _viewModelsCreateForm2 = _interopRequireDefault(_viewModelsCreateForm);

var _modelsImage = require('./models/image');

var Router = Backbone.Router.extend({

  routes: {
    '': 'index',
    'images/:id': 'show'
  },

  initialize: function initialize() {
    this.createFormVM = new _viewModelsCreateForm2['default']();

    this.images = new _modelsImage.ImageCollection();

    this.createView = new _viewsCreate2['default']({
      model: this.createFormVM,
      collection: this.images
    });
    $('body').prepend(this.createView.el);
  },

  /*
   * Route handlers
   */

  index: function index() {
    this.showView(new _viewsIndex2['default']({ collection: this.images }));
    this.images.fetch();
  },

  show: function show(id) {
    this.images.fetch().then((function () {
      var image = this.images.get(id);
      this.showView(new _viewsShow2['default']({ model: image }));
    }).bind(this));
  },

  /*
   * Helper functions
   */

  showView: function showView(view) {
    if (this.currentView) this.currentView.remove();
    this.currentView = view;
    $('#app').html(view.el);
    return view;
  }
});

exports['default'] = new Router();
module.exports = exports['default'];
  
});

require.register("d/router", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _viewsIndex = require('./views/index');

var _viewsIndex2 = _interopRequireDefault(_viewsIndex);

var _viewsCreate = require('./views/create');

var _viewsCreate2 = _interopRequireDefault(_viewsCreate);

var _viewsShow = require('./views/show');

var _viewsShow2 = _interopRequireDefault(_viewsShow);

var _viewModelsCreateForm = require('./view-models/create-form');

var _viewModelsCreateForm2 = _interopRequireDefault(_viewModelsCreateForm);

var _modelsImage = require('./models/image');

var Router = Backbone.Router.extend({

  routes: {
    '': 'index',
    'images/:id': 'show'
  },

  initialize: function initialize() {
    this.createFormVM = new _viewModelsCreateForm2['default']();

    this.images = new _modelsImage.ImageCollection();

    this.createView = new _viewsCreate2['default']({
      model: this.createFormVM,
      collection: this.images
    });
    $('body').prepend(this.createView.el);
  },

  /*
   * Route handlers
   */

  index: function index() {
    this.showView(new _viewsIndex2['default']({ collection: this.images }));
    this.images.fetch();
  },

  show: function show(id) {
    this.images.fetch().then((function () {
      var image = this.images.get(id);
      this.showView(new _viewsShow2['default']({ model: image }));
    }).bind(this));
  },

  /*
   * Helper functions
   */

  showView: function showView(view) {
    if (this.currentView) this.currentView.remove();
    this.currentView = view;
    $('#app').html(view.el);
    return view;
  }
});

exports['default'] = new Router();
module.exports = exports['default'];
  
});

require.register("e/router", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _viewsIndex = require('./views/index');

var _viewsIndex2 = _interopRequireDefault(_viewsIndex);

var _viewsCreate = require('./views/create');

var _viewsCreate2 = _interopRequireDefault(_viewsCreate);

var _viewsShow = require('./views/show');

var _viewsShow2 = _interopRequireDefault(_viewsShow);

var _viewModelsCreateForm = require('./view-models/create-form');

var _viewModelsCreateForm2 = _interopRequireDefault(_viewModelsCreateForm);

var _modelsImage = require('./models/image');

var Router = Backbone.Router.extend({

  routes: {
    '': 'index',
    'images/:id': 'show'
  },

  initialize: function initialize() {
    this.createFormVM = new _viewModelsCreateForm2['default']();

    this.images = new _modelsImage.ImageCollection();

    this.createView = new _viewsCreate2['default']({
      model: this.createFormVM,
      collection: this.images
    });
    $('body').prepend(this.createView.el);
  },

  /*
   * Route handlers
   */

  index: function index() {
    this.showView(new _viewsIndex2['default']({ collection: this.images }));
    this.images.fetch();
  },

  show: function show(id) {
    this.images.fetch().then((function () {
      var image = this.images.get(id);
      this.showView(new _viewsShow2['default']({ model: image }));
    }).bind(this));
  },

  /*
   * Helper functions
   */

  showView: function showView(view) {
    if (this.currentView) this.currentView.remove();
    this.currentView = view;
    $('#app').html(view.el);
    return view;
  }
});

exports['default'] = new Router();
module.exports = exports['default'];
  
});

require.register("models/image", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var Image = Backbone.Model.extend({
  defaults: function defaults() {
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

  comparator: function comparator(a, b) {
    return new Date(b.get('created_at')) - new Date(a.get('created_at'));
  }
});

exports['default'] = { Image: Image, ImageCollection: ImageCollection };
module.exports = exports['default'];
  
});

require.register("view-models/create-form", function(exports, require, module){
  "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Backbone.Model.extend({
  defaults: {
    isHidden: true
  }
});
module.exports = exports["default"];
  
});

require.register("views/create", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = Backbone.View.extend({
  template: JST.create,

  events: {
    'click button': 'toggleForm',
    'submit .create': 'createImage'
  },

  initialize: function initialize() {
    this.render();
    this.listenTo(this.model, 'change:isHidden', this.render);
  },

  render: function render() {
    this.$el.html(this.template(this.model.toJSON()));
  },

  toggleForm: function toggleForm(e) {
    e && e.preventDefault();
    this.model.set('isHidden', !this.model.get('isHidden'));
  },

  createImage: function createImage(e) {
    e.preventDefault();
    this.collection.create({
      url: this.$('.create-url').val(),
      caption: this.$('.create-caption').val()
    });
    this.toggleForm();
  }
});
module.exports = exports['default'];
  
});

require.register("views/index", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = Backbone.View.extend({
  template: JST.index,

  initialize: function initialize() {
    this.render();
    this.listenTo(this.collection, 'update', this.render);
  },

  render: function render() {
    this.$el.html(this.template(this.collection.toJSON()));
  }
});
module.exports = exports['default'];
  
});

require.register("views/show", function(exports, require, module){
  "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Backbone.View.extend({
  template: JST.show,

  initialize: function initialize() {
    this.render();
  },

  render: function render() {
    this.$el.html(this.template(this.model.toJSON()));
  }
});
module.exports = exports["default"];
  
});

require.register("a/models/image", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var Image = Backbone.Model.extend({
  defaults: function defaults() {
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

  comparator: function comparator(a, b) {
    return new Date(b.get('created_at')) - new Date(a.get('created_at'));
  }
});

exports['default'] = { Image: Image, ImageCollection: ImageCollection };
module.exports = exports['default'];
  
});

require.register("a/views/create", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = Backbone.View.extend({
  template: JST.create,

  events: {
    'click button': 'toggleForm',
    'submit .create': 'createImage'
  },

  initialize: function initialize() {
    this.render();
    this.listenTo(this.model, 'change:isHidden', this.render);
  },

  render: function render() {
    this.$el.html(this.template(this.model.toJSON()));
  },

  toggleForm: function toggleForm(e) {
    e && e.preventDefault();
    this.model.set('isHidden', !this.model.get('isHidden'));
  },

  createImage: function createImage(e) {
    e.preventDefault();
    this.collection.create({
      url: this.$('.create-url').val(),
      caption: this.$('.create-caption').val()
    });
    this.toggleForm();
  }
});
module.exports = exports['default'];
  
});

require.register("a/views/index", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = Backbone.View.extend({
  template: JST.index,

  initialize: function initialize() {
    this.render();
    this.listenTo(this.collection, 'update', this.render);
  },

  render: function render() {
    this.$el.html(this.template(this.collection.toJSON()));
  }
});
module.exports = exports['default'];
  
});

require.register("a/views/show", function(exports, require, module){
  "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Backbone.View.extend({
  template: JST.show,

  initialize: function initialize() {
    this.render();
  },

  render: function render() {
    this.$el.html(this.template(this.model.toJSON()));
  }
});
module.exports = exports["default"];
  
});

require.register("b/models/image", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var Image = Backbone.Model.extend({
  defaults: function defaults() {
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

  comparator: function comparator(a, b) {
    return new Date(b.get('created_at')) - new Date(a.get('created_at'));
  }
});

exports['default'] = { Image: Image, ImageCollection: ImageCollection };
module.exports = exports['default'];
  
});

require.register("b/views/create", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = Backbone.View.extend({
  template: JST.create,

  events: {
    'click button': 'toggleForm',
    'submit .create': 'createImage'
  },

  initialize: function initialize() {
    this.render();
    this.listenTo(this.model, 'change:isHidden', this.render);
  },

  render: function render() {
    this.$el.html(this.template(this.model.toJSON()));
  },

  toggleForm: function toggleForm(e) {
    e && e.preventDefault();
    this.model.set('isHidden', !this.model.get('isHidden'));
  },

  createImage: function createImage(e) {
    e.preventDefault();
    this.collection.create({
      url: this.$('.create-url').val(),
      caption: this.$('.create-caption').val()
    });
    this.toggleForm();
  }
});
module.exports = exports['default'];
  
});

require.register("b/views/index", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = Backbone.View.extend({
  template: JST.index,

  initialize: function initialize() {
    this.render();
    this.listenTo(this.collection, 'update', this.render);
  },

  render: function render() {
    this.$el.html(this.template(this.collection.toJSON()));
  }
});
module.exports = exports['default'];
  
});

require.register("b/views/show", function(exports, require, module){
  "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Backbone.View.extend({
  template: JST.show,

  initialize: function initialize() {
    this.render();
  },

  render: function render() {
    this.$el.html(this.template(this.model.toJSON()));
  }
});
module.exports = exports["default"];
  
});

require.register("c/models/image", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var Image = Backbone.Model.extend({
  defaults: function defaults() {
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

  comparator: function comparator(a, b) {
    return new Date(b.get('created_at')) - new Date(a.get('created_at'));
  }
});

exports['default'] = { Image: Image, ImageCollection: ImageCollection };
module.exports = exports['default'];
  
});

require.register("c/views/create", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = Backbone.View.extend({
  template: JST.create,

  events: {
    'click button': 'toggleForm',
    'submit .create': 'createImage'
  },

  initialize: function initialize() {
    this.render();
    this.listenTo(this.model, 'change:isHidden', this.render);
  },

  render: function render() {
    this.$el.html(this.template(this.model.toJSON()));
  },

  toggleForm: function toggleForm(e) {
    e && e.preventDefault();
    this.model.set('isHidden', !this.model.get('isHidden'));
  },

  createImage: function createImage(e) {
    e.preventDefault();
    this.collection.create({
      url: this.$('.create-url').val(),
      caption: this.$('.create-caption').val()
    });
    this.toggleForm();
  }
});
module.exports = exports['default'];
  
});

require.register("c/views/index", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = Backbone.View.extend({
  template: JST.index,

  initialize: function initialize() {
    this.render();
    this.listenTo(this.collection, 'update', this.render);
  },

  render: function render() {
    this.$el.html(this.template(this.collection.toJSON()));
  }
});
module.exports = exports['default'];
  
});

require.register("c/views/show", function(exports, require, module){
  "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Backbone.View.extend({
  template: JST.show,

  initialize: function initialize() {
    this.render();
  },

  render: function render() {
    this.$el.html(this.template(this.model.toJSON()));
  }
});
module.exports = exports["default"];
  
});

require.register("d/models/image", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var Image = Backbone.Model.extend({
  defaults: function defaults() {
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

  comparator: function comparator(a, b) {
    return new Date(b.get('created_at')) - new Date(a.get('created_at'));
  }
});

exports['default'] = { Image: Image, ImageCollection: ImageCollection };
module.exports = exports['default'];
  
});

require.register("d/views/create", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = Backbone.View.extend({
  template: JST.create,

  events: {
    'click button': 'toggleForm',
    'submit .create': 'createImage'
  },

  initialize: function initialize() {
    this.render();
    this.listenTo(this.model, 'change:isHidden', this.render);
  },

  render: function render() {
    this.$el.html(this.template(this.model.toJSON()));
  },

  toggleForm: function toggleForm(e) {
    e && e.preventDefault();
    this.model.set('isHidden', !this.model.get('isHidden'));
  },

  createImage: function createImage(e) {
    e.preventDefault();
    this.collection.create({
      url: this.$('.create-url').val(),
      caption: this.$('.create-caption').val()
    });
    this.toggleForm();
  }
});
module.exports = exports['default'];
  
});

require.register("d/views/index", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = Backbone.View.extend({
  template: JST.index,

  initialize: function initialize() {
    this.render();
    this.listenTo(this.collection, 'update', this.render);
  },

  render: function render() {
    this.$el.html(this.template(this.collection.toJSON()));
  }
});
module.exports = exports['default'];
  
});

require.register("d/views/show", function(exports, require, module){
  "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Backbone.View.extend({
  template: JST.show,

  initialize: function initialize() {
    this.render();
  },

  render: function render() {
    this.$el.html(this.template(this.model.toJSON()));
  }
});
module.exports = exports["default"];
  
});

require.register("e/models/image", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var Image = Backbone.Model.extend({
  defaults: function defaults() {
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

  comparator: function comparator(a, b) {
    return new Date(b.get('created_at')) - new Date(a.get('created_at'));
  }
});

exports['default'] = { Image: Image, ImageCollection: ImageCollection };
module.exports = exports['default'];
  
});

require.register("e/views/create", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = Backbone.View.extend({
  template: JST.create,

  events: {
    'click button': 'toggleForm',
    'submit .create': 'createImage'
  },

  initialize: function initialize() {
    this.render();
    this.listenTo(this.model, 'change:isHidden', this.render);
  },

  render: function render() {
    this.$el.html(this.template(this.model.toJSON()));
  },

  toggleForm: function toggleForm(e) {
    e && e.preventDefault();
    this.model.set('isHidden', !this.model.get('isHidden'));
  },

  createImage: function createImage(e) {
    e.preventDefault();
    this.collection.create({
      url: this.$('.create-url').val(),
      caption: this.$('.create-caption').val()
    });
    this.toggleForm();
  }
});
module.exports = exports['default'];
  
});

require.register("e/views/index", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = Backbone.View.extend({
  template: JST.index,

  initialize: function initialize() {
    this.render();
    this.listenTo(this.collection, 'update', this.render);
  },

  render: function render() {
    this.$el.html(this.template(this.collection.toJSON()));
  }
});
module.exports = exports['default'];
  
});

require.register("e/views/show", function(exports, require, module){
  "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Backbone.View.extend({
  template: JST.show,

  initialize: function initialize() {
    this.render();
  },

  render: function render() {
    this.$el.html(this.template(this.model.toJSON()));
  }
});
module.exports = exports["default"];
  
});

//# sourceMappingURL=app.js.map