describe('Simplifing multilinear polynomials', function() {

    it('All possible sums and subtraction of equivalent monomials ("xy==yx")', function() {
        expect(simplify('cb+cba')).toEqual('bc+abc');
        expect(simplify('2xy-yx')).toEqual('xy');
        expect(simplify('-a+5ab+3a-c-2a')).toEqual('-c+5ab');
    });

    it('All monomials appears in order of increasing number of variables', function() {
        expect(simplify('-abc+3a+2ac')).toEqual('3a+2ac-abc');
        expect(simplify('xyz-xz')).toEqual('-xz+xyz');
    });

    it('If two monomials have the same number of variables, they appears in lexicographic order', function() {
        expect(simplify('a+ca-ab')).toEqual('a-ab+ac');
        expect(simplify('xzy+zby')).toEqual('byz+xyz');
    });

    it('There is no leading + sign if the first coefficient is positive', function() {
        expect(simplify('-y+x')).toEqual('x-y');
        expect(simplify('y-x')).toEqual('-x+y');
    });
});
