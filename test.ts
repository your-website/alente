async function test() {
  return;
}

async function test2() {
  return await test();
}
var bodyParser = "test";
// var errorHandler = require('errorhandler');
async function test3() {
  var bodyParser = "test";
  return await test2();
}
