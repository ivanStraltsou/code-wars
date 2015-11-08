function chooseBestPath() {
  var args = Array.prototype.slice.call(arguments, 0);
    var speedStats = args.map(function(x) {
       var totalTime = x.time.reduce(function(a, b) {
        return a + b;
       });
       var totalDistance = x.distance.reduce(function(a, b) {
       	return a + b;
       });
       return totalDistance/totalTime;
    });
    var maxSpeed = Math.max.apply(null, speedStats);
    return args[speedStats.indexOf(maxSpeed)].name;
};