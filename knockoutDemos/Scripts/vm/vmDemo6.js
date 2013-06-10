var vm6 = {
    teams: ko.observableArray([
        { name: 'Athletic Bilbao', players: ['Iraizoz', 'Toquero', 'Aurtenetxe'] },
        { name: 'Real sociedad', players: ['Bravo', 'Cadamuro', 'De la Bella'] },
        { name: 'Madrid', players: ['September', 'October', 'November'] }
    ])
};
ko.applyBindings(vm6);