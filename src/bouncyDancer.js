var BouncyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

BouncyDancer.prototype = Object.create(Dancer.prototype);
BouncyDancer.prototype.constructor = BouncyDancer;

// var oldStep = Dancer.prototype.step;
//BlinkyDancer.prototype.oldStep = Dancer.prototype.step;

BouncyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};