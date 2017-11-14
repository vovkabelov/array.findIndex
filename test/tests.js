var assert = require("assert");

Array.prototype.findIndex = null;
require("../src/array-find-index-polyfill.js");


describe("Array.prototype.findIndex", function() {
    var fruits = ["banana", "apple", "peach", "mango"];
    var sparseArray = ["apple", , undefined, "peach"];
    var arrayLikeObject = {0: "banana", 1: "apple", 2: "peach", 3: "mango", length: 4};
    var arrayLikeNegativeObject = {0: "banana", 1: "apple", 2: "peach", 3: "mango", length: -4};

    it("Should be function", function() {
        assert.equal(typeof Array.prototype.findIndex, "function");
    });

    it("Should find an element in an array", function() {
        fruits.forEach(function(fruit, index) {
            assert.equal(
                fruits.findIndex(function(fruit) {
                    return fruit === fruits[index];
                }),
                index
            );
        });
    });

    it("Should be return -1 if element not found", function() {
        assert.equal(
            fruits.findIndex(function(fruit) {
                return fruit === "plum";
            }),
            -1
        )
    });

    it("Should work with a sparse array", function() {
        var res = [];
        sparseArray.findIndex(function(item, index) {
            res.push([index, item]);
            return false;
        });

        assert.deepEqual(res, [[0, "apple"], [1, undefined], [2, undefined], [3, "peach"]]);
    });

    it("Should work with an array-like object", function() {
        assert.equal(
            Array.prototype.findIndex.call(arrayLikeObject, function(item) {
                return item === "mango";
            }),
            3
        );
    });

    it("Should not work with an array-like object with negative length", function() {
        assert.equal(
            Array.prototype.findIndex.call(arrayLikeNegativeObject, function(item) {
                return item === "mango";
            }),
            -1
        );
    });

    it("Should be throws when call with null ass prototype", function() {
        var tryFindOnNull = function() {
            assert.equal(typeof Array.prototype.findIndex, "function");
            Array.prototype.findIndex.call(null);
        };
        assert.throws(tryFindOnNull, TypeError);
    });

    it("Should be throws when call without callback function", function() {
        var tryFindWithoutCallback = function() {
            assert.equal(typeof Array.prototype.findIndex, "function");
            fruits.findIndex();
        };
        assert.throws(tryFindWithoutCallback, TypeError);
    });

    it("Context must be equal to the specified object", function() {
        var context = {};

        fruits.findIndex(function() {
            assert.equal(context, this);
        }, context);
    });
});