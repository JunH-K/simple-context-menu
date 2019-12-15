import Dom from './Dom';
import Layer from "./Layer";

class ContextMenu {
  constructor(container) {
    this.container = container;
  }

  register(selector, callback, menus) {
    const target = Dom.find( selector );

    Dom.on( target, 'contextmenu', this.show );
    Dom.on( document, 'click', this.hide );

    this.layer = new Layer( this.container );
    this.layer.callback( callback );
  }

  show = (e) => {
    e.preventDefault();
    const [x, y] = Dom.getPosition( e );
    this.layer.show( x, y );
  }

  hide = (e) => {
    this.layer.hide();
  }
}

export default ContextMenu;
