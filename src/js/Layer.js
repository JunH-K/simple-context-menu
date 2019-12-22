import Dom from "./Dom";
import vk from 'simple-value-check';

class Layer {

  static zIndex = 999;
  static defaultDelay = 500;

  constructor(wrapper, options = {}) {
    this.container = document.createElement( 'div' );
    this.initialize( wrapper );
    this.timer = null;
    this.options = options;
    this.setDelay( options );
  }

  initialize(wrapper) {
    wrapper.appendChild( this.container );
    this.hide();

    Dom.css( this.container,
      {
        position: 'absolute',
        zIndex: Layer.zIndex,
        ...this.options,
      }
    );

    this.container.addEventListener( 'mousemove', this.onMouseMove );
    this.container.addEventListener( 'mouseout', () => {
      clearTimeout( this.timer )
    } )
  }

  onMouseMove = (e) => {
    const { target } = e;
    const { nodeName = '' } = target;

    if ( !Dom.hasClass( e.target, 'has-submenu' ) ){
      return;
    }

    if ( this.timer ){
      clearTimeout( this.timer );
    }

    this.timer = setTimeout( () => {
      if ( nodeName === 'LI' || nodeName === 'SPAN' ){
        this.setVisible( this.container, target.dataset.index );
      }
    }, this.delay );
  };


  setVisible(node, index) {
    if ( node.childNodes ){
      node.childNodes.forEach( (child) => {
        if ( child.nodeName === 'DIV' ){
          if ( Dom.hasClass( child, 'submenu' ) ){
            if ( child.dataset.index === index ){
              Dom.show( child );
            } else {
              Dom.hide( child );
            }
          }
        }
        if ( child.childNodes ){
          this.setVisible( child, index );
        }
      } );
    }
  }


  setDelay({ delay = Layer.defaultDelay }) {
    if ( vk.isNumber( delay ) ){
      return this.delay = delay;
    }
    return this.delay = Layer.defaultDelay;
  }

  callback = (callback) => {
    vk.isFunction( callback ) && this.container.addEventListener( 'click', function (e) {
      callback( e.target.dataset.key );
    } );
  };

  setContent(content) {
    this.container.innerHTML = content;
  }

  show(x, y) {
    if ( vk.isNumber( x ) && vk.isNumber( y ) ){
      Dom.css( this.container, {
        top: `${ y }px`,
        left: `${ x }px`
      } );
    }
    Dom.show( this.container );
  }

  hide() {
    const submenus = Dom.findAll( '.submenu' );

    Dom.hide( this.container );
    submenus.forEach( (node) => {
      console.log( node );
      Dom.hide( node );
    } );

  }
}

export default Layer
