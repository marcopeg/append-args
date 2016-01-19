"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = appendArgs;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function appendArgs() {
    var args = [].concat(Array.prototype.slice.call(arguments));
    var fn = args.pop();

    return function appendApply() {
        return fn.apply(null, [].concat(Array.prototype.slice.call(arguments), _toConsumableArray(args)));
    };
}