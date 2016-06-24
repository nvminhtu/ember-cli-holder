/*jshint node:true*/
module.exports = {
  description: '',
  afterInstall: function(options) {
    return this.addBowerPackageToProject('holderjs','2.9.0');
  }
  // locals: function(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  // afterInstall: function(options) {
  //   // Perform extra work here.
  // }

};
