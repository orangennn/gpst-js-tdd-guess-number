const load = require('../main/main');
const main=load.main;
var Numbers='1234'
describe('main()', function() {
  it('4个数字和位置都猜对',function(){
    let result=main(Numbers,'1234');
    expect(result).toEqual('4A0B');
  })
  it('数字都对，部分位置不对',function(){
    let result=main(Numbers,'1342');
    expect(result).toEqual('1A3B');
  })
  it('部分数字不对，位置都对',function(){
    let result=main(Numbers,'1536');
    expect(result).toEqual('2A0B');
  })
  it('部分数字不对，部分位置不对',function(){
    let result=main(Numbers,'1532');
    expect(result).toEqual('2A1B');
  })
  it('4个数字不对',function(){
    let result=main(Numbers,'7896');
    expect(result).toEqual('0A0B');
  })
});
