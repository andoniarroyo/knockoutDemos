function Soldier(name, range) {
    this.Name = ko.observable(name);
    this.Range = ko.observable(range);
}

var vm7 = (function () {
    "use strict";
    var isLoading = ko.observable(false),
        searchItem = ko.observable().extend({ throttle: 3000 }),
        retrievedSoldier = ko.observable(),
        error = ko.observable(),
        
        //Private methods
        init = function() {
            searchItem.subscribe(search);
        },
        
        // Public methods
        search = function() {
            isLoading(true);
            $.ajax({
                url: 'http://localhost/knockoutDemos/api/searchsoldiers/' + searchItem(),
                dataType: 'json',
                success: function(data) {
                    retrievedSoldier(data);
                },
                error: function(xhr, ajaxOptions, thrownError) {
                    error(xhr.status);
                },
                complete: function() {
                    isLoading(false);
                }
            });
        };

    init();
    
    return {
        isLoading:isLoading,
        searchItem: searchItem,
        retrievedSoldier: retrievedSoldier,
    };
})();

ko.applyBindings(vm7);