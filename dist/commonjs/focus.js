'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _aureliaTemplating = require('aurelia-templating');

var _aureliaBinding = require('aurelia-binding');

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaTaskQueue = require('aurelia-task-queue');

var Focus = (function () {
  function Focus(element, taskQueue) {
    var _this = this;

    _classCallCheck(this, _Focus);

    this.element = element;
    this.taskQueue = taskQueue;

    this.focusListener = function (e) {
      _this.value = true;
    };
    this.blurListener = function (e) {
      if (document.activeElement !== _this.element) {
        _this.value = false;
      }
    };
  }

  var _Focus = Focus;

  _Focus.prototype.valueChanged = function valueChanged(newValue) {
    if (newValue) {
      this.giveFocus();
    } else {
      this.element.blur();
    }
  };

  _Focus.prototype.giveFocus = function giveFocus() {
    var _this2 = this;

    this.taskQueue.queueMicroTask(function () {
      if (_this2.value) {
        _this2.element.focus();
      }
    });
  };

  _Focus.prototype.attached = function attached() {
    this.element.addEventListener('focus', this.focusListener);
    this.element.addEventListener('blur', this.blurListener);
  };

  _Focus.prototype.detached = function detached() {
    this.element.removeEventListener('focus', this.focusListener);
    this.element.removeEventListener('blur', this.blurListener);
  };

  Focus = (0, _aureliaDependencyInjection.inject)(Element, _aureliaTaskQueue.TaskQueue)(Focus) || Focus;
  Focus = (0, _aureliaTemplating.customAttribute)('focus', _aureliaBinding.bindingMode.twoWay)(Focus) || Focus;
  return Focus;
})();

exports.Focus = Focus;