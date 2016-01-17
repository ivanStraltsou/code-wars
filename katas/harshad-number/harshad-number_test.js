describe('harshad number', function() {
    it('should return true for harshad numbers', function() {
        expect(isHarshad(10)).toBe(true);
        expect(isHarshad(588)).toBe(true);
    });

    it('should return false for non harshad numbers', function() {
        expect(isHarshad(19)).toBe(false);
        expect(isHarshad(1001)).toBe(false);
    });
});