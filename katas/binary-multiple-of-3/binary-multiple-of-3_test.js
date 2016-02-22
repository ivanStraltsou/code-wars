describe('binary multiple of 3', function() {

    it('should return true when the given string represents a number divisible by 3', function() {
        expect(multipleOf3Regex.test('000')).toBeTruthy();
        expect(multipleOf3Regex.test('011')).toBeTruthy();
        expect(multipleOf3Regex.test('110')).toBeTruthy();
        expect(multipleOf3Regex.test((12345678).toString(2))).toBeTruthy();
    });

    it('should return false when the given string represents a number not divisible by 3 or not valid', function() {
        expect(multipleOf3Regex.test('001')).toBeFalsy();
        expect(multipleOf3Regex.test(' abc ')).toBeFalsy();
    });
});