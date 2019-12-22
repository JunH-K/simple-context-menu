import Dom from "./Dom";
import vk from 'simple-value-check';

class Layer {
  constructor(wrapper) {
    this.container = document.createElement( 'div' );
    this.initialize( wrapper );
    this.timer = null;
  }

  initialize(wrapper) {
    wrapper.appendChild( this.container );
    this.hide();

    Dom.css( this.container,
      {
        position: 'absolute',
      }
    );

    this.container.addEventListener( 'mousemove', this.onMouseMove )
  }

  onMouseMove = (e) => {
    if ( this.timer ){
      clearTimeout( this.timer );
    }

    this.timer = setTimeout( () => {
      if ( e.target.nodeName === 'LI' || e.target.nodeName === 'SPAN' ){
        this.setVisible( this.container, e.target.dataset.index );
      }
    }, 500 );
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
    Dom.hide( this.container );
  }
}

export default Layer
