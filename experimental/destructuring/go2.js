var run = (userObject) => {
  userObject.age = userObject.age || 999
  console.log("name", userObject.name);
  console.log("age", userObject.age);
  console.log("height", userObject.height);
}

var userObject = {name: "Ben", height: 1.84}

run(userObject)
