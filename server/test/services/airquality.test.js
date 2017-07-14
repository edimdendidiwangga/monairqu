const assert = require('assert');
const app = require('../../src/app');

describe('\'airquality\' service', () => {
  it('registered the service', () => {
    const service = app.service('airquality');

    assert.ok(service, 'Registered the service');
  });
});
