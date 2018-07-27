/* globals it, describe */

const chai = require('chai');

// const assert = chai.assert;
const expect = chai.expect; // we are using the "expect" style of Chai
const defs = require('../lib/workshop-definitions');

describe('verifies workshop stuff', () => {

  it('tests a single workshop', () => {
    const result = defs.getDefs(['demo_grocery']);

    expect(result).to.be.an('array');
    expect(result.length).to.equal(1);
  });

  it('tests a fake workshop', () => {
    const result = defs.getDefs(['this_doesnt_exist']);

    expect(result).to.be.an('array');
    expect(result.length).to.equal(0);
  });

  it('tests main', () => {
    const result = defs.getDefs(defs.main);

    expect(result).to.be.an('array');
    expect(result.length).to.equal(defs.main.length);
  });

  it('tests zone', () => {
    const result = defs.getDefs(defs.df18zone);

    expect(result).to.be.an('array');
    expect(result.length).to.equal(defs.df18zone.length);
  });

  it('tests rapids', () => {
    const result = defs.getDefs(defs.df18rapids);

    expect(result).to.be.an('array');
    expect(result.length).to.equal(defs.df18rapids.length);
  });

  it('tests demos', () => {
    const result = defs.getDefs(defs.demos);

    expect(result).to.be.an('array');
    expect(result.length).to.equal(defs.demos.length);
  });

  it('handles unfound stuff', () => {
    const originalSize = defs.demos.length;

    let request = defs.demos;
    expect(request).to.be.an('array');
    expect(request.length).to.equal(originalSize);

    request.push('something fake');
    expect(request).to.be.an('array');
    expect(request.length).to.equal(originalSize + 1);

    const result = defs.getDefs(request);

    expect(result).to.be.an('array');
    expect(result.length).to.equal(originalSize);
  });

});