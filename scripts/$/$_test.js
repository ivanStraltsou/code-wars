describe('prototype', function() {
  it('init', function() {
    expect(typeof $('a').html).toBe('function');
    expect(typeof $('a').addClass).toBe('function');
    expect($('a').addClass('classA classB classC').classNames_.length).toBe(3);
    expect($('a').addClass(123).html('test').html()).toBe('test');
  });

  it('chain', function() {
    var obj = $('a');

    expect(obj.addClass('classA classB classC')).toBe(obj);
    expect(obj.html('asd')).toBe(obj);
    expect(obj.html('asd').addClass('classA')).toBe(obj);
  });
});
