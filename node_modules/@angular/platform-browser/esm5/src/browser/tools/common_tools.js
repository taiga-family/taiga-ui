/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ɵgetDOM as getDOM } from '@angular/common';
import { ApplicationRef } from '@angular/core';
import { window } from './browser';
var ChangeDetectionPerfRecord = /** @class */ (function () {
    function ChangeDetectionPerfRecord(msPerTick, numTicks) {
        this.msPerTick = msPerTick;
        this.numTicks = numTicks;
    }
    return ChangeDetectionPerfRecord;
}());
export { ChangeDetectionPerfRecord };
/**
 * Entry point for all Angular profiling-related debug tools. This object
 * corresponds to the `ng.profiler` in the dev console.
 */
var AngularProfiler = /** @class */ (function () {
    function AngularProfiler(ref) {
        this.appRef = ref.injector.get(ApplicationRef);
    }
    // tslint:disable:no-console
    /**
     * Exercises change detection in a loop and then prints the average amount of
     * time in milliseconds how long a single round of change detection takes for
     * the current state of the UI. It runs a minimum of 5 rounds for a minimum
     * of 500 milliseconds.
     *
     * Optionally, a user may pass a `config` parameter containing a map of
     * options. Supported options are:
     *
     * `record` (boolean) - causes the profiler to record a CPU profile while
     * it exercises the change detector. Example:
     *
     * ```
     * ng.profiler.timeChangeDetection({record: true})
     * ```
     */
    AngularProfiler.prototype.timeChangeDetection = function (config) {
        var record = config && config['record'];
        var profileName = 'Change Detection';
        // Profiler is not available in Android browsers, nor in IE 9 without dev tools opened
        var isProfilerAvailable = window.console.profile != null;
        if (record && isProfilerAvailable) {
            window.console.profile(profileName);
        }
        var start = getDOM().performanceNow();
        var numTicks = 0;
        while (numTicks < 5 || (getDOM().performanceNow() - start) < 500) {
            this.appRef.tick();
            numTicks++;
        }
        var end = getDOM().performanceNow();
        if (record && isProfilerAvailable) {
            window.console.profileEnd(profileName);
        }
        var msPerTick = (end - start) / numTicks;
        window.console.log("ran " + numTicks + " change detection cycles");
        window.console.log(msPerTick.toFixed(2) + " ms per check");
        return new ChangeDetectionPerfRecord(msPerTick, numTicks);
    };
    return AngularProfiler;
}());
export { AngularProfiler };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uX3Rvb2xzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvcGxhdGZvcm0tYnJvd3Nlci9zcmMvYnJvd3Nlci90b29scy9jb21tb25fdG9vbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFDLE9BQU8sSUFBSSxNQUFNLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUNsRCxPQUFPLEVBQUMsY0FBYyxFQUFlLE1BQU0sZUFBZSxDQUFDO0FBQzNELE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxXQUFXLENBQUM7QUFFakM7SUFDRSxtQ0FBbUIsU0FBaUIsRUFBUyxRQUFnQjtRQUExQyxjQUFTLEdBQVQsU0FBUyxDQUFRO1FBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBUTtJQUFHLENBQUM7SUFDbkUsZ0NBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQzs7QUFFRDs7O0dBR0c7QUFDSDtJQUdFLHlCQUFZLEdBQXNCO1FBQ2hDLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVELDRCQUE0QjtJQUM1Qjs7Ozs7Ozs7Ozs7Ozs7O09BZUc7SUFDSCw2Q0FBbUIsR0FBbkIsVUFBb0IsTUFBVztRQUM3QixJQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzFDLElBQU0sV0FBVyxHQUFHLGtCQUFrQixDQUFDO1FBQ3ZDLHNGQUFzRjtRQUN0RixJQUFNLG1CQUFtQixHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQztRQUMzRCxJQUFJLE1BQU0sSUFBSSxtQkFBbUIsRUFBRTtZQUNqQyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUNyQztRQUNELElBQU0sS0FBSyxHQUFHLE1BQU0sRUFBRSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hDLElBQUksUUFBUSxHQUFHLENBQUMsQ0FBQztRQUNqQixPQUFPLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxjQUFjLEVBQUUsR0FBRyxLQUFLLENBQUMsR0FBRyxHQUFHLEVBQUU7WUFDaEUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNuQixRQUFRLEVBQUUsQ0FBQztTQUNaO1FBQ0QsSUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFFLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEMsSUFBSSxNQUFNLElBQUksbUJBQW1CLEVBQUU7WUFDakMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDeEM7UUFDRCxJQUFNLFNBQVMsR0FBRyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsR0FBRyxRQUFRLENBQUM7UUFDM0MsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBTyxRQUFRLDZCQUEwQixDQUFDLENBQUM7UUFDOUQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUksU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsa0JBQWUsQ0FBQyxDQUFDO1FBRTNELE9BQU8sSUFBSSx5QkFBeUIsQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FBQyxBQWhERCxJQWdEQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHvJtWdldERPTSBhcyBnZXRET019IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge0FwcGxpY2F0aW9uUmVmLCBDb21wb25lbnRSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHt3aW5kb3d9IGZyb20gJy4vYnJvd3Nlcic7XG5cbmV4cG9ydCBjbGFzcyBDaGFuZ2VEZXRlY3Rpb25QZXJmUmVjb3JkIHtcbiAgY29uc3RydWN0b3IocHVibGljIG1zUGVyVGljazogbnVtYmVyLCBwdWJsaWMgbnVtVGlja3M6IG51bWJlcikge31cbn1cblxuLyoqXG4gKiBFbnRyeSBwb2ludCBmb3IgYWxsIEFuZ3VsYXIgcHJvZmlsaW5nLXJlbGF0ZWQgZGVidWcgdG9vbHMuIFRoaXMgb2JqZWN0XG4gKiBjb3JyZXNwb25kcyB0byB0aGUgYG5nLnByb2ZpbGVyYCBpbiB0aGUgZGV2IGNvbnNvbGUuXG4gKi9cbmV4cG9ydCBjbGFzcyBBbmd1bGFyUHJvZmlsZXIge1xuICBhcHBSZWY6IEFwcGxpY2F0aW9uUmVmO1xuXG4gIGNvbnN0cnVjdG9yKHJlZjogQ29tcG9uZW50UmVmPGFueT4pIHtcbiAgICB0aGlzLmFwcFJlZiA9IHJlZi5pbmplY3Rvci5nZXQoQXBwbGljYXRpb25SZWYpO1xuICB9XG5cbiAgLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuICAvKipcbiAgICogRXhlcmNpc2VzIGNoYW5nZSBkZXRlY3Rpb24gaW4gYSBsb29wIGFuZCB0aGVuIHByaW50cyB0aGUgYXZlcmFnZSBhbW91bnQgb2ZcbiAgICogdGltZSBpbiBtaWxsaXNlY29uZHMgaG93IGxvbmcgYSBzaW5nbGUgcm91bmQgb2YgY2hhbmdlIGRldGVjdGlvbiB0YWtlcyBmb3JcbiAgICogdGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIFVJLiBJdCBydW5zIGEgbWluaW11bSBvZiA1IHJvdW5kcyBmb3IgYSBtaW5pbXVtXG4gICAqIG9mIDUwMCBtaWxsaXNlY29uZHMuXG4gICAqXG4gICAqIE9wdGlvbmFsbHksIGEgdXNlciBtYXkgcGFzcyBhIGBjb25maWdgIHBhcmFtZXRlciBjb250YWluaW5nIGEgbWFwIG9mXG4gICAqIG9wdGlvbnMuIFN1cHBvcnRlZCBvcHRpb25zIGFyZTpcbiAgICpcbiAgICogYHJlY29yZGAgKGJvb2xlYW4pIC0gY2F1c2VzIHRoZSBwcm9maWxlciB0byByZWNvcmQgYSBDUFUgcHJvZmlsZSB3aGlsZVxuICAgKiBpdCBleGVyY2lzZXMgdGhlIGNoYW5nZSBkZXRlY3Rvci4gRXhhbXBsZTpcbiAgICpcbiAgICogYGBgXG4gICAqIG5nLnByb2ZpbGVyLnRpbWVDaGFuZ2VEZXRlY3Rpb24oe3JlY29yZDogdHJ1ZX0pXG4gICAqIGBgYFxuICAgKi9cbiAgdGltZUNoYW5nZURldGVjdGlvbihjb25maWc6IGFueSk6IENoYW5nZURldGVjdGlvblBlcmZSZWNvcmQge1xuICAgIGNvbnN0IHJlY29yZCA9IGNvbmZpZyAmJiBjb25maWdbJ3JlY29yZCddO1xuICAgIGNvbnN0IHByb2ZpbGVOYW1lID0gJ0NoYW5nZSBEZXRlY3Rpb24nO1xuICAgIC8vIFByb2ZpbGVyIGlzIG5vdCBhdmFpbGFibGUgaW4gQW5kcm9pZCBicm93c2Vycywgbm9yIGluIElFIDkgd2l0aG91dCBkZXYgdG9vbHMgb3BlbmVkXG4gICAgY29uc3QgaXNQcm9maWxlckF2YWlsYWJsZSA9IHdpbmRvdy5jb25zb2xlLnByb2ZpbGUgIT0gbnVsbDtcbiAgICBpZiAocmVjb3JkICYmIGlzUHJvZmlsZXJBdmFpbGFibGUpIHtcbiAgICAgIHdpbmRvdy5jb25zb2xlLnByb2ZpbGUocHJvZmlsZU5hbWUpO1xuICAgIH1cbiAgICBjb25zdCBzdGFydCA9IGdldERPTSgpLnBlcmZvcm1hbmNlTm93KCk7XG4gICAgbGV0IG51bVRpY2tzID0gMDtcbiAgICB3aGlsZSAobnVtVGlja3MgPCA1IHx8IChnZXRET00oKS5wZXJmb3JtYW5jZU5vdygpIC0gc3RhcnQpIDwgNTAwKSB7XG4gICAgICB0aGlzLmFwcFJlZi50aWNrKCk7XG4gICAgICBudW1UaWNrcysrO1xuICAgIH1cbiAgICBjb25zdCBlbmQgPSBnZXRET00oKS5wZXJmb3JtYW5jZU5vdygpO1xuICAgIGlmIChyZWNvcmQgJiYgaXNQcm9maWxlckF2YWlsYWJsZSkge1xuICAgICAgd2luZG93LmNvbnNvbGUucHJvZmlsZUVuZChwcm9maWxlTmFtZSk7XG4gICAgfVxuICAgIGNvbnN0IG1zUGVyVGljayA9IChlbmQgLSBzdGFydCkgLyBudW1UaWNrcztcbiAgICB3aW5kb3cuY29uc29sZS5sb2coYHJhbiAke251bVRpY2tzfSBjaGFuZ2UgZGV0ZWN0aW9uIGN5Y2xlc2ApO1xuICAgIHdpbmRvdy5jb25zb2xlLmxvZyhgJHttc1BlclRpY2sudG9GaXhlZCgyKX0gbXMgcGVyIGNoZWNrYCk7XG5cbiAgICByZXR1cm4gbmV3IENoYW5nZURldGVjdGlvblBlcmZSZWNvcmQobXNQZXJUaWNrLCBudW1UaWNrcyk7XG4gIH1cbn1cbiJdfQ==