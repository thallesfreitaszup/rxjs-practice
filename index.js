"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var observable = new rxjs_1.Observable(function (subscribe) {
    subscribe.next(1);
    subscribe.next(2);
    subscribe.next(3);
    subscribe.next(4);
    subscribe.next(5);
    subscribe.next(6);
});
var values = observable.pipe(operators_1.mergeMap(function (val) {
    if (val > 5) {
        return rxjs_1.throwError('error');
    }
    else {
        return rxjs_1.of(val);
    }
}), operators_1.retry(1));
values.subscribe({
    next: function (x) {
        console.log(x);
    },
    error: function (x) {
        throw new Error('x');
    }
});
