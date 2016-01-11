describe('cards encoder decoder', function() {

    it('should encode cards', function() {
        expect(cardsConverter(["5h", "7c", "Qh", "Qs", "Ad"]))
            .toEqual([6, 13, 30, 37, 50]);
    });

    it('should decode cards', function() {
        expect(cardsConverter([50, 6, 13,30, 37]))
            .toEqual(["7c", "Ad", "5h", "Qh", "Qs"]);
    });
});