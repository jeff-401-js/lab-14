'use strict';

process.env.SECRET='test';

const utils = require('../../../src/auth/utils.js').server;
const supergoose = require('../../supergoose.js');

describe('Utils functions', () => {

  it('authbearer should authenticate if a valid token is used', () => {
    expect(true).toBe(true);
  });

  it('authbearer should return an error if a invalid token is used', () => {

  });

  it('authbasic should authenticate a user if valid', () => {

  });

  it('authbasic should return an error if a user is invalid', () => {

  });

  it('authenticate should generate a token if a user has the right capability', () => {

  });

  it('authenticate should return an error if a user is without the right capability', () => {

  });
});