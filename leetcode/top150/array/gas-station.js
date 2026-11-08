/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  let total = 0;
  let start = 0;
  let tank = 0;
  for (let i = 0; i < gas.length; i++) {
    let diff = gas[i] - cost[i];
    tank = tank + diff;
    total = total + diff;
    if (tank < 0) {
      tank = 0;
      start = i + 1;
    }
  }
  return total >= 0 ? start : -1;
};

let gas = [1, 2, 3, 4, 5],
  cost = [3, 4, 5, 1, 2];
console.log(canCompleteCircuit(gas, cost));
