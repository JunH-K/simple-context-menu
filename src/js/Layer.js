import Dom from "./Dom";

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
    this.container.addEventListener( 'click', function (e) {
      callback( e.target.dataset.key );
    } );
  };

  setContent(content) {
    console.log( content );
    this.container.innerHTML = content;
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
