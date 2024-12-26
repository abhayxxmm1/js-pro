// most of the time we consume the promises only

// we need to know how promises are created

// when there were no promises, then async await was used for Database operations
// then promises were introduced it had a good syntax
// libraries:- Q and Bluebird(fav of hitesh) were used to access all functionalities of promises
// such as:- .fetch, .then, catch
// eventually this libraries were appritiated and now integrated in the javascript itself
// but it is not necessary to use

// promises अपने अंदर call-back function लेता है।
// promise को variable में hold kiya hai
const promiseOne = new Promise(function (resolve, reject) {
  // Do an async task
  // Database calls,cryptography, network
  setTimeout(function () {
    console.log("async task completed");
    /**method**/
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise consumed");
}); // resolve has connection with .then()   is used to consume the promise
// .then() has a callback function which automatically gets arguments for value returned by resolve

/* with-out holding in a variable */
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Promise 2 consumed");
});

/* how to pass data that came from network */
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("async task 3");
    resolve({ username: "chai", email: "koi@toodedo.com" }); // most of the time the data passed ther is present in object form
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

/*  */
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true; // file_access/web_request/net_request krri to huuii nahi huiiee tabhi kuch tobolna padega
    // acctually mai resolve hoga ya reject hoga
    if (!error /*error_nahi_hai*/) {
      resolve({ username: "hitesh", password: "1234" });
    } else {
      reject("ERROR: sth went wrong");
    }
    console.log();
    resolve();
  }, 1000);
});

// thier not only one dot_then() or dot_catch() we can use as many as dot_then()
// for avoiding callback hell
promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    // this is chaining jo value return huii hai usi value ko next then() me pass krega
    // usefuel at the time of database coonection
    console.log(username);
  })
  .catch((error) => {
    // error will be catched here
    console.log(error);
  }).finally(() => console.log("The promise is either resolved or rejected")); 



  /*Promise 5*/
  co