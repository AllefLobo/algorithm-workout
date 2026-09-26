var MinStack = function () {
  this.list = [];
  this.count = 0;
  this.min = null;
};

/**
 * @param {number} value
 * @return {void}
 */
MinStack.prototype.push = function (value) {
  if (value < this.min || this.min === null) {
    this.min = value;
  }
  this.list[this.count] = [value, this.min];
  this.count++;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.list[this.count] = null;
  this.count = this.count - 1 >= 0 ? this.count : 0;
  this.min = this.getMin();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  if (this.list[this.count] !== null && this.list[this.count] !== undefined) {
    return this.list[this.count][0];
  }
  return null;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  if (this.list[this.count] !== null && this.list[this.count] !== undefined) {
    return this.list[this.count][1];
  }
  return null;
};

let minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top(); // return 0
minStack.getMin(); // return -2

console.log(minStack);
