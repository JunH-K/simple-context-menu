export default class Dom {
  static find(selector) {
    return document.querySelector( selector );
  }

  static on(element, event, handler, context) {
    element.addEventListener( event, handler );
  }

  static css(element, styles = {}) {
    const style = element.style;

    if ( !style ){
      return;
    }

    for ( const key in styles ) {
      if ( style.hasOwnProperty( key ) ){
        style[ key ] = styles[ key ];
      }
    }
  }

  static addClass(element, className) {
    return element.classList.add( className );
  }

  static hasClass(element, className) {
    return element.classList.contains( className );
  }

  static removeClass(element, className) {
    return element.classList.remove( className );
  }

  static show(element) {
    Dom.css( element, {
      display: 'block',
    } )
  }

  static hide(element) {
    Dom.css( element, {
      display: 'none',
    } )
  }

  static getPosition(event) {
    const x = event.clientX;
    const y = event.clientY;
    return [x, y];
  }

}

// class Elements {
//   constructor(element) {
//     this.element = element;
//   }
//
//   set element(element) {
//     this._element = element;
//   }
//
//   set callback(callback) {
//     this._element.addEventListener( 'contextmenu', function (e) {
//       e.preventDefault();
//       callback( e, 'second' );
//     } );
//   }
//
//   removeListener() {
//     this._element.removeEventListener( 'contextmenu' );
//   }
// }
