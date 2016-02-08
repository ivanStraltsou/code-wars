describe('base64 numeric translator', function() {

    it ("should convert 'A' to 0", function(){
        expect(base64_to_base10("A")).toEqual(0);
    });

    it ("should convert '/' to 63", function(){
        expect(base64_to_base10("/")).toEqual(63);
    });

    it ("should convert 'BA'", function(){
        expect(base64_to_base10("BA")).toEqual(64);
    });

    it ("should convert '//'", function(){
        expect(base64_to_base10("//")).toEqual(4095);
    });

    it ("should convert 'WIN'", function(){
        expect(base64_to_base10("WIN")).toEqual(90637);
    });
});
