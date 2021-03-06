var api = require('../'),
  assert = require('assert')

describe('mapshaper-database-utils.js', function () {

  describe('copyLayer()', function () {
    it('duplicate data records', function () {
      var lyr = {
        data: new api.internal.DataTable([{foo: 'a', bar: null}])
      };
      var copy = api.internal.copyLayer(lyr);
      assert.deepEqual(copy.data.getRecords(), lyr.data.getRecords());
      assert.notEqual(copy.data.getRecords()[0], lyr.data.getRecords()[0])
    })

    it('duplicate shapes', function () {
      var lyr = {
        geometry_type: 'point',
        shapes: [[[1, 3]], null]
      };
      var copy = api.internal.copyLayer(lyr);
      assert.deepEqual(copy, lyr);
      assert.notEqual(copy.shapes[0], lyr.shapes[0])
    })
  })

})
