import { Model } from 'ember-cli-mirage';
import attr from 'ember-data/attr';

export default Model.extend({
  name: attr(),
  wType: attr(),
  typeData: attr('string')
});
