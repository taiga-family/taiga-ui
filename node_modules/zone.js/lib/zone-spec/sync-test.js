"use strict";
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var SyncTestZoneSpec = /** @class */ (function () {
    function SyncTestZoneSpec(namePrefix) {
        this.runZone = Zone.current;
        this.name = 'syncTestZone for ' + namePrefix;
    }
    SyncTestZoneSpec.prototype.onScheduleTask = function (delegate, current, target, task) {
        switch (task.type) {
            case 'microTask':
            case 'macroTask':
                throw new Error("Cannot call " + task.source + " from within a sync test.");
            case 'eventTask':
                task = delegate.scheduleTask(target, task);
                break;
        }
        return task;
    };
    return SyncTestZoneSpec;
}());
// Export the class so that new instances can be created with proper
// constructor params.
Zone['SyncTestZoneSpec'] = SyncTestZoneSpec;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3luYy10ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvem9uZS5qcy9saWIvem9uZS1zcGVjL3N5bmMtdGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7OztHQU1HO0FBRUg7SUFHRSwwQkFBWSxVQUFrQjtRQUY5QixZQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUVXLElBQUksQ0FBQyxJQUFJLEdBQUcsbUJBQW1CLEdBQUcsVUFBVSxDQUFDO0lBQUMsQ0FBQztJQU1qRix5Q0FBYyxHQUFkLFVBQWUsUUFBc0IsRUFBRSxPQUFhLEVBQUUsTUFBWSxFQUFFLElBQVU7UUFDNUUsUUFBUSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2pCLEtBQUssV0FBVyxDQUFDO1lBQ2pCLEtBQUssV0FBVztnQkFDZCxNQUFNLElBQUksS0FBSyxDQUFDLGlCQUFlLElBQUksQ0FBQyxNQUFNLDhCQUEyQixDQUFDLENBQUM7WUFDekUsS0FBSyxXQUFXO2dCQUNkLElBQUksR0FBRyxRQUFRLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDM0MsTUFBTTtTQUNUO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBQ0gsdUJBQUM7QUFBRCxDQUFDLEFBcEJELElBb0JDO0FBRUQsb0VBQW9FO0FBQ3BFLHNCQUFzQjtBQUNyQixJQUFZLENBQUMsa0JBQWtCLENBQUMsR0FBRyxnQkFBZ0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuY2xhc3MgU3luY1Rlc3Rab25lU3BlYyBpbXBsZW1lbnRzIFpvbmVTcGVjIHtcbiAgcnVuWm9uZSA9IFpvbmUuY3VycmVudDtcblxuICBjb25zdHJ1Y3RvcihuYW1lUHJlZml4OiBzdHJpbmcpIHsgdGhpcy5uYW1lID0gJ3N5bmNUZXN0Wm9uZSBmb3IgJyArIG5hbWVQcmVmaXg7IH1cblxuICAvLyBab25lU3BlYyBpbXBsZW1lbnRhdGlvbiBiZWxvdy5cblxuICBuYW1lOiBzdHJpbmc7XG5cbiAgb25TY2hlZHVsZVRhc2soZGVsZWdhdGU6IFpvbmVEZWxlZ2F0ZSwgY3VycmVudDogWm9uZSwgdGFyZ2V0OiBab25lLCB0YXNrOiBUYXNrKTogVGFzayB7XG4gICAgc3dpdGNoICh0YXNrLnR5cGUpIHtcbiAgICAgIGNhc2UgJ21pY3JvVGFzayc6XG4gICAgICBjYXNlICdtYWNyb1Rhc2snOlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBjYWxsICR7dGFzay5zb3VyY2V9IGZyb20gd2l0aGluIGEgc3luYyB0ZXN0LmApO1xuICAgICAgY2FzZSAnZXZlbnRUYXNrJzpcbiAgICAgICAgdGFzayA9IGRlbGVnYXRlLnNjaGVkdWxlVGFzayh0YXJnZXQsIHRhc2spO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIHRhc2s7XG4gIH1cbn1cblxuLy8gRXhwb3J0IHRoZSBjbGFzcyBzbyB0aGF0IG5ldyBpbnN0YW5jZXMgY2FuIGJlIGNyZWF0ZWQgd2l0aCBwcm9wZXJcbi8vIGNvbnN0cnVjdG9yIHBhcmFtcy5cbihab25lIGFzIGFueSlbJ1N5bmNUZXN0Wm9uZVNwZWMnXSA9IFN5bmNUZXN0Wm9uZVNwZWM7XG4iXX0=