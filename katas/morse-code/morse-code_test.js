describe('Morse code decoder', function() {
    it('should decode morse code', function() {
        expect(decodeMorse('.... . -.--   .--- ..- -.. .')).toEqual('HEY JUDE');
        expect(decodeMorse('... --- ...')).toEqual('SOS');
    });
});
