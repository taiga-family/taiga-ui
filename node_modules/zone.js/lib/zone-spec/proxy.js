"use strict";
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var ProxyZoneSpec = /** @class */ (function () {
    function ProxyZoneSpec(defaultSpecDelegate) {
        if (defaultSpecDelegate === void 0) { defaultSpecDelegate = null; }
        this.defaultSpecDelegate = defaultSpecDelegate;
        this.name = 'ProxyZone';
        this._delegateSpec = null;
        this.properties = { 'ProxyZoneSpec': this };
        this.propertyKeys = null;
        this.lastTaskState = null;
        this.isNeedToTriggerHasTask = false;
        this.tasks = [];
        this.setDelegate(defaultSpecDelegate);
    }
    ProxyZoneSpec.get = function () { return Zone.current.get('ProxyZoneSpec'); };
    ProxyZoneSpec.isLoaded = function () { return ProxyZoneSpec.get() instanceof ProxyZoneSpec; };
    ProxyZoneSpec.assertPresent = function () {
        if (!ProxyZoneSpec.isLoaded()) {
            throw new Error("Expected to be running in 'ProxyZone', but it was not found.");
        }
        return ProxyZoneSpec.get();
    };
    ProxyZoneSpec.prototype.setDelegate = function (delegateSpec) {
        var _this = this;
        var isNewDelegate = this._delegateSpec !== delegateSpec;
        this._delegateSpec = delegateSpec;
        this.propertyKeys && this.propertyKeys.forEach(function (key) { return delete _this.properties[key]; });
        this.propertyKeys = null;
        if (delegateSpec && delegateSpec.properties) {
            this.propertyKeys = Object.keys(delegateSpec.properties);
            this.propertyKeys.forEach(function (k) { return _this.properties[k] = delegateSpec.properties[k]; });
        }
        // if a new delegateSpec was set, check if we need to trigger hasTask
        if (isNewDelegate && this.lastTaskState &&
            (this.lastTaskState.macroTask || this.lastTaskState.microTask)) {
            this.isNeedToTriggerHasTask = true;
        }
    };
    ProxyZoneSpec.prototype.getDelegate = function () { return this._delegateSpec; };
    ProxyZoneSpec.prototype.resetDelegate = function () {
        var delegateSpec = this.getDelegate();
        this.setDelegate(this.defaultSpecDelegate);
    };
    ProxyZoneSpec.prototype.tryTriggerHasTask = function (parentZoneDelegate, currentZone, targetZone) {
        if (this.isNeedToTriggerHasTask && this.lastTaskState) {
            // last delegateSpec has microTask or macroTask
            // should call onHasTask in current delegateSpec
            this.isNeedToTriggerHasTask = false;
            this.onHasTask(parentZoneDelegate, currentZone, targetZone, this.lastTaskState);
        }
    };
    ProxyZoneSpec.prototype.removeFromTasks = function (task) {
        if (!this.tasks) {
            return;
        }
        for (var i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i] === task) {
                this.tasks.splice(i, 1);
                return;
            }
        }
    };
    ProxyZoneSpec.prototype.getAndClearPendingTasksInfo = function () {
        if (this.tasks.length === 0) {
            return '';
        }
        var taskInfo = this.tasks.map(function (task) {
            var dataInfo = task.data &&
                Object.keys(task.data)
                    .map(function (key) { return key + ':' + task.data[key]; })
                    .join(',');
            return "type: " + task.type + ", source: " + task.source + ", args: {" + dataInfo + "}";
        });
        var pendingTasksInfo = '--Pending async tasks are: [' + taskInfo + ']';
        // clear tasks
        this.tasks = [];
        return pendingTasksInfo;
    };
    ProxyZoneSpec.prototype.onFork = function (parentZoneDelegate, currentZone, targetZone, zoneSpec) {
        if (this._delegateSpec && this._delegateSpec.onFork) {
            return this._delegateSpec.onFork(parentZoneDelegate, currentZone, targetZone, zoneSpec);
        }
        else {
            return parentZoneDelegate.fork(targetZone, zoneSpec);
        }
    };
    ProxyZoneSpec.prototype.onIntercept = function (parentZoneDelegate, currentZone, targetZone, delegate, source) {
        if (this._delegateSpec && this._delegateSpec.onIntercept) {
            return this._delegateSpec.onIntercept(parentZoneDelegate, currentZone, targetZone, delegate, source);
        }
        else {
            return parentZoneDelegate.intercept(targetZone, delegate, source);
        }
    };
    ProxyZoneSpec.prototype.onInvoke = function (parentZoneDelegate, currentZone, targetZone, delegate, applyThis, applyArgs, source) {
        this.tryTriggerHasTask(parentZoneDelegate, currentZone, targetZone);
        if (this._delegateSpec && this._delegateSpec.onInvoke) {
            return this._delegateSpec.onInvoke(parentZoneDelegate, currentZone, targetZone, delegate, applyThis, applyArgs, source);
        }
        else {
            return parentZoneDelegate.invoke(targetZone, delegate, applyThis, applyArgs, source);
        }
    };
    ProxyZoneSpec.prototype.onHandleError = function (parentZoneDelegate, currentZone, targetZone, error) {
        if (this._delegateSpec && this._delegateSpec.onHandleError) {
            return this._delegateSpec.onHandleError(parentZoneDelegate, currentZone, targetZone, error);
        }
        else {
            return parentZoneDelegate.handleError(targetZone, error);
        }
    };
    ProxyZoneSpec.prototype.onScheduleTask = function (parentZoneDelegate, currentZone, targetZone, task) {
        if (task.type !== 'eventTask') {
            this.tasks.push(task);
        }
        if (this._delegateSpec && this._delegateSpec.onScheduleTask) {
            return this._delegateSpec.onScheduleTask(parentZoneDelegate, currentZone, targetZone, task);
        }
        else {
            return parentZoneDelegate.scheduleTask(targetZone, task);
        }
    };
    ProxyZoneSpec.prototype.onInvokeTask = function (parentZoneDelegate, currentZone, targetZone, task, applyThis, applyArgs) {
        if (task.type !== 'eventTask') {
            this.removeFromTasks(task);
        }
        this.tryTriggerHasTask(parentZoneDelegate, currentZone, targetZone);
        if (this._delegateSpec && this._delegateSpec.onInvokeTask) {
            return this._delegateSpec.onInvokeTask(parentZoneDelegate, currentZone, targetZone, task, applyThis, applyArgs);
        }
        else {
            return parentZoneDelegate.invokeTask(targetZone, task, applyThis, applyArgs);
        }
    };
    ProxyZoneSpec.prototype.onCancelTask = function (parentZoneDelegate, currentZone, targetZone, task) {
        if (task.type !== 'eventTask') {
            this.removeFromTasks(task);
        }
        this.tryTriggerHasTask(parentZoneDelegate, currentZone, targetZone);
        if (this._delegateSpec && this._delegateSpec.onCancelTask) {
            return this._delegateSpec.onCancelTask(parentZoneDelegate, currentZone, targetZone, task);
        }
        else {
            return parentZoneDelegate.cancelTask(targetZone, task);
        }
    };
    ProxyZoneSpec.prototype.onHasTask = function (delegate, current, target, hasTaskState) {
        this.lastTaskState = hasTaskState;
        if (this._delegateSpec && this._delegateSpec.onHasTask) {
            this._delegateSpec.onHasTask(delegate, current, target, hasTaskState);
        }
        else {
            delegate.hasTask(target, hasTaskState);
        }
    };
    return ProxyZoneSpec;
}());
// Export the class so that new instances can be created with proper
// constructor params.
Zone['ProxyZoneSpec'] = ProxyZoneSpec;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJveHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy96b25lLmpzL2xpYi96b25lLXNwZWMvcHJveHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7R0FNRztBQUNIO0lBd0JFLHVCQUFvQixtQkFBeUM7UUFBekMsb0NBQUEsRUFBQSwwQkFBeUM7UUFBekMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFzQjtRQXZCN0QsU0FBSSxHQUFXLFdBQVcsQ0FBQztRQUVuQixrQkFBYSxHQUFrQixJQUFJLENBQUM7UUFFNUMsZUFBVSxHQUF1QixFQUFDLGVBQWUsRUFBRSxJQUFJLEVBQUMsQ0FBQztRQUN6RCxpQkFBWSxHQUFrQixJQUFJLENBQUM7UUFFbkMsa0JBQWEsR0FBc0IsSUFBSSxDQUFDO1FBQ3hDLDJCQUFzQixHQUFHLEtBQUssQ0FBQztRQUV2QixVQUFLLEdBQVcsRUFBRSxDQUFDO1FBY3pCLElBQUksQ0FBQyxXQUFXLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBYk0saUJBQUcsR0FBVixjQUE4QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVsRSxzQkFBUSxHQUFmLGNBQTZCLE9BQU8sYUFBYSxDQUFDLEdBQUcsRUFBRSxZQUFZLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFFNUUsMkJBQWEsR0FBcEI7UUFDRSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxFQUFFO1lBQzdCLE1BQU0sSUFBSSxLQUFLLENBQUMsOERBQThELENBQUMsQ0FBQztTQUNqRjtRQUNELE9BQU8sYUFBYSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFNRCxtQ0FBVyxHQUFYLFVBQVksWUFBMkI7UUFBdkMsaUJBY0M7UUFiQyxJQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxLQUFLLFlBQVks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cEUsSUFBSSxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFFO1lBQ3pELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsa0JBQWtCLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUMzRjthQUFNO1lBQ0wsT0FBTyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ3hEO0lBQ0gsQ0FBQztJQUVELGlDQUFTLEdBQVQsVUFBVSxRQUFzQixFQUFFLE9BQWEsRUFBRSxNQUFZLEVBQUUsWUFBMEI7UUFDdkYsSUFBSSxDQUFDLGFBQWEsR0FBRyxZQUFZLENBQUM7UUFDbEMsSUFBSSxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFO1lBQ3RELElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFlBQVksQ0FBQyxDQUFDO1NBQ3ZFO2FBQU07WUFDTCxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxZQUFZLENBQUMsQ0FBQztTQUN4QztJQUNILENBQUM7SUFDSCxvQkFBQztBQUFELENBQUMsQUF0TEQsSUFzTEM7QUFFRCxvRUFBb0U7QUFDcEUsc0JBQXNCO0FBQ3JCLElBQVksQ0FBQyxlQUFlLENBQUMsR0FBRyxhQUFhLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5jbGFzcyBQcm94eVpvbmVTcGVjIGltcGxlbWVudHMgWm9uZVNwZWMge1xuICBuYW1lOiBzdHJpbmcgPSAnUHJveHlab25lJztcblxuICBwcml2YXRlIF9kZWxlZ2F0ZVNwZWM6IFpvbmVTcGVjfG51bGwgPSBudWxsO1xuXG4gIHByb3BlcnRpZXM6IHtbazogc3RyaW5nXTogYW55fSA9IHsnUHJveHlab25lU3BlYyc6IHRoaXN9O1xuICBwcm9wZXJ0eUtleXM6IHN0cmluZ1tdfG51bGwgPSBudWxsO1xuXG4gIGxhc3RUYXNrU3RhdGU6IEhhc1Rhc2tTdGF0ZXxudWxsID0gbnVsbDtcbiAgaXNOZWVkVG9UcmlnZ2VySGFzVGFzayA9IGZhbHNlO1xuXG4gIHByaXZhdGUgdGFza3M6IFRhc2tbXSA9IFtdO1xuXG4gIHN0YXRpYyBnZXQoKTogUHJveHlab25lU3BlYyB7IHJldHVybiBab25lLmN1cnJlbnQuZ2V0KCdQcm94eVpvbmVTcGVjJyk7IH1cblxuICBzdGF0aWMgaXNMb2FkZWQoKTogYm9vbGVhbiB7IHJldHVybiBQcm94eVpvbmVTcGVjLmdldCgpIGluc3RhbmNlb2YgUHJveHlab25lU3BlYzsgfVxuXG4gIHN0YXRpYyBhc3NlcnRQcmVzZW50KCk6IFByb3h5Wm9uZVNwZWMge1xuICAgIGlmICghUHJveHlab25lU3BlYy5pc0xvYWRlZCgpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIHRvIGJlIHJ1bm5pbmcgaW4gJ1Byb3h5Wm9uZScsIGJ1dCBpdCB3YXMgbm90IGZvdW5kLmApO1xuICAgIH1cbiAgICByZXR1cm4gUHJveHlab25lU3BlYy5nZXQoKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGVmYXVsdFNwZWNEZWxlZ2F0ZTogWm9uZVNwZWN8bnVsbCA9IG51bGwpIHtcbiAgICB0aGlzLnNldERlbGVnYXRlKGRlZmF1bHRTcGVjRGVsZWdhdGUpO1xuICB9XG5cbiAgc2V0RGVsZWdhdGUoZGVsZWdhdGVTcGVjOiBab25lU3BlY3xudWxsKSB7XG4gICAgY29uc3QgaXNOZXdEZWxlZ2F0ZSA9IHRoaXMuX2RlbGVnYXRlU3BlYyAhPT0gZGVsZWdhdGVTcGVjO1xuICAgIHRoaXMuX2RlbGVnYXRlU3BlYyA9IGRlbGVnYXRlU3BlYztcbiAgICB0aGlzLnByb3BlcnR5S2V5cyAmJiB0aGlzLnByb3BlcnR5S2V5cy5mb3JFYWNoKChrZXkpID0+IGRlbGV0ZSB0aGlzLnByb3BlcnRpZXNba2V5XSk7XG4gICAgdGhpcy5wcm9wZXJ0eUtleXMgPSBudWxsO1xuICAgIGlmIChkZWxlZ2F0ZVNwZWMgJiYgZGVsZWdhdGVTcGVjLnByb3BlcnRpZXMpIHtcbiAgICAgIHRoaXMucHJvcGVydHlLZXlzID0gT2JqZWN0LmtleXMoZGVsZWdhdGVTcGVjLnByb3BlcnRpZXMpO1xuICAgICAgdGhpcy5wcm9wZXJ0eUtleXMuZm9yRWFjaCgoaykgPT4gdGhpcy5wcm9wZXJ0aWVzW2tdID0gZGVsZWdhdGVTcGVjLnByb3BlcnRpZXMgIVtrXSk7XG4gICAgfVxuICAgIC8vIGlmIGEgbmV3IGRlbGVnYXRlU3BlYyB3YXMgc2V0LCBjaGVjayBpZiB3ZSBuZWVkIHRvIHRyaWdnZXIgaGFzVGFza1xuICAgIGlmIChpc05ld0RlbGVnYXRlICYmIHRoaXMubGFzdFRhc2tTdGF0ZSAmJlxuICAgICAgICAodGhpcy5sYXN0VGFza1N0YXRlLm1hY3JvVGFzayB8fCB0aGlzLmxhc3RUYXNrU3RhdGUubWljcm9UYXNrKSkge1xuICAgICAgdGhpcy5pc05lZWRUb1RyaWdnZXJIYXNUYXNrID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBnZXREZWxlZ2F0ZSgpIHsgcmV0dXJuIHRoaXMuX2RlbGVnYXRlU3BlYzsgfVxuXG5cbiAgcmVzZXREZWxlZ2F0ZSgpIHtcbiAgICBjb25zdCBkZWxlZ2F0ZVNwZWMgPSB0aGlzLmdldERlbGVnYXRlKCk7XG4gICAgdGhpcy5zZXREZWxlZ2F0ZSh0aGlzLmRlZmF1bHRTcGVjRGVsZWdhdGUpO1xuICB9XG5cbiAgdHJ5VHJpZ2dlckhhc1Rhc2socGFyZW50Wm9uZURlbGVnYXRlOiBab25lRGVsZWdhdGUsIGN1cnJlbnRab25lOiBab25lLCB0YXJnZXRab25lOiBab25lKSB7XG4gICAgaWYgKHRoaXMuaXNOZWVkVG9UcmlnZ2VySGFzVGFzayAmJiB0aGlzLmxhc3RUYXNrU3RhdGUpIHtcbiAgICAgIC8vIGxhc3QgZGVsZWdhdGVTcGVjIGhhcyBtaWNyb1Rhc2sgb3IgbWFjcm9UYXNrXG4gICAgICAvLyBzaG91bGQgY2FsbCBvbkhhc1Rhc2sgaW4gY3VycmVudCBkZWxlZ2F0ZVNwZWNcbiAgICAgIHRoaXMuaXNOZWVkVG9UcmlnZ2VySGFzVGFzayA9IGZhbHNlO1xuICAgICAgdGhpcy5vbkhhc1Rhc2socGFyZW50Wm9uZURlbGVnYXRlLCBjdXJyZW50Wm9uZSwgdGFyZ2V0Wm9uZSwgdGhpcy5sYXN0VGFza1N0YXRlKTtcbiAgICB9XG4gIH1cblxuICByZW1vdmVGcm9tVGFza3ModGFzazogVGFzaykge1xuICAgIGlmICghdGhpcy50YXNrcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLnRhc2tzW2ldID09PSB0YXNrKSB7XG4gICAgICAgIHRoaXMudGFza3Muc3BsaWNlKGksIDEpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0QW5kQ2xlYXJQZW5kaW5nVGFza3NJbmZvKCkge1xuICAgIGlmICh0aGlzLnRhc2tzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICBjb25zdCB0YXNrSW5mbyA9IHRoaXMudGFza3MubWFwKCh0YXNrOiBUYXNrKSA9PiB7XG4gICAgICBjb25zdCBkYXRhSW5mbyA9IHRhc2suZGF0YSAmJlxuICAgICAgICAgIE9iamVjdC5rZXlzKHRhc2suZGF0YSlcbiAgICAgICAgICAgICAgLm1hcCgoa2V5OiBzdHJpbmcpID0+IHsgcmV0dXJuIGtleSArICc6JyArICh0YXNrLmRhdGEgYXMgYW55KVtrZXldOyB9KVxuICAgICAgICAgICAgICAuam9pbignLCcpO1xuICAgICAgcmV0dXJuIGB0eXBlOiAke3Rhc2sudHlwZX0sIHNvdXJjZTogJHt0YXNrLnNvdXJjZX0sIGFyZ3M6IHske2RhdGFJbmZvfX1gO1xuICAgIH0pO1xuICAgIGNvbnN0IHBlbmRpbmdUYXNrc0luZm8gPSAnLS1QZW5kaW5nIGFzeW5jIHRhc2tzIGFyZTogWycgKyB0YXNrSW5mbyArICddJztcbiAgICAvLyBjbGVhciB0YXNrc1xuICAgIHRoaXMudGFza3MgPSBbXTtcblxuICAgIHJldHVybiBwZW5kaW5nVGFza3NJbmZvO1xuICB9XG5cbiAgb25Gb3JrKHBhcmVudFpvbmVEZWxlZ2F0ZTogWm9uZURlbGVnYXRlLCBjdXJyZW50Wm9uZTogWm9uZSwgdGFyZ2V0Wm9uZTogWm9uZSwgem9uZVNwZWM6IFpvbmVTcGVjKTpcbiAgICAgIFpvbmUge1xuICAgIGlmICh0aGlzLl9kZWxlZ2F0ZVNwZWMgJiYgdGhpcy5fZGVsZWdhdGVTcGVjLm9uRm9yaykge1xuICAgICAgcmV0dXJuIHRoaXMuX2RlbGVnYXRlU3BlYy5vbkZvcmsocGFyZW50Wm9uZURlbGVnYXRlLCBjdXJyZW50Wm9uZSwgdGFyZ2V0Wm9uZSwgem9uZVNwZWMpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcGFyZW50Wm9uZURlbGVnYXRlLmZvcmsodGFyZ2V0Wm9uZSwgem9uZVNwZWMpO1xuICAgIH1cbiAgfVxuXG5cbiAgb25JbnRlcmNlcHQoXG4gICAgICBwYXJlbnRab25lRGVsZWdhdGU6IFpvbmVEZWxlZ2F0ZSwgY3VycmVudFpvbmU6IFpvbmUsIHRhcmdldFpvbmU6IFpvbmUsIGRlbGVnYXRlOiBGdW5jdGlvbixcbiAgICAgIHNvdXJjZTogc3RyaW5nKTogRnVuY3Rpb24ge1xuICAgIGlmICh0aGlzLl9kZWxlZ2F0ZVNwZWMgJiYgdGhpcy5fZGVsZWdhdGVTcGVjLm9uSW50ZXJjZXB0KSB7XG4gICAgICByZXR1cm4gdGhpcy5fZGVsZWdhdGVTcGVjLm9uSW50ZXJjZXB0KFxuICAgICAgICAgIHBhcmVudFpvbmVEZWxlZ2F0ZSwgY3VycmVudFpvbmUsIHRhcmdldFpvbmUsIGRlbGVnYXRlLCBzb3VyY2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcGFyZW50Wm9uZURlbGVnYXRlLmludGVyY2VwdCh0YXJnZXRab25lLCBkZWxlZ2F0ZSwgc291cmNlKTtcbiAgICB9XG4gIH1cblxuXG4gIG9uSW52b2tlKFxuICAgICAgcGFyZW50Wm9uZURlbGVnYXRlOiBab25lRGVsZWdhdGUsIGN1cnJlbnRab25lOiBab25lLCB0YXJnZXRab25lOiBab25lLCBkZWxlZ2F0ZTogRnVuY3Rpb24sXG4gICAgICBhcHBseVRoaXM6IGFueSwgYXBwbHlBcmdzPzogYW55W10sIHNvdXJjZT86IHN0cmluZyk6IGFueSB7XG4gICAgdGhpcy50cnlUcmlnZ2VySGFzVGFzayhwYXJlbnRab25lRGVsZWdhdGUsIGN1cnJlbnRab25lLCB0YXJnZXRab25lKTtcbiAgICBpZiAodGhpcy5fZGVsZWdhdGVTcGVjICYmIHRoaXMuX2RlbGVnYXRlU3BlYy5vbkludm9rZSkge1xuICAgICAgcmV0dXJuIHRoaXMuX2RlbGVnYXRlU3BlYy5vbkludm9rZShcbiAgICAgICAgICBwYXJlbnRab25lRGVsZWdhdGUsIGN1cnJlbnRab25lLCB0YXJnZXRab25lLCBkZWxlZ2F0ZSwgYXBwbHlUaGlzLCBhcHBseUFyZ3MsIHNvdXJjZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBwYXJlbnRab25lRGVsZWdhdGUuaW52b2tlKHRhcmdldFpvbmUsIGRlbGVnYXRlLCBhcHBseVRoaXMsIGFwcGx5QXJncywgc291cmNlKTtcbiAgICB9XG4gIH1cblxuICBvbkhhbmRsZUVycm9yKHBhcmVudFpvbmVEZWxlZ2F0ZTogWm9uZURlbGVnYXRlLCBjdXJyZW50Wm9uZTogWm9uZSwgdGFyZ2V0Wm9uZTogWm9uZSwgZXJyb3I6IGFueSk6XG4gICAgICBib29sZWFuIHtcbiAgICBpZiAodGhpcy5fZGVsZWdhdGVTcGVjICYmIHRoaXMuX2RlbGVnYXRlU3BlYy5vbkhhbmRsZUVycm9yKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZGVsZWdhdGVTcGVjLm9uSGFuZGxlRXJyb3IocGFyZW50Wm9uZURlbGVnYXRlLCBjdXJyZW50Wm9uZSwgdGFyZ2V0Wm9uZSwgZXJyb3IpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcGFyZW50Wm9uZURlbGVnYXRlLmhhbmRsZUVycm9yKHRhcmdldFpvbmUsIGVycm9yKTtcbiAgICB9XG4gIH1cblxuICBvblNjaGVkdWxlVGFzayhwYXJlbnRab25lRGVsZWdhdGU6IFpvbmVEZWxlZ2F0ZSwgY3VycmVudFpvbmU6IFpvbmUsIHRhcmdldFpvbmU6IFpvbmUsIHRhc2s6IFRhc2spOlxuICAgICAgVGFzayB7XG4gICAgaWYgKHRhc2sudHlwZSAhPT0gJ2V2ZW50VGFzaycpIHtcbiAgICAgIHRoaXMudGFza3MucHVzaCh0YXNrKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2RlbGVnYXRlU3BlYyAmJiB0aGlzLl9kZWxlZ2F0ZVNwZWMub25TY2hlZHVsZVRhc2spIHtcbiAgICAgIHJldHVybiB0aGlzLl9kZWxlZ2F0ZVNwZWMub25TY2hlZHVsZVRhc2socGFyZW50Wm9uZURlbGVnYXRlLCBjdXJyZW50Wm9uZSwgdGFyZ2V0Wm9uZSwgdGFzayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBwYXJlbnRab25lRGVsZWdhdGUuc2NoZWR1bGVUYXNrKHRhcmdldFpvbmUsIHRhc2spO1xuICAgIH1cbiAgfVxuXG4gIG9uSW52b2tlVGFzayhcbiAgICAgIHBhcmVudFpvbmVEZWxlZ2F0ZTogWm9uZURlbGVnYXRlLCBjdXJyZW50Wm9uZTogWm9uZSwgdGFyZ2V0Wm9uZTogWm9uZSwgdGFzazogVGFzayxcbiAgICAgIGFwcGx5VGhpczogYW55LCBhcHBseUFyZ3M6IGFueSk6IGFueSB7XG4gICAgaWYgKHRhc2sudHlwZSAhPT0gJ2V2ZW50VGFzaycpIHtcbiAgICAgIHRoaXMucmVtb3ZlRnJvbVRhc2tzKHRhc2spO1xuICAgIH1cbiAgICB0aGlzLnRyeVRyaWdnZXJIYXNUYXNrKHBhcmVudFpvbmVEZWxlZ2F0ZSwgY3VycmVudFpvbmUsIHRhcmdldFpvbmUpO1xuICAgIGlmICh0aGlzLl9kZWxlZ2F0ZVNwZWMgJiYgdGhpcy5fZGVsZWdhdGVTcGVjLm9uSW52b2tlVGFzaykge1xuICAgICAgcmV0dXJuIHRoaXMuX2RlbGVnYXRlU3BlYy5vbkludm9rZVRhc2soXG4gICAgICAgICAgcGFyZW50Wm9uZURlbGVnYXRlLCBjdXJyZW50Wm9uZSwgdGFyZ2V0Wm9uZSwgdGFzaywgYXBwbHlUaGlzLCBhcHBseUFyZ3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcGFyZW50Wm9uZURlbGVnYXRlLmludm9rZVRhc2sodGFyZ2V0Wm9uZSwgdGFzaywgYXBwbHlUaGlzLCBhcHBseUFyZ3MpO1xuICAgIH1cbiAgfVxuXG4gIG9uQ2FuY2VsVGFzayhwYXJlbnRab25lRGVsZWdhdGU6IFpvbmVEZWxlZ2F0ZSwgY3VycmVudFpvbmU6IFpvbmUsIHRhcmdldFpvbmU6IFpvbmUsIHRhc2s6IFRhc2spOlxuICAgICAgYW55IHtcbiAgICBpZiAodGFzay50eXBlICE9PSAnZXZlbnRUYXNrJykge1xuICAgICAgdGhpcy5yZW1vdmVGcm9tVGFza3ModGFzayk7XG4gICAgfVxuICAgIHRoaXMudHJ5VHJpZ2dlckhhc1Rhc2socGFyZW50Wm9uZURlbGVnYXRlLCBjdXJyZW50Wm9uZSwgdGFyZ2V0Wm9uZSk7XG4gICAgaWYgKHRoaXMuX2RlbGVnYXRlU3BlYyAmJiB0aGlzLl9kZWxlZ2F0ZVNwZWMub25DYW5jZWxUYXNrKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZGVsZWdhdGVTcGVjLm9uQ2FuY2VsVGFzayhwYXJlbnRab25lRGVsZWdhdGUsIGN1cnJlbnRab25lLCB0YXJnZXRab25lLCB0YXNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHBhcmVudFpvbmVEZWxlZ2F0ZS5jYW5jZWxUYXNrKHRhcmdldFpvbmUsIHRhc2spO1xuICAgIH1cbiAgfVxuXG4gIG9uSGFzVGFzayhkZWxlZ2F0ZTogWm9uZURlbGVnYXRlLCBjdXJyZW50OiBab25lLCB0YXJnZXQ6IFpvbmUsIGhhc1Rhc2tTdGF0ZTogSGFzVGFza1N0YXRlKTogdm9pZCB7XG4gICAgdGhpcy5sYXN0VGFza1N0YXRlID0gaGFzVGFza1N0YXRlO1xuICAgIGlmICh0aGlzLl9kZWxlZ2F0ZVNwZWMgJiYgdGhpcy5fZGVsZWdhdGVTcGVjLm9uSGFzVGFzaykge1xuICAgICAgdGhpcy5fZGVsZWdhdGVTcGVjLm9uSGFzVGFzayhkZWxlZ2F0ZSwgY3VycmVudCwgdGFyZ2V0LCBoYXNUYXNrU3RhdGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxlZ2F0ZS5oYXNUYXNrKHRhcmdldCwgaGFzVGFza1N0YXRlKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gRXhwb3J0IHRoZSBjbGFzcyBzbyB0aGF0IG5ldyBpbnN0YW5jZXMgY2FuIGJlIGNyZWF0ZWQgd2l0aCBwcm9wZXJcbi8vIGNvbnN0cnVjdG9yIHBhcmFtcy5cbihab25lIGFzIGFueSlbJ1Byb3h5Wm9uZVNwZWMnXSA9IFByb3h5Wm9uZVNwZWM7XG4iXX0=