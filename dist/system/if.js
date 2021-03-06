System.register(['aurelia-templating', 'aurelia-dependency-injection'], function (_export) {
  'use strict';

  var BoundViewFactory, ViewSlot, customAttribute, templateController, inject, If;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaTemplating) {
      BoundViewFactory = _aureliaTemplating.BoundViewFactory;
      ViewSlot = _aureliaTemplating.ViewSlot;
      customAttribute = _aureliaTemplating.customAttribute;
      templateController = _aureliaTemplating.templateController;
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }],
    execute: function () {
      If = (function () {
        function If(viewFactory, viewSlot) {
          _classCallCheck(this, _If);

          this.viewFactory = viewFactory;
          this.viewSlot = viewSlot;
          this.showing = false;
        }

        var _If = If;

        _If.prototype.bind = function bind(executionContext) {
          this.executionContext = executionContext;
          this.valueChanged(this.value);
        };

        _If.prototype.valueChanged = function valueChanged(newValue) {
          if (!newValue) {
            if (this.view) {
              this.viewSlot.remove(this.view);
              this.view.unbind();
            }

            this.showing = false;
            return;
          }

          if (!this.view) {
            this.view = this.viewFactory.create(this.executionContext);
          }

          if (!this.showing) {
            this.showing = true;

            if (!this.view.isBound) {
              this.view.bind();
            }

            this.viewSlot.add(this.view);
          }
        };

        If = inject(BoundViewFactory, ViewSlot)(If) || If;
        If = templateController(If) || If;
        If = customAttribute('if')(If) || If;
        return If;
      })();

      _export('If', If);
    }
  };
});