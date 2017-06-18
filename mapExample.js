var map = {};
function storePhi(event, phi) {
  map[event] = phi;
}

storePhi("pizza", 0.069);
storePhi("touched tree", -0.081);

console.log("Map:",map);

console.log("pizza in map:", "pizza" in map);
// → true
console.log(map["touched tree"]);
// → -0.081

for (var eventName in map)
  console.log("The correlation for '" + eventName +
              "' is " + map[eventName]);
// → The correlation for 'pizza' is 0.069
// → The correlation for 'touched tree' is -0.081
