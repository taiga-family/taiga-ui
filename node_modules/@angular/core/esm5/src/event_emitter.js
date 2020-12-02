/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __extends } from "tslib";
/// <reference types="rxjs" />
import { Subject, Subscription } from 'rxjs';
/**
 * Use in components with the `@Output` directive to emit custom events
 * synchronously or asynchronously, and register handlers for those events
 * by subscribing to an instance.
 *
 * @usageNotes
 *
 * Extends
 * [RxJS `Subject`](https://rxjs.dev/api/index/class/Subject)
 * for Angular by adding the `emit()` method.
 *
 * In the following example, a component defines two output properties
 * that create event emitters. When the title is clicked, the emitter
 * emits an open or close event to toggle the current visibility state.
 *
 * ```html
 * @Component({
 *   selector: 'zippy',
 *   template: `
 *   <div class="zippy">
 *     <div (click)="toggle()">Toggle</div>
 *     <div [hidden]="!visible">
 *       <ng-content></ng-content>
 *     </div>
 *  </div>`})
 * export class Zippy {
 *   visible: boolean = true;
 *   @Output() open: EventEmitter<any> = new EventEmitter();
 *   @Output() close: EventEmitter<any> = new EventEmitter();
 *
 *   toggle() {
 *     this.visible = !this.visible;
 *     if (this.visible) {
 *       this.open.emit(null);
 *     } else {
 *       this.close.emit(null);
 *     }
 *   }
 * }
 * ```
 *
 * Access the event object with the `$event` argument passed to the output event
 * handler:
 *
 * ```html
 * <zippy (open)="onOpen($event)" (close)="onClose($event)"></zippy>
 * ```
 *
 * @see [Observables in Angular](guide/observables-in-angular)
 * @publicApi
 */
var EventEmitter = /** @class */ (function (_super) {
    __extends(EventEmitter, _super);
    /**
     * Creates an instance of this class that can
     * deliver events synchronously or asynchronously.
     *
     * @param isAsync When true, deliver events asynchronously.
     *
     */
    function EventEmitter(isAsync) {
        if (isAsync === void 0) { isAsync = false; }
        var _this = _super.call(this) || this;
        _this.__isAsync = isAsync;
        return _this;
    }
    /**
     * Emits an event containing a given value.
     * @param value The value to emit.
     */
    EventEmitter.prototype.emit = function (value) {
        _super.prototype.next.call(this, value);
    };
    /**
     * Registers handlers for events emitted by this instance.
     * @param generatorOrNext When supplied, a custom handler for emitted events.
     * @param error When supplied, a custom handler for an error notification
     * from this emitter.
     * @param complete When supplied, a custom handler for a completion
     * notification from this emitter.
     */
    EventEmitter.prototype.subscribe = function (generatorOrNext, error, complete) {
        var schedulerFn;
        var errorFn = function (err) { return null; };
        var completeFn = function () { return null; };
        if (generatorOrNext && typeof generatorOrNext === 'object') {
            schedulerFn = this.__isAsync ? function (value) {
                setTimeout(function () { return generatorOrNext.next(value); });
            } : function (value) {
                generatorOrNext.next(value);
            };
            if (generatorOrNext.error) {
                errorFn = this.__isAsync ? function (err) {
                    setTimeout(function () { return generatorOrNext.error(err); });
                } : function (err) {
                    generatorOrNext.error(err);
                };
            }
            if (generatorOrNext.complete) {
                completeFn = this.__isAsync ? function () {
                    setTimeout(function () { return generatorOrNext.complete(); });
                } : function () {
                    generatorOrNext.complete();
                };
            }
        }
        else {
            schedulerFn = this.__isAsync ? function (value) {
                setTimeout(function () { return generatorOrNext(value); });
            } : function (value) {
                generatorOrNext(value);
            };
            if (error) {
                errorFn = this.__isAsync ? function (err) {
                    setTimeout(function () { return error(err); });
                } : function (err) {
                    error(err);
                };
            }
            if (complete) {
                completeFn = this.__isAsync ? function () {
                    setTimeout(function () { return complete(); });
                } : function () {
                    complete();
                };
            }
        }
        var sink = _super.prototype.subscribe.call(this, schedulerFn, errorFn, completeFn);
        if (generatorOrNext instanceof Subscription) {
            generatorOrNext.add(sink);
        }
        return sink;
    };
    return EventEmitter;
}(Subject));
export { EventEmitter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnRfZW1pdHRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL2V2ZW50X2VtaXR0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOztBQUVILDhCQUE4QjtBQUU5QixPQUFPLEVBQUMsT0FBTyxFQUFFLFlBQVksRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUUzQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FrREc7QUFDSDtJQUFpRCxnQ0FBVTtJQU16RDs7Ozs7O09BTUc7SUFDSCxzQkFBWSxPQUF3QjtRQUF4Qix3QkFBQSxFQUFBLGVBQXdCO1FBQXBDLFlBQ0UsaUJBQU8sU0FFUjtRQURDLEtBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDOztJQUMzQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsMkJBQUksR0FBSixVQUFLLEtBQVM7UUFDWixpQkFBTSxJQUFJLFlBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDSCxnQ0FBUyxHQUFULFVBQVUsZUFBcUIsRUFBRSxLQUFXLEVBQUUsUUFBYztRQUMxRCxJQUFJLFdBQTRCLENBQUM7UUFDakMsSUFBSSxPQUFPLEdBQUcsVUFBQyxHQUFRLElBQVUsT0FBQSxJQUFJLEVBQUosQ0FBSSxDQUFDO1FBQ3RDLElBQUksVUFBVSxHQUFHLGNBQVcsT0FBQSxJQUFJLEVBQUosQ0FBSSxDQUFDO1FBRWpDLElBQUksZUFBZSxJQUFJLE9BQU8sZUFBZSxLQUFLLFFBQVEsRUFBRTtZQUMxRCxXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsVUFBQyxLQUFVO2dCQUN4QyxVQUFVLENBQUMsY0FBTSxPQUFBLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQTNCLENBQTJCLENBQUMsQ0FBQztZQUNoRCxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQUMsS0FBVTtnQkFDYixlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzlCLENBQUMsQ0FBQztZQUVGLElBQUksZUFBZSxDQUFDLEtBQUssRUFBRTtnQkFDekIsT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFVBQUMsR0FBRztvQkFDN0IsVUFBVSxDQUFDLGNBQU0sT0FBQSxlQUFlLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUExQixDQUEwQixDQUFDLENBQUM7Z0JBQy9DLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBQyxHQUFHO29CQUNOLGVBQWUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzdCLENBQUMsQ0FBQzthQUNIO1lBRUQsSUFBSSxlQUFlLENBQUMsUUFBUSxFQUFFO2dCQUM1QixVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7b0JBQzVCLFVBQVUsQ0FBQyxjQUFNLE9BQUEsZUFBZSxDQUFDLFFBQVEsRUFBRSxFQUExQixDQUEwQixDQUFDLENBQUM7Z0JBQy9DLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ0YsZUFBZSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUM3QixDQUFDLENBQUM7YUFDSDtTQUNGO2FBQU07WUFDTCxXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsVUFBQyxLQUFVO2dCQUN4QyxVQUFVLENBQUMsY0FBTSxPQUFBLGVBQWUsQ0FBQyxLQUFLLENBQUMsRUFBdEIsQ0FBc0IsQ0FBQyxDQUFDO1lBQzNDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBQyxLQUFVO2dCQUNiLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN6QixDQUFDLENBQUM7WUFFRixJQUFJLEtBQUssRUFBRTtnQkFDVCxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsVUFBQyxHQUFHO29CQUM3QixVQUFVLENBQUMsY0FBTSxPQUFBLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBVixDQUFVLENBQUMsQ0FBQztnQkFDL0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFDLEdBQUc7b0JBQ04sS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNiLENBQUMsQ0FBQzthQUNIO1lBRUQsSUFBSSxRQUFRLEVBQUU7Z0JBQ1osVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO29CQUM1QixVQUFVLENBQUMsY0FBTSxPQUFBLFFBQVEsRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFDO2dCQUMvQixDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNGLFFBQVEsRUFBRSxDQUFDO2dCQUNiLENBQUMsQ0FBQzthQUNIO1NBQ0Y7UUFFRCxJQUFNLElBQUksR0FBRyxpQkFBTSxTQUFTLFlBQUMsV0FBVyxFQUFFLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQztRQUUvRCxJQUFJLGVBQWUsWUFBWSxZQUFZLEVBQUU7WUFDM0MsZUFBZSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMzQjtRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FBQyxBQTdGRCxDQUFpRCxPQUFPLEdBNkZ2RCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuLy8vIDxyZWZlcmVuY2UgdHlwZXM9XCJyeGpzXCIgLz5cblxuaW1wb3J0IHtTdWJqZWN0LCBTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xuXG4vKipcbiAqIFVzZSBpbiBjb21wb25lbnRzIHdpdGggdGhlIGBAT3V0cHV0YCBkaXJlY3RpdmUgdG8gZW1pdCBjdXN0b20gZXZlbnRzXG4gKiBzeW5jaHJvbm91c2x5IG9yIGFzeW5jaHJvbm91c2x5LCBhbmQgcmVnaXN0ZXIgaGFuZGxlcnMgZm9yIHRob3NlIGV2ZW50c1xuICogYnkgc3Vic2NyaWJpbmcgdG8gYW4gaW5zdGFuY2UuXG4gKlxuICogQHVzYWdlTm90ZXNcbiAqXG4gKiBFeHRlbmRzXG4gKiBbUnhKUyBgU3ViamVjdGBdKGh0dHBzOi8vcnhqcy5kZXYvYXBpL2luZGV4L2NsYXNzL1N1YmplY3QpXG4gKiBmb3IgQW5ndWxhciBieSBhZGRpbmcgdGhlIGBlbWl0KClgIG1ldGhvZC5cbiAqXG4gKiBJbiB0aGUgZm9sbG93aW5nIGV4YW1wbGUsIGEgY29tcG9uZW50IGRlZmluZXMgdHdvIG91dHB1dCBwcm9wZXJ0aWVzXG4gKiB0aGF0IGNyZWF0ZSBldmVudCBlbWl0dGVycy4gV2hlbiB0aGUgdGl0bGUgaXMgY2xpY2tlZCwgdGhlIGVtaXR0ZXJcbiAqIGVtaXRzIGFuIG9wZW4gb3IgY2xvc2UgZXZlbnQgdG8gdG9nZ2xlIHRoZSBjdXJyZW50IHZpc2liaWxpdHkgc3RhdGUuXG4gKlxuICogYGBgaHRtbFxuICogQENvbXBvbmVudCh7XG4gKiAgIHNlbGVjdG9yOiAnemlwcHknLFxuICogICB0ZW1wbGF0ZTogYFxuICogICA8ZGl2IGNsYXNzPVwiemlwcHlcIj5cbiAqICAgICA8ZGl2IChjbGljayk9XCJ0b2dnbGUoKVwiPlRvZ2dsZTwvZGl2PlxuICogICAgIDxkaXYgW2hpZGRlbl09XCIhdmlzaWJsZVwiPlxuICogICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICogICAgIDwvZGl2PlxuICogIDwvZGl2PmB9KVxuICogZXhwb3J0IGNsYXNzIFppcHB5IHtcbiAqICAgdmlzaWJsZTogYm9vbGVhbiA9IHRydWU7XG4gKiAgIEBPdXRwdXQoKSBvcGVuOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAqICAgQE91dHB1dCgpIGNsb3NlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAqXG4gKiAgIHRvZ2dsZSgpIHtcbiAqICAgICB0aGlzLnZpc2libGUgPSAhdGhpcy52aXNpYmxlO1xuICogICAgIGlmICh0aGlzLnZpc2libGUpIHtcbiAqICAgICAgIHRoaXMub3Blbi5lbWl0KG51bGwpO1xuICogICAgIH0gZWxzZSB7XG4gKiAgICAgICB0aGlzLmNsb3NlLmVtaXQobnVsbCk7XG4gKiAgICAgfVxuICogICB9XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBBY2Nlc3MgdGhlIGV2ZW50IG9iamVjdCB3aXRoIHRoZSBgJGV2ZW50YCBhcmd1bWVudCBwYXNzZWQgdG8gdGhlIG91dHB1dCBldmVudFxuICogaGFuZGxlcjpcbiAqXG4gKiBgYGBodG1sXG4gKiA8emlwcHkgKG9wZW4pPVwib25PcGVuKCRldmVudClcIiAoY2xvc2UpPVwib25DbG9zZSgkZXZlbnQpXCI+PC96aXBweT5cbiAqIGBgYFxuICpcbiAqIEBzZWUgW09ic2VydmFibGVzIGluIEFuZ3VsYXJdKGd1aWRlL29ic2VydmFibGVzLWluLWFuZ3VsYXIpXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBjbGFzcyBFdmVudEVtaXR0ZXI8VCBleHRlbmRzIGFueT4gZXh0ZW5kcyBTdWJqZWN0PFQ+IHtcbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgX19pc0FzeW5jOiBib29sZWFuOyAgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgdGhhdCBjYW5cbiAgICogZGVsaXZlciBldmVudHMgc3luY2hyb25vdXNseSBvciBhc3luY2hyb25vdXNseS5cbiAgICpcbiAgICogQHBhcmFtIGlzQXN5bmMgV2hlbiB0cnVlLCBkZWxpdmVyIGV2ZW50cyBhc3luY2hyb25vdXNseS5cbiAgICpcbiAgICovXG4gIGNvbnN0cnVjdG9yKGlzQXN5bmM6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fX2lzQXN5bmMgPSBpc0FzeW5jO1xuICB9XG5cbiAgLyoqXG4gICAqIEVtaXRzIGFuIGV2ZW50IGNvbnRhaW5pbmcgYSBnaXZlbiB2YWx1ZS5cbiAgICogQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZSB0byBlbWl0LlxuICAgKi9cbiAgZW1pdCh2YWx1ZT86IFQpIHtcbiAgICBzdXBlci5uZXh0KHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgaGFuZGxlcnMgZm9yIGV2ZW50cyBlbWl0dGVkIGJ5IHRoaXMgaW5zdGFuY2UuXG4gICAqIEBwYXJhbSBnZW5lcmF0b3JPck5leHQgV2hlbiBzdXBwbGllZCwgYSBjdXN0b20gaGFuZGxlciBmb3IgZW1pdHRlZCBldmVudHMuXG4gICAqIEBwYXJhbSBlcnJvciBXaGVuIHN1cHBsaWVkLCBhIGN1c3RvbSBoYW5kbGVyIGZvciBhbiBlcnJvciBub3RpZmljYXRpb25cbiAgICogZnJvbSB0aGlzIGVtaXR0ZXIuXG4gICAqIEBwYXJhbSBjb21wbGV0ZSBXaGVuIHN1cHBsaWVkLCBhIGN1c3RvbSBoYW5kbGVyIGZvciBhIGNvbXBsZXRpb25cbiAgICogbm90aWZpY2F0aW9uIGZyb20gdGhpcyBlbWl0dGVyLlxuICAgKi9cbiAgc3Vic2NyaWJlKGdlbmVyYXRvck9yTmV4dD86IGFueSwgZXJyb3I/OiBhbnksIGNvbXBsZXRlPzogYW55KTogU3Vic2NyaXB0aW9uIHtcbiAgICBsZXQgc2NoZWR1bGVyRm46ICh0OiBhbnkpID0+IGFueTtcbiAgICBsZXQgZXJyb3JGbiA9IChlcnI6IGFueSk6IGFueSA9PiBudWxsO1xuICAgIGxldCBjb21wbGV0ZUZuID0gKCk6IGFueSA9PiBudWxsO1xuXG4gICAgaWYgKGdlbmVyYXRvck9yTmV4dCAmJiB0eXBlb2YgZ2VuZXJhdG9yT3JOZXh0ID09PSAnb2JqZWN0Jykge1xuICAgICAgc2NoZWR1bGVyRm4gPSB0aGlzLl9faXNBc3luYyA/ICh2YWx1ZTogYW55KSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gZ2VuZXJhdG9yT3JOZXh0Lm5leHQodmFsdWUpKTtcbiAgICAgIH0gOiAodmFsdWU6IGFueSkgPT4ge1xuICAgICAgICBnZW5lcmF0b3JPck5leHQubmV4dCh2YWx1ZSk7XG4gICAgICB9O1xuXG4gICAgICBpZiAoZ2VuZXJhdG9yT3JOZXh0LmVycm9yKSB7XG4gICAgICAgIGVycm9yRm4gPSB0aGlzLl9faXNBc3luYyA/IChlcnIpID0+IHtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGdlbmVyYXRvck9yTmV4dC5lcnJvcihlcnIpKTtcbiAgICAgICAgfSA6IChlcnIpID0+IHtcbiAgICAgICAgICBnZW5lcmF0b3JPck5leHQuZXJyb3IoZXJyKTtcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgaWYgKGdlbmVyYXRvck9yTmV4dC5jb21wbGV0ZSkge1xuICAgICAgICBjb21wbGV0ZUZuID0gdGhpcy5fX2lzQXN5bmMgPyAoKSA9PiB7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBnZW5lcmF0b3JPck5leHQuY29tcGxldGUoKSk7XG4gICAgICAgIH0gOiAoKSA9PiB7XG4gICAgICAgICAgZ2VuZXJhdG9yT3JOZXh0LmNvbXBsZXRlKCk7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHNjaGVkdWxlckZuID0gdGhpcy5fX2lzQXN5bmMgPyAodmFsdWU6IGFueSkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGdlbmVyYXRvck9yTmV4dCh2YWx1ZSkpO1xuICAgICAgfSA6ICh2YWx1ZTogYW55KSA9PiB7XG4gICAgICAgIGdlbmVyYXRvck9yTmV4dCh2YWx1ZSk7XG4gICAgICB9O1xuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgZXJyb3JGbiA9IHRoaXMuX19pc0FzeW5jID8gKGVycikgPT4ge1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gZXJyb3IoZXJyKSk7XG4gICAgICAgIH0gOiAoZXJyKSA9PiB7XG4gICAgICAgICAgZXJyb3IoZXJyKTtcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbXBsZXRlKSB7XG4gICAgICAgIGNvbXBsZXRlRm4gPSB0aGlzLl9faXNBc3luYyA/ICgpID0+IHtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGNvbXBsZXRlKCkpO1xuICAgICAgICB9IDogKCkgPT4ge1xuICAgICAgICAgIGNvbXBsZXRlKCk7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc2luayA9IHN1cGVyLnN1YnNjcmliZShzY2hlZHVsZXJGbiwgZXJyb3JGbiwgY29tcGxldGVGbik7XG5cbiAgICBpZiAoZ2VuZXJhdG9yT3JOZXh0IGluc3RhbmNlb2YgU3Vic2NyaXB0aW9uKSB7XG4gICAgICBnZW5lcmF0b3JPck5leHQuYWRkKHNpbmspO1xuICAgIH1cblxuICAgIHJldHVybiBzaW5rO1xuICB9XG59XG4iXX0=