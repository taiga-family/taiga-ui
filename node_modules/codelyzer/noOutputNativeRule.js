"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var sprintf_js_1 = require("sprintf-js");
var rules_1 = require("tslint/lib/rules");
var ngWalker_1 = require("./angular/ngWalker");
var utils_1 = require("./util/utils");
var nativeEventNames = new Set([
    'abort',
    'afterprint',
    'animationend',
    'animationiteration',
    'animationstart',
    'appinstalled',
    'audioprocess',
    'audioend',
    'audiostart',
    'beforeprint',
    'beforeunload',
    'beginEvent',
    'blocked',
    'blur',
    'boundary',
    'cached',
    'canplay',
    'canplaythrough',
    'change',
    'chargingchange',
    'chargingtimechange',
    'checking',
    'click',
    'close',
    'complete',
    'compositionend',
    'compositionstart',
    'compositionupdate',
    'contextmenu',
    'copy',
    'cut',
    'dblclick',
    'devicechange',
    'devicelight',
    'devicemotion',
    'deviceorientation',
    'deviceproximity',
    'dischargingtimechange',
    'DOMAttributeNameChanged',
    'DOMAttrModified',
    'DOMCharacterDataModified',
    'DOMContentLoaded',
    'DOMElementNameChanged',
    'focus',
    'focusin',
    'focusout',
    'DOMNodeInserted',
    'DOMNodeInsertedIntoDocument',
    'DOMNodeRemoved',
    'DOMNodeRemovedFromDocument',
    'DOMSubtreeModified',
    'downloading',
    'drag',
    'dragend',
    'dragenter',
    'dragleave',
    'dragover',
    'dragstart',
    'drop',
    'durationchange',
    'emptied',
    'end',
    'ended',
    'endEvent',
    'error',
    'fullscreenchange',
    'fullscreenerror',
    'gamepadconnected',
    'gamepaddisconnected',
    'gotpointercapture',
    'hashchange',
    'lostpointercapture',
    'input',
    'invalid',
    'keydown',
    'keypress',
    'keyup',
    'languagechange',
    'levelchange',
    'load',
    'loadeddata',
    'loadedmetadata',
    'loadend',
    'loadstart',
    'mark',
    'message',
    'messageerror',
    'mousedown',
    'mouseenter',
    'mouseleave',
    'mousemove',
    'mouseout',
    'mouseover',
    'mouseup',
    'nomatch',
    'notificationclick',
    'noupdate',
    'obsolete',
    'offline',
    'online',
    'open',
    'orientationchange',
    'pagehide',
    'pageshow',
    'paste',
    'pause',
    'pointercancel',
    'pointerdown',
    'pointerenter',
    'pointerleave',
    'pointerlockchange',
    'pointerlockerror',
    'pointermove',
    'pointerout',
    'pointerover',
    'pointerup',
    'play',
    'playing',
    'popstate',
    'progress',
    'push',
    'pushsubscriptionchange',
    'ratechange',
    'readystatechange',
    'repeatEvent',
    'reset',
    'resize',
    'resourcetimingbufferfull',
    'result',
    'resume',
    'scroll',
    'seeked',
    'seeking',
    'select',
    'selectstart',
    'selectionchange',
    'show',
    'soundend',
    'soundstart',
    'speechend',
    'speechstart',
    'stalled',
    'start',
    'storage',
    'submit',
    'success',
    'suspend',
    'SVGAbort',
    'SVGError',
    'SVGLoad',
    'SVGResize',
    'SVGScroll',
    'SVGUnload',
    'SVGZoom',
    'timeout',
    'timeupdate',
    'touchcancel',
    'touchend',
    'touchmove',
    'touchstart',
    'transitionend',
    'unload',
    'updateready',
    'upgradeneeded',
    'userproximity',
    'voiceschanged',
    'versionchange',
    'visibilitychange',
    'volumechange',
    'waiting',
    'wheel'
]);
exports.getFailureMessage = function (failureParameters) {
    return sprintf_js_1.sprintf(Rule.FAILURE_STRING, failureParameters.className, failureParameters.propertyName);
};
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        var walker = new Walker(sourceFile, this.getOptions());
        return this.applyWithWalker(walker);
    };
    Rule.metadata = {
        description: 'Disallows naming directive outputs as standard DOM event.',
        options: null,
        optionsDescription: 'Not configurable.',
        rationale: 'Listeners subscribed to an output with such a name will also be invoked when the native event is raised.',
        ruleName: 'no-output-native',
        type: 'functionality',
        typescriptOnly: true
    };
    Rule.FAILURE_STRING = 'In the class "%s", the output property "%s" should not be named or renamed as a native event';
    return Rule;
}(rules_1.AbstractRule));
exports.Rule = Rule;
var Walker = (function (_super) {
    __extends(Walker, _super);
    function Walker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Walker.prototype.visitNgOutput = function (property, output, args) {
        this.validateOutput(property, args);
        _super.prototype.visitNgOutput.call(this, property, output, args);
    };
    Walker.prototype.validateOutput = function (property, args) {
        var className = utils_1.getClassName(property);
        if (!className)
            return;
        var propertyName = property.name.getText();
        var outputName = args[0] || propertyName;
        if (!outputName || !nativeEventNames.has(outputName))
            return;
        var failure = exports.getFailureMessage({ className: className, propertyName: propertyName });
        this.addFailureAtNode(property, failure);
    };
    return Walker;
}(ngWalker_1.NgWalker));
