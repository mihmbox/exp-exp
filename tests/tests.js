/**
 * Created by mihmb_000 on 5/18/2014.
 */

var should = require('should');
var assert = require('assert');
//var second = require('seconds');

describe('First test', function() {
    it('mocha installed', function() {
       assert.equal(true, true);
    });
    it('should installed', function() {
        true.should.eql(true);
    });
    it('pending');
});