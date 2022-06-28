module.exports = function reverse (n) {
  array = Array.from(String(n));
   array.reverse();
   num = Number(String(array).replace(/[,-]/g, ''));
   return num;
}
// just joke i know math decision
