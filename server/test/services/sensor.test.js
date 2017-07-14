const assert = require('assert');
const app = require('../../src/app');

describe('\'sensor\' service', () => {
  it('registered the service', () => {
    const service = app.service('sensor');

    assert.ok(service, 'Registered the service');
  });
});
