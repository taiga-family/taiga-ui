/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __decorate, __metadata } from "tslib";
import { ChangeDetectorRef, Pipe, WrappedValue, ɵisObservable, ɵisPromise, ɵlooseIdentical } from '@angular/core';
import { invalidPipeArgumentError } from './invalid_pipe_argument_error';
var ObservableStrategy = /** @class */ (function () {
    function ObservableStrategy() {
    }
    ObservableStrategy.prototype.createSubscription = function (async, updateLatestValue) {
        return async.subscribe({
            next: updateLatestValue,
            error: function (e) {
                throw e;
            }
        });
    };
    ObservableStrategy.prototype.dispose = function (subscription) {
        subscription.unsubscribe();
    };
    ObservableStrategy.prototype.onDestroy = function (subscription) {
        subscription.unsubscribe();
    };
    return ObservableStrategy;
}());
var PromiseStrategy = /** @class */ (function () {
    function PromiseStrategy() {
    }
    PromiseStrategy.prototype.createSubscription = function (async, updateLatestValue) {
        return async.then(updateLatestValue, function (e) {
            throw e;
        });
    };
    PromiseStrategy.prototype.dispose = function (subscription) { };
    PromiseStrategy.prototype.onDestroy = function (subscription) { };
    return PromiseStrategy;
}());
var _promiseStrategy = new PromiseStrategy();
var _observableStrategy = new ObservableStrategy();
/**
 * @ngModule CommonModule
 * @description
 *
 * Unwraps a value from an asynchronous primitive.
 *
 * The `async` pipe subscribes to an `Observable` or `Promise` and returns the latest value it has
 * emitted. When a new value is emitted, the `async` pipe marks the component to be checked for
 * changes. When the component gets destroyed, the `async` pipe unsubscribes automatically to avoid
 * potential memory leaks.
 *
 * @usageNotes
 *
 * ### Examples
 *
 * This example binds a `Promise` to the view. Clicking the `Resolve` button resolves the
 * promise.
 *
 * {@example common/pipes/ts/async_pipe.ts region='AsyncPipePromise'}
 *
 * It's also possible to use `async` with Observables. The example below binds the `time` Observable
 * to the view. The Observable continuously updates the view with the current time.
 *
 * {@example common/pipes/ts/async_pipe.ts region='AsyncPipeObservable'}
 *
 * @publicApi
 */
var AsyncPipe = /** @class */ (function () {
    function AsyncPipe(_ref) {
        this._ref = _ref;
        this._latestValue = null;
        this._latestReturnedValue = null;
        this._subscription = null;
        this._obj = null;
        this._strategy = null;
    }
    AsyncPipe_1 = AsyncPipe;
    AsyncPipe.prototype.ngOnDestroy = function () {
        if (this._subscription) {
            this._dispose();
        }
    };
    AsyncPipe.prototype.transform = function (obj) {
        if (!this._obj) {
            if (obj) {
                this._subscribe(obj);
            }
            this._latestReturnedValue = this._latestValue;
            return this._latestValue;
        }
        if (obj !== this._obj) {
            this._dispose();
            return this.transform(obj);
        }
        if (ɵlooseIdentical(this._latestValue, this._latestReturnedValue)) {
            return this._latestReturnedValue;
        }
        this._latestReturnedValue = this._latestValue;
        return WrappedValue.wrap(this._latestValue);
    };
    AsyncPipe.prototype._subscribe = function (obj) {
        var _this = this;
        this._obj = obj;
        this._strategy = this._selectStrategy(obj);
        this._subscription = this._strategy.createSubscription(obj, function (value) { return _this._updateLatestValue(obj, value); });
    };
    AsyncPipe.prototype._selectStrategy = function (obj) {
        if (ɵisPromise(obj)) {
            return _promiseStrategy;
        }
        if (ɵisObservable(obj)) {
            return _observableStrategy;
        }
        throw invalidPipeArgumentError(AsyncPipe_1, obj);
    };
    AsyncPipe.prototype._dispose = function () {
        this._strategy.dispose(this._subscription);
        this._latestValue = null;
        this._latestReturnedValue = null;
        this._subscription = null;
        this._obj = null;
    };
    AsyncPipe.prototype._updateLatestValue = function (async, value) {
        if (async === this._obj) {
            this._latestValue = value;
            this._ref.markForCheck();
        }
    };
    var AsyncPipe_1;
    AsyncPipe = AsyncPipe_1 = __decorate([
        Pipe({ name: 'async', pure: false }),
        __metadata("design:paramtypes", [ChangeDetectorRef])
    ], AsyncPipe);
    return AsyncPipe;
}());
export { AsyncPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXN5bmNfcGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbW1vbi9zcmMvcGlwZXMvYXN5bmNfcGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7O0FBRUgsT0FBTyxFQUFDLGlCQUFpQixFQUEyQixJQUFJLEVBQWlCLFlBQVksRUFBRSxhQUFhLEVBQUUsVUFBVSxFQUFFLGVBQWUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV4SixPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSwrQkFBK0IsQ0FBQztBQVN2RTtJQUFBO0lBaUJBLENBQUM7SUFoQkMsK0NBQWtCLEdBQWxCLFVBQW1CLEtBQXNCLEVBQUUsaUJBQXNCO1FBQy9ELE9BQU8sS0FBSyxDQUFDLFNBQVMsQ0FBQztZQUNyQixJQUFJLEVBQUUsaUJBQWlCO1lBQ3ZCLEtBQUssRUFBRSxVQUFDLENBQU07Z0JBQ1osTUFBTSxDQUFDLENBQUM7WUFDVixDQUFDO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELG9DQUFPLEdBQVAsVUFBUSxZQUE4QjtRQUNwQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVELHNDQUFTLEdBQVQsVUFBVSxZQUE4QjtRQUN0QyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUNILHlCQUFDO0FBQUQsQ0FBQyxBQWpCRCxJQWlCQztBQUVEO0lBQUE7SUFVQSxDQUFDO0lBVEMsNENBQWtCLEdBQWxCLFVBQW1CLEtBQW1CLEVBQUUsaUJBQWtDO1FBQ3hFLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxVQUFBLENBQUM7WUFDcEMsTUFBTSxDQUFDLENBQUM7UUFDVixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxpQ0FBTyxHQUFQLFVBQVEsWUFBMEIsSUFBUyxDQUFDO0lBRTVDLG1DQUFTLEdBQVQsVUFBVSxZQUEwQixJQUFTLENBQUM7SUFDaEQsc0JBQUM7QUFBRCxDQUFDLEFBVkQsSUFVQztBQUVELElBQU0sZ0JBQWdCLEdBQUcsSUFBSSxlQUFlLEVBQUUsQ0FBQztBQUMvQyxJQUFNLG1CQUFtQixHQUFHLElBQUksa0JBQWtCLEVBQUUsQ0FBQztBQUVyRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0EwQkc7QUFFSDtJQVFFLG1CQUFvQixJQUF1QjtRQUF2QixTQUFJLEdBQUosSUFBSSxDQUFtQjtRQVBuQyxpQkFBWSxHQUFRLElBQUksQ0FBQztRQUN6Qix5QkFBb0IsR0FBUSxJQUFJLENBQUM7UUFFakMsa0JBQWEsR0FBdUMsSUFBSSxDQUFDO1FBQ3pELFNBQUksR0FBd0QsSUFBSSxDQUFDO1FBQ2pFLGNBQVMsR0FBeUIsSUFBSyxDQUFDO0lBRUYsQ0FBQztrQkFScEMsU0FBUztJQVVwQiwrQkFBVyxHQUFYO1FBQ0UsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNqQjtJQUNILENBQUM7SUFNRCw2QkFBUyxHQUFULFVBQVUsR0FBZ0Q7UUFDeEQsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDZCxJQUFJLEdBQUcsRUFBRTtnQkFDUCxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ3RCO1lBQ0QsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDOUMsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO1NBQzFCO1FBRUQsSUFBSSxHQUFHLEtBQUssSUFBSSxDQUFDLElBQUksRUFBRTtZQUNyQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDaEIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQVUsQ0FBQyxDQUFDO1NBQ25DO1FBRUQsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsRUFBRTtZQUNqRSxPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztTQUNsQztRQUVELElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzlDLE9BQU8sWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVPLDhCQUFVLEdBQWxCLFVBQW1CLEdBQW1EO1FBQXRFLGlCQUtDO1FBSkMsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7UUFDaEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FDbEQsR0FBRyxFQUFFLFVBQUMsS0FBYSxJQUFLLE9BQUEsS0FBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsRUFBbkMsQ0FBbUMsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFFTyxtQ0FBZSxHQUF2QixVQUF3QixHQUFtRDtRQUN6RSxJQUFJLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNuQixPQUFPLGdCQUFnQixDQUFDO1NBQ3pCO1FBRUQsSUFBSSxhQUFhLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDdEIsT0FBTyxtQkFBbUIsQ0FBQztTQUM1QjtRQUVELE1BQU0sd0JBQXdCLENBQUMsV0FBUyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFTyw0QkFBUSxHQUFoQjtRQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFjLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUN6QixJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBQzFCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFFTyxzQ0FBa0IsR0FBMUIsVUFBMkIsS0FBVSxFQUFFLEtBQWE7UUFDbEQsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLElBQUksRUFBRTtZQUN2QixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztZQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQzFCO0lBQ0gsQ0FBQzs7SUExRVUsU0FBUztRQURyQixJQUFJLENBQUMsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUMsQ0FBQzt5Q0FTUCxpQkFBaUI7T0FSaEMsU0FBUyxDQTJFckI7SUFBRCxnQkFBQztDQUFBLEFBM0VELElBMkVDO1NBM0VZLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7Q2hhbmdlRGV0ZWN0b3JSZWYsIEV2ZW50RW1pdHRlciwgT25EZXN0cm95LCBQaXBlLCBQaXBlVHJhbnNmb3JtLCBXcmFwcGVkVmFsdWUsIMm1aXNPYnNlcnZhYmxlLCDJtWlzUHJvbWlzZSwgybVsb29zZUlkZW50aWNhbH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge09ic2VydmFibGUsIFN1YnNjcmlwdGlvbkxpa2V9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtpbnZhbGlkUGlwZUFyZ3VtZW50RXJyb3J9IGZyb20gJy4vaW52YWxpZF9waXBlX2FyZ3VtZW50X2Vycm9yJztcblxuaW50ZXJmYWNlIFN1YnNjcmlwdGlvblN0cmF0ZWd5IHtcbiAgY3JlYXRlU3Vic2NyaXB0aW9uKGFzeW5jOiBPYnNlcnZhYmxlPGFueT58UHJvbWlzZTxhbnk+LCB1cGRhdGVMYXRlc3RWYWx1ZTogYW55KTogU3Vic2NyaXB0aW9uTGlrZVxuICAgICAgfFByb21pc2U8YW55PjtcbiAgZGlzcG9zZShzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbkxpa2V8UHJvbWlzZTxhbnk+KTogdm9pZDtcbiAgb25EZXN0cm95KHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uTGlrZXxQcm9taXNlPGFueT4pOiB2b2lkO1xufVxuXG5jbGFzcyBPYnNlcnZhYmxlU3RyYXRlZ3kgaW1wbGVtZW50cyBTdWJzY3JpcHRpb25TdHJhdGVneSB7XG4gIGNyZWF0ZVN1YnNjcmlwdGlvbihhc3luYzogT2JzZXJ2YWJsZTxhbnk+LCB1cGRhdGVMYXRlc3RWYWx1ZTogYW55KTogU3Vic2NyaXB0aW9uTGlrZSB7XG4gICAgcmV0dXJuIGFzeW5jLnN1YnNjcmliZSh7XG4gICAgICBuZXh0OiB1cGRhdGVMYXRlc3RWYWx1ZSxcbiAgICAgIGVycm9yOiAoZTogYW55KSA9PiB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBkaXNwb3NlKHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uTGlrZSk6IHZvaWQge1xuICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgb25EZXN0cm95KHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uTGlrZSk6IHZvaWQge1xuICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG59XG5cbmNsYXNzIFByb21pc2VTdHJhdGVneSBpbXBsZW1lbnRzIFN1YnNjcmlwdGlvblN0cmF0ZWd5IHtcbiAgY3JlYXRlU3Vic2NyaXB0aW9uKGFzeW5jOiBQcm9taXNlPGFueT4sIHVwZGF0ZUxhdGVzdFZhbHVlOiAodjogYW55KSA9PiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBhc3luYy50aGVuKHVwZGF0ZUxhdGVzdFZhbHVlLCBlID0+IHtcbiAgICAgIHRocm93IGU7XG4gICAgfSk7XG4gIH1cblxuICBkaXNwb3NlKHN1YnNjcmlwdGlvbjogUHJvbWlzZTxhbnk+KTogdm9pZCB7fVxuXG4gIG9uRGVzdHJveShzdWJzY3JpcHRpb246IFByb21pc2U8YW55Pik6IHZvaWQge31cbn1cblxuY29uc3QgX3Byb21pc2VTdHJhdGVneSA9IG5ldyBQcm9taXNlU3RyYXRlZ3koKTtcbmNvbnN0IF9vYnNlcnZhYmxlU3RyYXRlZ3kgPSBuZXcgT2JzZXJ2YWJsZVN0cmF0ZWd5KCk7XG5cbi8qKlxuICogQG5nTW9kdWxlIENvbW1vbk1vZHVsZVxuICogQGRlc2NyaXB0aW9uXG4gKlxuICogVW53cmFwcyBhIHZhbHVlIGZyb20gYW4gYXN5bmNocm9ub3VzIHByaW1pdGl2ZS5cbiAqXG4gKiBUaGUgYGFzeW5jYCBwaXBlIHN1YnNjcmliZXMgdG8gYW4gYE9ic2VydmFibGVgIG9yIGBQcm9taXNlYCBhbmQgcmV0dXJucyB0aGUgbGF0ZXN0IHZhbHVlIGl0IGhhc1xuICogZW1pdHRlZC4gV2hlbiBhIG5ldyB2YWx1ZSBpcyBlbWl0dGVkLCB0aGUgYGFzeW5jYCBwaXBlIG1hcmtzIHRoZSBjb21wb25lbnQgdG8gYmUgY2hlY2tlZCBmb3JcbiAqIGNoYW5nZXMuIFdoZW4gdGhlIGNvbXBvbmVudCBnZXRzIGRlc3Ryb3llZCwgdGhlIGBhc3luY2AgcGlwZSB1bnN1YnNjcmliZXMgYXV0b21hdGljYWxseSB0byBhdm9pZFxuICogcG90ZW50aWFsIG1lbW9yeSBsZWFrcy5cbiAqXG4gKiBAdXNhZ2VOb3Rlc1xuICpcbiAqICMjIyBFeGFtcGxlc1xuICpcbiAqIFRoaXMgZXhhbXBsZSBiaW5kcyBhIGBQcm9taXNlYCB0byB0aGUgdmlldy4gQ2xpY2tpbmcgdGhlIGBSZXNvbHZlYCBidXR0b24gcmVzb2x2ZXMgdGhlXG4gKiBwcm9taXNlLlxuICpcbiAqIHtAZXhhbXBsZSBjb21tb24vcGlwZXMvdHMvYXN5bmNfcGlwZS50cyByZWdpb249J0FzeW5jUGlwZVByb21pc2UnfVxuICpcbiAqIEl0J3MgYWxzbyBwb3NzaWJsZSB0byB1c2UgYGFzeW5jYCB3aXRoIE9ic2VydmFibGVzLiBUaGUgZXhhbXBsZSBiZWxvdyBiaW5kcyB0aGUgYHRpbWVgIE9ic2VydmFibGVcbiAqIHRvIHRoZSB2aWV3LiBUaGUgT2JzZXJ2YWJsZSBjb250aW51b3VzbHkgdXBkYXRlcyB0aGUgdmlldyB3aXRoIHRoZSBjdXJyZW50IHRpbWUuXG4gKlxuICoge0BleGFtcGxlIGNvbW1vbi9waXBlcy90cy9hc3luY19waXBlLnRzIHJlZ2lvbj0nQXN5bmNQaXBlT2JzZXJ2YWJsZSd9XG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5AUGlwZSh7bmFtZTogJ2FzeW5jJywgcHVyZTogZmFsc2V9KVxuZXhwb3J0IGNsYXNzIEFzeW5jUGlwZSBpbXBsZW1lbnRzIE9uRGVzdHJveSwgUGlwZVRyYW5zZm9ybSB7XG4gIHByaXZhdGUgX2xhdGVzdFZhbHVlOiBhbnkgPSBudWxsO1xuICBwcml2YXRlIF9sYXRlc3RSZXR1cm5lZFZhbHVlOiBhbnkgPSBudWxsO1xuXG4gIHByaXZhdGUgX3N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uTGlrZXxQcm9taXNlPGFueT58bnVsbCA9IG51bGw7XG4gIHByaXZhdGUgX29iajogT2JzZXJ2YWJsZTxhbnk+fFByb21pc2U8YW55PnxFdmVudEVtaXR0ZXI8YW55PnxudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBfc3RyYXRlZ3k6IFN1YnNjcmlwdGlvblN0cmF0ZWd5ID0gbnVsbCE7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fc3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLl9kaXNwb3NlKCk7XG4gICAgfVxuICB9XG5cbiAgdHJhbnNmb3JtPFQ+KG9iajogbnVsbCk6IG51bGw7XG4gIHRyYW5zZm9ybTxUPihvYmo6IHVuZGVmaW5lZCk6IHVuZGVmaW5lZDtcbiAgdHJhbnNmb3JtPFQ+KG9iajogT2JzZXJ2YWJsZTxUPnxudWxsfHVuZGVmaW5lZCk6IFR8bnVsbDtcbiAgdHJhbnNmb3JtPFQ+KG9iajogUHJvbWlzZTxUPnxudWxsfHVuZGVmaW5lZCk6IFR8bnVsbDtcbiAgdHJhbnNmb3JtKG9iajogT2JzZXJ2YWJsZTxhbnk+fFByb21pc2U8YW55PnxudWxsfHVuZGVmaW5lZCk6IGFueSB7XG4gICAgaWYgKCF0aGlzLl9vYmopIHtcbiAgICAgIGlmIChvYmopIHtcbiAgICAgICAgdGhpcy5fc3Vic2NyaWJlKG9iaik7XG4gICAgICB9XG4gICAgICB0aGlzLl9sYXRlc3RSZXR1cm5lZFZhbHVlID0gdGhpcy5fbGF0ZXN0VmFsdWU7XG4gICAgICByZXR1cm4gdGhpcy5fbGF0ZXN0VmFsdWU7XG4gICAgfVxuXG4gICAgaWYgKG9iaiAhPT0gdGhpcy5fb2JqKSB7XG4gICAgICB0aGlzLl9kaXNwb3NlKCk7XG4gICAgICByZXR1cm4gdGhpcy50cmFuc2Zvcm0ob2JqIGFzIGFueSk7XG4gICAgfVxuXG4gICAgaWYgKMm1bG9vc2VJZGVudGljYWwodGhpcy5fbGF0ZXN0VmFsdWUsIHRoaXMuX2xhdGVzdFJldHVybmVkVmFsdWUpKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbGF0ZXN0UmV0dXJuZWRWYWx1ZTtcbiAgICB9XG5cbiAgICB0aGlzLl9sYXRlc3RSZXR1cm5lZFZhbHVlID0gdGhpcy5fbGF0ZXN0VmFsdWU7XG4gICAgcmV0dXJuIFdyYXBwZWRWYWx1ZS53cmFwKHRoaXMuX2xhdGVzdFZhbHVlKTtcbiAgfVxuXG4gIHByaXZhdGUgX3N1YnNjcmliZShvYmo6IE9ic2VydmFibGU8YW55PnxQcm9taXNlPGFueT58RXZlbnRFbWl0dGVyPGFueT4pOiB2b2lkIHtcbiAgICB0aGlzLl9vYmogPSBvYmo7XG4gICAgdGhpcy5fc3RyYXRlZ3kgPSB0aGlzLl9zZWxlY3RTdHJhdGVneShvYmopO1xuICAgIHRoaXMuX3N1YnNjcmlwdGlvbiA9IHRoaXMuX3N0cmF0ZWd5LmNyZWF0ZVN1YnNjcmlwdGlvbihcbiAgICAgICAgb2JqLCAodmFsdWU6IE9iamVjdCkgPT4gdGhpcy5fdXBkYXRlTGF0ZXN0VmFsdWUob2JqLCB2YWx1ZSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2VsZWN0U3RyYXRlZ3kob2JqOiBPYnNlcnZhYmxlPGFueT58UHJvbWlzZTxhbnk+fEV2ZW50RW1pdHRlcjxhbnk+KTogYW55IHtcbiAgICBpZiAoybVpc1Byb21pc2Uob2JqKSkge1xuICAgICAgcmV0dXJuIF9wcm9taXNlU3RyYXRlZ3k7XG4gICAgfVxuXG4gICAgaWYgKMm1aXNPYnNlcnZhYmxlKG9iaikpIHtcbiAgICAgIHJldHVybiBfb2JzZXJ2YWJsZVN0cmF0ZWd5O1xuICAgIH1cblxuICAgIHRocm93IGludmFsaWRQaXBlQXJndW1lbnRFcnJvcihBc3luY1BpcGUsIG9iaik7XG4gIH1cblxuICBwcml2YXRlIF9kaXNwb3NlKCk6IHZvaWQge1xuICAgIHRoaXMuX3N0cmF0ZWd5LmRpc3Bvc2UodGhpcy5fc3Vic2NyaXB0aW9uISk7XG4gICAgdGhpcy5fbGF0ZXN0VmFsdWUgPSBudWxsO1xuICAgIHRoaXMuX2xhdGVzdFJldHVybmVkVmFsdWUgPSBudWxsO1xuICAgIHRoaXMuX3N1YnNjcmlwdGlvbiA9IG51bGw7XG4gICAgdGhpcy5fb2JqID0gbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZUxhdGVzdFZhbHVlKGFzeW5jOiBhbnksIHZhbHVlOiBPYmplY3QpOiB2b2lkIHtcbiAgICBpZiAoYXN5bmMgPT09IHRoaXMuX29iaikge1xuICAgICAgdGhpcy5fbGF0ZXN0VmFsdWUgPSB2YWx1ZTtcbiAgICAgIHRoaXMuX3JlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==