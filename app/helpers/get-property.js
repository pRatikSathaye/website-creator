import Ember from 'ember';

export function getProperty(props) {
  var name = props[0];
  var props = props[1];
  console.log('Name ', name);
  console.log('Props ', props);
  if (Object.keys(props).length) {
    return props[name] ? props[name] : name;
  } else {
   return name; 
  }
}

export default Ember.Helper.helper(getProperty);
