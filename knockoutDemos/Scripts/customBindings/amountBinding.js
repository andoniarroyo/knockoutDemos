ko.bindingHandlers.amount = {
    init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
        $(element).on("slide", function (event, ui) {
            valueAccessor()(ui.value);
        });
    },
    update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
        $(element).slider("option", "value", valueAccessor()());
    }
};