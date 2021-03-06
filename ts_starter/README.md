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

#### The Concept of Generics
One of the Typescripts toolbox for creating re-usable components 
our from our already defined interfaces is **GENERICS**, this way we 
create a component that can work over a variety of types rather than a 
single one. this does not affect our already exisiting interfaces, but 
rather affects the way it is declared when we want to use it, in most 
cases this affects the new values we are adding that dont already exist 
within the interface. Users can now consume these components and use 
their own type.


```ts
// Declaring interfaces, we use the syntax
let stuArray: schInfo [];

//With Generics 
let stuArray: Array<schInfo>;
// This gives room to extend the component and add other values to the 
array that has not been defined within the interface.
// Also note in typescript `Array` has(is) an interface
```


### Modules 
Since typescript is a scripting language the concept of modules {export} allows us define classes, interfaces, functions, any 
concept in Object Oriented Programming in another files and export it to be {import} into our current script. 
Let's take a look at exporting out schInfo Interface and other classes in the project.

```ts
filename: module.ts
// method one of exporting modules
/**
 export interface schInfo {
   fname: string,
   lname: string,
   age: number,
   lang: string,
   class: string
 }
 **/

//method two of exporting modules
interface schInfo {
  fname: string,
  lname: string,
  age: number,
  lang: string,
  class: string
}

export { schInfo }

// importing it into any script using the import command
import { schInfo } from "./module";

```

#### Module Loaders
In javascript there are among a few these module loaders

- AMD
- CommonJs
- SystemJs
- ES2015
- UMD

Module loaders are used to resolve the problem of loading dependant multiple modules from various locations before the methods are being called; popular module loaders for web applications are 

- Browserify
- Webpack
- Parcel Bundler (recently)
- RequireJS

Web application module loaders remove the complexity of having to deal with and manually manage how we export modules, they automatically export and bundle our files for us, as long as we specify configurations.

`In module loading, AMD,UMD,SystemJS etc all have a syntax as to how we import and export modules, and which Inbuilt JS/TS prototypes need to be imported.`


#### Namespaces
We use namespace in substitute of modules to create re-usable components within out projects. Namespaces are backward compatible and can work with older version of Javascript and browsers, especially when using type definitions for external javascript libraries written in vanilla javascript, namespaces allows us to re-use functions and classes in these libraries in an easy to integrate manner. 

```ts
// namespace in typescript
namespace calculate{
  export function schoolFees(term: number, fee: number) : number {
    return term*fee;
  }
}

// output in javascript [almost similar to the output of class]
var calculate;
(function (calculate) {
    function schoolFees(term, fee) {
        return term * fee;
    }
    calculate.schoolFees = schoolFees;
})(calculate || (calculate = {}));
```
##### Importing our Namespace
One very important thing to note is that when compiling to javascript, outputFile should be concatenated unless we use a module loader to import our namespaces together in javascript.

```ts
// Lets import our namespace into main app using triple slash
/// <reference path="./namespace.ts" />
let schFees = calculate.schoolFees(3, 432);
console.log(schFees);

// OUTPUT IN JAVASCRIPT
var schFees = calculate.schoolFees(3, 432);
console.log(schFees);
// From this output we can tell that our namespace import does not utilize any loader, modules and ensures compatibility by only calling it as a variable declaration of a function that exists within an object


#### Type Definitions
Type definitions in `.d.ts` files are mostly used when we include external javascript libraries or APIs, and when we need to consume or use these APIS, we need to define types for it to be in sync with out code in typescript. 

So how do we solve this problem, goodnews is that there exists repos for typedefinition files for some of the most popular javascript frameworks contributed by the opensource communities, available in 

- [Definitely Typed](http://definitelytyped.org)
- [Typings](https://github.com/Typings/typings)
- [NPM](https://npmjs.com/packaages/tsd) - `npm install -g tsd`



** It is important to note that most type definition files utilize `namespaces` instead of module imports and exports to re-use functionalities within the type files, this helps to improve backward compatibility.**
