var Backbone = require('../lib/backbone-parse/backbone-parse');
var ContactModel = require('../models/contact');

var ContactsCollection = Backbone.Collection.extend({
  model: ContactModel,
  _parse_class_name: 'Contacts'
});

var Contacts = new ContactsCollection();

module.exports = Contacts;