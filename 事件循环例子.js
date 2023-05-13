new Promise(function (resolve, reject) {
    console.log(1);
    resolve();
  }).then(function () {
    console.log(2);
  }).then(function () {
    console.log(3);
  });
  
  setTimeout(function () {
    console.log(4)
  }, 0);
  
  new Promise(function (resolve, reject) {
    console.log(5);
    resolve();
  }).then(function () {
    console.log(6);
  })
  
  console.log(7);