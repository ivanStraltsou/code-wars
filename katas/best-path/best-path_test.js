describe('best path', function() {
  var idealPath, path1, path2;
  
  beforeEach(function() {
        idealPath = {
            name: 'idealPath',
            time: [25],
            distance: [18]
        };

        path1 = {
            name: 'path1',
            time: [26, 8],
            distance: [15, 4]
        };

        path2 = {
            name: 'path2',
            time: [20, 10],
            distance: [12, 10]
        };
    });
  
  it('ideal case', function() {
    expect(chooseBestPath(idealPath, path1, path2)).toEqual('idealPath');
  });

  it('real world', function() {
    expect(chooseBestPath(path1, path2)).toEqual('path1');
  });
});
