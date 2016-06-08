import Ember from 'ember';

export default Ember.Controller.extend({
  data: {
    firstName: 'Heather',
    lastName: 'Brysiewicz',
    contact: {
      email: 'h.a.brysiewicz@gmail.com',
      phone: '815-246-2646',
      address: null
    }
  },

  rawData: function(key, val) {
    if (arguments.length == 2) {
      var data = null;
      try {
        data = JSON.parse(val);
      } catch (e) {}
      if (data) this.set('data', data);
    }
    return JSON.stringify(this.get('data'), null, 4);
  }.property('data')
});