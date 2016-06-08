import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('websites/custom-html', 'Integration | Component | websites/custom html', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{websites/custom-html}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#websites/custom-html}}
      template block text
    {{/websites/custom-html}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
