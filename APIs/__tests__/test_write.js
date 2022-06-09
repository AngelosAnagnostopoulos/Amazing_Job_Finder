const assert = require('assert');
describe('Array', function () {
    describe('#indexOf()', function () {
        it('should return the index when the value is not present', function () {
            assert.equal([3, 4, 5].indexOf(4), 1);
        });
    });
});