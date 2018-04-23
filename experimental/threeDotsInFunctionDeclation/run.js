const helloWorld = (name, ...attributes) => {
  console.log(name);
  console.log(attributes);
}

helloWorld("tim", 'Hello', "World", "!")
