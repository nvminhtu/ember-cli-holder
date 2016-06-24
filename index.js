/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-holder',
  included: function(app){
    this._super.included(app);
    // Include library js file
    this.app.import(app.bowerDirectory + '/holderjs/holder.min.js');
  }
};
