/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { coerceBooleanProperty, coerceNumberProperty, coerceElement } from '@angular/cdk/coercion';
import { Directive, ElementRef, EventEmitter, Injectable, Input, NgModule, NgZone, Output, } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import * as i0 from "@angular/core";
/**
 * Factory that creates a new MutationObserver and allows us to stub it out in unit tests.
 * @docs-private
 */
var MutationObserverFactory = /** @class */ (function () {
    function MutationObserverFactory() {
    }
    MutationObserverFactory.prototype.create = function (callback) {
        return typeof MutationObserver === 'undefined' ? null : new MutationObserver(callback);
    };
    MutationObserverFactory.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    MutationObserverFactory.ɵprov = i0.ɵɵdefineInjectable({ factory: function MutationObserverFactory_Factory() { return new MutationObserverFactory(); }, token: MutationObserverFactory, providedIn: "root" });
    return MutationObserverFactory;
}());
export { MutationObserverFactory };
/** An injectable service that allows watching elements for changes to their content. */
var ContentObserver = /** @class */ (function () {
    function ContentObserver(_mutationObserverFactory) {
        this._mutationObserverFactory = _mutationObserverFactory;
        /** Keeps track of the existing MutationObservers so they can be reused. */
        this._observedElements = new Map();
    }
    ContentObserver.prototype.ngOnDestroy = function () {
        var _this = this;
        this._observedElements.forEach(function (_, element) { return _this._cleanupObserver(element); });
    };
    ContentObserver.prototype.observe = function (elementOrRef) {
        var _this = this;
        var element = coerceElement(elementOrRef);
        return new Observable(function (observer) {
            var stream = _this._observeElement(element);
            var subscription = stream.subscribe(observer);
            return function () {
                subscription.unsubscribe();
                _this._unobserveElement(element);
            };
        });
    };
    /**
     * Observes the given element by using the existing MutationObserver if available, or creating a
     * new one if not.
     */
    ContentObserver.prototype._observeElement = function (element) {
        if (!this._observedElements.has(element)) {
            var stream_1 = new Subject();
            var observer = this._mutationObserverFactory.create(function (mutations) { return stream_1.next(mutations); });
            if (observer) {
                observer.observe(element, {
                    characterData: true,
                    childList: true,
                    subtree: true
                });
            }
            this._observedElements.set(element, { observer: observer, stream: stream_1, count: 1 });
        }
        else {
            this._observedElements.get(element).count++;
        }
        return this._observedElements.get(element).stream;
    };
    /**
     * Un-observes the given element and cleans up the underlying MutationObserver if nobody else is
     * observing this element.
     */
    ContentObserver.prototype._unobserveElement = function (element) {
        if (this._observedElements.has(element)) {
            this._observedElements.get(element).count--;
            if (!this._observedElements.get(element).count) {
                this._cleanupObserver(element);
            }
        }
    };
    /** Clean up the underlying MutationObserver for the specified element. */
    ContentObserver.prototype._cleanupObserver = function (element) {
        if (this._observedElements.has(element)) {
            var _a = this._observedElements.get(element), observer = _a.observer, stream = _a.stream;
            if (observer) {
                observer.disconnect();
            }
            stream.complete();
            this._observedElements.delete(element);
        }
    };
    ContentObserver.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    ContentObserver.ctorParameters = function () { return [
        { type: MutationObserverFactory }
    ]; };
    ContentObserver.ɵprov = i0.ɵɵdefineInjectable({ factory: function ContentObserver_Factory() { return new ContentObserver(i0.ɵɵinject(MutationObserverFactory)); }, token: ContentObserver, providedIn: "root" });
    return ContentObserver;
}());
export { ContentObserver };
/**
 * Directive that triggers a callback whenever the content of
 * its associated element has changed.
 */
var CdkObserveContent = /** @class */ (function () {
    function CdkObserveContent(_contentObserver, _elementRef, _ngZone) {
        this._contentObserver = _contentObserver;
        this._elementRef = _elementRef;
        this._ngZone = _ngZone;
        /** Event emitted for each change in the element's content. */
        this.event = new EventEmitter();
        this._disabled = false;
        this._currentSubscription = null;
    }
    Object.defineProperty(CdkObserveContent.prototype, "disabled", {
        /**
         * Whether observing content is disabled. This option can be used
         * to disconnect the underlying MutationObserver until it is needed.
         */
        get: function () { return this._disabled; },
        set: function (value) {
            this._disabled = coerceBooleanProperty(value);
            this._disabled ? this._unsubscribe() : this._subscribe();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkObserveContent.prototype, "debounce", {
        /** Debounce interval for emitting the changes. */
        get: function () { return this._debounce; },
        set: function (value) {
            this._debounce = coerceNumberProperty(value);
            this._subscribe();
        },
        enumerable: true,
        configurable: true
    });
    CdkObserveContent.prototype.ngAfterContentInit = function () {
        if (!this._currentSubscription && !this.disabled) {
            this._subscribe();
        }
    };
    CdkObserveContent.prototype.ngOnDestroy = function () {
        this._unsubscribe();
    };
    CdkObserveContent.prototype._subscribe = function () {
        var _this = this;
        this._unsubscribe();
        var stream = this._contentObserver.observe(this._elementRef);
        // TODO(mmalerba): We shouldn't be emitting on this @Output() outside the zone.
        // Consider brining it back inside the zone next time we're making breaking changes.
        // Bringing it back inside can cause things like infinite change detection loops and changed
        // after checked errors if people's code isn't handling it properly.
        this._ngZone.runOutsideAngular(function () {
            _this._currentSubscription =
                (_this.debounce ? stream.pipe(debounceTime(_this.debounce)) : stream).subscribe(_this.event);
        });
    };
    CdkObserveContent.prototype._unsubscribe = function () {
        if (this._currentSubscription) {
            this._currentSubscription.unsubscribe();
        }
    };
    CdkObserveContent.decorators = [
        { type: Directive, args: [{
                    selector: '[cdkObserveContent]',
                    exportAs: 'cdkObserveContent',
                },] }
    ];
    /** @nocollapse */
    CdkObserveContent.ctorParameters = function () { return [
        { type: ContentObserver },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    CdkObserveContent.propDecorators = {
        event: [{ type: Output, args: ['cdkObserveContent',] }],
        disabled: [{ type: Input, args: ['cdkObserveContentDisabled',] }],
        debounce: [{ type: Input }]
    };
    return CdkObserveContent;
}());
export { CdkObserveContent };
var ObserversModule = /** @class */ (function () {
    function ObserversModule() {
    }
    ObserversModule.decorators = [
        { type: NgModule, args: [{
                    exports: [CdkObserveContent],
                    declarations: [CdkObserveContent],
                    providers: [MutationObserverFactory]
                },] }
    ];
    return ObserversModule;
}());
export { ObserversModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JzZXJ2ZS1jb250ZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2Nkay9vYnNlcnZlcnMvb2JzZXJ2ZS1jb250ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFDTCxxQkFBcUIsRUFDckIsb0JBQW9CLEVBQ3BCLGFBQWEsRUFFZCxNQUFNLHVCQUF1QixDQUFDO0FBQy9CLE9BQU8sRUFFTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixVQUFVLEVBQ1YsS0FBSyxFQUNMLFFBQVEsRUFDUixNQUFNLEVBRU4sTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxVQUFVLEVBQUUsT0FBTyxFQUF5QixNQUFNLE1BQU0sQ0FBQztBQUNqRSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7O0FBRTVDOzs7R0FHRztBQUNIO0lBQUE7S0FLQztJQUhDLHdDQUFNLEdBQU4sVUFBTyxRQUEwQjtRQUMvQixPQUFPLE9BQU8sZ0JBQWdCLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDekYsQ0FBQzs7Z0JBSkYsVUFBVSxTQUFDLEVBQUMsVUFBVSxFQUFFLE1BQU0sRUFBQzs7O2tDQWpDaEM7Q0FzQ0MsQUFMRCxJQUtDO1NBSlksdUJBQXVCO0FBT3BDLHdGQUF3RjtBQUN4RjtJQVNFLHlCQUFvQix3QkFBaUQ7UUFBakQsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUF5QjtRQVByRSwyRUFBMkU7UUFDbkUsc0JBQWlCLEdBQUcsSUFBSSxHQUFHLEVBSS9CLENBQUM7SUFFbUUsQ0FBQztJQUV6RSxxQ0FBVyxHQUFYO1FBQUEsaUJBRUM7UUFEQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLFVBQUMs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b0JBQzVCLFlBQVksRUFBRSxDQUFDLGlCQUFpQixDQUFDO29CQUNqQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztpQkFDckM7O0lBQzZCLHNCQUFDO0NBQUEsQUFML0IsSUFLK0I7U0FBbEIsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge1xuICBjb2VyY2VCb29sZWFuUHJvcGVydHksXG4gIGNvZXJjZU51bWJlclByb3BlcnR5LFxuICBjb2VyY2VFbGVtZW50LFxuICBCb29sZWFuSW5wdXRcbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbmplY3RhYmxlLFxuICBJbnB1dCxcbiAgTmdNb2R1bGUsXG4gIE5nWm9uZSxcbiAgT25EZXN0cm95LFxuICBPdXRwdXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtPYnNlcnZhYmxlLCBTdWJqZWN0LCBTdWJzY3JpcHRpb24sIE9ic2VydmVyfSBmcm9tICdyeGpzJztcbmltcG9ydCB7ZGVib3VuY2VUaW1lfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbi8qKlxuICogRmFjdG9yeSB0aGF0IGNyZWF0ZXMgYSBuZXcgTXV0YXRpb25PYnNlcnZlciBhbmQgYWxsb3dzIHVzIHRvIHN0dWIgaXQgb3V0IGluIHVuaXQgdGVzdHMuXG4gKiBAZG9jcy1wcml2YXRlXG4gKi9cbkBJbmplY3RhYmxlKHtwcm92aWRlZEluOiAncm9vdCd9KVxuZXhwb3J0IGNsYXNzIE11dGF0aW9uT2JzZXJ2ZXJGYWN0b3J5IHtcbiAgY3JlYXRlKGNhbGxiYWNrOiBNdXRhdGlvbkNhbGxiYWNrKTogTXV0YXRpb25PYnNlcnZlciB8IG51bGwge1xuICAgIHJldHVybiB0eXBlb2YgTXV0YXRpb25PYnNlcnZlciA9PT0gJ3VuZGVmaW5lZCcgPyBudWxsIDogbmV3IE11dGF0aW9uT2JzZXJ2ZXIoY2FsbGJhY2spO1xuICB9XG59XG5cblxuLyoqIEFuIGluamVjdGFibGUgc2VydmljZSB0aGF0IGFsbG93cyB3YXRjaGluZyBlbGVtZW50cyBmb3IgY2hhbmdlcyB0byB0aGVpciBjb250ZW50LiAqL1xuQEluamVjdGFibGUoe3Byb3ZpZGVkSW46ICdyb290J30pXG5leHBvcnQgY2xhc3MgQ29udGVudE9ic2VydmVyIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgLyoqIEtlZXBzIHRyYWNrIG9mIHRoZSBleGlzdGluZyBNdXRhdGlvbk9ic2VydmVycyBzbyB0aGV5IGNhbiBiZSByZXVzZWQuICovXG4gIHByaXZhdGUgX29ic2VydmVkRWxlbWVudHMgPSBuZXcgTWFwPEVsZW1lbnQsIHtcbiAgICBvYnNlcnZlcjogTXV0YXRpb25PYnNlcnZlciB8IG51bGwsXG4gICAgc3RyZWFtOiBTdWJqZWN0PE11dGF0aW9uUmVjb3JkW10+LFxuICAgIGNvdW50OiBudW1iZXJcbiAgfT4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9tdXRhdGlvbk9ic2VydmVyRmFjdG9yeTogTXV0YXRpb25PYnNlcnZlckZhY3RvcnkpIHt9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fb2JzZXJ2ZWRFbGVtZW50cy5mb3JFYWNoKChfLCBlbGVtZW50KSA9PiB0aGlzLl9jbGVhbnVwT2JzZXJ2ZXIoZWxlbWVudCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIE9ic2VydmUgY29udGVudCBjaGFuZ2VzIG9uIGFuIGVsZW1lbnQuXG4gICAqIEBwYXJhbSBlbGVtZW50IFRoZSBlbGVtZW50IHRvIG9ic2VydmUgZm9yIGNvbnRlbnQgY2hhbmdlcy5cbiAgICovXG4gIG9ic2VydmUoZWxlbWVudDogRWxlbWVudCk6IE9ic2VydmFibGU8TXV0YXRpb25SZWNvcmRbXT47XG5cbiAgLyoqXG4gICAqIE9ic2VydmUgY29udGVudCBjaGFuZ2VzIG9uIGFuIGVsZW1lbnQuXG4gICAqIEBwYXJhbSBlbGVtZW50IFRoZSBlbGVtZW50IHRvIG9ic2VydmUgZm9yIGNvbnRlbnQgY2hhbmdlcy5cbiAgICovXG4gIG9ic2VydmUoZWxlbWVudDogRWxlbWVudFJlZjxFbGVtZW50Pik6IE9ic2VydmFibGU8TXV0YXRpb25SZWNvcmRbXT47XG5cbiAgb2JzZXJ2ZShlbGVtZW50T3JSZWY6IEVsZW1lbnQgfCBFbGVtZW50UmVmPEVsZW1lbnQ+KTogT2JzZXJ2YWJsZTxNdXRhdGlvblJlY29yZFtdPiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGNvZXJjZUVsZW1lbnQoZWxlbWVudE9yUmVmKTtcblxuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXI6IE9ic2VydmVyPE11dGF0aW9uUmVjb3JkW10+KSA9PiB7XG4gICAgICBjb25zdCBzdHJlYW0gPSB0aGlzLl9vYnNlcnZlRWxlbWVudChlbGVtZW50KTtcbiAgICAgIGNvbnN0IHN1YnNjcmlwdGlvbiA9IHN0cmVhbS5zdWJzY3JpYmUob2JzZXJ2ZXIpO1xuXG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgdGhpcy5fdW5vYnNlcnZlRWxlbWVudChlbGVtZW50KTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogT2JzZXJ2ZXMgdGhlIGdpdmVuIGVsZW1lbnQgYnkgdXNpbmcgdGhlIGV4aXN0aW5nIE11dGF0aW9uT2JzZXJ2ZXIgaWYgYXZhaWxhYmxlLCBvciBjcmVhdGluZyBhXG4gICAqIG5ldyBvbmUgaWYgbm90LlxuICAgKi9cbiAgcHJpdmF0ZSBfb2JzZXJ2ZUVsZW1lbnQoZWxlbWVudDogRWxlbWVudCk6IFN1YmplY3Q8TXV0YXRpb25SZWNvcmRbXT4ge1xuICAgIGlmICghdGhpcy5fb2JzZXJ2ZWRFbGVtZW50cy5oYXMoZWxlbWVudCkpIHtcbiAgICAgIGNvbnN0IHN0cmVhbSA9IG5ldyBTdWJqZWN0PE11dGF0aW9uUmVjb3JkW10+KCk7XG4gICAgICBjb25zdCBvYnNlcnZlciA9IHRoaXMuX211dGF0aW9uT2JzZXJ2ZXJGYWN0b3J5LmNyZWF0ZShtdXRhdGlvbnMgPT4gc3RyZWFtLm5leHQobXV0YXRpb25zKSk7XG4gICAgICBpZiAob2JzZXJ2ZXIpIHtcbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50LCB7XG4gICAgICAgICAgY2hhcmFjdGVyRGF0YTogdHJ1ZSxcbiAgICAgICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICAgICAgc3VidHJlZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX29ic2VydmVkRWxlbWVudHMuc2V0KGVsZW1lbnQsIHtvYnNlcnZlciwgc3RyZWFtLCBjb3VudDogMX0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9vYnNlcnZlZEVsZW1lbnRzLmdldChlbGVtZW50KSEuY291bnQrKztcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX29ic2VydmVkRWxlbWVudHMuZ2V0KGVsZW1lbnQpIS5zdHJlYW07XG4gIH1cblxuICAvKipcbiAgICogVW4tb2JzZXJ2ZXMgdGhlIGdpdmVuIGVsZW1lbnQgYW5kIGNsZWFucyB1cCB0aGUgdW5kZXJseWluZyBNdXRhdGlvbk9ic2VydmVyIGlmIG5vYm9keSBlbHNlIGlzXG4gICAqIG9ic2VydmluZyB0aGlzIGVsZW1lbnQuXG4gICAqL1xuICBwcml2YXRlIF91bm9ic2VydmVFbGVtZW50KGVsZW1lbnQ6IEVsZW1lbnQpIHtcbiAgICBpZiAodGhpcy5fb2JzZXJ2ZWRFbGVtZW50cy5oYXMoZWxlbWVudCkpIHtcbiAgICAgIHRoaXMuX29ic2VydmVkRWxlbWVudHMuZ2V0KGVsZW1lbnQpIS5jb3VudC0tO1xuICAgICAgaWYgKCF0aGlzLl9vYnNlcnZlZEVsZW1lbnRzLmdldChlbGVtZW50KSEuY291bnQpIHtcbiAgICAgICAgdGhpcy5fY2xlYW51cE9ic2VydmVyKGVsZW1lbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKiBDbGVhbiB1cCB0aGUgdW5kZXJseWluZyBNdXRhdGlvbk9ic2VydmVyIGZvciB0aGUgc3BlY2lmaWVkIGVsZW1lbnQuICovXG4gIHByaXZhdGUgX2NsZWFudXBPYnNlcnZlcihlbGVtZW50OiBFbGVtZW50KSB7XG4gICAgaWYgKHRoaXMuX29ic2VydmVkRWxlbWVudHMuaGFzKGVsZW1lbnQpKSB7XG4gICAgICBjb25zdCB7b2JzZXJ2ZXIsIHN0cmVhbX0gPSB0aGlzLl9vYnNlcnZlZEVsZW1lbnRzLmdldChlbGVtZW50KSE7XG4gICAgICBpZiAob2JzZXJ2ZXIpIHtcbiAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgfVxuICAgICAgc3RyZWFtLmNvbXBsZXRlKCk7XG4gICAgICB0aGlzLl9vYnNlcnZlZEVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KTtcbiAgICB9XG4gIH1cbn1cblxuXG4vKipcbiAqIERpcmVjdGl2ZSB0aGF0IHRyaWdnZXJzIGEgY2FsbGJhY2sgd2hlbmV2ZXIgdGhlIGNvbnRlbnQgb2ZcbiAqIGl0cyBhc3NvY2lhdGVkIGVsZW1lbnQgaGFzIGNoYW5nZWQuXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjZGtPYnNlcnZlQ29udGVudF0nLFxuICBleHBvcnRBczogJ2Nka09ic2VydmVDb250ZW50Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrT2JzZXJ2ZUNvbnRlbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xuICAvKiogRXZlbnQgZW1pdHRlZCBmb3IgZWFjaCBjaGFuZ2UgaW4gdGhlIGVsZW1lbnQncyBjb250ZW50LiAqL1xuICBAT3V0cHV0KCdjZGtPYnNlcnZlQ29udGVudCcpIGV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxNdXRhdGlvblJlY29yZFtdPigpO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIG9ic2VydmluZyBjb250ZW50IGlzIGRpc2FibGVkLiBUaGlzIG9wdGlvbiBjYW4gYmUgdXNlZFxuICAgKiB0byBkaXNjb25uZWN0IHRoZSB1bmRlcmx5aW5nIE11dGF0aW9uT2JzZXJ2ZXIgdW50aWwgaXQgaXMgbmVlZGVkLlxuICAgKi9cbiAgQElucHV0KCdjZGtPYnNlcnZlQ29udGVudERpc2FibGVkJylcbiAgZ2V0IGRpc2FibGVkKCkgeyByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7IH1cbiAgc2V0IGRpc2FibGVkKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLl9kaXNhYmxlZCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XG4gICAgdGhpcy5fZGlzYWJsZWQgPyB0aGlzLl91bnN1YnNjcmliZSgpIDogdGhpcy5fc3Vic2NyaWJlKCk7XG4gIH1cbiAgcHJpdmF0ZSBfZGlzYWJsZWQgPSBmYWxzZTtcblxuICAvKiogRGVib3VuY2UgaW50ZXJ2YWwgZm9yIGVtaXR0aW5nIHRoZSBjaGFuZ2VzLiAqL1xuICBASW5wdXQoKVxuICBnZXQgZGVib3VuY2UoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX2RlYm91bmNlOyB9XG4gIHNldCBkZWJvdW5jZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fZGVib3VuY2UgPSBjb2VyY2VOdW1iZXJQcm9wZXJ0eSh2YWx1ZSk7XG4gICAgdGhpcy5fc3Vic2NyaWJlKCk7XG4gIH1cbiAgcHJpdmF0ZSBfZGVib3VuY2U6IG51bWJlcjtcblxuICBwcml2YXRlIF9jdXJyZW50U3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb24gfCBudWxsID0gbnVsbDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jb250ZW50T2JzZXJ2ZXI6IENvbnRlbnRPYnNlcnZlcixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgICAgICAgICAgIHByaXZhdGUgX25nWm9uZTogTmdab25lKSB7fVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICBpZiAoIXRoaXMuX2N1cnJlbnRTdWJzY3JpcHRpb24gJiYgIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuX3N1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX3Vuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwcml2YXRlIF9zdWJzY3JpYmUoKSB7XG4gICAgdGhpcy5fdW5zdWJzY3JpYmUoKTtcbiAgICBjb25zdCBzdHJlYW0gPSB0aGlzLl9jb250ZW50T2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLl9lbGVtZW50UmVmKTtcblxuICAgIC8vIFRPRE8obW1hbGVyYmEpOiBXZSBzaG91bGRuJ3QgYmUgZW1pdHRpbmcgb24gdGhpcyBAT3V0cHV0KCkgb3V0c2lkZSB0aGUgem9uZS5cbiAgICAvLyBDb25zaWRlciBicmluaW5nIGl0IGJhY2sgaW5zaWRlIHRoZSB6b25lIG5leHQgdGltZSB3ZSdyZSBtYWtpbmcgYnJlYWtpbmcgY2hhbmdlcy5cbiAgICAvLyBCcmluZ2luZyBpdCBiYWNrIGluc2lkZSBjYW4gY2F1c2UgdGhpbmdzIGxpa2UgaW5maW5pdGUgY2hhbmdlIGRldGVjdGlvbiBsb29wcyBhbmQgY2hhbmdlZFxuICAgIC8vIGFmdGVyIGNoZWNrZWQgZXJyb3JzIGlmIHBlb3BsZSdzIGNvZGUgaXNuJ3QgaGFuZGxpbmcgaXQgcHJvcGVybHkuXG4gICAgdGhpcy5fbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIHRoaXMuX2N1cnJlbnRTdWJzY3JpcHRpb24gPVxuICAgICAgICAgICh0aGlzLmRlYm91bmNlID8gc3RyZWFtLnBpcGUoZGVib3VuY2VUaW1lKHRoaXMuZGVib3VuY2UpKSA6IHN0cmVhbSkuc3Vic2NyaWJlKHRoaXMuZXZlbnQpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfdW5zdWJzY3JpYmUoKSB7XG4gICAgaWYgKHRoaXMuX2N1cnJlbnRTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuX2N1cnJlbnRTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZGlzYWJsZWQ6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2RlYm91bmNlOiBCb29sZWFuSW5wdXQ7XG59XG5cblxuQE5nTW9kdWxlKHtcbiAgZXhwb3J0czogW0Nka09ic2VydmVDb250ZW50XSxcbiAgZGVjbGFyYXRpb25zOiBbQ2RrT2JzZXJ2ZUNvbnRlbnRdLFxuICBwcm92aWRlcnM6IFtNdXRhdGlvbk9ic2VydmVyRmFjdG9yeV1cbn0pXG5leHBvcnQgY2xhc3MgT2JzZXJ2ZXJzTW9kdWxlIHt9XG4iXX0=