/*
 *  Init code for legacy compatibility.
 *
 *  Compatibility properties / wrapper functions here allow Duktape to remain
 *  compatible for user code when core features are changed, without burdening
 *  the main C code with compatibility stuff.
 *
 *  This file is minified with UglifyJS or the closure compiler.  Both will
 *  rename variables, remove comments, and are clever enough to drop any
 *  "if (false) { ... }" blocks altogether, so that's an effective way to
 *  disable currently unneeded code.
 */

(function(G, D) {
    'use strict';

    function def(name, value) {
        Object.defineProperty(D, name, {
            value: value,
            writable: true,
            enumerable: false,
            configurable: true
        });
    }

    // Compatibility for 'console.log'.
    if (false) {
        console = {
            log: function() {
                print(Array.prototype.join.call(arguments, ' '));
            }
        };
    }

    // Logger object for C code provided by init code now.
    if (true) {
        D.Logger.clog = new D.Logger('C');
    }
})(this, Duktape);
