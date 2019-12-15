import Dom from './Dom';
import Layer from "./Layer";

class ContextMenu {
  constructor(container) {
    this.container = container;
  }

  register(selector, callback, menus) {
    const target = Dom.find( selector );

    Dom.on( target, 'contextmenu', this.show );
    this.layer = new Layer( this.container );
    this.layer.callBack = callback;
  }

  show = (e) => {
    e.preventDefault();
    this.layer.show()
  }
}

export default ContextMenu;
