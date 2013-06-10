function Soldier(name, range) {
    this.Name = ko.observable(name);
    this.Range = ko.observable(range);
}

var vm5 = (function () {
    "use strict";
    var retrievedSoldier = ko.observable(),
        error = ko.observable(),
        isLoading = ko.observable(),
        //Private methods
        init = function() {
            isLoading(true);
            $.ajax({
                url: 'http://localhost/knockoutDemos/api/soldiers',
                dataType: 'json',
                success: function(data) {
                    retrievedSoldier(ko.mapping.fromJS(data));
                },
                error: function(xhr, ajaxOptions, thrownError) {
                    error(xhr.status);
                },
                complete: function() {
                    isLoading(false);
                }
            });
        },
        // Public methods
        canPromote = ko.computed(function() {
            return retrievedSoldier() && retrievedSoldier().Range() != 'general';
        }),
        promote = function() {
            var currentRange = retrievedSoldier().Range(),
                newRange;

            switch (currentRange) {
            case 'soldier':
                newRange = "captain";
                retrievedSoldier().BattalionSoldiers.push(new Soldier('John', 'newbie'));
                break;
            case 'captain':
                newRange = "general";
                retrievedSoldier().BattalionSoldiers.push(new Soldier('Sam', 'senior'));
                retrievedSoldier().BattalionSoldiers.push(new Soldier('Joe', 'senior'));
                break;
            default:
                newRange = 'soldier';
                break;
            }
            retrievedSoldier().Range(newRange);
        },
        showSoldier = function(element) {
            $(element).hide().fadeIn('slow');
        },
        saveSoldier = function () {
            $.ajax({
                url: 'http://localhost/knockoutDemos/api/soldiers',
                type: 'POST',
                dataType: 'json',
                contentType: 'application/json; charset=utf-8',
                data: ko.toJSON(retrievedSoldier)
                //data: JSON.stringify(ko.mapping.toJS(retrievedSoldier))  
            });
        };

        init();
    return {
        retrievedSoldier: retrievedSoldier,
        saveSoldier: saveSoldier,
        canPromote: canPromote,
        promote: promote,
        showSoldier: showSoldier,
        isLoading: isLoading
    };
})();

ko.applyBindings(vm5);