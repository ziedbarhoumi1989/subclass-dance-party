

var BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

// var oldStep = Dancer.prototype.step;
//BlinkyDancer.prototype.oldStep = Dancer.prototype.step;

BlinkyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};
// var MakeBlinkyDancer = function(top, left, timeBetweenSteps) {
//   MakeDancer.call(this,top,left,timeBetweenSteps)
// }
// MakeBlinkyDancer.prototype = Object.create(MakeDancer.prototype)
// MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer

//   //var blinkyDancer = MakeDancer(top, left, timeBetweenSteps);

//   // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
//   // so we must keep a copy of the old version of this function

//   var oldStep = MakeDancer.prototype.step;
//   console.log(oldStep)

//   MakeBlinkyDancer.prototype.step = function() {
//     // call the old version of step at the beginning of any call to this new version of step
//     oldStep();
//     // toggle() is a jQuery method to show/hide the <span> tag.
//     // See http://api.jquery.com/category/effects/ for this and
//     // other effects you can use on a jQuery-wrapped html tag.
//     this.$node.toggle();
//   };
//   MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer

   
// ;