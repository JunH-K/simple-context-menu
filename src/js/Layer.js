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
        backgroundColor: 'gray',
        width: '200px',
        height: '200px',
      }
    );
  }

  set callback(callback) {
    // this._element.addEventListener( 'contextmenu', function (e) {
    //   e.preventDefault();
    //   callback( e, 'second' );
    // } );
  }

  show() {
    Dom.show( this.container );
  }

  hide() {
    Dom.hide( this.container );
  }
}

export default Layer
