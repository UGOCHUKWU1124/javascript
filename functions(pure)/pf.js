//pure functions
let getSquare = function (n) {
  let sq = n * n;
  return sq;
};
console.log(getSquare(5));
console.log(getSquare(5));

//Example 2
//username:system,password:123
let isValidLogin = function (username, password) {
  if (username == "system" && password == 123) return true;
  else return false;
};
