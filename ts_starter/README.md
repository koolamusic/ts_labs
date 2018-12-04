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
