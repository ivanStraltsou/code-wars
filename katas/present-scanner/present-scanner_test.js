describe('present scanner', function() {

    var arrNum;

    beforeEach(function() {
        presents = [
            {size: 'huge', weight: 'heavy', clatters: 'who knows'},
            {size: 'medium', weight: 'medium', clatters: 'no'}
        ];
    });

    it('normal presents list', function() {
        expect(presentScanner([
            {name: 'ferrari keys', size: 'small', weight: 'light', clatters: 'yes'},
            {name: 'big house', size: 'huge', weight: 'heavy', clatters: 'who knows'},
            {name: 'peace of gold', size: 'medium', weight: '3 kg', clatters: 'no'},
            {name: 'gubozakatochnaya machine', size: 'small', weight: 'light', clatters: 'a bit'}
        ],
        [
            {size: 'huge', weight: 'heavy', clatters: 'who knows'},
            {size: 'medium', weight: 'medium', clatters: 'no'}
        ])).toEqual(['big house', 'peace of gold']);
    });

    it('duplicates', function() {
        expect(presentScanner([
            {name: 'ferrari keys', size: 'small', weight: 'light', clatters: 'yes'},
            {name: 'big house', size: 'huge', weight: 'heavy', clatters: 'who knows'},
            {name: 'ferrari keys', size: 'small', weight: 'light', clatters: 'yes'},
            {name: 'big house', size: 'huge', weight: 'heavy', clatters: 'who knows'},
            {name: 'peace of gold', size: 'medium', weight: '3 kg', clatters: 'no'},
            {name: 'gubozakatochnaya machine', size: 'small', weight: 'light', clatters: 'a bit'}
        ], [
            {size: 'huge', weight: 'heavy', clatters: 'who knows'},
            {size: 'medium', weight: 'medium', clatters: 'no'}
        ])).toEqual(['big house', 'peace of gold']);
    });

    it('bad situation', function() {
        expect(presentScanner([
            {name: 'ferrari keys', size: 'small', weight: 'light', clatters: 'yes'},
            {name: 'big house', size: 'huge', weight: 'heavy', clatters: 'who knows'},
            {name: 'peace of gold', size: 'medium', weight: '3 kg', clatters: 'no'},
            {name: 'gubozakatochnaya machine', size: 'small', weight: 'light', clatters: 'a bit'}
        ], [
            {size: 'small', weight: 'light', clatters: 'a bit'},
            {size: 'small', weight: 'light', clatters: 'a bit'}
        ])).toEqual(['gubozakatochnaya machine', 'ferrari keys']);
    });
});
