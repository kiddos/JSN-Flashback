const settings = require('../settings');

describe('Settings', function() {
  it('Should have valid object', function() {
    expect(settings).not.toBe(null);
    expect(settings).not.toBe(undefined);

    expect(settings.path).not.toBe(null);
    expect(settings.path).not.toBe(undefined);
  });
});
