var expect = require('chai').expect;

function myName() {
	return 'melanie';
}

describe('my test suite', function () {
  it('fails majestically', function () {
    expect(5%4).to.eql(2);
  });
  it('will fail again', function () {
    expect('my name').to.eql('melanie');
  });
  it('will finally pass', function () {
    expect(myName()).to.eql('melanie');
  });
});