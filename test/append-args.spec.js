
import {expect} from 'chai';
import appendArgs from '../src/append-args';

describe('appendArgs', () => {

    // this will return the sum of all the given arguments
    function sum() {
        return [...arguments].reduce((pre, val) => pre + val, 0);
    }

    it('should import the function', () => {
        expect(appendArgs).to.be.a('function');
    });

    it('shoud append one argument', () => {
        var sum1 = appendArgs(1, sum);
        expect(sum1(2)).to.equal(3);
    });

    it('shoud append many argument', () => {
        var sumMany = appendArgs(1, 2, 3, 4, sum);
        expect(sumMany(10)).to.equal(20);
    });

});
