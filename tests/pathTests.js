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

  it('tests a group of workshops', () => {
    const result = defs.getDefs(['iot', 'demo_grocery', 'agility', 'crash_course']);

    expect(result).to.be.an('array');
    expect(result.length).to.equal(4);
  });

});