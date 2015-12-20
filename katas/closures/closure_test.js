describe('closure', function() {
    var fluffy;
    var garfield;

    beforeEach(function() {
        fluffy = new Cat('fluffy', 15);
        garfield = new Cat('garfield', 25);
    });

    it('should return weight', function() {
        expect(fluffy.weight).toEqual(15);
    });

    it('should not return averageWeight directly', function() {
        expect(fluffy.averageWeight).toEqual(undefined);
    });

    it('should return averageWeight through getter', function() {
        expect(Cat.averageWeight()).toEqual(20);
    });
});