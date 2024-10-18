// test/math.test.js
const { expect } = require('chai');
const { add } = require('../math');

describe('Math functions', () => {
  it('should return 4 when adding 2 and 2', () => {
    const result = add(2, 2);
    expect(result).to.equal(5);
  });

  it('should return -1 when adding 2 and -3', () => {
    const result = add(2, -3);
    expect(result).to.equal(-1);
  });

  it('should return 0 when adding 0 and 0', () => {
    const result = add(0, 0);
    expect(result).to.equal(0);
  });
});
