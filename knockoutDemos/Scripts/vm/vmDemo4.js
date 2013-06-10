function Soldier(name, force) {
    this.name = name;
    this.force = force;
}

function Range(id, text) {
    this.id = id;
    this.text = text;
}

var vm4 = (function() {
    "use strict";
    var name = ko.observable(''),
        hasSuperPowers = ko.observable(false),
        range = ko.observable('soldier'),
        availableRanges = ko.observableArray(['soldier', 'captain', 'general']),

        //range = ko.observable(),
        //availableRanges = ko.observableArray([new Range(1, 'soldier'), new Range(2, 'captain'), new Range(3, 'general')]),

        showMyCreation = function () {
            alert(' name: ' + name() +'\n range: ' + range() + ' \n hasSuperPowers: ' + hasSuperPowers());
            //alert(' name: ' + name() + '\n range: ' + range().id + ' \n hasSuperPowers: ' + hasSuperPowers());
        };
    
    return {
        name: name,
        range: range,
        hasSuperPowers: hasSuperPowers,
        showMyCreation: showMyCreation,
        availableRanges: availableRanges
    };
})();

ko.applyBindings(vm4);