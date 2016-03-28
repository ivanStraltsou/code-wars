describe('merged string checker', function() {
    it('should return true when s can be formed from part1 and part2', function() {
        expect(mergedStringCheck('codewars', 'code', 'wars')).toBeTruthy();
        expect(mergedStringCheck('codewars', 'cod', 'wars')).toBeTruthy();
    });

    it('should return false when s can\'t be formed from part1 and part2', function() {
        expect(mergedStringCheck('codewars', 'cad', 'wars')).toBeFalsy();
    });
});
