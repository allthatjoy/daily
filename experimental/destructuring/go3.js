var run = ({name, age, height}) => {
  age = age || 999
  console.log("name", name);
  console.log("age", age);
  console.log("height", height);
}

run({name: "Ben", height: 1.84})
