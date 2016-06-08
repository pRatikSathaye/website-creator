import Ember from 'ember';

export default Ember.Component.extend({
  editorValue: null,
  validate: function() {
    var errors = [];
    if (!this.get('editorValue')) {
      errors.push('Please provide HTML code!');
    }
    console.log('Current errors ', errors);
    return errors;
  },
  actions: {
    saveForm: function() {
      this.set('isInvalid', false);
      console.log('This ', this.get('name'));
      var formValues = [{
        name: 'html-code',
        value: this.get('editorValue')
      }];
      
      var errors = this.validate();
      if (errors.length) {
        this.set('errors', errors);
        this.set('isInvalid', true);
        this.sendAction('checkErrors', errors, this.get('isInvalid'));
      } else {
        this.sendAction('setFormValues', formValues);
      }
    },
    setEditorValue: function(params) {
      console.log('set editor value ', params);
      this.set('editorValue', params);
    }
  }
});
