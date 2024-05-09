async function test() {
  return;
}

async function test2() {
  return await test();
}

async function test3() {
  var bodyParser = "test";
  return await test2();
}
