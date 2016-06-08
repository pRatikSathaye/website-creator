import Ember from 'ember';

export default Ember.Component.extend({
  templates: [
    'Light Template',
    'Ambiance Template',
    'Github Template',
    'Kinvey Template'
  ],
  template: 'Light Template',
  isURL: function(str) {
     var urlRegex = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
     var url = new RegExp(urlRegex);
     return url.test(str);
  },
  validate: function() {
    var errors = [];
    
    if (!this.get('description')) {
      errors.push('Please provide description!');
    }

    if (!this.get('url')) {
      errors.push('Please provide URL!');
    }
    
    if (this.get('url') && !this.isURL(this.get('url'))) {
      errors.push('Please provide valid URL!');
    }

    return errors;
  },
  actions: {
    saveForm: function() {
      var errors = this.validate();
      if (errors && errors.length) {
        this.sendAction('checkErrors', errors, true);

      } else {
        var formValues = [{
          name: 'url',
          value: this.get('url'),
        }, {
          name: 'description',
          value: this.get('description')
        }, {
          name: 'template',
          value: this.get('template')
        }];
        console.log('Predefined sample data ', formValues);
        this.sendAction('setFormValues', formValues);
      }
    },
    selectTemplate: function(name) {
      this.set('template', name);
    }
  }
});
