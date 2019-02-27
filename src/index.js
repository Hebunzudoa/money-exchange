// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    
  var obj={}, value;
  if (currency<=10000) {
    if (currency>=0) {
      if ((value=Math.floor(currency/50))!==0) {
        currency=currency-50*value;
        obj.H=value;
      }
      if ((value=Math.floor(currency/25))!==0) {
        currency=currency-25*value;
        obj.Q=value;
      }
      if ((value=Math.floor(currency/10))!==0) {
        currency=currency-10*value;
        obj.D=value;
      }
      if ((value=Math.floor(currency/5))!==0) {
        currency=currency-5*value;
        obj.N=value;
      }
      if ((value=Math.floor(currency/1))!==0) {
        obj.P=value;
      }
    } 
  } else {
    obj.error="You are rich, my friend! We don't have so much coins for exchange";
  }
  return obj;
}
