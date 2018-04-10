// Write your cade below:
function main(Numbers,Guess_Numbers) {
  let num_arr=Numbers.split('');
  let guess_arr=Guess_Numbers.split('');
  let result={'A':0,'B':0};
  let str_result='';
  for(let i=0; i<num_arr.length;i++){
    if(num_arr[i]==guess_arr[i]) result.A++;
    else {
      if(include_num(guess_arr[i],num_arr)) result.B++;
    }
  }
  str_result=`${result.A}A${result.B}B`;
  return str_result;
};
function include_num(number,sta_arr){
  for(let num of sta_arr){
    if(number==num) return true;
  }
  return false;
}
module.exports = {
    main
}
