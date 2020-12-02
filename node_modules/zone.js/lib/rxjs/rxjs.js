/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("zone.js/lib/rxjs/rxjs", ["require", "exports", "rxjs"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rxjs_1 = require("rxjs");
    Zone.__load_patch('rxjs', function (global, Zone, api) {
        var symbol = Zone.__symbol__;
        var nextSource = 'rxjs.Subscriber.next';
        var errorSource = 'rxjs.Subscriber.error';
        var completeSource = 'rxjs.Subscriber.complete';
        var ObjectDefineProperties = Object.defineProperties;
        var patchObservable = function () {
            var ObservablePrototype = rxjs_1.Observable.prototype;
            var _symbolSubscribe = symbol('_subscribe');
            var _subscribe = ObservablePrototype[_symbolSubscribe] = ObservablePrototype._subscribe;
            ObjectDefineProperties(rxjs_1.Observable.prototype, {
                _zone: { value: null, writable: true, configurable: true },
                _zoneSource: { value: null, writable: true, configurable: true },
                _zoneSubscribe: { value: null, writable: true, configurable: true },
                source: {
                    configurable: true,
                    get: function () { return this._zoneSource; },
                    set: function (source) {
                        this._zone = Zone.current;
                        this._zoneSource = source;
                    }
                },
                _subscribe: {
                    configurable: true,
                    get: function () {
                        if (this._zoneSubscribe) {
                            return this._zoneSubscribe;
                        }
                        else if (this.constructor === rxjs_1.Observable) {
                            return _subscribe;
                        }
                        var proto = Object.getPrototypeOf(this);
                        return proto && proto._subscribe;
                    },
                    set: function (subscribe) {
                        this._zone = Zone.current;
                        if (!subscribe) {
                            this._zoneSubscribe = subscribe;
                        }
                        else {
                            this._zoneSubscribe = function () {
                                if (this._zone && this._zone !== Zone.current) {
                                    var tearDown_1 = this._zone.run(subscribe, this, arguments);
                                    if (typeof tearDown_1 === 'function') {
                                        var zone_1 = this._zone;
                                        return function () {
                                            if (zone_1 !== Zone.current) {
                                                return zone_1.run(tearDown_1, this, arguments);
                                            }
                                            return tearDown_1.apply(this, arguments);
                                        };
                                    }
                                    else {
                                        return tearDown_1;
                                    }
                                }
                                else {
                                    return subscribe.apply(this, arguments);
                                }
                            };
                        }
                    }
                },
                subjectFactory: {
                    get: function () { return this._zoneSubjectFactory; },
                    set: function (factory) {
                        var zone = this._zone;
                        this._zoneSubjectFactory = function () {
                            if (zone && zone !== Zone.current) {
                                return zone.run(factory, this, arguments);
                            }
                            return factory.apply(this, arguments);
                        };
                    }
                }
            });
        };
        api.patchMethod(rxjs_1.Observable.prototype, 'lift', function (delegate) { return function (self, args) {
            var observable = delegate.apply(self, args);
            if (observable.operator) {
                observable.operator._zone = Zone.current;
                api.patchMethod(observable.operator, 'call', function (operatorDelegate) { return function (operatorSelf, operatorArgs) {
                    if (operatorSelf._zone && operatorSelf._zone !== Zone.current) {
                        return operatorSelf._zone.run(operatorDelegate, operatorSelf, operatorArgs);
                    }
                    return operatorDelegate.apply(operatorSelf, operatorArgs);
                }; });
            }
            return observable;
        }; });
        var patchSubscription = function () {
            ObjectDefineProperties(rxjs_1.Subscription.prototype, {
                _zone: { value: null, writable: true, configurable: true },
                _zoneUnsubscribe: { value: null, writable: true, configurable: true },
                _unsubscribe: {
                    get: function () {
                        if (this._zoneUnsubscribe) {
                            return this._zoneUnsubscribe;
                        }
                        var proto = Object.getPrototypeOf(this);
                        return proto && proto._unsubscribe;
                    },
                    set: function (unsubscribe) {
                        this._zone = Zone.current;
                        if (!unsubscribe) {
                            this._zoneUnsubscribe = unsubscribe;
                        }
                        else {
                            this._zoneUnsubscribe = function () {
                                if (this._zone && this._zone !== Zone.current) {
                                    return this._zone.run(unsubscribe, this, arguments);
                                }
                                else {
                                    return unsubscribe.apply(this, arguments);
                                }
                            };
                        }
                    }
                }
            });
        };
        var patchSubscriber = function () {
            var next = rxjs_1.Subscriber.prototype.next;
            var error = rxjs_1.Subscriber.prototype.error;
            var complete = rxjs_1.Subscriber.prototype.complete;
            Object.defineProperty(rxjs_1.Subscriber.prototype, 'destination', {
                configurable: true,
                get: function () { return this._zoneDestination; },
                set: function (destination) {
                    this._zone = Zone.current;
                    this._zoneDestination = destination;
                }
            });
            // patch Subscriber.next to make sure it run
            // into SubscriptionZone
            rxjs_1.Subscriber.prototype.next = function () {
                var currentZone = Zone.current;
                var subscriptionZone = this._zone;
                // for performance concern, check Zone.current
                // equal with this._zone(SubscriptionZone) or not
                if (subscriptionZone && subscriptionZone !== currentZone) {
                    return subscriptionZone.run(next, this, arguments, nextSource);
                }
                else {
                    return next.apply(this, arguments);
                }
            };
            rxjs_1.Subscriber.prototype.error = function () {
                var currentZone = Zone.current;
                var subscriptionZone = this._zone;
                // for performance concern, check Zone.current
                // equal with this._zone(SubscriptionZone) or not
                if (subscriptionZone && subscriptionZone !== currentZone) {
                    return subscriptionZone.run(error, this, arguments, errorSource);
                }
                else {
                    return error.apply(this, arguments);
                }
            };
            rxjs_1.Subscriber.prototype.complete = function () {
                var currentZone = Zone.current;
                var subscriptionZone = this._zone;
                // for performance concern, check Zone.current
                // equal with this._zone(SubscriptionZone) or not
                if (subscriptionZone && subscriptionZone !== currentZone) {
                    return subscriptionZone.run(complete, this, arguments, completeSource);
                }
                else {
                    return complete.call(this);
                }
            };
        };
        patchObservable();
        patchSubscription();
        patchSubscriber();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnhqcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3pvbmUuanMvbGliL3J4anMvcnhqcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQUVILDZCQUEwRDtJQU16RCxJQUFZLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxVQUFDLE1BQVcsRUFBRSxJQUFjLEVBQUUsR0FBaUI7UUFDaEYsSUFBTSxNQUFNLEdBQXNDLElBQVksQ0FBQyxVQUFVLENBQUM7UUFDMUUsSUFBTSxVQUFVLEdBQUcsc0JBQXNCLENBQUM7UUFDMUMsSUFBTSxXQUFXLEdBQUcsdUJBQXVCLENBQUM7UUFDNUMsSUFBTSxjQUFjLEdBQUcsMEJBQTBCLENBQUM7UUFFbEQsSUFBTSxzQkFBc0IsR0FBRyxNQUFNLENBQUMsZ0JBQWdCLENBQUM7UUFFdkQsSUFBTSxlQUFlLEdBQUc7WUFDdEIsSUFBTSxtQkFBbUIsR0FBUSxpQkFBVSxDQUFDLFNBQVMsQ0FBQztZQUN0RCxJQUFNLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUM5QyxJQUFNLFVBQVUsR0FBRyxtQkFBbUIsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLG1CQUFtQixDQUFDLFVBQVUsQ0FBQztZQUUxRixzQkFBc0IsQ0FBQyxpQkFBVSxDQUFDLFNBQVMsRUFBRTtnQkFDM0MsS0FBSyxFQUFFLEVBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUM7Z0JBQ3hELFdBQVcsRUFBRSxFQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFDO2dCQUM5RCxjQUFjLEVBQUUsRUFBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBQztn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O1lBQ0gsQ0FBQyxDQUFDO1lBRUYsaUJBQVUsQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHO2dCQUM5QixJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNqQyxJQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7Z0JBRXBDLDhDQUE4QztnQkFDOUMsaURBQWlEO2dCQUNqRCxJQUFJLGdCQUFnQixJQUFJLGdCQUFnQixLQUFLLFdBQVcsRUFBRTtvQkFDeEQsT0FBTyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxTQUFnQixFQUFFLGNBQWMsQ0FBQyxDQUFDO2lCQUMvRTtxQkFBTTtvQkFDTCxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQzVCO1lBQ0gsQ0FBQyxDQUFDO1FBQ0osQ0FBQyxDQUFDO1FBRUYsZUFBZSxFQUFFLENBQUM7UUFDbEIsaUJBQWlCLEVBQUUsQ0FBQztRQUNwQixlQUFlLEVBQUUsQ0FBQztJQUNwQixDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtPYnNlcnZhYmxlLCBTdWJzY3JpYmVyLCBTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xuXG50eXBlIFpvbmVTdWJzY3JpYmVyQ29udGV4dCA9IHtcbiAgX3pvbmU6IFpvbmVcbn0gJiBTdWJzY3JpYmVyPGFueT47XG5cbihab25lIGFzIGFueSkuX19sb2FkX3BhdGNoKCdyeGpzJywgKGdsb2JhbDogYW55LCBab25lOiBab25lVHlwZSwgYXBpOiBfWm9uZVByaXZhdGUpID0+IHtcbiAgY29uc3Qgc3ltYm9sOiAoc3ltYm9sU3RyaW5nOiBzdHJpbmcpID0+IHN0cmluZyA9IChab25lIGFzIGFueSkuX19zeW1ib2xfXztcbiAgY29uc3QgbmV4dFNvdXJjZSA9ICdyeGpzLlN1YnNjcmliZXIubmV4dCc7XG4gIGNvbnN0IGVycm9yU291cmNlID0gJ3J4anMuU3Vic2NyaWJlci5lcnJvcic7XG4gIGNvbnN0IGNvbXBsZXRlU291cmNlID0gJ3J4anMuU3Vic2NyaWJlci5jb21wbGV0ZSc7XG5cbiAgY29uc3QgT2JqZWN0RGVmaW5lUHJvcGVydGllcyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzO1xuXG4gIGNvbnN0IHBhdGNoT2JzZXJ2YWJsZSA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IE9ic2VydmFibGVQcm90b3R5cGU6IGFueSA9IE9ic2VydmFibGUucHJvdG90eXBlO1xuICAgIGNvbnN0IF9zeW1ib2xTdWJzY3JpYmUgPSBzeW1ib2woJ19zdWJzY3JpYmUnKTtcbiAgICBjb25zdCBfc3Vic2NyaWJlID0gT2JzZXJ2YWJsZVByb3RvdHlwZVtfc3ltYm9sU3Vic2NyaWJlXSA9IE9ic2VydmFibGVQcm90b3R5cGUuX3N1YnNjcmliZTtcblxuICAgIE9iamVjdERlZmluZVByb3BlcnRpZXMoT2JzZXJ2YWJsZS5wcm90b3R5cGUsIHtcbiAgICAgIF96b25lOiB7dmFsdWU6IG51bGwsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWV9LFxuICAgICAgX3pvbmVTb3VyY2U6IHt2YWx1ZTogbnVsbCwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZX0sXG4gICAgICBfem9uZVN1YnNjcmliZToge3ZhbHVlOiBudWxsLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlfSxcbiAgICAgIHNvdXJjZToge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGdldDogZnVuY3Rpb24odGhpczogT2JzZXJ2YWJsZTxhbnk+KSB7IHJldHVybiAodGhpcyBhcyBhbnkpLl96b25lU291cmNlOyB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uKHRoaXM6IE9ic2VydmFibGU8YW55Piwgc291cmNlOiBhbnkpIHtcbiAgICAgICAgICAodGhpcyBhcyBhbnkpLl96b25lID0gWm9uZS5jdXJyZW50O1xuICAgICAgICAgICh0aGlzIGFzIGFueSkuX3pvbmVTb3VyY2UgPSBzb3VyY2U7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBfc3Vic2NyaWJlOiB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbih0aGlzOiBPYnNlcnZhYmxlPGFueT4pIHtcbiAgICAgICAgICBpZiAoKHRoaXMgYXMgYW55KS5fem9uZVN1YnNjcmliZSkge1xuICAgICAgICAgICAgcmV0dXJuICh0aGlzIGFzIGFueSkuX3pvbmVTdWJzY3JpYmU7XG4gICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmNvbnN0cnVjdG9yID09PSBPYnNlcnZhYmxlKSB7XG4gICAgICAgICAgICByZXR1cm4gX3N1YnNjcmliZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcyk7XG4gICAgICAgICAgcmV0dXJuIHByb3RvICYmIHByb3RvLl9zdWJzY3JpYmU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24odGhpczogT2JzZXJ2YWJsZTxhbnk+LCBzdWJzY3JpYmU6IGFueSkge1xuICAgICAgICAgICh0aGlzIGFzIGFueSkuX3pvbmUgPSBab25lLmN1cnJlbnQ7XG4gICAgICAgICAgaWYgKCFzdWJzY3JpYmUpIHtcbiAgICAgICAgICAgICh0aGlzIGFzIGFueSkuX3pvbmVTdWJzY3JpYmUgPSBzdWJzY3JpYmU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICh0aGlzIGFzIGFueSkuX3pvbmVTdWJzY3JpYmUgPSBmdW5jdGlvbih0aGlzOiBab25lU3Vic2NyaWJlckNvbnRleHQpIHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMuX3pvbmUgJiYgdGhpcy5fem9uZSAhPT0gWm9uZS5jdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGVhckRvd24gPSB0aGlzLl96b25lLnJ1bihzdWJzY3JpYmUsIHRoaXMsIGFyZ3VtZW50cyBhcyBhbnkpO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGVhckRvd24gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHpvbmUgPSB0aGlzLl96b25lO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHRoaXM6IFpvbmVTdWJzY3JpYmVyQ29udGV4dCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoem9uZSAhPT0gWm9uZS5jdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHpvbmUucnVuKHRlYXJEb3duLCB0aGlzLCBhcmd1bWVudHMgYXMgYW55KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGVhckRvd24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB0ZWFyRG93bjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN1YnNjcmliZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHN1YmplY3RGYWN0b3J5OiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiAodGhpcyBhcyBhbnkpLl96b25lU3ViamVjdEZhY3Rvcnk7IH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24oZmFjdG9yeTogYW55KSB7XG4gICAgICAgICAgY29uc3Qgem9uZSA9IHRoaXMuX3pvbmU7XG4gICAgICAgICAgdGhpcy5fem9uZVN1YmplY3RGYWN0b3J5ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoem9uZSAmJiB6b25lICE9PSBab25lLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHpvbmUucnVuKGZhY3RvcnksIHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFjdG9yeS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBhcGkucGF0Y2hNZXRob2QoT2JzZXJ2YWJsZS5wcm90b3R5cGUsICdsaWZ0JywgKGRlbGVnYXRlOiBhbnkpID0+IChzZWxmOiBhbnksIGFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgb2JzZXJ2YWJsZTogYW55ID0gZGVsZWdhdGUuYXBwbHkoc2VsZiwgYXJncyk7XG4gICAgaWYgKG9ic2VydmFibGUub3BlcmF0b3IpIHtcbiAgICAgIG9ic2VydmFibGUub3BlcmF0b3IuX3pvbmUgPSBab25lLmN1cnJlbnQ7XG4gICAgICBhcGkucGF0Y2hNZXRob2QoXG4gICAgICAgICAgb2JzZXJ2YWJsZS5vcGVyYXRvciwgJ2NhbGwnLFxuICAgICAgICAgIChvcGVyYXRvckRlbGVnYXRlOiBhbnkpID0+IChvcGVyYXRvclNlbGY6IGFueSwgb3BlcmF0b3JBcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgICAgICAgaWYgKG9wZXJhdG9yU2VsZi5fem9uZSAmJiBvcGVyYXRvclNlbGYuX3pvbmUgIT09IFpvbmUuY3VycmVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gb3BlcmF0b3JTZWxmLl96b25lLnJ1bihvcGVyYXRvckRlbGVnYXRlLCBvcGVyYXRvclNlbGYsIG9wZXJhdG9yQXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gb3BlcmF0b3JEZWxlZ2F0ZS5hcHBseShvcGVyYXRvclNlbGYsIG9wZXJhdG9yQXJncyk7XG4gICAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBvYnNlcnZhYmxlO1xuICB9KTtcblxuICBjb25zdCBwYXRjaFN1YnNjcmlwdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgIE9iamVjdERlZmluZVByb3BlcnRpZXMoU3Vic2NyaXB0aW9uLnByb3RvdHlwZSwge1xuICAgICAgX3pvbmU6IHt2YWx1ZTogbnVsbCwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZX0sXG4gICAgICBfem9uZVVuc3Vic2NyaWJlOiB7dmFsdWU6IG51bGwsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWV9LFxuICAgICAgX3Vuc3Vic2NyaWJlOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24odGhpczogU3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgaWYgKCh0aGlzIGFzIGFueSkuX3pvbmVVbnN1YnNjcmliZSkge1xuICAgICAgICAgICAgcmV0dXJuICh0aGlzIGFzIGFueSkuX3pvbmVVbnN1YnNjcmliZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcyk7XG4gICAgICAgICAgcmV0dXJuIHByb3RvICYmIHByb3RvLl91bnN1YnNjcmliZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbih0aGlzOiBTdWJzY3JpcHRpb24sIHVuc3Vic2NyaWJlOiBhbnkpIHtcbiAgICAgICAgICAodGhpcyBhcyBhbnkpLl96b25lID0gWm9uZS5jdXJyZW50O1xuICAgICAgICAgIGlmICghdW5zdWJzY3JpYmUpIHtcbiAgICAgICAgICAgICh0aGlzIGFzIGFueSkuX3pvbmVVbnN1YnNjcmliZSA9IHVuc3Vic2NyaWJlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAodGhpcyBhcyBhbnkpLl96b25lVW5zdWJzY3JpYmUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMuX3pvbmUgJiYgdGhpcy5fem9uZSAhPT0gWm9uZS5jdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3pvbmUucnVuKHVuc3Vic2NyaWJlLCB0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB1bnN1YnNjcmliZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHBhdGNoU3Vic2NyaWJlciA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IG5leHQgPSBTdWJzY3JpYmVyLnByb3RvdHlwZS5uZXh0O1xuICAgIGNvbnN0IGVycm9yID0gU3Vic2NyaWJlci5wcm90b3R5cGUuZXJyb3I7XG4gICAgY29uc3QgY29tcGxldGUgPSBTdWJzY3JpYmVyLnByb3RvdHlwZS5jb21wbGV0ZTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdWJzY3JpYmVyLnByb3RvdHlwZSwgJ2Rlc3RpbmF0aW9uJywge1xuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbih0aGlzOiBTdWJzY3JpYmVyPGFueT4pIHsgcmV0dXJuICh0aGlzIGFzIGFueSkuX3pvbmVEZXN0aW5hdGlvbjsgfSxcbiAgICAgIHNldDogZnVuY3Rpb24odGhpczogU3Vic2NyaWJlcjxhbnk+LCBkZXN0aW5hdGlvbjogYW55KSB7XG4gICAgICAgICh0aGlzIGFzIGFueSkuX3pvbmUgPSBab25lLmN1cnJlbnQ7XG4gICAgICAgICh0aGlzIGFzIGFueSkuX3pvbmVEZXN0aW5hdGlvbiA9IGRlc3RpbmF0aW9uO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gcGF0Y2ggU3Vic2NyaWJlci5uZXh0IHRvIG1ha2Ugc3VyZSBpdCBydW5cbiAgICAvLyBpbnRvIFN1YnNjcmlwdGlvblpvbmVcbiAgICBTdWJzY3JpYmVyLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24odGhpczogWm9uZVN1YnNjcmliZXJDb250ZXh0KSB7XG4gICAgICBjb25zdCBjdXJyZW50Wm9uZSA9IFpvbmUuY3VycmVudDtcbiAgICAgIGNvbnN0IHN1YnNjcmlwdGlvblpvbmUgPSB0aGlzLl96b25lO1xuXG4gICAgICAvLyBmb3IgcGVyZm9ybWFuY2UgY29uY2VybiwgY2hlY2sgWm9uZS5jdXJyZW50XG4gICAgICAvLyBlcXVhbCB3aXRoIHRoaXMuX3pvbmUoU3Vic2NyaXB0aW9uWm9uZSkgb3Igbm90XG4gICAgICBpZiAoc3Vic2NyaXB0aW9uWm9uZSAmJiBzdWJzY3JpcHRpb25ab25lICE9PSBjdXJyZW50Wm9uZSkge1xuICAgICAgICByZXR1cm4gc3Vic2NyaXB0aW9uWm9uZS5ydW4obmV4dCwgdGhpcywgYXJndW1lbnRzIGFzIGFueSwgbmV4dFNvdXJjZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbmV4dC5hcHBseSh0aGlzLCBhcmd1bWVudHMgYXMgYW55KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgU3Vic2NyaWJlci5wcm90b3R5cGUuZXJyb3IgPSBmdW5jdGlvbih0aGlzOiBab25lU3Vic2NyaWJlckNvbnRleHQpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRab25lID0gWm9uZS5jdXJyZW50O1xuICAgICAgY29uc3Qgc3Vic2NyaXB0aW9uWm9uZSA9IHRoaXMuX3pvbmU7XG5cbiAgICAgIC8vIGZvciBwZXJmb3JtYW5jZSBjb25jZXJuLCBjaGVjayBab25lLmN1cnJlbnRcbiAgICAgIC8vIGVxdWFsIHdpdGggdGhpcy5fem9uZShTdWJzY3JpcHRpb25ab25lKSBvciBub3RcbiAgICAgIGlmIChzdWJzY3JpcHRpb25ab25lICYmIHN1YnNjcmlwdGlvblpvbmUgIT09IGN1cnJlbnRab25lKSB7XG4gICAgICAgIHJldHVybiBzdWJzY3JpcHRpb25ab25lLnJ1bihlcnJvciwgdGhpcywgYXJndW1lbnRzIGFzIGFueSwgZXJyb3JTb3VyY2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGVycm9yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyBhcyBhbnkpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBTdWJzY3JpYmVyLnByb3RvdHlwZS5jb21wbGV0ZSA9IGZ1bmN0aW9uKHRoaXM6IFpvbmVTdWJzY3JpYmVyQ29udGV4dCkge1xuICAgICAgY29uc3QgY3VycmVudFpvbmUgPSBab25lLmN1cnJlbnQ7XG4gICAgICBjb25zdCBzdWJzY3JpcHRpb25ab25lID0gdGhpcy5fem9uZTtcblxuICAgICAgLy8gZm9yIHBlcmZvcm1hbmNlIGNvbmNlcm4sIGNoZWNrIFpvbmUuY3VycmVudFxuICAgICAgLy8gZXF1YWwgd2l0aCB0aGlzLl96b25lKFN1YnNjcmlwdGlvblpvbmUpIG9yIG5vdFxuICAgICAgaWYgKHN1YnNjcmlwdGlvblpvbmUgJiYgc3Vic2NyaXB0aW9uWm9uZSAhPT0gY3VycmVudFpvbmUpIHtcbiAgICAgICAgcmV0dXJuIHN1YnNjcmlwdGlvblpvbmUucnVuKGNvbXBsZXRlLCB0aGlzLCBhcmd1bWVudHMgYXMgYW55LCBjb21wbGV0ZVNvdXJjZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gY29tcGxldGUuY2FsbCh0aGlzKTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIHBhdGNoT2JzZXJ2YWJsZSgpO1xuICBwYXRjaFN1YnNjcmlwdGlvbigpO1xuICBwYXRjaFN1YnNjcmliZXIoKTtcbn0pO1xuIl19