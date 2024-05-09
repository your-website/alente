async function test() {
  return;
}

async function test2() {
  return await test();
}

async function test3() {
  return await test2();
}
