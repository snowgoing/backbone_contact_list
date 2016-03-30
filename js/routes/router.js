var Backbone = require('../lib/backbone-parse/backbone-parse');
var listTemplate = require('../../templates/listTemplate.html');
var singleTemplate = require('../../templates/singleTemplate.html');
var addContactTemplate = require('../../templates/addContactTemplate.html');
var Contacts = require('../collections/contacts');
var Contact = require('../models/contact');
var $ = require('jquery');

require('font-awesome/css/font-awesome.min.css');

  var Router = Backbone.Router.extend({
  initialize: function () {
    Backbone.history.start();
  },
  routes: {
    '': 'index',
    'contact/:contactId': 'contact',
    'addNew': 'addNew'
  },
  index: function () {
    Contacts.fetch({
      success:function(collection){
        var data = {contactsData:collection.toJSON()};
        console.log(data.contactsData);
        $("#container").html(listTemplate(data));
      }
    })
  }
  });

var router = new Router();

router.on('route:addNew', function (){
    $("#container").html(addContactTemplate());
  });

$('#container').on('click', '#addNewContact', function(e) {
   e.preventDefault();

   var contact = new Contact({

   })

   contact.set({
      'image': $("#image").val(),
      'fname': $("#fname").val(),
      'lname': $("#lname").val(),
      'email': $("#email").val(),
      'phone': $("#phone").val(),
      'city': $("#city").val(),
      'state': $("#state").val()
       
   });

   contact.save();
});

router.on('route:contact', function (contactId){
  var contact = new Contact({
    objectId: contactId
  });



  contact.fetch({
    success:function(contact){
      $("#container").html(singleTemplate(contact));
    }
  })
})

module.exports = router;