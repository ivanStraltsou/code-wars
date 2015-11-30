describe('group anagrams', function() {

  var arrWords;

  beforeEach(function() {
    arrWords = ["tsar", "rat", "tar", "star", "tars", "cheese"];
  });

  it('should group anagrams', function() {
    expect(groupAnagrams(arrWords)).toEqual([["tsar", "star", "tars"], ["rat", "tar"], ["cheese"]]);
  });
});
