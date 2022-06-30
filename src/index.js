module.exports = function reverse (n) {
  array = Array.from(String(n));
   array.reverse();
   num = Number(String(array).replace(/[,-]/g, ''));
   return num;
}
// return Number(String(Array.from(String(n)).reverse()).replace(/[,-]/g, ''));
// just joke; i know math decision
