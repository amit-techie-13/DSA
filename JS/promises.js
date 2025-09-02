const p = new Promise((resolve, reject) => {
  resolve("Success");
  reject("Error");
});
p.then(console.log).catch(console.log);
/**
 * Why?

A promise can settle only once.

resolve("Success") runs first.

Even though reject("Error") comes after, it’s ignored.

So .then(console.log) prints:
 * success
 */