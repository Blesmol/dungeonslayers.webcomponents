function registerTemplate(document, templateName, createdCallback, attachedCallback, attributeChangedCallback) {
  var thisDoc = (document.currentScript || document._currentScript).ownerDocument;
  var proto = Object.create(HTMLElement.prototype);

  proto.createdCallback = function() {
    var template = thisDoc.getElementById(templateName);
    var clone = document.importNode(template.content, true);
    this.createShadowRoot().appendChild(clone);

    if (createdCallback != null) {
        createdCallback();
    }
  };

  proto.attachedCallback = attachedCallback;
  proto.attributeChangedCallback = attributeChangedCallback;

  document.registerElement(templateName, {prototype: proto});
}
