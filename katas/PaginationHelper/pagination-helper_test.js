describe('pagination helper', function() {
    var helper;

    beforeEach(function() {
        helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
    });

    it('should return page count', function() {
        expect(helper.pageCount()).toEqual(2);
    });

    it('should return item count', function() {
        expect(helper.itemCount()).toEqual(6);
    });

    it('should return page item count', function() {
        expect(helper.pageItemCount(0)).toEqual(4);
        expect(helper.pageItemCount(1)).toEqual(2);
        expect(helper.pageItemCount(2)).toEqual(-1);
    });

    it('should return page index', function() {
        expect(helper.pageIndex(5)).toEqual(1);
        expect(helper.pageIndex(2)).toEqual(0);
        expect(helper.pageIndex(20)).toEqual(-1);
        expect(helper.pageIndex(-10)).toEqual(-1);
    });
});