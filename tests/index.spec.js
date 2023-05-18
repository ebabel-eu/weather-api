const chai = require('chai');
const expect = chai.expect;

const {getLink, handleError, roundTwoDecimals, getAverageTemperature, capitalize} = require('../index');

describe('app', () => {
  it('getLink should return an array with France, Italy, and Spain', () => {
    const result = getLink();
    expect(result).to.have.deep.members([ '/france', '/italy', '/spain' ]);
  });

  it('handleError should return an error response with the expected message', () => {
    const result = handleError('test error message');
    expect(result.description).to.equal('test error message');
  });

  it('handleError should return a link array of alternative valid endpoints to call', () => {
    const result = handleError('test error message');
    expect(result.link).to.have.deep.members([ '/france', '/italy', '/spain' ]);
  });

  it('roundTwoDecimals rounds 3.14159 to 3.14', () => {
    const result = roundTwoDecimals(3.14159);
    expect(result).to.equal(3.14);
  });

  it('roundTwoDecimals rounds 1.239 to 1.24', () => {
    const result = roundTwoDecimals(1.239);
    expect(result).to.equal(1.24);
  });

  it('getAverageTemperature averages 3.6, 9, and 10 to 7.53', () => {
    const result = getAverageTemperature([3.6, 9, 10]);
    expect(result).to.equal(7.53);
  });

  it('getAverageTemperature averages 5, 10, and 5 to 6.67', () => {
    const result = getAverageTemperature([5, 10, 5]);
    expect(result).to.equal(6.67);
  });

  it('capitalize changes the first letter to uppercase', () => {
    const result = capitalize('thomas');
    expect(result).to.equal('Thomas');
  });
});
