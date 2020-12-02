/* Domino uses sloppy-mode features (in particular, `with`) for a few
 * minor things.  This file encapsulates all the sloppiness; every
 * other module should be strict. */
/* jshint strict: false */
/* jshint evil: true */
/* jshint -W085 */
module.exports = {
  Window_run: function _run(code, file) {
    if (file) code += '\n//@ sourceURL=' + file;
    with(this) eval(code);
  },
  EventHandlerBuilder_build: function build() {
    try {
      with(this.document.defaultView || Object.create(null))
        with(this.document)
          with(this.form)
            with(this.element)
              return eval("(function(event){" + this.body + "})");
    }
    catch (err) {
      return function() { throw err; };
    }
  }
};
