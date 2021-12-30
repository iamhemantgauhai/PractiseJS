const profile = {
  firstName: "",
  lastName: "",
  setName: function (name) {
    let splitName = (n) => {
      let nameArray = n.split(" ");
      this.firstName = nameArray[0];
      this.lastName = nameArray[1];
    };
    splitName(name);
  },
};
profile.setName("John doe");
console.log(profile.firstName);

let car = function (model) {
  this.model = model;
};
car.prototype.getModel = function () {
  return this.model;
};
let toyota = new car("toyota");
console.log(toyota.getModel());

let nissan = new car("nissan");
console.log(nissan.getModel());

// $.ajax({
//   url: "a.json",
//   auccess: function (r) {
//     $.ajax({
//       url: "b.json?" + r.a,
//       success: function (result) {
//         $("#div1").html(result);
//       },
//     });
//   },
// });

// var p1 = new Promise(function (resole, reject) {
//   resolve($.ajax("a,json"));
// });

// p1.then(function (r) {
//   return new Promise();
// }).then(function (result) {
//   $("#div").html(result);
// });

let obj = function () {
  let i = 0;
  return {
    setI(k) {
      i = k;
    },
    getI() {
      return i;
    },
  };
};
let x = obj();
x.setI(4);
console.log(x.getI());

console.log(2 + "2");
console.log(2 - "2");

let num = [1, 2, 2, 3];
console.log([...new Set(num)]);

let func = function () {
  (function () {
    {
      let l = "let";
      // var v = "var";
    }
  });
  // console.log(v);
  // console.log(l);
};

func();

console.log(4 < 5 < 6);
console.log(6 > 5 > 4);

let a = (...n) => {
  return n;
};
console.log(a("hi"));

let b = function () {
  return arguments;
};
console.log(b("hi"));

let y = function () {
  return {
    message: "hi",
  };
};
console.log(y());

let profiles = {
  name: "Hemant",
};
Object.seal(profiles);
profiles.name = "Bhaiti";
profiles.age = 23;
console.log(profile);

let xprofile = {
  name: "Bhaiti",
};
Object.defineProperty(xprofile, "age", {
  value: 3,
  writable: false,
});
xprofile.name = "Hemant";
xprofile.age = 4;
console.log(xprofile);

console.log(Math.max());

var myArray = ["a", "b", "c", "d"];
myArray.push("last");
myArray.unshift("first");
console.log(myArray);

var myArray = ["a", "b", "c", "d"];
myArray = ["start", ...myArray, "end"];
console.log(myArray);

function secretVariable() {
  var private = "super secret code";
  return function () {
    return private;
  };
}
var getPrivateVariable = secretVariable();
console.log(getPrivateVariable());
console.log(secretVariable());

var number = 4;
function outer() {
  var number = 2;
  function inner() {
    number++;
    var number = 3;
    console.log(number);
  }
  inner();
}
outer();

console.log(typeof typeof 1);

var hero = {
  name: "Hemant Gauhai",
  getSecretIdentity: function () {
    return this.name;
  },
};

var stoleSecretIdentity = hero.getSecretIdentity.bind(hero);
console.log(stoleSecretIdentity());
console.log(hero.getSecretIdentity());

var Y = 1;
if (function F() {});
{
  Y += typeof F;
}
console.log(Y);

var output = (function(x){
  delete x;
  return x;
})(0);
console.log(output);

var xmax = {Foo : 1};
var value = (function()
{
  delete x.foo;
  return x.foo;
}
)();
console.log(value);
