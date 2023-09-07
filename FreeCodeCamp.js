function doSomething(n) {
  if (n === 0) {
    console.log("Task completed!");
    return;
  }
  console.log("I'm doing something");
  doSomething(n - 1);
}

doSomething(3);
