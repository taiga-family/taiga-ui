
var fs = require('fs')
  , path = require('path')
  , Chain = require('traverse-chain');


/**
 * Outline the APIs.
 */
var find = module.exports = {

  // file:      function(pat, root, callback) {}
  // dir:       function(pat, root, callback) {}

  // eachfile:  function(pat, root, action) {}
  // eachdir:   function(pat, root, action) {}

  // fileSync:  function(pat, root) {}
  // dirSync:   function(pat, root) {}

};


/**
 *  Method injection for handling errors.
 */
var fss = {};
['readdir', 'lstat'].forEach(function(method) {
  var origin = fs[method];
  fss[method] = function(path, callback) {
    return origin.apply(fs, [path, function(err) {
      if (err) {
        if (find.__errorHandler) {
          find.__errorHandler(err);
        } else {
          throw err;
        }
      } 
      return callback.apply(null, arguments);
    }]);
  }
});


/**
 * Utility for checking types.
 */
var is = (function(expose) {
  var method = {
      'String'  : 'string'
    , 'RegExp'  : 'regx'
    , 'Function': 'func'
  };
  Object.keys(method).forEach(function(type) {
    expose[method[type]] = function(input) {
      return Object.prototype.toString.call(input) === '[object ' + type +  ']'; 
    }
  });
  return expose;
}({}));


/**
 * Check pattern with path's basename 
 */
var compare = function(pat, name) {
  var str = path.basename(name);
  return (
       is.regx(pat)   && pat.test(str) 
    || is.string(pat) && pat === str
  ); 
};


/**
 * Traverse a directory recursively and asynchronously. 
 *
 * @param {String} root
 * @param {String} type
 * @param {Function} action
 * @param {Function} callback
 * @param {Chain} c
 * @api private
 */
var traverseAsync = function(root, type, action, callback, c) {
  fss.lstat(root, function(err, stat) {
    if (stat && stat.isDirectory()) {  
      fss.readdir(root, function(err, all) {
        var chain = Chain();
        all && all.forEach(function(dir) {
          dir = path.join(root, dir);
          chain.add(function() {
            fss.lstat(dir, function(err, s) {
              if (!s) return chain.next();
              if (s.isFile() && type === 'file') {
                action(dir);
                chain.next();
              } else if (s.isDirectory()) {
                if (type === 'dir') {
                  action(dir);
                }
                traverseAsync(dir, type, action, callback, chain);
              } else {
                chain.next();
              }
            });
          })
        });
        chain.traverse(function() {
          c ? c.next() : callback();
        });
      });
    }
  });
}

 
/**
 * Traverse a directory recursively.
 *
 * @param {String} root
 * @param {String} type
 * @param {Function} action
 * @return {Array} the result
 * @api private
 */  
var traverseSync = function(root, type, action) {
  var stat = fs.lstatSync(root);        
  if (stat && stat.isDirectory()) {
    fs.readdirSync(root).forEach(function(dir) {
      var s = fs.lstatSync(dir = path.join(root, dir));
      if (!s) return;
      if (s.isFile() && type === 'file') {
        action(dir)
      } else if (s.isDirectory()) {
        (type === 'dir') && action(dir);
        traverseSync(dir, type, action);
      }
    });
  }
};
 

['file', 'dir'].forEach(function(type) {
  
  /**
   * `find.file` and `find.dir` 
   * 
   * Find files or sub-directories in a given directory and 
   * passes the result in an array as a whole. This follows 
   * the default callback style of nodejs, think about `fs.readdir`, 
   *
   * @param {RegExp|String} pat 
   * @param {String} root
   * @param {Function} fn
   * @api public
   */ 
  find[type] = function(pat, root, fn) {
    var buffer = [];
    traverseAsync(
        root
      , type
      , function(n) { buffer.push(n);}
      , function() {
          is.func(fn) && fn(buffer.filter(function(n) {
            return compare(pat, n);
          }));
        }
    );
    return {
      error: function(handler) {
        if (is.func(handler)) {
          find.__errorHandler = handler;  
        } 
      }
    }
  }

  /**
   * `find.eachfile` and `find.eachdir`
   * 
   * Find files or sub-directories in a given directory and 
   * apply with a given action to each result immediately 
   * rather than pass them back as an array.
   *
   * @param {RegExp|String} pat 
   * @param {String} root
   * @param {Function} action
   * @return {Object} for chain methods
   * @api public
   *  
   */ 
  find['each' + type] = function(pat, root, action) {
    var callback = function() {}
    process.nextTick(function() {
      traverseAsync(
          root
        , type
        , function(n) {
            if (compare(pat, n) && is.func(action)) {
              action(n);
            }
          }
        , callback
      );
    });
    return {
      end: function(fn) {
        if (is.func(fn)) {
          callback = fn;
        }
        return this;
      }, 
      error: function(handler) {
        if (is.func(handler)) {
          find.__errorHandler = handler;    
        }
        return this;
      }
    };
  }

  /**
   * `find.fileSync` and `find.dirSync` 
   *
   * Find files or sub-directories in a given directory synchronously 
   * and returns the result as an array. This follows the default 'Sync' 
   * methods of nodejs, think about `fs.readdirSync`, 
   *
   * @param {RegExp|String} pat 
   * @param {String} root
   * @return {Array} the result
   * @api public
   */ 
  find[type + 'Sync'] = function(pat, root) {
    var buffer = [];
    traverseSync(root, type, function(n) {
      buffer.push(n);  
    });
    return buffer.filter(function(n) {
      return compare(pat, n);
    });
  } 

}); 

