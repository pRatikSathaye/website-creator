import Ember from 'ember';

export default Ember.Route.extend({
  init() {
    // this.store.createRecord('website', {
    //   id: 1,
    //   name: 'Kinvey',
    //   wType: 'customHTML',
    //   typeData: '<html></html>'
    // });
    
    // this.store.createRecord('website', {
    //   id: 2,
    //   name: 'Google',
    //   wType: 'predefined',
    //   typeData: {
    //     name: 'template1',
    //     description: 'This is awesome template',
    //     url: 'http://www.example.com',
    //     template: 'Google Home Template'
    //   }
    // });
  },
  model() {
    return this.store.findAll('website');
  }
});
