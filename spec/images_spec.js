var images = require('../models/images');

describe('Images', function() {
  it('Should have pictures', function() {
    expect(images.pictures).not.toBe(null);
    expect(images.pictures).not.toBe(undefined);
  });

  it('Should have titles', function() {
    expect(images.title).not.toBe(null);
    expect(images.title).not.toBe(undefined);
  });

  it('Should be able to get image data', function(done) {
    if (images.pictures.length > 0) {
      images.getImageData(0, function(data) {
        expect(data).not.toBe(null);
        expect(data).not.toBe(undefined);
        done();
      });
    } else {
      done();
    }
  });
});
