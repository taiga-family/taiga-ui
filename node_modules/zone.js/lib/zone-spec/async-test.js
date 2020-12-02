"use strict";
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(function (_global) {
    var AsyncTestZoneSpec = /** @class */ (function () {
        function AsyncTestZoneSpec(finishCallback, failCallback, namePrefix) {
            this.finishCallback = finishCallback;
            this.failCallback = failCallback;
            this._pendingMicroTasks = false;
            this._pendingMacroTasks = false;
            this._alreadyErrored = false;
            this._isSync = false;
            this.runZone = Zone.current;
            this.unresolvedChainedPromiseCount = 0;
            this.supportWaitUnresolvedChainedPromise = false;
            this.name = 'asyncTestZone for ' + namePrefix;
            this.properties = { 'AsyncTestZoneSpec': this };
            this.supportWaitUnresolvedChainedPromise =
                _global[Zone.__symbol__('supportWaitUnResolvedChainedPromise')] === true;
        }
        AsyncTestZoneSpec.prototype.isUnresolvedChainedPromisePending = function () { return this.unresolvedChainedPromiseCount > 0; };
        AsyncTestZoneSpec.prototype._finishCallbackIfDone = function () {
            var _this = this;
            if (!(this._pendingMicroTasks || this._pendingMacroTasks ||
                (this.supportWaitUnresolvedChainedPromise &&
                    this.isUnresolvedChainedPromisePending()))) {
                // We do this because we would like to catch unhandled rejected promises.
                this.runZone.run(function () {
                    setTimeout(function () {
                        if (!_this._alreadyErrored && !(_this._pendingMicroTasks || _this._pendingMacroTasks)) {
                            _this.finishCallback();
                        }
                    }, 0);
                });
            }
        };
        AsyncTestZoneSpec.prototype.patchPromiseForTest = function () {
            if (!this.supportWaitUnresolvedChainedPromise) {
                return;
            }
            var patchPromiseForTest = Promise[Zone.__symbol__('patchPromiseForTest')];
            if (patchPromiseForTest) {
                patchPromiseForTest();
            }
        };
        AsyncTestZoneSpec.prototype.unPatchPromiseForTest = function () {
            if (!this.supportWaitUnresolvedChainedPromise) {
                return;
            }
            var unPatchPromiseForTest = Promise[Zone.__symbol__('unPatchPromiseForTest')];
            if (unPatchPromiseForTest) {
                unPatchPromiseForTest();
            }
        };
        AsyncTestZoneSpec.prototype.onScheduleTask = function (delegate, current, target, task) {
            if (task.type !== 'eventTask') {
                this._isSync = false;
            }
            if (task.type === 'microTask' && task.data && task.data instanceof Promise) {
                // check whether the promise is a chained promise
                if (task.data[AsyncTestZoneSpec.symbolParentUnresolved] === true) {
                    // chained promise is being scheduled
                    this.unresolvedChainedPromiseCount--;
                }
            }
            return delegate.scheduleTask(target, task);
        };
        AsyncTestZoneSpec.prototype.onInvokeTask = function (delegate, current, target, task, applyThis, applyArgs) {
            if (task.type !== 'eventTask') {
                this._isSync = false;
            }
            return delegate.invokeTask(target, task, applyThis, applyArgs);
        };
        AsyncTestZoneSpec.prototype.onCancelTask = function (delegate, current, target, task) {
            if (task.type !== 'eventTask') {
                this._isSync = false;
            }
            return delegate.cancelTask(target, task);
        };
        // Note - we need to use onInvoke at the moment to call finish when a test is
        // fully synchronous. TODO(juliemr): remove this when the logic for
        // onHasTask changes and it calls whenever the task queues are dirty.
        // updated by(JiaLiPassion), only call finish callback when no task
        // was scheduled/invoked/canceled.
        AsyncTestZoneSpec.prototype.onInvoke = function (parentZoneDelegate, currentZone, targetZone, delegate, applyThis, applyArgs, source) {
            var previousTaskCounts = null;
            try {
                this._isSync = true;
                return parentZoneDelegate.invoke(targetZone, delegate, applyThis, applyArgs, source);
            }
            finally {
                var afterTaskCounts = parentZoneDelegate._taskCounts;
                if (this._isSync) {
                    this._finishCallbackIfDone();
                }
            }
        };
        AsyncTestZoneSpec.prototype.onHandleError = function (parentZoneDelegate, currentZone, targetZone, error) {
            // Let the parent try to handle the error.
            var result = parentZoneDelegate.handleError(targetZone, error);
            if (result) {
                this.failCallback(error);
                this._alreadyErrored = true;
            }
            return false;
        };
        AsyncTestZoneSpec.prototype.onHasTask = function (delegate, current, target, hasTaskState) {
            delegate.hasTask(target, hasTaskState);
            if (hasTaskState.change == 'microTask') {
                this._pendingMicroTasks = hasTaskState.microTask;
                this._finishCallbackIfDone();
            }
            else if (hasTaskState.change == 'macroTask') {
                this._pendingMacroTasks = hasTaskState.macroTask;
                this._finishCallbackIfDone();
            }
        };
        AsyncTestZoneSpec.symbolParentUnresolved = Zone.__symbol__('parentUnresolved');
        return AsyncTestZoneSpec;
    }());
    // Export the class so that new instances can be created with proper
    // constructor params.
    Zone['AsyncTestZoneSpec'] = AsyncTestZoneSpec;
})(typeof window !== 'undefined' && window || typeof self !== 'undefined' && self || global);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXN5bmMtdGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3pvbmUuanMvbGliL3pvbmUtc3BlYy9hc3luYy10ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7O0dBTUc7QUFDSCxDQUFDLFVBQVMsT0FBWTtJQUNwQjtRQVlFLDJCQUNZLGNBQXdCLEVBQVUsWUFBc0IsRUFBRSxVQUFrQjtZQUE1RSxtQkFBYyxHQUFkLGNBQWMsQ0FBVTtZQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFVO1lBVnBFLHVCQUFrQixHQUFZLEtBQUssQ0FBQztZQUNwQyx1QkFBa0IsR0FBWSxLQUFLLENBQUM7WUFDcEMsb0JBQWUsR0FBWSxLQUFLLENBQUM7WUFDakMsWUFBTyxHQUFZLEtBQUssQ0FBQztZQUN6QixZQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUN2QixrQ0FBNkIsR0FBRyxDQUFDLENBQUM7WUFFbEMsd0NBQW1DLEdBQUcsS0FBSyxDQUFDO1lBSTFDLElBQUksQ0FBQyxJQUFJLEdBQUcsb0JBQW9CLEdBQUcsVUFBVSxDQUFDO1lBQzlDLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBQyxtQkFBbUIsRUFBRSxJQUFJLEVBQUMsQ0FBQztZQUM5QyxJQUFJLENBQUMsbUNBQW1DO2dCQUNwQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDO1FBQy9FLENBQUM7UUFFRCw2REFBaUMsR0FBakMsY0FBc0MsT0FBTyxJQUFJLENBQUMsNkJBQTZCLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUV0RixpREFBcUIsR0FBckI7WUFBQSxpQkFhQztZQVpDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsSUFBSSxJQUFJLENBQUMsa0JBQWtCO2dCQUNsRCxDQUFDLElBQUksQ0FBQyxtQ0FBbUM7b0JBQ3hDLElBQUksQ0FBQyxpQ0FBaUMsRUFBRSxDQUFDLENBQUMsRUFBRTtnQkFDakQseUVBQXlFO2dCQUN6RSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztvQkFDZixVQUFVLENBQUM7d0JBQ1QsSUFBSSxDQUFDLEtBQUksQ0FBQyxlQUFlLElBQUksQ0FBQyxDQUFDLEtBQUksQ0FBQyxrQkFBa0IsSUFBSSxLQUFJLENBQUMsa0JBQWtCLENBQUMsRUFBRTs0QkFDbEYsS0FBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO3lCQUN2QjtvQkFDSCxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ1IsQ0FBQyxDQUFDLENBQUM7YUFDSjtRQUNILENBQUM7UUFFRCwrQ0FBbUIsR0FBbkI7WUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLG1DQUFtQyxFQUFFO2dCQUM3QyxPQUFPO2FBQ1I7WUFDRCxJQUFNLG1CQUFtQixHQUFJLE9BQWUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQztZQUNyRixJQUFJLG1CQUFtQixFQUFFO2dCQUN2QixtQkFBbUIsRUFBRSxDQUFDO2FBQ3ZCO1FBQ0gsQ0FBQztRQUVELGlEQUFxQixHQUFyQjtZQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsbUNBQW1DLEVBQUU7Z0JBQzdDLE9BQU87YUFDUjtZQUNELElBQU0scUJBQXFCLEdBQUksT0FBZSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDO1lBQ3pGLElBQUkscUJBQXFCLEVBQUU7Z0JBQ3pCLHFCQUFxQixFQUFFLENBQUM7YUFDekI7UUFDSCxDQUFDO1FBUUQsMENBQWMsR0FBZCxVQUFlLFFBQXNCLEVBQUUsT0FBYSxFQUFFLE1BQVksRUFBRSxJQUFVO1lBQzVFLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxXQUFXLEVBQUU7Z0JBQzdCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO2FBQ3RCO1lBQ0QsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFdBQVcsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLFlBQVksT0FBTyxFQUFFO2dCQUMxRSxpREFBaUQ7Z0JBQ2pELElBQUssSUFBSSxDQUFDLElBQVksQ0FBQyxpQkFBaUIsQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLElBQUksRUFBRTtvQkFDekUscUNBQXFDO29CQUNyQyxJQUFJLENBQUMsNkJBQTZCLEVBQUUsQ0FBQztpQkFDdEM7YUFDRjtZQUNELE9BQU8sUUFBUSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDN0MsQ0FBQztRQUVELHdDQUFZLEdBQVosVUFDSSxRQUFzQixFQUFFLE9BQWEsRUFBRSxNQUFZLEVBQUUsSUFBVSxFQUFFLFNBQWMsRUFDL0UsU0FBYztZQUNoQixJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssV0FBVyxFQUFFO2dCQUM3QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQzthQUN0QjtZQUNELE9BQU8sUUFBUSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUNqRSxDQUFDO1FBRUQsd0NBQVksR0FBWixVQUFhLFFBQXNCLEVBQUUsT0FBYSxFQUFFLE1BQVksRUFBRSxJQUFVO1lBQzFFLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxXQUFXLEVBQUU7Z0JBQzdCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO2FBQ3RCO1lBQ0QsT0FBTyxRQUFRLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMzQyxDQUFDO1FBRUQsNkVBQTZFO1FBQzdFLG1FQUFtRTtRQUNuRSxxRUFBcUU7UUFDckUsbUVBQW1FO1FBQ25FLGtDQUFrQztRQUNsQyxvQ0FBUSxHQUFSLFVBQ0ksa0JBQWdDLEVBQUUsV0FBaUIsRUFBRSxVQUFnQixFQUFFLFFBQWtCLEVBQ3pGLFNBQWMsRUFBRSxTQUFpQixFQUFFLE1BQWU7WUFDcEQsSUFBSSxrQkFBa0IsR0FBUSxJQUFJLENBQUM7WUFDbkMsSUFBSTtnQkFDRixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztnQkFDcEIsT0FBTyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2FBQ3RGO29CQUFTO2dCQUNSLElBQU0sZUFBZSxHQUFTLGtCQUEwQixDQUFDLFdBQVcsQ0FBQztnQkFDckUsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO29CQUNoQixJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztpQkFDOUI7YUFDRjtRQUNILENBQUM7UUFFRCx5Q0FBYSxHQUFiLFVBQ0ksa0JBQWdDLEVBQUUsV0FBaUIsRUFBRSxVQUFnQixFQUNyRSxLQUFVO1lBQ1osMENBQTBDO1lBQzFDLElBQU0sTUFBTSxHQUFHLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDakUsSUFBSSxNQUFNLEVBQUU7Z0JBQ1YsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDekIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7YUFDN0I7WUFDRCxPQUFPLEtBQUssQ0FBQztRQUNmLENBQUM7UUFFRCxxQ0FBUyxHQUFULFVBQVUsUUFBc0IsRUFBRSxPQUFhLEVBQUUsTUFBWSxFQUFFLFlBQTBCO1lBQ3ZGLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLFlBQVksQ0FBQyxDQUFDO1lBQ3ZDLElBQUksWUFBWSxDQUFDLE1BQU0sSUFBSSxXQUFXLEVBQUU7Z0JBQ3RDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxZQUFZLENBQUMsU0FBUyxDQUFDO2dCQUNqRCxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQzthQUM5QjtpQkFBTSxJQUFJLFlBQVksQ0FBQyxNQUFNLElBQUksV0FBVyxFQUFFO2dCQUM3QyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsWUFBWSxDQUFDLFNBQVMsQ0FBQztnQkFDakQsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7YUFDOUI7UUFDSCxDQUFDO1FBcklNLHdDQUFzQixHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQXNJdEUsd0JBQUM7S0FBQSxBQXZJRCxJQXVJQztJQUVELG9FQUFvRTtJQUNwRSxzQkFBc0I7SUFDckIsSUFBWSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsaUJBQWlCLENBQUM7QUFDekQsQ0FBQyxDQUFDLENBQUMsT0FBTyxNQUFNLEtBQUssV0FBVyxJQUFJLE1BQU0sSUFBSSxPQUFPLElBQUksS0FBSyxXQUFXLElBQUksSUFBSSxJQUFJLE1BQU0sQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuKGZ1bmN0aW9uKF9nbG9iYWw6IGFueSkge1xuICBjbGFzcyBBc3luY1Rlc3Rab25lU3BlYyBpbXBsZW1lbnRzIFpvbmVTcGVjIHtcbiAgICBzdGF0aWMgc3ltYm9sUGFyZW50VW5yZXNvbHZlZCA9IFpvbmUuX19zeW1ib2xfXygncGFyZW50VW5yZXNvbHZlZCcpO1xuXG4gICAgX3BlbmRpbmdNaWNyb1Rhc2tzOiBib29sZWFuID0gZmFsc2U7XG4gICAgX3BlbmRpbmdNYWNyb1Rhc2tzOiBib29sZWFuID0gZmFsc2U7XG4gICAgX2FscmVhZHlFcnJvcmVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgX2lzU3luYzogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHJ1blpvbmUgPSBab25lLmN1cnJlbnQ7XG4gICAgdW5yZXNvbHZlZENoYWluZWRQcm9taXNlQ291bnQgPSAwO1xuXG4gICAgc3VwcG9ydFdhaXRVbnJlc29sdmVkQ2hhaW5lZFByb21pc2UgPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGZpbmlzaENhbGxiYWNrOiBGdW5jdGlvbiwgcHJpdmF0ZSBmYWlsQ2FsbGJhY2s6IEZ1bmN0aW9uLCBuYW1lUHJlZml4OiBzdHJpbmcpIHtcbiAgICAgIHRoaXMubmFtZSA9ICdhc3luY1Rlc3Rab25lIGZvciAnICsgbmFtZVByZWZpeDtcbiAgICAgIHRoaXMucHJvcGVydGllcyA9IHsnQXN5bmNUZXN0Wm9uZVNwZWMnOiB0aGlzfTtcbiAgICAgIHRoaXMuc3VwcG9ydFdhaXRVbnJlc29sdmVkQ2hhaW5lZFByb21pc2UgPVxuICAgICAgICAgIF9nbG9iYWxbWm9uZS5fX3N5bWJvbF9fKCdzdXBwb3J0V2FpdFVuUmVzb2x2ZWRDaGFpbmVkUHJvbWlzZScpXSA9PT0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpc1VucmVzb2x2ZWRDaGFpbmVkUHJvbWlzZVBlbmRpbmcoKSB7IHJldHVybiB0aGlzLnVucmVzb2x2ZWRDaGFpbmVkUHJvbWlzZUNvdW50ID4gMDsgfVxuXG4gICAgX2ZpbmlzaENhbGxiYWNrSWZEb25lKCkge1xuICAgICAgaWYgKCEodGhpcy5fcGVuZGluZ01pY3JvVGFza3MgfHwgdGhpcy5fcGVuZGluZ01hY3JvVGFza3MgfHxcbiAgICAgICAgICAgICh0aGlzLnN1cHBvcnRXYWl0VW5yZXNvbHZlZENoYWluZWRQcm9taXNlICYmXG4gICAgICAgICAgICAgdGhpcy5pc1VucmVzb2x2ZWRDaGFpbmVkUHJvbWlzZVBlbmRpbmcoKSkpKSB7XG4gICAgICAgIC8vIFdlIGRvIHRoaXMgYmVjYXVzZSB3ZSB3b3VsZCBsaWtlIHRvIGNhdGNoIHVuaGFuZGxlZCByZWplY3RlZCBwcm9taXNlcy5cbiAgICAgICAgdGhpcy5ydW5ab25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX2FscmVhZHlFcnJvcmVkICYmICEodGhpcy5fcGVuZGluZ01pY3JvVGFza3MgfHwgdGhpcy5fcGVuZGluZ01hY3JvVGFza3MpKSB7XG4gICAgICAgICAgICAgIHRoaXMuZmluaXNoQ2FsbGJhY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCAwKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcGF0Y2hQcm9taXNlRm9yVGVzdCgpIHtcbiAgICAgIGlmICghdGhpcy5zdXBwb3J0V2FpdFVucmVzb2x2ZWRDaGFpbmVkUHJvbWlzZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBwYXRjaFByb21pc2VGb3JUZXN0ID0gKFByb21pc2UgYXMgYW55KVtab25lLl9fc3ltYm9sX18oJ3BhdGNoUHJvbWlzZUZvclRlc3QnKV07XG4gICAgICBpZiAocGF0Y2hQcm9taXNlRm9yVGVzdCkge1xuICAgICAgICBwYXRjaFByb21pc2VGb3JUZXN0KCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdW5QYXRjaFByb21pc2VGb3JUZXN0KCkge1xuICAgICAgaWYgKCF0aGlzLnN1cHBvcnRXYWl0VW5yZXNvbHZlZENoYWluZWRQcm9taXNlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHVuUGF0Y2hQcm9taXNlRm9yVGVzdCA9IChQcm9taXNlIGFzIGFueSlbWm9uZS5fX3N5bWJvbF9fKCd1blBhdGNoUHJvbWlzZUZvclRlc3QnKV07XG4gICAgICBpZiAodW5QYXRjaFByb21pc2VGb3JUZXN0KSB7XG4gICAgICAgIHVuUGF0Y2hQcm9taXNlRm9yVGVzdCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFpvbmVTcGVjIGltcGxlbWVudGF0aW9uIGJlbG93LlxuXG4gICAgbmFtZTogc3RyaW5nO1xuXG4gICAgcHJvcGVydGllczoge1trZXk6IHN0cmluZ106IGFueX07XG5cbiAgICBvblNjaGVkdWxlVGFzayhkZWxlZ2F0ZTogWm9uZURlbGVnYXRlLCBjdXJyZW50OiBab25lLCB0YXJnZXQ6IFpvbmUsIHRhc2s6IFRhc2spOiBUYXNrIHtcbiAgICAgIGlmICh0YXNrLnR5cGUgIT09ICdldmVudFRhc2snKSB7XG4gICAgICAgIHRoaXMuX2lzU3luYyA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKHRhc2sudHlwZSA9PT0gJ21pY3JvVGFzaycgJiYgdGFzay5kYXRhICYmIHRhc2suZGF0YSBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgLy8gY2hlY2sgd2hldGhlciB0aGUgcHJvbWlzZSBpcyBhIGNoYWluZWQgcHJvbWlzZVxuICAgICAgICBpZiAoKHRhc2suZGF0YSBhcyBhbnkpW0FzeW5jVGVzdFpvbmVTcGVjLnN5bWJvbFBhcmVudFVucmVzb2x2ZWRdID09PSB0cnVlKSB7XG4gICAgICAgICAgLy8gY2hhaW5lZCBwcm9taXNlIGlzIGJlaW5nIHNjaGVkdWxlZFxuICAgICAgICAgIHRoaXMudW5yZXNvbHZlZENoYWluZWRQcm9taXNlQ291bnQtLTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGRlbGVnYXRlLnNjaGVkdWxlVGFzayh0YXJnZXQsIHRhc2spO1xuICAgIH1cblxuICAgIG9uSW52b2tlVGFzayhcbiAgICAgICAgZGVsZWdhdGU6IFpvbmVEZWxlZ2F0ZSwgY3VycmVudDogWm9uZSwgdGFyZ2V0OiBab25lLCB0YXNrOiBUYXNrLCBhcHBseVRoaXM6IGFueSxcbiAgICAgICAgYXBwbHlBcmdzOiBhbnkpIHtcbiAgICAgIGlmICh0YXNrLnR5cGUgIT09ICdldmVudFRhc2snKSB7XG4gICAgICAgIHRoaXMuX2lzU3luYyA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGRlbGVnYXRlLmludm9rZVRhc2sodGFyZ2V0LCB0YXNrLCBhcHBseVRoaXMsIGFwcGx5QXJncyk7XG4gICAgfVxuXG4gICAgb25DYW5jZWxUYXNrKGRlbGVnYXRlOiBab25lRGVsZWdhdGUsIGN1cnJlbnQ6IFpvbmUsIHRhcmdldDogWm9uZSwgdGFzazogVGFzaykge1xuICAgICAgaWYgKHRhc2sudHlwZSAhPT0gJ2V2ZW50VGFzaycpIHtcbiAgICAgICAgdGhpcy5faXNTeW5jID0gZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gZGVsZWdhdGUuY2FuY2VsVGFzayh0YXJnZXQsIHRhc2spO1xuICAgIH1cblxuICAgIC8vIE5vdGUgLSB3ZSBuZWVkIHRvIHVzZSBvbkludm9rZSBhdCB0aGUgbW9tZW50IHRvIGNhbGwgZmluaXNoIHdoZW4gYSB0ZXN0IGlzXG4gICAgLy8gZnVsbHkgc3luY2hyb25vdXMuIFRPRE8oanVsaWVtcik6IHJlbW92ZSB0aGlzIHdoZW4gdGhlIGxvZ2ljIGZvclxuICAgIC8vIG9uSGFzVGFzayBjaGFuZ2VzIGFuZCBpdCBjYWxscyB3aGVuZXZlciB0aGUgdGFzayBxdWV1ZXMgYXJlIGRpcnR5LlxuICAgIC8vIHVwZGF0ZWQgYnkoSmlhTGlQYXNzaW9uKSwgb25seSBjYWxsIGZpbmlzaCBjYWxsYmFjayB3aGVuIG5vIHRhc2tcbiAgICAvLyB3YXMgc2NoZWR1bGVkL2ludm9rZWQvY2FuY2VsZWQuXG4gICAgb25JbnZva2UoXG4gICAgICAgIHBhcmVudFpvbmVEZWxlZ2F0ZTogWm9uZURlbGVnYXRlLCBjdXJyZW50Wm9uZTogWm9uZSwgdGFyZ2V0Wm9uZTogWm9uZSwgZGVsZWdhdGU6IEZ1bmN0aW9uLFxuICAgICAgICBhcHBseVRoaXM6IGFueSwgYXBwbHlBcmdzPzogYW55W10sIHNvdXJjZT86IHN0cmluZyk6IGFueSB7XG4gICAgICBsZXQgcHJldmlvdXNUYXNrQ291bnRzOiBhbnkgPSBudWxsO1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcy5faXNTeW5jID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHBhcmVudFpvbmVEZWxlZ2F0ZS5pbnZva2UodGFyZ2V0Wm9uZSwgZGVsZWdhdGUsIGFwcGx5VGhpcywgYXBwbHlBcmdzLCBzb3VyY2UpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgY29uc3QgYWZ0ZXJUYXNrQ291bnRzOiBhbnkgPSAocGFyZW50Wm9uZURlbGVnYXRlIGFzIGFueSkuX3Rhc2tDb3VudHM7XG4gICAgICAgIGlmICh0aGlzLl9pc1N5bmMpIHtcbiAgICAgICAgICB0aGlzLl9maW5pc2hDYWxsYmFja0lmRG9uZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgb25IYW5kbGVFcnJvcihcbiAgICAgICAgcGFyZW50Wm9uZURlbGVnYXRlOiBab25lRGVsZWdhdGUsIGN1cnJlbnRab25lOiBab25lLCB0YXJnZXRab25lOiBab25lLFxuICAgICAgICBlcnJvcjogYW55KTogYm9vbGVhbiB7XG4gICAgICAvLyBMZXQgdGhlIHBhcmVudCB0cnkgdG8gaGFuZGxlIHRoZSBlcnJvci5cbiAgICAgIGNvbnN0IHJlc3VsdCA9IHBhcmVudFpvbmVEZWxlZ2F0ZS5oYW5kbGVFcnJvcih0YXJnZXRab25lLCBlcnJvcik7XG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIHRoaXMuZmFpbENhbGxiYWNrKGVycm9yKTtcbiAgICAgICAgdGhpcy5fYWxyZWFkeUVycm9yZWQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIG9uSGFzVGFzayhkZWxlZ2F0ZTogWm9uZURlbGVnYXRlLCBjdXJyZW50OiBab25lLCB0YXJnZXQ6IFpvbmUsIGhhc1Rhc2tTdGF0ZTogSGFzVGFza1N0YXRlKSB7XG4gICAgICBkZWxlZ2F0ZS5oYXNUYXNrKHRhcmdldCwgaGFzVGFza1N0YXRlKTtcbiAgICAgIGlmIChoYXNUYXNrU3RhdGUuY2hhbmdlID09ICdtaWNyb1Rhc2snKSB7XG4gICAgICAgIHRoaXMuX3BlbmRpbmdNaWNyb1Rhc2tzID0gaGFzVGFza1N0YXRlLm1pY3JvVGFzaztcbiAgICAgICAgdGhpcy5fZmluaXNoQ2FsbGJhY2tJZkRvbmUoKTtcbiAgICAgIH0gZWxzZSBpZiAoaGFzVGFza1N0YXRlLmNoYW5nZSA9PSAnbWFjcm9UYXNrJykge1xuICAgICAgICB0aGlzLl9wZW5kaW5nTWFjcm9UYXNrcyA9IGhhc1Rhc2tTdGF0ZS5tYWNyb1Rhc2s7XG4gICAgICAgIHRoaXMuX2ZpbmlzaENhbGxiYWNrSWZEb25lKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gRXhwb3J0IHRoZSBjbGFzcyBzbyB0aGF0IG5ldyBpbnN0YW5jZXMgY2FuIGJlIGNyZWF0ZWQgd2l0aCBwcm9wZXJcbiAgLy8gY29uc3RydWN0b3IgcGFyYW1zLlxuICAoWm9uZSBhcyBhbnkpWydBc3luY1Rlc3Rab25lU3BlYyddID0gQXN5bmNUZXN0Wm9uZVNwZWM7XG59KSh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cgfHwgdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYgfHwgZ2xvYmFsKTtcbiJdfQ==