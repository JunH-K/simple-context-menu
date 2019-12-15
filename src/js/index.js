import ContextMenu from './ContextMenu';
import { mock } from '../mock/mock'

const contextMenu = new ContextMenu( document.querySelector( '#contextMenu' ) );

contextMenu.register( '#target',
  function (key) {
    console.log( key )
  }, mock );

