## Context menu Component
[![npm](https://img.shields.io/npm/v/simple-context-menu)](https://www.npmjs.com/package/simple-context-menu)
[![Downloads](https://img.shields.io/npm/dm/simple-context-menu.svg)](http://npm-stat.com/charts.html?package=simple-context-menu)
[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FJunH-K%2Fsimple-context-menu)](https://hits.seeyoufarm.com)


> Install

~~~
npm install simple-context-menu
~~~

> Example

Example Link : [Go Code Sandbox](https://codesandbox.io/s/simple-context-menu-f0r07)

> Usage
```html
<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Title</title>
      <style>
        #target {
          width: 300px;
          height: 300px;
          background-color: #767073;
        }
      </style>
    </head>
    <body>
    <div id="contextMenu"></div>
    <div id="target">target</div>
    <script src="dist/js/bundle.js"></script>
    </body>
    </html>
```

```javascript
import ContextMenu from "simple-context-menu";

const dataSource = [{
  title: 'first',
  key: 'first',
},
  {
    title: 'second',
    key: 'second',
    menu: [
      { title: 'second-1', key: 'second-1' },
      { title: 'second-2', key: 'second-2' }
    ]
  },
  {
    title: 'third',
    key: 'third',
    menu: [
      { title: 'third-1', key: 'third-1' },
      { title: 'third-2', key: 'third-2' },
      { title: 'third-3', key: 'third-3' }
    ]
  }
];


const contextMenu = new ContextMenu();
const callBack = (key) => {
  alert( key );
};

const options = {
  delay: 500//delay submenu  
};

contextMenu.register( '#target',
  callBack,
  dataSource,
  options );

```
> Options

|property|Description|
|------|---|
|delay| delay submenu 

>Update

1.3.0

Add Submenu

1.0.0


