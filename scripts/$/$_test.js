describe('prototype', function() {
  it('prototype chain', function() {
    expect('html' in $('a')).toBe(true);
    expect($('a').hasOwnProperty('html')).toBe(false);

    expect('addClass' in $('a')).toBe(true);
    expect($('a').hasOwnProperty('addClass')).toBe(false);

    expect(typeof $('a').html).toBe('function');
    expect(typeof $('a').addClass).toBe('function');
  });

  it('addClass, html function tests', function() {
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
