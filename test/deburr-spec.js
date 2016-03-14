describe('deburr', function() {
  const deburr = require('../index.js');
  const expect = require('chai').expect;
  const output = 'test this';

  it('should fix funny foriegn accents', function() {
    var input = 'känner';
    expect(deburr(input)).to.equal('kanner');
  });

  it('should not contain a .', function() {
    var input = 'test. this.';
    expect(deburr(input)).to.equal(output);
  });

  it('should not contain a ,', function() {
    var input = 'test, this,';
    expect(deburr(input)).to.equal(output);
  });

  it("should not contain a '", function() {
    var input = "test' this'";
    expect(deburr(input)).to.equal(output);
  });

  it('should not contain a "', function() {
    var input = 'test" this"';
    expect(deburr(input)).to.equal(output);
  });

  it('should not contain a ”', function() {
    var input = 'test” this”';
    expect(deburr(input)).to.equal(output);
  });

  it('should not contain a :', function() {
    var input = 'test: this:';
    expect(deburr(input)).to.equal(output);
  });

  it('should not contain a &', function() {
    var input = 'test & this';
    let output = 'test and this';
    expect(deburr(input)).to.equal(output);
  });

  it('should not contain a .', function() {
    var input = 'test/this';
    let output = 'test-this';
    expect(deburr(input)).to.equal(output);
  });

  it('should not contain multiple spaces', function() {
    var input = 'test    this';
    expect(deburr(input)).to.equal(output);
  });

  it('should not have leading or trainiling spaces', function() {
    var input = '      test this       ';
    expect(deburr(input)).to.equal(output);
  });
});
