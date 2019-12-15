import ContextMenu from './ContextMenu';

const contextMenu = new ContextMenu( document.querySelector( '#contextMenu' ) );
contextMenu.register( '#target', function (e, a) {
  console.log( e, a )
} );

