describe('breadcrumb generator', function() {

    it('should return breadcrumb with : separator', function() {
        expect(generateBC("mysite.com/pictures/holidays.html", " : "))
            .toEqual('<a href="/">HOME</a> : <a href="/pictures/">PICTURES</a> : <span class="active">HOLIDAYS</span>');
    });

    it('should return breadcrumb with / separator', function() {
        expect(generateBC("www.microsoft.com/important/confidential/docs/index.html", " / "))
            .toEqual('<a href="/">HOME</a> / <a href="/important/">IMPORTANT</a> / <a href="/important/confidential/">CONFIDENTIAL</a> / <span class="active">DOCS</span>');
    });

    it('should skip anchors', function() {
        expect(generateBC("www.microsoft.com/important/confidential/docs/index.htm#top", " * "))
            .toEqual('<a href="/">HOME</a> * <a href="/important/">IMPORTANT</a> * <a href="/important/confidential/">CONFIDENTIAL</a> * <span class="active">DOCS</span>');
    });
});