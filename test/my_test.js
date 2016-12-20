var expect = require('chai').expect;

function myName() {
	return 'melanie';
}

function add(num1, num2) {
	return num1 + num2;
}


// describe is a series of tests
// it statement tests individual functions
// expect statement: first argument is what we are testing, second argument is what we are expecting to recieve

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
  it('will pass again', function () {
    expect(add(3,4)).to.eql(7);
    expect(add(3,4)).be.a('number');
  });
  it('will probably fail', function () {
    expect(add(3,4)).to.eql(7);
    expect(add(3,4)).be.a('string');
  });
});