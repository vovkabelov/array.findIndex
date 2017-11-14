;(function() {
    "use strict";

    if (typeof Array.prototype.findIndex !== "function") {
        Array.prototype.findIndex = function(predicate, thisArg) {
            if (this === null) {
                throw new TypeError('Cannot read property \'find\' of null');
            }

            if (typeof predicate !== "function") {
                throw new TypeError(typeof predicate + ' is not a function');
            }

            var arrLength = this.length;
            var index = -1;

            for (var i = 0; i < arrLength; i++) {
                if (predicate.call(thisArg, this[i], i, this)) {
                    index = i;
                    return;
                }
            }

            return index;
        };
    }
})();