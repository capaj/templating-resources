'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaTemplating = require('aurelia-templating');

var Replaceable = (function () {
  function Replaceable(viewFactory, viewSlot) {
    _classCallCheck(this, _Replaceable);

    viewSlot.add(viewFactory.create());
  }

  var _Replaceable = Replaceable;
  Replaceable = (0, _aureliaDependencyInjection.inject)(_aureliaTemplating.BoundViewFactory, _aureliaTemplating.ViewSlot)(Replaceable) || Replaceable;
  Replaceable = (0, _aureliaTemplating.templateController)(Replaceable) || Replaceable;
  Replaceable = (0, _aureliaTemplating.customAttribute)('replaceable')(Replaceable) || Replaceable;
  return Replaceable;
})();

exports.Replaceable = Replaceable;