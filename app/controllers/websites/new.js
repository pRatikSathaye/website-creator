import Ember from 'ember';

export default Ember.Controller.extend({
  name: function() {
    return '';
  }.property('model'),
  dropDownOptions: {
    'custom-html': 'Custom HTML',
    'pre-defined': 'Predefined Templates'
  },
  currentSelection: 'Custom HTML',
  currentSelectionRawValue: 'custom-html',
  componentName: Ember.computed('currentSelectionRawValue', function() {
    return 'websites.' + `${this.get('currentSelectionRawValue')}`;  
  }),
  validate: function() {
    var errors = [];
    
    if (!this.get('name')) {
      errors.push('Please provide a name!');
    }
    
    return errors;
  },
  showErrors: function(errors, isInvalid) {
    this.set('errors', errors);
    this.set('isInvalid', isInvalid);
  },
  actions: {
    setIsCustom: function(params) {
      console.log('Params' , params);
      this.set('currentSelectionRawValue', params);
      this.set('currentSelection', this.get('dropDownOptions')[params]);
    },
    setFormValues: function(formValues) {
      var errors = this.validate();
      if (errors && errors.length) {
        this.showErrors(errors, true);

      } else {
        var obj = {
          name: this.get('name'),
          wType: this.get('currentSelectionRawValue'),
          additional: formValues
        }

        var record = this.store.createRecord('website', obj);
        record.save();
        this.transitionToRoute('websites');
      }
    },
    checkErrors: function(errors, isInvalid) {
      this.showErrors(errors, isInvalid);
    }
  }
});
