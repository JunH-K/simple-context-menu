import Dom from './Dom';
import Layer from "./Layer";
import template from '../template/contextMenu.hbs';

class ContextMenu {
  constructor(container) {
    this.initialize( container );
  }

  initialize(container) {
    if ( container ){
      return this.container = container;
    }

    const createContainer = document.createElement( 'div' );
    createContainer.id = 'contextMenu';
    this.container = createContainer;
    document.body.appendChild( this.container );
  }

  register(targetSelector, callback, menus = [], options = {}) {
    const target = Dom.find( targetSelector );

    Dom.on( target, 'contextmenu', this.show );
    Dom.on( document, 'click', this.hide );

    this.layer = new Layer( this.container, options );
    this.layer.callback( callback );
    this.layer.setContent( template( { menus } ) )
  }

  show = (e) => {
    e.preventDefault();
    const [x, y] = Dom.getPosition( e );
    this.layer.show( x, y );
  }

  hide = (e) => {
    if ( !Dom.hasClass( e.target, 'has-submenu' ) ){
      this.layer.hide();
    }
  }
}

export default ContextMenu;
