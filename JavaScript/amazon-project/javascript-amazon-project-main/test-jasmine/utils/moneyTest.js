import {formatCurrency} from '../../scripts/utils/money.js';

//create a test suite
describe('test suite : formatCurrency', ()=>{
    //create a test case
    it('converts cents into dollars', ()=>{
        //compare the result of the function with the expected value
        expect(formatCurrency(2095)).toEqual('20.95');
    });
    it('works with 0',()=>{
        expect(formatCurrency(0)).toEqual('0.00');
    });
    it('rounds up to the nearest cent',()=>{
        expect(formatCurrency(2000.5)).toEqual('20.01');
    });
});