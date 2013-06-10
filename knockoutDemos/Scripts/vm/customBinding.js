// Load Slider
$(function () {
    $("#slider-range").slider({
        min: 1000,
        max: 2000
    });
    $("#slider-range-to-return").slider({
        min: 0,
        max: 1000
    });
    ko.applyBindings(vm);
});

var vm = (function () {
    "use strict";
    var amount = ko.observable(1500),
        amountToReturn = ko.observable(500);
    return {
        amount: amount,
        amountToReturn: amountToReturn
    };
})();

