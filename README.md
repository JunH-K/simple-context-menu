## Context menu Component

> Install

~~~
npm install simple-context-menu
~~~

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

const mocks = [
  { title: '첫번째',key:1 },
  { title: '두번째',key:2 }
]

const contextMenu = new ContextMenu(
  document.querySelector( '#contextMenu' )
);

contextMenu.register( '#target',
  function (key) {
    alert( key );
  },
  mocks);

```
