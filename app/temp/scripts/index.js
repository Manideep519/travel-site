!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.siteHeader=$(".site-header"),this.menuIcon=$(".site-header__menu-icon"),this.menuContent=$(".site-header__menu-content"),this.events()}return r(e,[{key:"events",value:function(){this.menuIcon.click(this.toggleTheMenu.bind(this))}},{key:"toggleTheMenu",value:function(){this.menuContent.toggleClass("site-header__menu-content--is-visible"),this.siteHeader.toggleClass("site-header--is-expanded"),this.menuIcon.toggleClass("site-header__menu-icon--close-x")}}]),e}();t.default=o},function(e,t,n){"use strict";var r,o=n(0);new((r=o)&&r.__esModule?r:{default:r}).default}]);