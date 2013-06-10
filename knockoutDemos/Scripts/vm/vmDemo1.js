var vm1 = (function () {
    "use strict";
    var name = ko.observable('andoni'),
        range = ko.observable('soldier'),
        promote = function() {
            var currentRange = range(),
                newRange;
            switch (currentRange) {
            case 'soldier':
                newRange = "captain";
                break;
            case 'captain':
                newRange = "general";
                break;
            default:
                newRange = 'soldier';
                break;
            }
            range(newRange);
        };
    return {
        name: name,
        range: range,
        promote: promote
    };
})();

ko.applyBindings(vm1);