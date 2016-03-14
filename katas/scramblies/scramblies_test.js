describe('scramblies', function() {

    it('should group numbers', function() {
        expect(scramblies('rkqodlw', 'world')).toBeTruthy();
        expect(scramblies('cedewaraaossoqqyt', 'codewars')).toBeTruthy();
        expect(scramblies('katas', 'steak')).toBeFalsy();
    });
});
