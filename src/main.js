fetch('../out/main.wasm').then(response =>
  response.arrayBuffer()
).then(bytes => WebAssembly.instantiate(bytes)).then(results => {
  instance = results.instance;

  const add = instance.exports.add
  const square = instance.exports.square

  console.log('2 + 4 =', add(2, 4))
  console.log('3^2 =', square(3))
  console.log('(2 + 5)^2 =', square(add(2 + 5)))

  document.getElementById("main").innerText = instance.exports.main();
  document.getElementById("container").innerText = '(2 + 5)^2 ='+ square(add(2 + 5));
});