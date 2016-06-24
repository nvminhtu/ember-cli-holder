import Ember from 'ember';
import layout from '../templates/components/ember-cli-holder';

export default Ember.Component.extend({
  layout: layout,
  didInsertElement: function() {
    Ember.run.next(function(){
      
    });
  }
});
