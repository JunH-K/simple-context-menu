import Dom from "./Dom";
import vk from 'simple-value-check';

class Layer {
  constructor(wrapper) {
    this.container = document.createElement( 'div' );
    this.initialize( wrapper );
  }

  initialize(wrapper) {
    wrapper.appendChild( this.container );
    this.hide();

    Dom.css( this.container,
      {
        position: 'absolute',
      }
    );
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
