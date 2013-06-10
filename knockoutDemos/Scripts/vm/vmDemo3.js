function Soldier(name, force) {
    this.name = name;
    this.force = force;
}

var vm3 = (function() {
    "use strict";
    var name = ko.observable('andoni'),
        range = ko.observable('soldier'),
        battalionSoldiers = ko.observableArray([new Soldier('anonimous soldier', 1), new Soldier('anonimous soldier', 1)]),
        canPromote = ko.computed(function() {
            return range() != 'general';
        }),
        promote = function() {
            var currentRange = range(),
                newRange;
            switch (currentRange) {
            case 'soldier':
                newRange = "captain";
                battalionSoldiers.push(new Soldier('John', 5));
                break;
            case 'captain':
                newRange = "general";
                battalionSoldiers.push(new Soldier('Sam', 10));
                battalionSoldiers.push(new Soldier('Joe', 10));
                break;
            default:
                newRange = 'soldier';
                break;
            }
            range(newRange);
        },
        showSoldier = function(element) {
            $(element).hide().fadeIn('slow');
        };
    return {
        name: name,
        range: range,
        battalionSoldiers: battalionSoldiers,
        canPromote: canPromote,
        promote: promote,
        showSoldier: showSoldier
    };
})();

ko.applyBindings(vm3);