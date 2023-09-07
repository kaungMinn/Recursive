function doSomething(action) {
  console.log(`I am ${action}`);
  doSomething(action);
}

doSomething("Running");
