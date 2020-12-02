"use strict";
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A `TaskTrackingZoneSpec` allows one to track all outstanding Tasks.
 *
 * This is useful in tests. For example to see which tasks are preventing a test from completing
 * or an automated way of releasing all of the event listeners at the end of the test.
 */
var TaskTrackingZoneSpec = /** @class */ (function () {
    function TaskTrackingZoneSpec() {
        this.name = 'TaskTrackingZone';
        this.microTasks = [];
        this.macroTasks = [];
        this.eventTasks = [];
        this.properties = { 'TaskTrackingZone': this };
    }
    TaskTrackingZoneSpec.get = function () { return Zone.current.get('TaskTrackingZone'); };
    TaskTrackingZoneSpec.prototype.getTasksFor = function (type) {
        switch (type) {
            case 'microTask':
                return this.microTasks;
            case 'macroTask':
                return this.macroTasks;
            case 'eventTask':
                return this.eventTasks;
        }
        throw new Error('Unknown task format: ' + type);
    };
    TaskTrackingZoneSpec.prototype.onScheduleTask = function (parentZoneDelegate, currentZone, targetZone, task) {
        task['creationLocation'] = new Error("Task '" + task.type + "' from '" + task.source + "'.");
        var tasks = this.getTasksFor(task.type);
        tasks.push(task);
        return parentZoneDelegate.scheduleTask(targetZone, task);
    };
    TaskTrackingZoneSpec.prototype.onCancelTask = function (parentZoneDelegate, currentZone, targetZone, task) {
        var tasks = this.getTasksFor(task.type);
        for (var i = 0; i < tasks.length; i++) {
            if (tasks[i] == task) {
                tasks.splice(i, 1);
                break;
            }
        }
        return parentZoneDelegate.cancelTask(targetZone, task);
    };
    TaskTrackingZoneSpec.prototype.onInvokeTask = function (parentZoneDelegate, currentZone, targetZone, task, applyThis, applyArgs) {
        if (task.type === 'eventTask')
            return parentZoneDelegate.invokeTask(targetZone, task, applyThis, applyArgs);
        var tasks = this.getTasksFor(task.type);
        for (var i = 0; i < tasks.length; i++) {
            if (tasks[i] == task) {
                tasks.splice(i, 1);
                break;
            }
        }
        return parentZoneDelegate.invokeTask(targetZone, task, applyThis, applyArgs);
    };
    TaskTrackingZoneSpec.prototype.clearEvents = function () {
        while (this.eventTasks.length) {
            Zone.current.cancelTask(this.eventTasks[0]);
        }
    };
    return TaskTrackingZoneSpec;
}());
// Export the class so that new instances can be created with proper
// constructor params.
Zone['TaskTrackingZoneSpec'] = TaskTrackingZoneSpec;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFzay10cmFja2luZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3pvbmUuanMvbGliL3pvbmUtc3BlYy90YXNrLXRyYWNraW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7O0dBTUc7QUFFSDs7Ozs7R0FLRztBQUNIO0lBQUE7UUFDRSxTQUFJLEdBQUcsa0JBQWtCLENBQUM7UUFDMUIsZUFBVSxHQUFXLEVBQUUsQ0FBQztRQUN4QixlQUFVLEdBQVcsRUFBRSxDQUFDO1FBQ3hCLGVBQVUsR0FBVyxFQUFFLENBQUM7UUFDeEIsZUFBVSxHQUF5QixFQUFDLGtCQUFrQixFQUFFLElBQUksRUFBQyxDQUFDO0lBd0RoRSxDQUFDO0lBdERRLHdCQUFHLEdBQVYsY0FBZSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRXJELDBDQUFXLEdBQW5CLFVBQW9CLElBQVk7UUFDOUIsUUFBUSxJQUFJLEVBQUU7WUFDWixLQUFLLFdBQVc7Z0JBQ2QsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ3pCLEtBQUssV0FBVztnQkFDZCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDekIsS0FBSyxXQUFXO2dCQUNkLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztTQUMxQjtRQUNELE1BQU0sSUFBSSxLQUFLLENBQUMsdUJBQXVCLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELDZDQUFjLEdBQWQsVUFBZSxrQkFBZ0MsRUFBRSxXQUFpQixFQUFFLFVBQWdCLEVBQUUsSUFBVTtRQUU3RixJQUFZLENBQUMsa0JBQWtCLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxXQUFTLElBQUksQ0FBQyxJQUFJLGdCQUFXLElBQUksQ0FBQyxNQUFNLE9BQUksQ0FBQyxDQUFDO1FBQzVGLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakIsT0FBTyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRCwyQ0FBWSxHQUFaLFVBQWEsa0JBQWdDLEVBQUUsV0FBaUIsRUFBRSxVQUFnQixFQUFFLElBQVU7UUFFNUYsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDckMsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFFO2dCQUNwQixLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDbkIsTUFBTTthQUNQO1NBQ0Y7UUFDRCxPQUFPLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVELDJDQUFZLEdBQVosVUFDSSxrQkFBZ0MsRUFBRSxXQUFpQixFQUFFLFVBQWdCLEVBQUUsSUFBVSxFQUNqRixTQUFjLEVBQUUsU0FBYztRQUNoQyxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssV0FBVztZQUMzQixPQUFPLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUMvRSxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNyQyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLEVBQUU7Z0JBQ3BCLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNuQixNQUFNO2FBQ1A7U0FDRjtRQUNELE9BQU8sa0JBQWtCLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQy9FLENBQUM7SUFFRCwwQ0FBVyxHQUFYO1FBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRTtZQUM3QixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDN0M7SUFDSCxDQUFDO0lBQ0gsMkJBQUM7QUFBRCxDQUFDLEFBN0RELElBNkRDO0FBRUQsb0VBQW9FO0FBQ3BFLHNCQUFzQjtBQUNyQixJQUFZLENBQUMsc0JBQXNCLENBQUMsR0FBRyxvQkFBb0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuLyoqXG4gKiBBIGBUYXNrVHJhY2tpbmdab25lU3BlY2AgYWxsb3dzIG9uZSB0byB0cmFjayBhbGwgb3V0c3RhbmRpbmcgVGFza3MuXG4gKlxuICogVGhpcyBpcyB1c2VmdWwgaW4gdGVzdHMuIEZvciBleGFtcGxlIHRvIHNlZSB3aGljaCB0YXNrcyBhcmUgcHJldmVudGluZyBhIHRlc3QgZnJvbSBjb21wbGV0aW5nXG4gKiBvciBhbiBhdXRvbWF0ZWQgd2F5IG9mIHJlbGVhc2luZyBhbGwgb2YgdGhlIGV2ZW50IGxpc3RlbmVycyBhdCB0aGUgZW5kIG9mIHRoZSB0ZXN0LlxuICovXG5jbGFzcyBUYXNrVHJhY2tpbmdab25lU3BlYyBpbXBsZW1lbnRzIFpvbmVTcGVjIHtcbiAgbmFtZSA9ICdUYXNrVHJhY2tpbmdab25lJztcbiAgbWljcm9UYXNrczogVGFza1tdID0gW107XG4gIG1hY3JvVGFza3M6IFRhc2tbXSA9IFtdO1xuICBldmVudFRhc2tzOiBUYXNrW10gPSBbXTtcbiAgcHJvcGVydGllczoge1trZXk6IHN0cmluZ106IGFueX0gPSB7J1Rhc2tUcmFja2luZ1pvbmUnOiB0aGlzfTtcblxuICBzdGF0aWMgZ2V0KCkgeyByZXR1cm4gWm9uZS5jdXJyZW50LmdldCgnVGFza1RyYWNraW5nWm9uZScpOyB9XG5cbiAgcHJpdmF0ZSBnZXRUYXNrc0Zvcih0eXBlOiBzdHJpbmcpOiBUYXNrW10ge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnbWljcm9UYXNrJzpcbiAgICAgICAgcmV0dXJuIHRoaXMubWljcm9UYXNrcztcbiAgICAgIGNhc2UgJ21hY3JvVGFzayc6XG4gICAgICAgIHJldHVybiB0aGlzLm1hY3JvVGFza3M7XG4gICAgICBjYXNlICdldmVudFRhc2snOlxuICAgICAgICByZXR1cm4gdGhpcy5ldmVudFRhc2tzO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gdGFzayBmb3JtYXQ6ICcgKyB0eXBlKTtcbiAgfVxuXG4gIG9uU2NoZWR1bGVUYXNrKHBhcmVudFpvbmVEZWxlZ2F0ZTogWm9uZURlbGVnYXRlLCBjdXJyZW50Wm9uZTogWm9uZSwgdGFyZ2V0Wm9uZTogWm9uZSwgdGFzazogVGFzayk6XG4gICAgICBUYXNrIHtcbiAgICAodGFzayBhcyBhbnkpWydjcmVhdGlvbkxvY2F0aW9uJ10gPSBuZXcgRXJyb3IoYFRhc2sgJyR7dGFzay50eXBlfScgZnJvbSAnJHt0YXNrLnNvdXJjZX0nLmApO1xuICAgIGNvbnN0IHRhc2tzID0gdGhpcy5nZXRUYXNrc0Zvcih0YXNrLnR5cGUpO1xuICAgIHRhc2tzLnB1c2godGFzayk7XG4gICAgcmV0dXJuIHBhcmVudFpvbmVEZWxlZ2F0ZS5zY2hlZHVsZVRhc2sodGFyZ2V0Wm9uZSwgdGFzayk7XG4gIH1cblxuICBvbkNhbmNlbFRhc2socGFyZW50Wm9uZURlbGVnYXRlOiBab25lRGVsZWdhdGUsIGN1cnJlbnRab25lOiBab25lLCB0YXJnZXRab25lOiBab25lLCB0YXNrOiBUYXNrKTpcbiAgICAgIGFueSB7XG4gICAgY29uc3QgdGFza3MgPSB0aGlzLmdldFRhc2tzRm9yKHRhc2sudHlwZSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRhc2tzW2ldID09IHRhc2spIHtcbiAgICAgICAgdGFza3Muc3BsaWNlKGksIDEpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHBhcmVudFpvbmVEZWxlZ2F0ZS5jYW5jZWxUYXNrKHRhcmdldFpvbmUsIHRhc2spO1xuICB9XG5cbiAgb25JbnZva2VUYXNrKFxuICAgICAgcGFyZW50Wm9uZURlbGVnYXRlOiBab25lRGVsZWdhdGUsIGN1cnJlbnRab25lOiBab25lLCB0YXJnZXRab25lOiBab25lLCB0YXNrOiBUYXNrLFxuICAgICAgYXBwbHlUaGlzOiBhbnksIGFwcGx5QXJnczogYW55KTogYW55IHtcbiAgICBpZiAodGFzay50eXBlID09PSAnZXZlbnRUYXNrJylcbiAgICAgIHJldHVybiBwYXJlbnRab25lRGVsZWdhdGUuaW52b2tlVGFzayh0YXJnZXRab25lLCB0YXNrLCBhcHBseVRoaXMsIGFwcGx5QXJncyk7XG4gICAgY29uc3QgdGFza3MgPSB0aGlzLmdldFRhc2tzRm9yKHRhc2sudHlwZSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRhc2tzW2ldID09IHRhc2spIHtcbiAgICAgICAgdGFza3Muc3BsaWNlKGksIDEpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHBhcmVudFpvbmVEZWxlZ2F0ZS5pbnZva2VUYXNrKHRhcmdldFpvbmUsIHRhc2ssIGFwcGx5VGhpcywgYXBwbHlBcmdzKTtcbiAgfVxuXG4gIGNsZWFyRXZlbnRzKCkge1xuICAgIHdoaWxlICh0aGlzLmV2ZW50VGFza3MubGVuZ3RoKSB7XG4gICAgICBab25lLmN1cnJlbnQuY2FuY2VsVGFzayh0aGlzLmV2ZW50VGFza3NbMF0pO1xuICAgIH1cbiAgfVxufVxuXG4vLyBFeHBvcnQgdGhlIGNsYXNzIHNvIHRoYXQgbmV3IGluc3RhbmNlcyBjYW4gYmUgY3JlYXRlZCB3aXRoIHByb3BlclxuLy8gY29uc3RydWN0b3IgcGFyYW1zLlxuKFpvbmUgYXMgYW55KVsnVGFza1RyYWNraW5nWm9uZVNwZWMnXSA9IFRhc2tUcmFja2luZ1pvbmVTcGVjO1xuIl19