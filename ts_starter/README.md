## Typescript Project Starter
Initialize a Typescript Project and TS Debugger, TS Config, SourceMapping, File Watch and Better Error Handling


#### prerequisites :gear:
- Typescript is installed `npm install -g typescript` unix users may require `sudo`
- [Vscode](https://code.microsoft.net) is installed



#### Setting Up :star:
- Open Visual Studio Code 
- Initialize a typescript project with tsconfig.json using `tsc --init`
- Create an app{anyname}.ts File 
- Setup Debugger using F5 key or `fn F5` in some keyboards
- copy this information into your `launch.json` file

```js
{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [

    {
      "type": "node",
      "request": "attach",
      "name": "Node Process Typescript",
      "processId": "${command:PickProcess}",
      "address": "localhost",
      "port": 9229,
      "outFiles": [
        
      ]
    },
    {
      "type": "node",
      "request": "launch",
      "name": "Typescript Debugger",
      "program": "${workspaceFolder}/app.ts",
      "outFiles": [
        "${workspaceFolder}/**/*.js"
      ]
    }
  ]
}
```


- Configure Tasks Runner `tasks.json`
```js
{
  // See https://go.microsoft.com/fwlink/?LinkId=733558
  // for the documentation about the tasks.json format
  "version": "2.0.0",
  "tasks": [
    {
      "type": "typescript",
      "tsconfig": "tsconfig.json",
      "option": "watch",
      "isBackground": true,
      "problemMatcher": [
        "$tsc-watch"
      ],
      "group": {
        "kind": "build",
        "isDefault": true
      }
    }
  ]
}
```

- Configure Build Tasks  `CTRL + SHIFT + P` Configure Build Tasks [watch, build] you can select --watch mode while developing. 

- In `tsconfig.json` CompilerOptions setup SourceMapping and target `ES5`

```js
{
  "compilerOptions": {
    "target": "es5",                     
    "module": "commonjs",                    
    "sourceMap": true,       
  }
}
```

### TEST DATA
```ts
// TEST DATA
let stuArray : any[];
let learnArray : any[];


stuArray = [
  {
    fname: 'Chinedu',
    lname: 'Amos',
    age: 23,
    lang: 'English',
    class: 'JSS2'
  },
  {
    fname: 'Umahi',
    lname: 'Chinyere',
    age: 25,
    lang: 'French',
    class: 'SS1'
  },
  {
    fname: 'Kola',
    lname: 'Bobola',
    age: 26,
    lang: 'German',
    class: 'SS3'
  }
];

learnArray = [
  {
    fname: 'Moriah',
    lname: 'Abati',
    age: 23,
    lang: 'English',
    class: 'JSS2'
  },
  {
    fname: 'Kunle',
    lname: 'Katie',
    age: 25,
    lang: 'French',
    class: 'SS1'
  },
  {
    fname: 'Jorowe',
    lname: 'Numa',
    age: 26,
    lang: 'German',
    class: 'SS3'
  }
];
```


### FUNCTIONS IN TYPESCRIPT
Functions in typescript can have different types of parameter declarations 
1. Parameter with types
2. Rest Parameters
3. Default Parameters

Lets take a look at some examples of these parameter types


#### Function with Parameter 
```ts
// Function (Parameter with types)

function getAge(array : any[]) {
  array.forEach(element => {
    console.log(`${element.fname} has an age of ${element.age}`);
  })
}

getAge(stuArray);

// OUTPUT INN JAVASCRIPT
function getAge(array) {
    array.forEach(function (element) {
        console.log(element.fname + " has an age of " + element.age);
    });
}
getAge(stuArray);
```


#### Function with REST Parameters
functions with rest parameters act like placeholders for multiple arguments of the sametype, REST parameters dont restruct the number of values that you can pass to a function.

```ts
// This type of function can take in multiple number of values as long as they belong to the parameter : type defined in the function

function userReg(...arrays: any[]) {
  arrays.forEach(element => {
    element.forEach(id => {
      console.log(`${id.fname} has been registered into the Community`);
    });
  })
}

userReg(stuArray);

// OUTPUT IN JAVASCRIPT
function userReg() {
    var arrays = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arrays[_i] = arguments[_i];
    }
    arrays.forEach(function (element) {
        element.forEach(function (id) {
            console.log(id.fname + " has been registered into the Community");
        });
    });
}
userReg(stuArray);

```

#### Function (Default Parameter)
```ts
// Function (Default Parameter Concept)
function areYouTheOne (answer: boolean = true) {
  if (!answer)
  console.log("You broke my heart");
  else
  console.log("I love you");
}

areYouTheOne(false);
```

### Interfaces 
one of TS core principles is that type-checking focuses on the shape that values have. This is sometimes called `duck typing` or `structural subtyping`. In Typescript, interfaces fill the role of naming these types, and are a powerful way of defining contracts within your code as well as contracts with code outside of your project.

With interfaces we can explicitly define what the values of any given type would be without second guessing or relying on Typescripts inbuilt Type Interference to inplicitly assign a default type to the value it receives. 

- Interfaces in Typescripts are a fun way to create custom types for statements and expressions.
###### Convert the Already Existing Array to use an Interface specifically for it would look like this 

```ts
//create an Interface called schInfo for School Info 
interface schInfo {
  fname: string,
  lname: string,
  age: number,
  lang: string,
  class: string
}


let stuArray : schInfo[];
let learnArray : schInfo[];

stuArray = [
  {
    fname: 'Chinedu',
    lname: 'Amos',
    age: 23,
    lang: 'English',
    class: 'JSS2'
  },
  {
    fname: 'Umahi',
    lname: 'Chinyere',
    age: 25,
    lang: 'French',
    class: 'SS1'
  },
  {
    fname: 'Kola',
    lname: 'Bobola',
    age: 26,
    lang: 'German',
    class: 'SS3'
  }
];

learnArray = [
  {
    fname: 'Moriah',
    lname: 'Abati',
    age: 23,
    lang: 'English',
    class: 'JSS2'
  },
  {
    fname: 'Kunle',
    lname: 'Katie',
    age: 25,
    lang: 'French',
    class: 'SS1'
  },
  {
    fname: 'Jorowe',
    lname: 'Numa',
    age: 26,
    lang: 'German',
    class: 'SS3'
  }
];

function userReg(...arrays: any[]) {
  arrays.forEach(element => {
    // define the type of id in brackets and assign it to the interface schInfo
    element.forEach((id : schInfo)=> {
      console.log(`${id.fname} has been registered into the Community`);
    });
  })
}

userReg(stuArray);
```

