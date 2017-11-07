// Create an array containing the files and directories.
// Every item has its own name, type and a root.
// The root directory doesn't have a root so its null.
// There're two types of items called "dir" and "file" which are representing,
// as expected, the files and directories within the structure.
const directories = [
  {name: "test", type: "dir", root: null},
  {name: "array", type: "dir", root: "test"},
  {name: "currying", type: "dir", root: "test"},
  {name: "dependency-injection", type: "dir", root: "test"},
  {name: "mongoose", type: "dir", root: "test"},
  {name: "subMongoose", type: "dir", root: 'mongoose'},
  {name: "mongooseDir", type: "dir", root: 'subMongoose'},
  {name: "mongooseFile", type: "file", root: 'subMongoose'},
  {name: "promises", type: "dir", root: "test"},
  {name: "recursion", type: "dir", root: "test"},
  {name: "recursionFile", type: "file", root: "recursion"}
]

// The builder-function is our recursive function which will call itself in case
// the current interation item is a directory.
// The function takes items which are the same through every iteration and a
// root which is the name from the previous iteration.
const builder = (items, root) => {

  // The "currentNode" variable is used to story the current directory state
  // and it'll returned after all the items with the same root have been
  // precessed.
  const currentNode = {};

  // At first we'll filter all elements to get only the directories with the
  // current root argument.
  // Then iterate over all of those elements using the array forEach-function.
  // Based on the object type the function will either call itself again if the
  // object type is "dir" or it'll create an array within "currentNode", if the
  // object type is "file", which then represents all the files within the
  // current root.
  items
    .filter(item => item.root === root)
    .forEach(item => {
      if (item.type === 'dir') {
        currentNode[item.name] = builder(items, item.name)
      } else {
        if (!currentNode['files']) {
          currentNode['files'] = []
        }
        currentNode['files'].push(item.name)
      }
    })
  return currentNode;
}

// Format the output object to represent the directory structure a bit better.
const formattedOutput = JSON.stringify(builder(directories, null), null, 2);

console.log(formattedOutput);
