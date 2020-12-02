/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __decorate, __extends, __metadata, __param } from "tslib";
import { DOCUMENT, ɵgetDOM as getDOM } from '@angular/common';
import { DomElementSchemaRegistry } from '@angular/compiler';
import { Inject, Injectable, NgZone, ViewEncapsulation } from '@angular/core';
import { EventManager, ɵflattenStyles as flattenStyles, ɵNAMESPACE_URIS as NAMESPACE_URIS, ɵSharedStylesHost as SharedStylesHost, ɵshimContentAttribute as shimContentAttribute, ɵshimHostAttribute as shimHostAttribute } from '@angular/platform-browser';
var EMPTY_ARRAY = [];
var DEFAULT_SCHEMA = new DomElementSchemaRegistry();
var ServerRendererFactory2 = /** @class */ (function () {
    function ServerRendererFactory2(eventManager, ngZone, document, sharedStylesHost) {
        this.eventManager = eventManager;
        this.ngZone = ngZone;
        this.document = document;
        this.sharedStylesHost = sharedStylesHost;
        this.rendererByCompId = new Map();
        this.schema = DEFAULT_SCHEMA;
        this.defaultRenderer = new DefaultServerRenderer2(eventManager, document, ngZone, this.schema);
    }
    ServerRendererFactory2.prototype.createRenderer = function (element, type) {
        if (!element || !type) {
            return this.defaultRenderer;
        }
        switch (type.encapsulation) {
            case ViewEncapsulation.Native:
            case ViewEncapsulation.Emulated: {
                var renderer = this.rendererByCompId.get(type.id);
                if (!renderer) {
                    renderer = new EmulatedEncapsulationServerRenderer2(this.eventManager, this.document, this.ngZone, this.sharedStylesHost, this.schema, type);
                    this.rendererByCompId.set(type.id, renderer);
                }
                renderer.applyToHost(element);
                return renderer;
            }
            default: {
                if (!this.rendererByCompId.has(type.id)) {
                    var styles = flattenStyles(type.id, type.styles, []);
                    this.sharedStylesHost.addStyles(styles);
                    this.rendererByCompId.set(type.id, this.defaultRenderer);
                }
                return this.defaultRenderer;
            }
        }
    };
    ServerRendererFactory2.prototype.begin = function () { };
    ServerRendererFactory2.prototype.end = function () { };
    ServerRendererFactory2 = __decorate([
        Injectable(),
        __param(2, Inject(DOCUMENT)),
        __metadata("design:paramtypes", [EventManager, NgZone, Object, SharedStylesHost])
    ], ServerRendererFactory2);
    return ServerRendererFactory2;
}());
export { ServerRendererFactory2 };
var DefaultServerRenderer2 = /** @class */ (function () {
    function DefaultServerRenderer2(eventManager, document, ngZone, schema) {
        this.eventManager = eventManager;
        this.document = document;
        this.ngZone = ngZone;
        this.schema = schema;
        this.data = Object.create(null);
    }
    DefaultServerRenderer2.prototype.destroy = function () { };
    DefaultServerRenderer2.prototype.createElement = function (name, namespace, debugInfo) {
        if (namespace) {
            var doc = this.document || getDOM().getDefaultDocument();
            // TODO(FW-811): Ivy may cause issues here because it's passing around
            // full URIs for namespaces, therefore this lookup will fail.
            return doc.createElementNS(NAMESPACE_URIS[namespace], name);
        }
        return getDOM().createElement(name, this.document);
    };
    DefaultServerRenderer2.prototype.createComment = function (value, debugInfo) {
        return getDOM().getDefaultDocument().createComment(value);
    };
    DefaultServerRenderer2.prototype.createText = function (value, debugInfo) {
        var doc = getDOM().getDefaultDocument();
        return doc.createTextNode(value);
    };
    DefaultServerRenderer2.prototype.appendChild = function (parent, newChild) {
        parent.appendChild(newChild);
    };
    DefaultServerRenderer2.prototype.insertBefore = function (parent, newChild, refChild) {
        if (parent) {
            parent.insertBefore(newChild, refChild);
        }
    };
    DefaultServerRenderer2.prototype.removeChild = function (parent, oldChild) {
        if (parent) {
            parent.removeChild(oldChild);
        }
    };
    DefaultServerRenderer2.prototype.selectRootElement = function (selectorOrNode, debugInfo) {
        var el;
        if (typeof selectorOrNode === 'string') {
            el = this.document.querySelector(selectorOrNode);
            if (!el) {
                throw new Error("The selector \"" + selectorOrNode + "\" did not match any elements");
            }
        }
        else {
            el = selectorOrNode;
        }
        while (el.firstChild) {
            el.removeChild(el.firstChild);
        }
        return el;
    };
    DefaultServerRenderer2.prototype.parentNode = function (node) {
        return node.parentNode;
    };
    DefaultServerRenderer2.prototype.nextSibling = function (node) {
        return node.nextSibling;
    };
    DefaultServerRenderer2.prototype.setAttribute = function (el, name, value, namespace) {
        if (namespace) {
            // TODO(FW-811): Ivy may cause issues here because it's passing around
            // full URIs for namespaces, therefore this lookup will fail.
            el.setAttributeNS(NAMESPACE_URIS[namespace], namespace + ':' + name, value);
        }
        else {
            el.setAttribute(name, value);
        }
    };
    DefaultServerRenderer2.prototype.removeAttribute = function (el, name, namespace) {
        if (namespace) {
            // TODO(FW-811): Ivy may cause issues here because it's passing around
            // full URIs for namespaces, therefore this lookup will fail.
            el.removeAttributeNS(NAMESPACE_URIS[namespace], name);
        }
        else {
            el.removeAttribute(name);
        }
    };
    DefaultServerRenderer2.prototype.addClass = function (el, name) {
        el.classList.add(name);
    };
    DefaultServerRenderer2.prototype.removeClass = function (el, name) {
        el.classList.remove(name);
    };
    DefaultServerRenderer2.prototype.setStyle = function (el, style, value, flags) {
        style = style.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
        var styleMap = _readStyleAttribute(el);
        styleMap[style] = value == null ? '' : value;
        _writeStyleAttribute(el, styleMap);
    };
    DefaultServerRenderer2.prototype.removeStyle = function (el, style, flags) {
        // IE requires '' instead of null
        // see https://github.com/angular/angular/issues/7916
        this.setStyle(el, style, '', flags);
    };
    // The value was validated already as a property binding, against the property name.
    // To know this value is safe to use as an attribute, the security context of the
    // attribute with the given name is checked against that security context of the
    // property.
    DefaultServerRenderer2.prototype._isSafeToReflectProperty = function (tagName, propertyName) {
        return this.schema.securityContext(tagName, propertyName, true) ===
            this.schema.securityContext(tagName, propertyName, false);
    };
    DefaultServerRenderer2.prototype.setProperty = function (el, name, value) {
        checkNoSyntheticProp(name, 'property');
        if (name === 'innerText') {
            // Domino does not support innerText. Just map it to textContent.
            el.textContent = value;
        }
        el[name] = value;
        // Mirror property values for known HTML element properties in the attributes.
        // Skip `innerhtml` which is conservatively marked as an attribute for security
        // purposes but is not actually an attribute.
        var tagName = el.tagName.toLowerCase();
        if (value != null && (typeof value === 'number' || typeof value == 'string') &&
            name.toLowerCase() !== 'innerhtml' && this.schema.hasElement(tagName, EMPTY_ARRAY) &&
            this.schema.hasProperty(tagName, name, EMPTY_ARRAY) &&
            this._isSafeToReflectProperty(tagName, name)) {
            this.setAttribute(el, name, value.toString());
        }
    };
    DefaultServerRenderer2.prototype.setValue = function (node, value) {
        node.textContent = value;
    };
    DefaultServerRenderer2.prototype.listen = function (target, eventName, callback) {
        checkNoSyntheticProp(eventName, 'listener');
        if (typeof target === 'string') {
            return this.eventManager.addGlobalEventListener(target, eventName, this.decoratePreventDefault(callback));
        }
        return this.eventManager.addEventListener(target, eventName, this.decoratePreventDefault(callback));
    };
    DefaultServerRenderer2.prototype.decoratePreventDefault = function (eventHandler) {
        var _this = this;
        return function (event) {
            // Ivy uses `Function` as a special token that allows us to unwrap the function
            // so that it can be invoked programmatically by `DebugNode.triggerEventHandler`.
            if (event === Function) {
                return eventHandler;
            }
            // Run the event handler inside the ngZone because event handlers are not patched
            // by Zone on the server. This is required only for tests.
            var allowDefaultBehavior = _this.ngZone.runGuarded(function () { return eventHandler(event); });
            if (allowDefaultBehavior === false) {
                event.preventDefault();
                event.returnValue = false;
            }
            return undefined;
        };
    };
    return DefaultServerRenderer2;
}());
var AT_CHARCODE = '@'.charCodeAt(0);
function checkNoSyntheticProp(name, nameKind) {
    if (name.charCodeAt(0) === AT_CHARCODE) {
        throw new Error("Found the synthetic " + nameKind + " " + name + ". Please include either \"BrowserAnimationsModule\" or \"NoopAnimationsModule\" in your application.");
    }
}
var EmulatedEncapsulationServerRenderer2 = /** @class */ (function (_super) {
    __extends(EmulatedEncapsulationServerRenderer2, _super);
    function EmulatedEncapsulationServerRenderer2(eventManager, document, ngZone, sharedStylesHost, schema, component) {
        var _this = _super.call(this, eventManager, document, ngZone, schema) || this;
        _this.component = component;
        // Add a 's' prefix to style attributes to indicate server.
        var componentId = 's' + component.id;
        var styles = flattenStyles(componentId, component.styles, []);
        sharedStylesHost.addStyles(styles);
        _this.contentAttr = shimContentAttribute(componentId);
        _this.hostAttr = shimHostAttribute(componentId);
        return _this;
    }
    EmulatedEncapsulationServerRenderer2.prototype.applyToHost = function (element) {
        _super.prototype.setAttribute.call(this, element, this.hostAttr, '');
    };
    EmulatedEncapsulationServerRenderer2.prototype.createElement = function (parent, name) {
        var el = _super.prototype.createElement.call(this, parent, name, this.document);
        _super.prototype.setAttribute.call(this, el, this.contentAttr, '');
        return el;
    };
    return EmulatedEncapsulationServerRenderer2;
}(DefaultServerRenderer2));
function _readStyleAttribute(element) {
    var styleMap = {};
    var styleAttribute = element.getAttribute('style');
    if (styleAttribute) {
        var styleList = styleAttribute.split(/;+/g);
        for (var i = 0; i < styleList.length; i++) {
            var style = styleList[i].trim();
            if (style.length > 0) {
                var colonIndex = style.indexOf(':');
                if (colonIndex === -1) {
                    throw new Error("Invalid CSS style: " + style);
                }
                var name_1 = style.substr(0, colonIndex).trim();
                styleMap[name_1] = style.substr(colonIndex + 1).trim();
            }
        }
    }
    return styleMap;
}
function _writeStyleAttribute(element, styleMap) {
    var styleAttrValue = '';
    for (var key in styleMap) {
        var newValue = styleMap[key];
        if (newValue != null) {
            styleAttrValue += key + ':' + styleMap[key] + ';';
        }
    }
    element.setAttribute('style', styleAttrValue);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyX3JlbmRlcmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvcGxhdGZvcm0tc2VydmVyL3NyYy9zZXJ2ZXJfcmVuZGVyZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOztBQUVILE9BQU8sRUFBQyxRQUFRLEVBQUUsT0FBTyxJQUFJLE1BQU0sRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzVELE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQzNELE9BQU8sRUFBQyxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBbUUsaUJBQWlCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDN0ksT0FBTyxFQUFDLFlBQVksRUFBRSxjQUFjLElBQUksYUFBYSxFQUFFLGVBQWUsSUFBSSxjQUFjLEVBQUUsaUJBQWlCLElBQUksZ0JBQWdCLEVBQUUscUJBQXFCLElBQUksb0JBQW9CLEVBQUUsa0JBQWtCLElBQUksaUJBQWlCLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUUxUCxJQUFNLFdBQVcsR0FBVSxFQUFFLENBQUM7QUFFOUIsSUFBTSxjQUFjLEdBQUcsSUFBSSx3QkFBd0IsRUFBRSxDQUFDO0FBR3REO0lBS0UsZ0NBQ1ksWUFBMEIsRUFBVSxNQUFjLEVBQ2hDLFFBQWEsRUFBVSxnQkFBa0M7UUFEM0UsaUJBQVksR0FBWixZQUFZLENBQWM7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2hDLGFBQVEsR0FBUixRQUFRLENBQUs7UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBTi9FLHFCQUFnQixHQUFHLElBQUksR0FBRyxFQUFxQixDQUFDO1FBRWhELFdBQU0sR0FBRyxjQUFjLENBQUM7UUFLOUIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLHNCQUFzQixDQUFDLFlBQVksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLElB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LE9BQU8sRUFBRSxjQUFjLENBQUMsQ0FBQztBQUNoRCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0RPQ1VNRU5ULCDJtWdldERPTSBhcyBnZXRET019IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge0RvbUVsZW1lbnRTY2hlbWFSZWdpc3RyeX0gZnJvbSAnQGFuZ3VsYXIvY29tcGlsZXInO1xuaW1wb3J0IHtJbmplY3QsIEluamVjdGFibGUsIE5nWm9uZSwgUmVuZGVyZXIyLCBSZW5kZXJlckZhY3RvcnkyLCBSZW5kZXJlclN0eWxlRmxhZ3MyLCBSZW5kZXJlclR5cGUyLCBWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0V2ZW50TWFuYWdlciwgybVmbGF0dGVuU3R5bGVzIGFzIGZsYXR0ZW5TdHlsZXMsIMm1TkFNRVNQQUNFX1VSSVMgYXMgTkFNRVNQQUNFX1VSSVMsIMm1U2hhcmVkU3R5bGVzSG9zdCBhcyBTaGFyZWRTdHlsZXNIb3N0LCDJtXNoaW1Db250ZW50QXR0cmlidXRlIGFzIHNoaW1Db250ZW50QXR0cmlidXRlLCDJtXNoaW1Ib3N0QXR0cmlidXRlIGFzIHNoaW1Ib3N0QXR0cmlidXRlfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuY29uc3QgRU1QVFlfQVJSQVk6IGFueVtdID0gW107XG5cbmNvbnN0IERFRkFVTFRfU0NIRU1BID0gbmV3IERvbUVsZW1lbnRTY2hlbWFSZWdpc3RyeSgpO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2VydmVyUmVuZGVyZXJGYWN0b3J5MiBpbXBsZW1lbnRzIFJlbmRlcmVyRmFjdG9yeTIge1xuICBwcml2YXRlIHJlbmRlcmVyQnlDb21wSWQgPSBuZXcgTWFwPHN0cmluZywgUmVuZGVyZXIyPigpO1xuICBwcml2YXRlIGRlZmF1bHRSZW5kZXJlcjogUmVuZGVyZXIyO1xuICBwcml2YXRlIHNjaGVtYSA9IERFRkFVTFRfU0NIRU1BO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHJpdmF0ZSBldmVudE1hbmFnZXI6IEV2ZW50TWFuYWdlciwgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcbiAgICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSwgcHJpdmF0ZSBzaGFyZWRTdHlsZXNIb3N0OiBTaGFyZWRTdHlsZXNIb3N0KSB7XG4gICAgdGhpcy5kZWZhdWx0UmVuZGVyZXIgPSBuZXcgRGVmYXVsdFNlcnZlclJlbmRlcmVyMihldmVudE1hbmFnZXIsIGRvY3VtZW50LCBuZ1pvbmUsIHRoaXMuc2NoZW1hKTtcbiAgfVxuXG4gIGNyZWF0ZVJlbmRlcmVyKGVsZW1lbnQ6IGFueSwgdHlwZTogUmVuZGVyZXJUeXBlMnxudWxsKTogUmVuZGVyZXIyIHtcbiAgICBpZiAoIWVsZW1lbnQgfHwgIXR5cGUpIHtcbiAgICAgIHJldHVybiB0aGlzLmRlZmF1bHRSZW5kZXJlcjtcbiAgICB9XG4gICAgc3dpdGNoICh0eXBlLmVuY2Fwc3VsYXRpb24pIHtcbiAgICAgIGNhc2UgVmlld0VuY2Fwc3VsYXRpb24uTmF0aXZlOlxuICAgICAgY2FzZSBWaWV3RW5jYXBzdWxhdGlvbi5FbXVsYXRlZDoge1xuICAgICAgICBsZXQgcmVuZGVyZXIgPSB0aGlzLnJlbmRlcmVyQnlDb21wSWQuZ2V0KHR5cGUuaWQpO1xuICAgICAgICBpZiAoIXJlbmRlcmVyKSB7XG4gICAgICAgICAgcmVuZGVyZXIgPSBuZXcgRW11bGF0ZWRFbmNhcHN1bGF0aW9uU2VydmVyUmVuZGVyZXIyKFxuICAgICAgICAgICAgICB0aGlzLmV2ZW50TWFuYWdlciwgdGhpcy5kb2N1bWVudCwgdGhpcy5uZ1pvbmUsIHRoaXMuc2hhcmVkU3R5bGVzSG9zdCwgdGhpcy5zY2hlbWEsXG4gICAgICAgICAgICAgIHR5cGUpO1xuICAgICAgICAgIHRoaXMucmVuZGVyZXJCeUNvbXBJZC5zZXQodHlwZS5pZCwgcmVuZGVyZXIpO1xuICAgICAgICB9XG4gICAgICAgICg8RW11bGF0ZWRFbmNhcHN1bGF0aW9uU2VydmVyUmVuZGVyZXIyPnJlbmRlcmVyKS5hcHBseVRvSG9zdChlbGVtZW50KTtcbiAgICAgICAgcmV0dXJuIHJlbmRlcmVyO1xuICAgICAgfVxuICAgICAgZGVmYXVsdDoge1xuICAgICAgICBpZiAoIXRoaXMucmVuZGVyZXJCeUNvbXBJZC5oYXModHlwZS5pZCkpIHtcbiAgICAgICAgICBjb25zdCBzdHlsZXMgPSBmbGF0dGVuU3R5bGVzKHR5cGUuaWQsIHR5cGUuc3R5bGVzLCBbXSk7XG4gICAgICAgICAgdGhpcy5zaGFyZWRTdHlsZXNIb3N0LmFkZFN0eWxlcyhzdHlsZXMpO1xuICAgICAgICAgIHRoaXMucmVuZGVyZXJCeUNvbXBJZC5zZXQodHlwZS5pZCwgdGhpcy5kZWZhdWx0UmVuZGVyZXIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmRlZmF1bHRSZW5kZXJlcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBiZWdpbigpIHt9XG4gIGVuZCgpIHt9XG59XG5cbmNsYXNzIERlZmF1bHRTZXJ2ZXJSZW5kZXJlcjIgaW1wbGVtZW50cyBSZW5kZXJlcjIge1xuICBkYXRhOiB7W2tleTogc3RyaW5nXTogYW55fSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICBwcml2YXRlIGV2ZW50TWFuYWdlcjogRXZlbnRNYW5hZ2VyLCBwcm90ZWN0ZWQgZG9jdW1lbnQ6IGFueSwgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcbiAgICAgIHByaXZhdGUgc2NoZW1hOiBEb21FbGVtZW50U2NoZW1hUmVnaXN0cnkpIHt9XG5cbiAgZGVzdHJveSgpOiB2b2lkIHt9XG5cbiAgZGVzdHJveU5vZGU6IG51bGw7XG5cbiAgY3JlYXRlRWxlbWVudChuYW1lOiBzdHJpbmcsIG5hbWVzcGFjZT86IHN0cmluZywgZGVidWdJbmZvPzogYW55KTogYW55IHtcbiAgICBpZiAobmFtZXNwYWNlKSB7XG4gICAgICBjb25zdCBkb2MgPSB0aGlzLmRvY3VtZW50IHx8IGdldERPTSgpLmdldERlZmF1bHREb2N1bWVudCgpO1xuICAgICAgLy8gVE9ETyhGVy04MTEpOiBJdnkgbWF5IGNhdXNlIGlzc3VlcyBoZXJlIGJlY2F1c2UgaXQncyBwYXNzaW5nIGFyb3VuZFxuICAgICAgLy8gZnVsbCBVUklzIGZvciBuYW1lc3BhY2VzLCB0aGVyZWZvcmUgdGhpcyBsb29rdXAgd2lsbCBmYWlsLlxuICAgICAgcmV0dXJuIGRvYy5jcmVhdGVFbGVtZW50TlMoTkFNRVNQQUNFX1VSSVNbbmFtZXNwYWNlXSwgbmFtZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGdldERPTSgpLmNyZWF0ZUVsZW1lbnQobmFtZSwgdGhpcy5kb2N1bWVudCk7XG4gIH1cblxuICBjcmVhdGVDb21tZW50KHZhbHVlOiBzdHJpbmcsIGRlYnVnSW5mbz86IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIGdldERPTSgpLmdldERlZmF1bHREb2N1bWVudCgpLmNyZWF0ZUNvbW1lbnQodmFsdWUpO1xuICB9XG5cbiAgY3JlYXRlVGV4dCh2YWx1ZTogc3RyaW5nLCBkZWJ1Z0luZm8/OiBhbnkpOiBhbnkge1xuICAgIGNvbnN0IGRvYyA9IGdldERPTSgpLmdldERlZmF1bHREb2N1bWVudCgpO1xuICAgIHJldHVybiBkb2MuY3JlYXRlVGV4dE5vZGUodmFsdWUpO1xuICB9XG5cbiAgYXBwZW5kQ2hpbGQocGFyZW50OiBhbnksIG5ld0NoaWxkOiBhbnkpOiB2b2lkIHtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQobmV3Q2hpbGQpO1xuICB9XG5cbiAgaW5zZXJ0QmVmb3JlKHBhcmVudDogYW55LCBuZXdDaGlsZDogYW55LCByZWZDaGlsZDogYW55KTogdm9pZCB7XG4gICAgaWYgKHBhcmVudCkge1xuICAgICAgcGFyZW50Lmluc2VydEJlZm9yZShuZXdDaGlsZCwgcmVmQ2hpbGQpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZUNoaWxkKHBhcmVudDogYW55LCBvbGRDaGlsZDogYW55KTogdm9pZCB7XG4gICAgaWYgKHBhcmVudCkge1xuICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKG9sZENoaWxkKTtcbiAgICB9XG4gIH1cblxuICBzZWxlY3RSb290RWxlbWVudChzZWxlY3Rvck9yTm9kZTogc3RyaW5nfGFueSwgZGVidWdJbmZvPzogYW55KTogYW55IHtcbiAgICBsZXQgZWw6IGFueTtcbiAgICBpZiAodHlwZW9mIHNlbGVjdG9yT3JOb2RlID09PSAnc3RyaW5nJykge1xuICAgICAgZWwgPSB0aGlzLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3JPck5vZGUpO1xuICAgICAgaWYgKCFlbCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBzZWxlY3RvciBcIiR7c2VsZWN0b3JPck5vZGV9XCIgZGlkIG5vdCBtYXRjaCBhbnkgZWxlbWVudHNgKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZWwgPSBzZWxlY3Rvck9yTm9kZTtcbiAgICB9XG4gICAgd2hpbGUgKGVsLmZpcnN0Q2hpbGQpIHtcbiAgICAgIGVsLnJlbW92ZUNoaWxkKGVsLmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICByZXR1cm4gZWw7XG4gIH1cblxuICBwYXJlbnROb2RlKG5vZGU6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIG5vZGUucGFyZW50Tm9kZTtcbiAgfVxuXG4gIG5leHRTaWJsaW5nKG5vZGU6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIG5vZGUubmV4dFNpYmxpbmc7XG4gIH1cblxuICBzZXRBdHRyaWJ1dGUoZWw6IGFueSwgbmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCBuYW1lc3BhY2U/OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAobmFtZXNwYWNlKSB7XG4gICAgICAvLyBUT0RPKEZXLTgxMSk6IEl2eSBtYXkgY2F1c2UgaXNzdWVzIGhlcmUgYmVjYXVzZSBpdCdzIHBhc3NpbmcgYXJvdW5kXG4gICAgICAvLyBmdWxsIFVSSXMgZm9yIG5hbWVzcGFjZXMsIHRoZXJlZm9yZSB0aGlzIGxvb2t1cCB3aWxsIGZhaWwuXG4gICAgICBlbC5zZXRBdHRyaWJ1dGVOUyhOQU1FU1BBQ0VfVVJJU1tuYW1lc3BhY2VdLCBuYW1lc3BhY2UgKyAnOicgKyBuYW1lLCB2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlQXR0cmlidXRlKGVsOiBhbnksIG5hbWU6IHN0cmluZywgbmFtZXNwYWNlPzogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKG5hbWVzcGFjZSkge1xuICAgICAgLy8gVE9ETyhGVy04MTEpOiBJdnkgbWF5IGNhdXNlIGlzc3VlcyBoZXJlIGJlY2F1c2UgaXQncyBwYXNzaW5nIGFyb3VuZFxuICAgICAgLy8gZnVsbCBVUklzIGZvciBuYW1lc3BhY2VzLCB0aGVyZWZvcmUgdGhpcyBsb29rdXAgd2lsbCBmYWlsLlxuICAgICAgZWwucmVtb3ZlQXR0cmlidXRlTlMoTkFNRVNQQUNFX1VSSVNbbmFtZXNwYWNlXSwgbmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgICB9XG4gIH1cblxuICBhZGRDbGFzcyhlbDogYW55LCBuYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBlbC5jbGFzc0xpc3QuYWRkKG5hbWUpO1xuICB9XG5cbiAgcmVtb3ZlQ2xhc3MoZWw6IGFueSwgbmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgZWwuY2xhc3NMaXN0LnJlbW92ZShuYW1lKTtcbiAgfVxuXG4gIHNldFN0eWxlKGVsOiBhbnksIHN0eWxlOiBzdHJpbmcsIHZhbHVlOiBhbnksIGZsYWdzOiBSZW5kZXJlclN0eWxlRmxhZ3MyKTogdm9pZCB7XG4gICAgc3R5bGUgPSBzdHlsZS5yZXBsYWNlKC8oW2Etel0pKFtBLVpdKS9nLCAnJDEtJDInKS50b0xvd2VyQ2FzZSgpO1xuICAgIGNvbnN0IHN0eWxlTWFwID0gX3JlYWRTdHlsZUF0dHJpYnV0ZShlbCk7XG4gICAgc3R5bGVNYXBbc3R5bGVdID0gdmFsdWUgPT0gbnVsbCA/ICcnIDogdmFsdWU7XG4gICAgX3dyaXRlU3R5bGVBdHRyaWJ1dGUoZWwsIHN0eWxlTWFwKTtcbiAgfVxuXG4gIHJlbW92ZVN0eWxlKGVsOiBhbnksIHN0eWxlOiBzdHJpbmcsIGZsYWdzOiBSZW5kZXJlclN0eWxlRmxhZ3MyKTogdm9pZCB7XG4gICAgLy8gSUUgcmVxdWlyZXMgJycgaW5zdGVhZCBvZiBudWxsXG4gICAgLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzc5MTZcbiAgICB0aGlzLnNldFN0eWxlKGVsLCBzdHlsZSwgJycsIGZsYWdzKTtcbiAgfVxuXG4gIC8vIFRoZSB2YWx1ZSB3YXMgdmFsaWRhdGVkIGFscmVhZHkgYXMgYSBwcm9wZXJ0eSBiaW5kaW5nLCBhZ2FpbnN0IHRoZSBwcm9wZXJ0eSBuYW1lLlxuICAvLyBUbyBrbm93IHRoaXMgdmFsdWUgaXMgc2FmZSB0byB1c2UgYXMgYW4gYXR0cmlidXRlLCB0aGUgc2VjdXJpdHkgY29udGV4dCBvZiB0aGVcbiAgLy8gYXR0cmlidXRlIHdpdGggdGhlIGdpdmVuIG5hbWUgaXMgY2hlY2tlZCBhZ2FpbnN0IHRoYXQgc2VjdXJpdHkgY29udGV4dCBvZiB0aGVcbiAgLy8gcHJvcGVydHkuXG4gIHByaXZhdGUgX2lzU2FmZVRvUmVmbGVjdFByb3BlcnR5KHRhZ05hbWU6IHN0cmluZywgcHJvcGVydHlOYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zY2hlbWEuc2VjdXJpdHlDb250ZXh0KHRhZ05hbWUsIHByb3BlcnR5TmFtZSwgdHJ1ZSkgPT09XG4gICAgICAgIHRoaXMuc2NoZW1hLnNlY3VyaXR5Q29udGV4dCh0YWdOYW1lLCBwcm9wZXJ0eU5hbWUsIGZhbHNlKTtcbiAgfVxuXG4gIHNldFByb3BlcnR5KGVsOiBhbnksIG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSk6IHZvaWQge1xuICAgIGNoZWNrTm9TeW50aGV0aWNQcm9wKG5hbWUsICdwcm9wZXJ0eScpO1xuICAgIGlmIChuYW1lID09PSAnaW5uZXJUZXh0Jykge1xuICAgICAgLy8gRG9taW5vIGRvZXMgbm90IHN1cHBvcnQgaW5uZXJUZXh0LiBKdXN0IG1hcCBpdCB0byB0ZXh0Q29udGVudC5cbiAgICAgIGVsLnRleHRDb250ZW50ID0gdmFsdWU7XG4gICAgfVxuICAgICg8YW55PmVsKVtuYW1lXSA9IHZhbHVlO1xuICAgIC8vIE1pcnJvciBwcm9wZXJ0eSB2YWx1ZXMgZm9yIGtub3duIEhUTUwgZWxlbWVudCBwcm9wZXJ0aWVzIGluIHRoZSBhdHRyaWJ1dGVzLlxuICAgIC8vIFNraXAgYGlubmVyaHRtbGAgd2hpY2ggaXMgY29uc2VydmF0aXZlbHkgbWFya2VkIGFzIGFuIGF0dHJpYnV0ZSBmb3Igc2VjdXJpdHlcbiAgICAvLyBwdXJwb3NlcyBidXQgaXMgbm90IGFjdHVhbGx5IGFuIGF0dHJpYnV0ZS5cbiAgICBjb25zdCB0YWdOYW1lID0gKGVsLnRhZ05hbWUgYXMgc3RyaW5nKS50b0xvd2VyQ2FzZSgpO1xuICAgIGlmICh2YWx1ZSAhPSBudWxsICYmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInIHx8IHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJykgJiZcbiAgICAgICAgbmFtZS50b0xvd2VyQ2FzZSgpICE9PSAnaW5uZXJodG1sJyAmJiB0aGlzLnNjaGVtYS5oYXNFbGVtZW50KHRhZ05hbWUsIEVNUFRZX0FSUkFZKSAmJlxuICAgICAgICB0aGlzLnNjaGVtYS5oYXNQcm9wZXJ0eSh0YWdOYW1lLCBuYW1lLCBFTVBUWV9BUlJBWSkgJiZcbiAgICAgICAgdGhpcy5faXNTYWZlVG9SZWZsZWN0UHJvcGVydHkodGFnTmFtZSwgbmFtZSkpIHtcbiAgICAgIHRoaXMuc2V0QXR0cmlidXRlKGVsLCBuYW1lLCB2YWx1ZS50b1N0cmluZygpKTtcbiAgICB9XG4gIH1cblxuICBzZXRWYWx1ZShub2RlOiBhbnksIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBub2RlLnRleHRDb250ZW50ID0gdmFsdWU7XG4gIH1cblxuICBsaXN0ZW4oXG4gICAgICB0YXJnZXQ6ICdkb2N1bWVudCd8J3dpbmRvdyd8J2JvZHknfGFueSwgZXZlbnROYW1lOiBzdHJpbmcsXG4gICAgICBjYWxsYmFjazogKGV2ZW50OiBhbnkpID0+IGJvb2xlYW4pOiAoKSA9PiB2b2lkIHtcbiAgICBjaGVja05vU3ludGhldGljUHJvcChldmVudE5hbWUsICdsaXN0ZW5lcicpO1xuICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIDwoKSA9PiB2b2lkPnRoaXMuZXZlbnRNYW5hZ2VyLmFkZEdsb2JhbEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgdGFyZ2V0LCBldmVudE5hbWUsIHRoaXMuZGVjb3JhdGVQcmV2ZW50RGVmYXVsdChjYWxsYmFjaykpO1xuICAgIH1cbiAgICByZXR1cm4gPCgpID0+IHZvaWQ+dGhpcy5ldmVudE1hbmFnZXIuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICAgIHRhcmdldCwgZXZlbnROYW1lLCB0aGlzLmRlY29yYXRlUHJldmVudERlZmF1bHQoY2FsbGJhY2spKSBhcyAoKSA9PiB2b2lkO1xuICB9XG5cbiAgcHJpdmF0ZSBkZWNvcmF0ZVByZXZlbnREZWZhdWx0KGV2ZW50SGFuZGxlcjogRnVuY3Rpb24pOiBGdW5jdGlvbiB7XG4gICAgcmV0dXJuIChldmVudDogYW55KSA9PiB7XG4gICAgICAvLyBJdnkgdXNlcyBgRnVuY3Rpb25gIGFzIGEgc3BlY2lhbCB0b2tlbiB0aGF0IGFsbG93cyB1cyB0byB1bndyYXAgdGhlIGZ1bmN0aW9uXG4gICAgICAvLyBzbyB0aGF0IGl0IGNhbiBiZSBpbnZva2VkIHByb2dyYW1tYXRpY2FsbHkgYnkgYERlYnVnTm9kZS50cmlnZ2VyRXZlbnRIYW5kbGVyYC5cbiAgICAgIGlmIChldmVudCA9PT0gRnVuY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIGV2ZW50SGFuZGxlcjtcbiAgICAgIH1cblxuICAgICAgLy8gUnVuIHRoZSBldmVudCBoYW5kbGVyIGluc2lkZSB0aGUgbmdab25lIGJlY2F1c2UgZXZlbnQgaGFuZGxlcnMgYXJlIG5vdCBwYXRjaGVkXG4gICAgICAvLyBieSBab25lIG9uIHRoZSBzZXJ2ZXIuIFRoaXMgaXMgcmVxdWlyZWQgb25seSBmb3IgdGVzdHMuXG4gICAgICBjb25zdCBhbGxvd0RlZmF1bHRCZWhhdmlvciA9IHRoaXMubmdab25lLnJ1bkd1YXJkZWQoKCkgPT4gZXZlbnRIYW5kbGVyKGV2ZW50KSk7XG4gICAgICBpZiAoYWxsb3dEZWZhdWx0QmVoYXZpb3IgPT09IGZhbHNlKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnJldHVyblZhbHVlID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfTtcbiAgfVxufVxuXG5jb25zdCBBVF9DSEFSQ09ERSA9ICdAJy5jaGFyQ29kZUF0KDApO1xuZnVuY3Rpb24gY2hlY2tOb1N5bnRoZXRpY1Byb3AobmFtZTogc3RyaW5nLCBuYW1lS2luZDogc3RyaW5nKSB7XG4gIGlmIChuYW1lLmNoYXJDb2RlQXQoMCkgPT09IEFUX0NIQVJDT0RFKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBGb3VuZCB0aGUgc3ludGhldGljICR7bmFtZUtpbmR9ICR7XG4gICAgICAgIG5hbWV9LiBQbGVhc2UgaW5jbHVkZSBlaXRoZXIgXCJCcm93c2VyQW5pbWF0aW9uc01vZHVsZVwiIG9yIFwiTm9vcEFuaW1hdGlvbnNNb2R1bGVcIiBpbiB5b3VyIGFwcGxpY2F0aW9uLmApO1xuICB9XG59XG5cbmNsYXNzIEVtdWxhdGVkRW5jYXBzdWxhdGlvblNlcnZlclJlbmRlcmVyMiBleHRlbmRzIERlZmF1bHRTZXJ2ZXJSZW5kZXJlcjIge1xuICBwcml2YXRlIGNvbnRlbnRBdHRyOiBzdHJpbmc7XG4gIHByaXZhdGUgaG9zdEF0dHI6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIGV2ZW50TWFuYWdlcjogRXZlbnRNYW5hZ2VyLCBkb2N1bWVudDogYW55LCBuZ1pvbmU6IE5nWm9uZSwgc2hhcmVkU3R5bGVzSG9zdDogU2hhcmVkU3R5bGVzSG9zdCxcbiAgICAgIHNjaGVtYTogRG9tRWxlbWVudFNjaGVtYVJlZ2lzdHJ5LCBwcml2YXRlIGNvbXBvbmVudDogUmVuZGVyZXJUeXBlMikge1xuICAgIHN1cGVyKGV2ZW50TWFuYWdlciwgZG9jdW1lbnQsIG5nWm9uZSwgc2NoZW1hKTtcbiAgICAvLyBBZGQgYSAncycgcHJlZml4IHRvIHN0eWxlIGF0dHJpYnV0ZXMgdG8gaW5kaWNhdGUgc2VydmVyLlxuICAgIGNvbnN0IGNvbXBvbmVudElkID0gJ3MnICsgY29tcG9uZW50LmlkO1xuICAgIGNvbnN0IHN0eWxlcyA9IGZsYXR0ZW5TdHlsZXMoY29tcG9uZW50SWQsIGNvbXBvbmVudC5zdHlsZXMsIFtdKTtcbiAgICBzaGFyZWRTdHlsZXNIb3N0LmFkZFN0eWxlcyhzdHlsZXMpO1xuXG4gICAgdGhpcy5jb250ZW50QXR0ciA9IHNoaW1Db250ZW50QXR0cmlidXRlKGNvbXBvbmVudElkKTtcbiAgICB0aGlzLmhvc3RBdHRyID0gc2hpbUhvc3RBdHRyaWJ1dGUoY29tcG9uZW50SWQpO1xuICB9XG5cbiAgYXBwbHlUb0hvc3QoZWxlbWVudDogYW55KSB7XG4gICAgc3VwZXIuc2V0QXR0cmlidXRlKGVsZW1lbnQsIHRoaXMuaG9zdEF0dHIsICcnKTtcbiAgfVxuXG4gIGNyZWF0ZUVsZW1lbnQocGFyZW50OiBhbnksIG5hbWU6IHN0cmluZyk6IEVsZW1lbnQge1xuICAgIGNvbnN0IGVsID0gc3VwZXIuY3JlYXRlRWxlbWVudChwYXJlbnQsIG5hbWUsIHRoaXMuZG9jdW1lbnQpO1xuICAgIHN1cGVyLnNldEF0dHJpYnV0ZShlbCwgdGhpcy5jb250ZW50QXR0ciwgJycpO1xuICAgIHJldHVybiBlbDtcbiAgfVxufVxuXG5mdW5jdGlvbiBfcmVhZFN0eWxlQXR0cmlidXRlKGVsZW1lbnQ6IGFueSk6IHtbbmFtZTogc3RyaW5nXTogc3RyaW5nfSB7XG4gIGNvbnN0IHN0eWxlTWFwOiB7W25hbWU6IHN0cmluZ106IHN0cmluZ30gPSB7fTtcbiAgY29uc3Qgc3R5bGVBdHRyaWJ1dGUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgaWYgKHN0eWxlQXR0cmlidXRlKSB7XG4gICAgY29uc3Qgc3R5bGVMaXN0ID0gc3R5bGVBdHRyaWJ1dGUuc3BsaXQoLzsrL2cpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3R5bGVMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBzdHlsZSA9IHN0eWxlTGlzdFtpXS50cmltKCk7XG4gICAgICBpZiAoc3R5bGUubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBjb2xvbkluZGV4ID0gc3R5bGUuaW5kZXhPZignOicpO1xuICAgICAgICBpZiAoY29sb25JbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgQ1NTIHN0eWxlOiAke3N0eWxlfWApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG5hbWUgPSBzdHlsZS5zdWJzdHIoMCwgY29sb25JbmRleCkudHJpbSgpO1xuICAgICAgICBzdHlsZU1hcFtuYW1lXSA9IHN0eWxlLnN1YnN0cihjb2xvbkluZGV4ICsgMSkudHJpbSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gc3R5bGVNYXA7XG59XG5cbmZ1bmN0aW9uIF93cml0ZVN0eWxlQXR0cmlidXRlKGVsZW1lbnQ6IGFueSwgc3R5bGVNYXA6IHtbbmFtZTogc3RyaW5nXTogc3RyaW5nfSkge1xuICBsZXQgc3R5bGVBdHRyVmFsdWUgPSAnJztcbiAgZm9yIChjb25zdCBrZXkgaW4gc3R5bGVNYXApIHtcbiAgICBjb25zdCBuZXdWYWx1ZSA9IHN0eWxlTWFwW2tleV07XG4gICAgaWYgKG5ld1ZhbHVlICE9IG51bGwpIHtcbiAgICAgIHN0eWxlQXR0clZhbHVlICs9IGtleSArICc6JyArIHN0eWxlTWFwW2tleV0gKyAnOyc7XG4gICAgfVxuICB9XG4gIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdzdHlsZScsIHN0eWxlQXR0clZhbHVlKTtcbn1cbiJdfQ==