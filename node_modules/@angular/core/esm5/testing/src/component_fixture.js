/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { getDebugNode, RendererFactory2 } from '@angular/core';
/**
 * Fixture for debugging and testing a component.
 *
 * @publicApi
 */
var ComponentFixture = /** @class */ (function () {
    function ComponentFixture(componentRef, ngZone, _autoDetect) {
        var _this = this;
        this.componentRef = componentRef;
        this.ngZone = ngZone;
        this._autoDetect = _autoDetect;
        this._isStable = true;
        this._isDestroyed = false;
        this._resolve = null;
        this._promise = null;
        this._onUnstableSubscription = null;
        this._onStableSubscription = null;
        this._onMicrotaskEmptySubscription = null;
        this._onErrorSubscription = null;
        this.changeDetectorRef = componentRef.changeDetectorRef;
        this.elementRef = componentRef.location;
        this.debugElement = getDebugNode(this.elementRef.nativeElement);
        this.componentInstance = componentRef.instance;
        this.nativeElement = this.elementRef.nativeElement;
        this.componentRef = componentRef;
        this.ngZone = ngZone;
        if (ngZone) {
            // Create subscriptions outside the NgZone so that the callbacks run oustide
            // of NgZone.
            ngZone.runOutsideAngular(function () {
                _this._onUnstableSubscription = ngZone.onUnstable.subscribe({
                    next: function () {
                        _this._isStable = false;
                    }
                });
                _this._onMicrotaskEmptySubscription = ngZone.onMicrotaskEmpty.subscribe({
                    next: function () {
                        if (_this._autoDetect) {
                            // Do a change detection run with checkNoChanges set to true to check
                            // there are no changes on the second run.
                            _this.detectChanges(true);
                        }
                    }
                });
                _this._onStableSubscription = ngZone.onStable.subscribe({
                    next: function () {
                        _this._isStable = true;
                        // Check whether there is a pending whenStable() completer to resolve.
                        if (_this._promise !== null) {
                            // If so check whether there are no pending macrotasks before resolving.
                            // Do this check in the next tick so that ngZone gets a chance to update the state of
                            // pending macrotasks.
                            scheduleMicroTask(function () {
                                if (!ngZone.hasPendingMacrotasks) {
                                    if (_this._promise !== null) {
                                        _this._resolve(true);
                                        _this._resolve = null;
                                        _this._promise = null;
                                    }
                                }
                            });
                        }
                    }
                });
                _this._onErrorSubscription = ngZone.onError.subscribe({
                    next: function (error) {
                        throw error;
                    }
                });
            });
        }
    }
    ComponentFixture.prototype._tick = function (checkNoChanges) {
        this.changeDetectorRef.detectChanges();
        if (checkNoChanges) {
            this.checkNoChanges();
        }
    };
    /**
     * Trigger a change detection cycle for the component.
     */
    ComponentFixture.prototype.detectChanges = function (checkNoChanges) {
        var _this = this;
        if (checkNoChanges === void 0) { checkNoChanges = true; }
        if (this.ngZone != null) {
            // Run the change detection inside the NgZone so that any async tasks as part of the change
            // detection are captured by the zone and can be waited for in isStable.
            this.ngZone.run(function () {
                _this._tick(checkNoChanges);
            });
        }
        else {
            // Running without zone. Just do the change detection.
            this._tick(checkNoChanges);
        }
    };
    /**
     * Do a change detection run to make sure there were no changes.
     */
    ComponentFixture.prototype.checkNoChanges = function () {
        this.changeDetectorRef.checkNoChanges();
    };
    /**
     * Set whether the fixture should autodetect changes.
     *
     * Also runs detectChanges once so that any existing change is detected.
     */
    ComponentFixture.prototype.autoDetectChanges = function (autoDetect) {
        if (autoDetect === void 0) { autoDetect = true; }
        if (this.ngZone == null) {
            throw new Error('Cannot call autoDetectChanges when ComponentFixtureNoNgZone is set');
        }
        this._autoDetect = autoDetect;
        this.detectChanges();
    };
    /**
     * Return whether the fixture is currently stable or has async tasks that have not been completed
     * yet.
     */
    ComponentFixture.prototype.isStable = function () {
        return this._isStable && !this.ngZone.hasPendingMacrotasks;
    };
    /**
     * Get a promise that resolves when the fixture is stable.
     *
     * This can be used to resume testing after events have triggered asynchronous activity or
     * asynchronous change detection.
     */
    ComponentFixture.prototype.whenStable = function () {
        var _this = this;
        if (this.isStable()) {
            return Promise.resolve(false);
        }
        else if (this._promise !== null) {
            return this._promise;
        }
        else {
            this._promise = new Promise(function (res) {
                _this._resolve = res;
            });
            return this._promise;
        }
    };
    ComponentFixture.prototype._getRenderer = function () {
        if (this._renderer === undefined) {
            this._renderer = this.componentRef.injector.get(RendererFactory2, null);
        }
        return this._renderer;
    };
    /**
     * Get a promise that resolves when the ui state is stable following animations.
     */
    ComponentFixture.prototype.whenRenderingDone = function () {
        var renderer = this._getRenderer();
        if (renderer && renderer.whenRenderingDone) {
            return renderer.whenRenderingDone();
        }
        return this.whenStable();
    };
    /**
     * Trigger component destruction.
     */
    ComponentFixture.prototype.destroy = function () {
        if (!this._isDestroyed) {
            this.componentRef.destroy();
            if (this._onUnstableSubscription != null) {
                this._onUnstableSubscription.unsubscribe();
                this._onUnstableSubscription = null;
            }
            if (this._onStableSubscription != null) {
                this._onStableSubscription.unsubscribe();
                this._onStableSubscription = null;
            }
            if (this._onMicrotaskEmptySubscription != null) {
                this._onMicrotaskEmptySubscription.unsubscribe();
                this._onMicrotaskEmptySubscription = null;
            }
            if (this._onErrorSubscription != null) {
                this._onErrorSubscription.unsubscribe();
                this._onErrorSubscription = null;
            }
            this._isDestroyed = true;
        }
    };
    return ComponentFixture;
}());
export { ComponentFixture };
function scheduleMicroTask(fn) {
    Zone.current.scheduleMicroTask('scheduleMicrotask', fn);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50X2ZpeHR1cmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3Rlc3Rpbmcvc3JjL2NvbXBvbmVudF9maXh0dXJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBNEQsWUFBWSxFQUFVLGdCQUFnQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBR2hJOzs7O0dBSUc7QUFDSDtJQW9DRSwwQkFDVyxZQUE2QixFQUFTLE1BQW1CLEVBQ3hELFdBQW9CO1FBRmhDLGlCQXlEQztRQXhEVSxpQkFBWSxHQUFaLFlBQVksQ0FBaUI7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFhO1FBQ3hELGdCQUFXLEdBQVgsV0FBVyxDQUFTO1FBWHhCLGNBQVMsR0FBWSxJQUFJLENBQUM7UUFDMUIsaUJBQVksR0FBWSxLQUFLLENBQUM7UUFDOUIsYUFBUSxHQUFpQyxJQUFJLENBQUM7UUFDOUMsYUFBUSxHQUFzQixJQUFJLENBQUM7UUFDbkMsNEJBQXVCLEdBQTBCLElBQUksQ0FBQztRQUN0RCwwQkFBcUIsR0FBMEIsSUFBSSxDQUFDO1FBQ3BELGtDQUE2QixHQUEwQixJQUFJLENBQUM7UUFDNUQseUJBQW9CLEdBQTBCLElBQUksQ0FBQztRQUt6RCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsWUFBWSxDQUFDLGlCQUFpQixDQUFDO1FBQ3hELElBQUksQ0FBQyxVQUFVLEdBQUcsWUFBWSxDQUFDLFFBQVEsQ0FBQztRQUN4QyxJQUFJLENBQUMsWUFBWSxHQUFpQixZQUFZLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM5RSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsWUFBWSxDQUFDLFFBQVEsQ0FBQztRQUMvQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO1FBQ25ELElB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RCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0NoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnRSZWYsIERlYnVnRWxlbWVudCwgRWxlbWVudFJlZiwgZ2V0RGVidWdOb2RlLCBOZ1pvbmUsIFJlbmRlcmVyRmFjdG9yeTJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5cbi8qKlxuICogRml4dHVyZSBmb3IgZGVidWdnaW5nIGFuZCB0ZXN0aW5nIGEgY29tcG9uZW50LlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGNsYXNzIENvbXBvbmVudEZpeHR1cmU8VD4ge1xuICAvKipcbiAgICogVGhlIERlYnVnRWxlbWVudCBhc3NvY2lhdGVkIHdpdGggdGhlIHJvb3QgZWxlbWVudCBvZiB0aGlzIGNvbXBvbmVudC5cbiAgICovXG4gIGRlYnVnRWxlbWVudDogRGVidWdFbGVtZW50O1xuXG4gIC8qKlxuICAgKiBUaGUgaW5zdGFuY2Ugb2YgdGhlIHJvb3QgY29tcG9uZW50IGNsYXNzLlxuICAgKi9cbiAgY29tcG9uZW50SW5zdGFuY2U6IFQ7XG5cbiAgLyoqXG4gICAqIFRoZSBuYXRpdmUgZWxlbWVudCBhdCB0aGUgcm9vdCBvZiB0aGUgY29tcG9uZW50LlxuICAgKi9cbiAgbmF0aXZlRWxlbWVudDogYW55O1xuXG4gIC8qKlxuICAgKiBUaGUgRWxlbWVudFJlZiBmb3IgdGhlIGVsZW1lbnQgYXQgdGhlIHJvb3Qgb2YgdGhlIGNvbXBvbmVudC5cbiAgICovXG4gIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG5cbiAgLyoqXG4gICAqIFRoZSBDaGFuZ2VEZXRlY3RvclJlZiBmb3IgdGhlIGNvbXBvbmVudFxuICAgKi9cbiAgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmO1xuXG4gIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlckZhY3RvcnkyfG51bGx8dW5kZWZpbmVkO1xuICBwcml2YXRlIF9pc1N0YWJsZTogYm9vbGVhbiA9IHRydWU7XG4gIHByaXZhdGUgX2lzRGVzdHJveWVkOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX3Jlc29sdmU6ICgocmVzdWx0OiBhbnkpID0+IHZvaWQpfG51bGwgPSBudWxsO1xuICBwcml2YXRlIF9wcm9taXNlOiBQcm9taXNlPGFueT58bnVsbCA9IG51bGw7XG4gIHByaXZhdGUgX29uVW5zdGFibGVTdWJzY3JpcHRpb246IGFueSAvKiogVE9ETyAjOTEwMCAqLyA9IG51bGw7XG4gIHByaXZhdGUgX29uU3RhYmxlU3Vic2NyaXB0aW9uOiBhbnkgLyoqIFRPRE8gIzkxMDAgKi8gPSBudWxsO1xuICBwcml2YXRlIF9vbk1pY3JvdGFza0VtcHR5U3Vic2NyaXB0aW9uOiBhbnkgLyoqIFRPRE8gIzkxMDAgKi8gPSBudWxsO1xuICBwcml2YXRlIF9vbkVycm9yU3Vic2NyaXB0aW9uOiBhbnkgLyoqIFRPRE8gIzkxMDAgKi8gPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHVibGljIGNvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPFQ+LCBwdWJsaWMgbmdab25lOiBOZ1pvbmV8bnVsbCxcbiAgICAgIHByaXZhdGUgX2F1dG9EZXRlY3Q6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmID0gY29tcG9uZW50UmVmLmNoYW5nZURldGVjdG9yUmVmO1xuICAgIHRoaXMuZWxlbWVudFJlZiA9IGNvbXBvbmVudFJlZi5sb2NhdGlvbjtcbiAgICB0aGlzLmRlYnVnRWxlbWVudCA9IDxEZWJ1Z0VsZW1lbnQ+Z2V0RGVidWdOb2RlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcbiAgICB0aGlzLmNvbXBvbmVudEluc3RhbmNlID0gY29tcG9uZW50UmVmLmluc3RhbmNlO1xuICAgIHRoaXMubmF0aXZlRWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMuY29tcG9uZW50UmVmID0gY29tcG9uZW50UmVmO1xuICAgIHRoaXMubmdab25lID0gbmdab25lO1xuXG4gICAgaWYgKG5nWm9uZSkge1xuICAgICAgLy8gQ3JlYXRlIHN1YnNjcmlwdGlvbnMgb3V0c2lkZSB0aGUgTmdab25lIHNvIHRoYXQgdGhlIGNhbGxiYWNrcyBydW4gb3VzdGlkZVxuICAgICAgLy8gb2YgTmdab25lLlxuICAgICAgbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgdGhpcy5fb25VbnN0YWJsZVN1YnNjcmlwdGlvbiA9IG5nWm9uZS5vblVuc3RhYmxlLnN1YnNjcmliZSh7XG4gICAgICAgICAgbmV4dDogKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5faXNTdGFibGUgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9vbk1pY3JvdGFza0VtcHR5U3Vic2NyaXB0aW9uID0gbmdab25lLm9uTWljcm90YXNrRW1wdHkuc3Vic2NyaWJlKHtcbiAgICAgICAgICBuZXh0OiAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5fYXV0b0RldGVjdCkge1xuICAgICAgICAgICAgICAvLyBEbyBhIGNoYW5nZSBkZXRlY3Rpb24gcnVuIHdpdGggY2hlY2tOb0NoYW5nZXMgc2V0IHRvIHRydWUgdG8gY2hlY2tcbiAgICAgICAgICAgICAgLy8gdGhlcmUgYXJlIG5vIGNoYW5nZXMgb24gdGhlIHNlY29uZCBydW4uXG4gICAgICAgICAgICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcyh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9vblN0YWJsZVN1YnNjcmlwdGlvbiA9IG5nWm9uZS5vblN0YWJsZS5zdWJzY3JpYmUoe1xuICAgICAgICAgIG5leHQ6ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX2lzU3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vIENoZWNrIHdoZXRoZXIgdGhlcmUgaXMgYSBwZW5kaW5nIHdoZW5TdGFibGUoKSBjb21wbGV0ZXIgdG8gcmVzb2x2ZS5cbiAgICAgICAgICAgIGlmICh0aGlzLl9wcm9taXNlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIC8vIElmIHNvIGNoZWNrIHdoZXRoZXIgdGhlcmUgYXJlIG5vIHBlbmRpbmcgbWFjcm90YXNrcyBiZWZvcmUgcmVzb2x2aW5nLlxuICAgICAgICAgICAgICAvLyBEbyB0aGlzIGNoZWNrIGluIHRoZSBuZXh0IHRpY2sgc28gdGhhdCBuZ1pvbmUgZ2V0cyBhIGNoYW5jZSB0byB1cGRhdGUgdGhlIHN0YXRlIG9mXG4gICAgICAgICAgICAgIC8vIHBlbmRpbmcgbWFjcm90YXNrcy5cbiAgICAgICAgICAgICAgc2NoZWR1bGVNaWNyb1Rhc2soKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghbmdab25lLmhhc1BlbmRpbmdNYWNyb3Rhc2tzKSB7XG4gICAgICAgICAgICAgICAgICBpZiAodGhpcy5fcHJvbWlzZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZXNvbHZlISh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVzb2x2ZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3Byb21pc2UgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLl9vbkVycm9yU3Vic2NyaXB0aW9uID0gbmdab25lLm9uRXJyb3Iuc3Vic2NyaWJlKHtcbiAgICAgICAgICBuZXh0OiAoZXJyb3I6IGFueSkgPT4ge1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3RpY2soY2hlY2tOb0NoYW5nZXM6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICBpZiAoY2hlY2tOb0NoYW5nZXMpIHtcbiAgICAgIHRoaXMuY2hlY2tOb0NoYW5nZXMoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVHJpZ2dlciBhIGNoYW5nZSBkZXRlY3Rpb24gY3ljbGUgZm9yIHRoZSBjb21wb25lbnQuXG4gICAqL1xuICBkZXRlY3RDaGFuZ2VzKGNoZWNrTm9DaGFuZ2VzOiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xuICAgIGlmICh0aGlzLm5nWm9uZSAhPSBudWxsKSB7XG4gICAgICAvLyBSdW4gdGhlIGNoYW5nZSBkZXRlY3Rpb24gaW5zaWRlIHRoZSBOZ1pvbmUgc28gdGhhdCBhbnkgYXN5bmMgdGFza3MgYXMgcGFydCBvZiB0aGUgY2hhbmdlXG4gICAgICAvLyBkZXRlY3Rpb24gYXJlIGNhcHR1cmVkIGJ5IHRoZSB6b25lIGFuZCBjYW4gYmUgd2FpdGVkIGZvciBpbiBpc1N0YWJsZS5cbiAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgIHRoaXMuX3RpY2soY2hlY2tOb0NoYW5nZXMpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJ1bm5pbmcgd2l0aG91dCB6b25lLiBKdXN0IGRvIHRoZSBjaGFuZ2UgZGV0ZWN0aW9uLlxuICAgICAgdGhpcy5fdGljayhjaGVja05vQ2hhbmdlcyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERvIGEgY2hhbmdlIGRldGVjdGlvbiBydW4gdG8gbWFrZSBzdXJlIHRoZXJlIHdlcmUgbm8gY2hhbmdlcy5cbiAgICovXG4gIGNoZWNrTm9DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuY2hlY2tOb0NoYW5nZXMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgd2hldGhlciB0aGUgZml4dHVyZSBzaG91bGQgYXV0b2RldGVjdCBjaGFuZ2VzLlxuICAgKlxuICAgKiBBbHNvIHJ1bnMgZGV0ZWN0Q2hhbmdlcyBvbmNlIHNvIHRoYXQgYW55IGV4aXN0aW5nIGNoYW5nZSBpcyBkZXRlY3RlZC5cbiAgICovXG4gIGF1dG9EZXRlY3RDaGFuZ2VzKGF1dG9EZXRlY3Q6IGJvb2xlYW4gPSB0cnVlKSB7XG4gICAgaWYgKHRoaXMubmdab25lID09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGNhbGwgYXV0b0RldGVjdENoYW5nZXMgd2hlbiBDb21wb25lbnRGaXh0dXJlTm9OZ1pvbmUgaXMgc2V0Jyk7XG4gICAgfVxuICAgIHRoaXMuX2F1dG9EZXRlY3QgPSBhdXRvRGV0ZWN0O1xuICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB3aGV0aGVyIHRoZSBmaXh0dXJlIGlzIGN1cnJlbnRseSBzdGFibGUgb3IgaGFzIGFzeW5jIHRhc2tzIHRoYXQgaGF2ZSBub3QgYmVlbiBjb21wbGV0ZWRcbiAgICogeWV0LlxuICAgKi9cbiAgaXNTdGFibGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2lzU3RhYmxlICYmICF0aGlzLm5nWm9uZSEuaGFzUGVuZGluZ01hY3JvdGFza3M7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIGZpeHR1cmUgaXMgc3RhYmxlLlxuICAgKlxuICAgKiBUaGlzIGNhbiBiZSB1c2VkIHRvIHJlc3VtZSB0ZXN0aW5nIGFmdGVyIGV2ZW50cyBoYXZlIHRyaWdnZXJlZCBhc3luY2hyb25vdXMgYWN0aXZpdHkgb3JcbiAgICogYXN5bmNocm9ub3VzIGNoYW5nZSBkZXRlY3Rpb24uXG4gICAqL1xuICB3aGVuU3RhYmxlKCk6IFByb21pc2U8YW55PiB7XG4gICAgaWYgKHRoaXMuaXNTdGFibGUoKSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmYWxzZSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9wcm9taXNlICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcHJvbWlzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcHJvbWlzZSA9IG5ldyBQcm9taXNlKHJlcyA9PiB7XG4gICAgICAgIHRoaXMuX3Jlc29sdmUgPSByZXM7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0aGlzLl9wcm9taXNlO1xuICAgIH1cbiAgfVxuXG5cbiAgcHJpdmF0ZSBfZ2V0UmVuZGVyZXIoKSB7XG4gICAgaWYgKHRoaXMuX3JlbmRlcmVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyID0gdGhpcy5jb21wb25lbnRSZWYuaW5qZWN0b3IuZ2V0KFJlbmRlcmVyRmFjdG9yeTIsIG51bGwpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fcmVuZGVyZXIgYXMgUmVuZGVyZXJGYWN0b3J5MiB8IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIHVpIHN0YXRlIGlzIHN0YWJsZSBmb2xsb3dpbmcgYW5pbWF0aW9ucy5cbiAgICovXG4gIHdoZW5SZW5kZXJpbmdEb25lKCk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgcmVuZGVyZXIgPSB0aGlzLl9nZXRSZW5kZXJlcigpO1xuICAgIGlmIChyZW5kZXJlciAmJiByZW5kZXJlci53aGVuUmVuZGVyaW5nRG9uZSkge1xuICAgICAgcmV0dXJuIHJlbmRlcmVyLndoZW5SZW5kZXJpbmdEb25lKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLndoZW5TdGFibGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmlnZ2VyIGNvbXBvbmVudCBkZXN0cnVjdGlvbi5cbiAgICovXG4gIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9pc0Rlc3Ryb3llZCkge1xuICAgICAgdGhpcy5jb21wb25lbnRSZWYuZGVzdHJveSgpO1xuICAgICAgaWYgKHRoaXMuX29uVW5zdGFibGVTdWJzY3JpcHRpb24gIT0gbnVsbCkge1xuICAgICAgICB0aGlzLl9vblVuc3RhYmxlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIHRoaXMuX29uVW5zdGFibGVTdWJzY3JpcHRpb24gPSBudWxsO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX29uU3RhYmxlU3Vic2NyaXB0aW9uICE9IG51bGwpIHtcbiAgICAgICAgdGhpcy5fb25TdGFibGVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgdGhpcy5fb25TdGFibGVTdWJzY3JpcHRpb24gPSBudWxsO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX29uTWljcm90YXNrRW1wdHlTdWJzY3JpcHRpb24gIT0gbnVsbCkge1xuICAgICAgICB0aGlzLl9vbk1pY3JvdGFza0VtcHR5U3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIHRoaXMuX29uTWljcm90YXNrRW1wdHlTdWJzY3JpcHRpb24gPSBudWxsO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX29uRXJyb3JTdWJzY3JpcHRpb24gIT0gbnVsbCkge1xuICAgICAgICB0aGlzLl9vbkVycm9yU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIHRoaXMuX29uRXJyb3JTdWJzY3JpcHRpb24gPSBudWxsO1xuICAgICAgfVxuICAgICAgdGhpcy5faXNEZXN0cm95ZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBzY2hlZHVsZU1pY3JvVGFzayhmbjogRnVuY3Rpb24pIHtcbiAgWm9uZS5jdXJyZW50LnNjaGVkdWxlTWljcm9UYXNrKCdzY2hlZHVsZU1pY3JvdGFzaycsIGZuKTtcbn1cbiJdfQ==