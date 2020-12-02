/**
 * @fileoverview added by tsickle
 * Generated from: packages/core/src/event_emitter.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/// <reference types="rxjs" />
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <reference types="rxjs" />
import { Subject, Subscription } from 'rxjs';
/**
 * Use in components with the `\@Output` directive to emit custom events
 * synchronously or asynchronously, and register handlers for those events
 * by subscribing to an instance.
 *
 * \@usageNotes
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
 * \@Component({
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
 * \@Output() open: EventEmitter<any> = new EventEmitter();
 * \@Output() close: EventEmitter<any> = new EventEmitter();
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
 * \@publicApi
 * @template T
 */
export class EventEmitter extends Subject {
    // tslint:disable-line
    /**
     * Creates an instance of this class that can
     * deliver events synchronously or asynchronously.
     *
     * @param {?=} isAsync When true, deliver events asynchronously.
     *
     */
    constructor(isAsync = false) {
        super();
        this.__isAsync = isAsync;
    }
    /**
     * Emits an event containing a given value.
     * @param {?=} value The value to emit.
     * @return {?}
     */
    emit(value) {
        super.next(value);
    }
    /**
     * Registers handlers for events emitted by this instance.
     * @param {?=} generatorOrNext When supplied, a custom handler for emitted events.
     * @param {?=} error When supplied, a custom handler for an error notification
     * from this emitter.
     * @param {?=} complete When supplied, a custom handler for a completion
     * notification from this emitter.
     * @return {?}
     */
    subscribe(generatorOrNext, error, complete) {
        /** @type {?} */
        let schedulerFn;
        /** @type {?} */
        let errorFn = (/**
         * @param {?} err
         * @return {?}
         */
        (err) => null);
        /** @type {?} */
        let completeFn = (/**
         * @return {?}
         */
        () => null);
        if (generatorOrNext && typeof generatorOrNext === 'object') {
            schedulerFn = this.__isAsync ? (/**
             * @param {?} value
             * @return {?}
             */
            (value) => {
                setTimeout((/**
                 * @return {?}
                 */
                () => generatorOrNext.next(value)));
            }) : (/**
             * @param {?} value
             * @return {?}
             */
            (value) => {
                generatorOrNext.next(value);
            });
            if (generatorOrNext.error) {
                errorFn = this.__isAsync ? (/**
                 * @param {?} err
                 * @return {?}
                 */
                (err) => {
                    setTimeout((/**
                     * @return {?}
                     */
                    () => generatorOrNext.error(err)));
                }) : (/**
                 * @param {?} err
                 * @return {?}
                 */
                (err) => {
                    generatorOrNext.error(err);
                });
            }
            if (generatorOrNext.complete) {
                completeFn = this.__isAsync ? (/**
                 * @return {?}
                 */
                () => {
                    setTimeout((/**
                     * @return {?}
                     */
                    () => generatorOrNext.complete()));
                }) : (/**
                 * @return {?}
                 */
                () => {
                    generatorOrNext.complete();
                });
            }
        }
        else {
            schedulerFn = this.__isAsync ? (/**
             * @param {?} value
             * @return {?}
             */
            (value) => {
                setTimeout((/**
                 * @return {?}
                 */
                () => generatorOrNext(value)));
            }) : (/**
             * @param {?} value
             * @return {?}
             */
            (value) => {
                generatorOrNext(value);
            });
            if (error) {
                errorFn = this.__isAsync ? (/**
                 * @param {?} err
                 * @return {?}
                 */
                (err) => {
                    setTimeout((/**
                     * @return {?}
                     */
                    () => error(err)));
                }) : (/**
                 * @param {?} err
                 * @return {?}
                 */
                (err) => {
                    error(err);
                });
            }
            if (complete) {
                completeFn = this.__isAsync ? (/**
                 * @return {?}
                 */
                () => {
                    setTimeout((/**
                     * @return {?}
                     */
                    () => complete()));
                }) : (/**
                 * @return {?}
                 */
                () => {
                    complete();
                });
            }
        }
        /** @type {?} */
        const sink = super.subscribe(schedulerFn, errorFn, completeFn);
        if (generatorOrNext instanceof Subscription) {
            generatorOrNext.add(sink);
        }
        return sink;
    }
}
if (false) {
    /**
     * \@internal
     * @type {?}
     */
    EventEmitter.prototype.__isAsync;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnRfZW1pdHRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL2V2ZW50X2VtaXR0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFRQSw4QkFBOEI7Ozs7Ozs7OztBQUU5QixPQUFPLEVBQUMsT0FBTyxFQUFFLFlBQVksRUFBQyxNQUFNLE1BQU0sQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxRDNDLE1BQU0sT0FBTyxZQUE0QixTQUFRLE9BQVU7Ozs7Ozs7OztJQWF6RCxZQUFZLFVBQW1CLEtBQUs7UUFDbEMsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztJQUMzQixDQUFDOzs7Ozs7SUFNRCxJQUFJLENBQUMsS0FBUztRQUNaLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEIsQ0FBQzs7Ozs7Ozs7OztJQVVELFNBQVMsQ0FBQyxlQUFxQixFQUFFLEtBQVcsRUFBRSxRQUFjOztZQUN0RCxXQUE0Qjs7WUFDNUIsT0FBTzs7OztRQUFHLENBQUMsR0FBUSxFQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUE7O1lBQ2pDLFVBQVU7OztRQUFHLEdBQVEsRUFBRSxDQUFDLElBQUksQ0FBQTtRQUVoQyxJQUFJLGVBQWUsSUFBSSxPQUFPLGVBQWUsS0FBSyxRQUFRLEVBQUU7WUFDMUQsV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQzs7OztZQUFDLENBQUMsS0FBVSxFQUFFLEVBQUU7Z0JBQzVDLFVBQVU7OztnQkFBQyxHQUFHLEVBQUUsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFDLENBQUM7WUFDaEQsQ0FBQyxFQUFDLENBQUM7Ozs7WUFBQyxDQUFDLEtBQVUsRUFBRSxFQUFFO2dCQUNqQixlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzlCLENBQUMsQ0FBQSxDQUFDO1lBRUYsSUFBSSxlQUFlLENBQUMsS0FBSyxFQUFFO2dCQUN6QixPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDOzs7O2dCQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7b0JBQ2pDLFVBQVU7OztvQkFBQyxHQUFHLEVBQUUsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUM7Z0JBQy9DLENBQUMsRUFBQyxDQUFDOzs7O2dCQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7b0JBQ1YsZUFBZSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDN0IsQ0FBQyxDQUFBLENBQUM7YUFDSDtZQUVELElBQUksZUFBZSxDQUFDLFFBQVEsRUFBRTtnQkFDNUIsVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQzs7O2dCQUFDLEdBQUcsRUFBRTtvQkFDakMsVUFBVTs7O29CQUFDLEdBQUcsRUFBRSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEVBQUUsRUFBQyxDQUFDO2dCQUMvQyxDQUFDLEVBQUMsQ0FBQzs7O2dCQUFDLEdBQUcsRUFBRTtvQkFDUCxlQUFlLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQzdCLENBQUMsQ0FBQSxDQUFDO2FBQ0g7U0FDRjthQUFNO1lBQ0wsV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQzs7OztZQUFDLENBQUMsS0FBVSxFQUFFLEVBQUU7Z0JBQzVDLFVBQVU7OztnQkFBQyxHQUFHLEVBQUUsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLEVBQUMsQ0FBQztZQUMzQyxDQUFDLEVBQUMsQ0FBQzs7OztZQUFDLENBQUMsS0FBVSxFQUFFLEVBQUU7Z0JBQ2pCLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN6QixDQUFDLENBQUEsQ0FBQztZQUVGLElBQUksS0FBSyxFQUFFO2dCQUNULE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7Ozs7Z0JBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtvQkFDakMsVUFBVTs7O29CQUFDLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDO2dCQUMvQixDQUFDLEVBQUMsQ0FBQzs7OztnQkFBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO29CQUNWLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDYixDQUFDLENBQUEsQ0FBQzthQUNIO1lBRUQsSUFBSSxRQUFRLEVBQUU7Z0JBQ1osVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQzs7O2dCQUFDLEdBQUcsRUFBRTtvQkFDakMsVUFBVTs7O29CQUFDLEdBQUcsRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUFDLENBQUM7Z0JBQy9CLENBQUMsRUFBQyxDQUFDOzs7Z0JBQUMsR0FBRyxFQUFFO29CQUNQLFFBQVEsRUFBRSxDQUFDO2dCQUNiLENBQUMsQ0FBQSxDQUFDO2FBQ0g7U0FDRjs7Y0FFSyxJQUFJLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsT0FBTyxFQUFFLFVBQVUsQ0FBQztRQUU5RCxJQUFJLGVBQWUsWUFBWSxZQUFZLEVBQUU7WUFDM0MsZUFBZSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMzQjtRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztDQUNGOzs7Ozs7SUF6RkMsaUNBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG4vLy8gPHJlZmVyZW5jZSB0eXBlcz1cInJ4anNcIiAvPlxuXG5pbXBvcnQge1N1YmplY3QsIFN1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XG5cbi8qKlxuICogVXNlIGluIGNvbXBvbmVudHMgd2l0aCB0aGUgYEBPdXRwdXRgIGRpcmVjdGl2ZSB0byBlbWl0IGN1c3RvbSBldmVudHNcbiAqIHN5bmNocm9ub3VzbHkgb3IgYXN5bmNocm9ub3VzbHksIGFuZCByZWdpc3RlciBoYW5kbGVycyBmb3IgdGhvc2UgZXZlbnRzXG4gKiBieSBzdWJzY3JpYmluZyB0byBhbiBpbnN0YW5jZS5cbiAqXG4gKiBAdXNhZ2VOb3Rlc1xuICpcbiAqIEV4dGVuZHNcbiAqIFtSeEpTIGBTdWJqZWN0YF0oaHR0cHM6Ly9yeGpzLmRldi9hcGkvaW5kZXgvY2xhc3MvU3ViamVjdClcbiAqIGZvciBBbmd1bGFyIGJ5IGFkZGluZyB0aGUgYGVtaXQoKWAgbWV0aG9kLlxuICpcbiAqIEluIHRoZSBmb2xsb3dpbmcgZXhhbXBsZSwgYSBjb21wb25lbnQgZGVmaW5lcyB0d28gb3V0cHV0IHByb3BlcnRpZXNcbiAqIHRoYXQgY3JlYXRlIGV2ZW50IGVtaXR0ZXJzLiBXaGVuIHRoZSB0aXRsZSBpcyBjbGlja2VkLCB0aGUgZW1pdHRlclxuICogZW1pdHMgYW4gb3BlbiBvciBjbG9zZSBldmVudCB0byB0b2dnbGUgdGhlIGN1cnJlbnQgdmlzaWJpbGl0eSBzdGF0ZS5cbiAqXG4gKiBgYGBodG1sXG4gKiBAQ29tcG9uZW50KHtcbiAqICAgc2VsZWN0b3I6ICd6aXBweScsXG4gKiAgIHRlbXBsYXRlOiBgXG4gKiAgIDxkaXYgY2xhc3M9XCJ6aXBweVwiPlxuICogICAgIDxkaXYgKGNsaWNrKT1cInRvZ2dsZSgpXCI+VG9nZ2xlPC9kaXY+XG4gKiAgICAgPGRpdiBbaGlkZGVuXT1cIiF2aXNpYmxlXCI+XG4gKiAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gKiAgICAgPC9kaXY+XG4gKiAgPC9kaXY+YH0pXG4gKiBleHBvcnQgY2xhc3MgWmlwcHkge1xuICogICB2aXNpYmxlOiBib29sZWFuID0gdHJ1ZTtcbiAqICAgQE91dHB1dCgpIG9wZW46IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICogICBAT3V0cHV0KCkgY2xvc2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICpcbiAqICAgdG9nZ2xlKCkge1xuICogICAgIHRoaXMudmlzaWJsZSA9ICF0aGlzLnZpc2libGU7XG4gKiAgICAgaWYgKHRoaXMudmlzaWJsZSkge1xuICogICAgICAgdGhpcy5vcGVuLmVtaXQobnVsbCk7XG4gKiAgICAgfSBlbHNlIHtcbiAqICAgICAgIHRoaXMuY2xvc2UuZW1pdChudWxsKTtcbiAqICAgICB9XG4gKiAgIH1cbiAqIH1cbiAqIGBgYFxuICpcbiAqIEFjY2VzcyB0aGUgZXZlbnQgb2JqZWN0IHdpdGggdGhlIGAkZXZlbnRgIGFyZ3VtZW50IHBhc3NlZCB0byB0aGUgb3V0cHV0IGV2ZW50XG4gKiBoYW5kbGVyOlxuICpcbiAqIGBgYGh0bWxcbiAqIDx6aXBweSAob3Blbik9XCJvbk9wZW4oJGV2ZW50KVwiIChjbG9zZSk9XCJvbkNsb3NlKCRldmVudClcIj48L3ppcHB5PlxuICogYGBgXG4gKlxuICogQHNlZSBbT2JzZXJ2YWJsZXMgaW4gQW5ndWxhcl0oZ3VpZGUvb2JzZXJ2YWJsZXMtaW4tYW5ndWxhcilcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGNsYXNzIEV2ZW50RW1pdHRlcjxUIGV4dGVuZHMgYW55PiBleHRlbmRzIFN1YmplY3Q8VD4ge1xuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICBfX2lzQXN5bmM6IGJvb2xlYW47ICAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyB0aGF0IGNhblxuICAgKiBkZWxpdmVyIGV2ZW50cyBzeW5jaHJvbm91c2x5IG9yIGFzeW5jaHJvbm91c2x5LlxuICAgKlxuICAgKiBAcGFyYW0gaXNBc3luYyBXaGVuIHRydWUsIGRlbGl2ZXIgZXZlbnRzIGFzeW5jaHJvbm91c2x5LlxuICAgKlxuICAgKi9cbiAgY29uc3RydWN0b3IoaXNBc3luYzogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9faXNBc3luYyA9IGlzQXN5bmM7XG4gIH1cblxuICAvKipcbiAgICogRW1pdHMgYW4gZXZlbnQgY29udGFpbmluZyBhIGdpdmVuIHZhbHVlLlxuICAgKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIHRvIGVtaXQuXG4gICAqL1xuICBlbWl0KHZhbHVlPzogVCkge1xuICAgIHN1cGVyLm5leHQodmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBoYW5kbGVycyBmb3IgZXZlbnRzIGVtaXR0ZWQgYnkgdGhpcyBpbnN0YW5jZS5cbiAgICogQHBhcmFtIGdlbmVyYXRvck9yTmV4dCBXaGVuIHN1cHBsaWVkLCBhIGN1c3RvbSBoYW5kbGVyIGZvciBlbWl0dGVkIGV2ZW50cy5cbiAgICogQHBhcmFtIGVycm9yIFdoZW4gc3VwcGxpZWQsIGEgY3VzdG9tIGhhbmRsZXIgZm9yIGFuIGVycm9yIG5vdGlmaWNhdGlvblxuICAgKiBmcm9tIHRoaXMgZW1pdHRlci5cbiAgICogQHBhcmFtIGNvbXBsZXRlIFdoZW4gc3VwcGxpZWQsIGEgY3VzdG9tIGhhbmRsZXIgZm9yIGEgY29tcGxldGlvblxuICAgKiBub3RpZmljYXRpb24gZnJvbSB0aGlzIGVtaXR0ZXIuXG4gICAqL1xuICBzdWJzY3JpYmUoZ2VuZXJhdG9yT3JOZXh0PzogYW55LCBlcnJvcj86IGFueSwgY29tcGxldGU/OiBhbnkpOiBTdWJzY3JpcHRpb24ge1xuICAgIGxldCBzY2hlZHVsZXJGbjogKHQ6IGFueSkgPT4gYW55O1xuICAgIGxldCBlcnJvckZuID0gKGVycjogYW55KTogYW55ID0+IG51bGw7XG4gICAgbGV0IGNvbXBsZXRlRm4gPSAoKTogYW55ID0+IG51bGw7XG5cbiAgICBpZiAoZ2VuZXJhdG9yT3JOZXh0ICYmIHR5cGVvZiBnZW5lcmF0b3JPck5leHQgPT09ICdvYmplY3QnKSB7XG4gICAgICBzY2hlZHVsZXJGbiA9IHRoaXMuX19pc0FzeW5jID8gKHZhbHVlOiBhbnkpID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBnZW5lcmF0b3JPck5leHQubmV4dCh2YWx1ZSkpO1xuICAgICAgfSA6ICh2YWx1ZTogYW55KSA9PiB7XG4gICAgICAgIGdlbmVyYXRvck9yTmV4dC5uZXh0KHZhbHVlKTtcbiAgICAgIH07XG5cbiAgICAgIGlmIChnZW5lcmF0b3JPck5leHQuZXJyb3IpIHtcbiAgICAgICAgZXJyb3JGbiA9IHRoaXMuX19pc0FzeW5jID8gKGVycikgPT4ge1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gZ2VuZXJhdG9yT3JOZXh0LmVycm9yKGVycikpO1xuICAgICAgICB9IDogKGVycikgPT4ge1xuICAgICAgICAgIGdlbmVyYXRvck9yTmV4dC5lcnJvcihlcnIpO1xuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBpZiAoZ2VuZXJhdG9yT3JOZXh0LmNvbXBsZXRlKSB7XG4gICAgICAgIGNvbXBsZXRlRm4gPSB0aGlzLl9faXNBc3luYyA/ICgpID0+IHtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGdlbmVyYXRvck9yTmV4dC5jb21wbGV0ZSgpKTtcbiAgICAgICAgfSA6ICgpID0+IHtcbiAgICAgICAgICBnZW5lcmF0b3JPck5leHQuY29tcGxldGUoKTtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc2NoZWR1bGVyRm4gPSB0aGlzLl9faXNBc3luYyA/ICh2YWx1ZTogYW55KSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gZ2VuZXJhdG9yT3JOZXh0KHZhbHVlKSk7XG4gICAgICB9IDogKHZhbHVlOiBhbnkpID0+IHtcbiAgICAgICAgZ2VuZXJhdG9yT3JOZXh0KHZhbHVlKTtcbiAgICAgIH07XG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBlcnJvckZuID0gdGhpcy5fX2lzQXN5bmMgPyAoZXJyKSA9PiB7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBlcnJvcihlcnIpKTtcbiAgICAgICAgfSA6IChlcnIpID0+IHtcbiAgICAgICAgICBlcnJvcihlcnIpO1xuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBpZiAoY29tcGxldGUpIHtcbiAgICAgICAgY29tcGxldGVGbiA9IHRoaXMuX19pc0FzeW5jID8gKCkgPT4ge1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gY29tcGxldGUoKSk7XG4gICAgICAgIH0gOiAoKSA9PiB7XG4gICAgICAgICAgY29tcGxldGUoKTtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzaW5rID0gc3VwZXIuc3Vic2NyaWJlKHNjaGVkdWxlckZuLCBlcnJvckZuLCBjb21wbGV0ZUZuKTtcblxuICAgIGlmIChnZW5lcmF0b3JPck5leHQgaW5zdGFuY2VvZiBTdWJzY3JpcHRpb24pIHtcbiAgICAgIGdlbmVyYXRvck9yTmV4dC5hZGQoc2luayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNpbms7XG4gIH1cbn1cbiJdfQ==