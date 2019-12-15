import Dom from "./Dom";

class Layer {
  constructor(wrapper) {
    this.container = document.createElement( 'div' );
    this.initialize( wrapper );
  }

  initialize(wrapper) {

    wrapper.appendChild( this.container );
    this.hide();

    Dom.addClass( this.container, 'layer' );
    Dom.css( this.container,
      {
        position: 'absolute',
        backgroundColor: 'gray',
        width: '200px',
        height: '200px',
      }
    );
  }

  callback = (callback) => {
    this.container.addEventListener( 'click', function (e) {
      callback( e, 'second' );
    } );
  }

  show(x, y) {
    Dom.css( this.container, {
      top: `${ y }px`,
      left: `${ x }px`
    } );
    Dom.show( this.container );
  }

  hide() {
    Dom.hide( this.container );
  }
}

export default Layer
