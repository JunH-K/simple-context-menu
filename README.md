##Context menu Component

> nstall

~~~
npm install simple-context-menu
~~~

> Usage
~~~

<body>
<div id="contextMenu"></div>
<div id="target">target</div>
<script src="dist/js/bundle.js"></script>
</body>

~~~


~~~
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

~~~
