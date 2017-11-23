/*
Composition is a coding pattern which could be used instead of inheritance.
I, personally, am a big fan of composition because it keeps your code flexible
and you don't have to think about the future use of your code/software in the
way you've to if you would use inheritance.
You'll see what this means in the following example:
*/


/*
First we define our factory functions which are used to add actions to
companies, such as programming and hiring.
*/

const programmFactory = company => {
  const programm = code => console.log('Coded:', code)
  Object.assign(company, {
    programm
  })
}

const hireFactory = company => {
  // To change the passed company object, we've to use the parameter name
  // instead of "this" because within arrow-functions the "this" objects doesn't
  // exists
  const hire = employee => company.employees.push(employee)
  Object.assign(company, {
    hire
  })
}

/*
Now we create out first company called "fantasyCompany". The company only has
two employees at the moment of initialization.
*/

const fantasyCompany = {
  employees: [{
    name: "Ben",
    age: 31
  }, {
    name: "Chem",
    age: 32
  }]
}

/*
To add an action to the company we simply call the factory responsible for the
specific action. E. g. Call the "programmFactory" and pass "fantasyCompany" as
parameter to add the "programm" function to the "fantasyCompany".

We don't have to return anything from those functions because we're passing the
companies by reference which makes it possible to change the object directly
within the function.
*/
programmFactory(fantasyCompany);
hireFactory(fantasyCompany)


/*
After we've called the "programmFactory" and "hireFactory" we're able to call
both the "programm" and the "hire" function on the "fantasyCompany" object
*/
fantasyCompany.programm('Hello World!')
fantasyCompany.hire({
  name: "Jon",
  age: 28
})

// To see if the employees array really changed within the fantasyCompany we
// could use the map function from ES6 to print all employees

fantasyCompany.employees.map(employee =>
  console.log(employee.name + ' is ' + employee.age + ' years old!'))
