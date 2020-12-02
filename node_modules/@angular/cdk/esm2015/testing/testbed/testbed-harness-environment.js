/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __awaiter } from "tslib";
import { HarnessEnvironment } from '@angular/cdk/testing';
import { flush } from '@angular/core/testing';
import { takeWhile } from 'rxjs/operators';
import { TaskStateZoneInterceptor } from './task-state-zone-interceptor';
import { UnitTestElement } from './unit-test-element';
/** The default environment options. */
const defaultEnvironmentOptions = {
    queryFn: (selector, root) => root.querySelectorAll(selector)
};
/** A `HarnessEnvironment` implementation for Angular's Testbed. */
export class TestbedHarnessEnvironment extends HarnessEnvironment {
    constructor(rawRootElement, _fixture, options) {
        super(rawRootElement);
        this._fixture = _fixture;
        /** Whether the environment has been destroyed. */
        this._destroyed = false;
        this._options = Object.assign(Object.assign({}, defaultEnvironmentOptions), options);
        this._taskState = TaskStateZoneInterceptor.setup();
        _fixture.componentRef.onDestroy(() => this._destroyed = true);
    }
    /** Creates a `HarnessLoader` rooted at the given fixture's root element. */
    static loader(fixture, options) {
        return new TestbedHarnessEnvironment(fixture.nativeElement, fixture, options);
    }
    /**
     * Creates a `HarnessLoader` at the document root. This can be used if harnesses are
     * located outside of a fixture (e.g. overlays appended to the document body).
     */
    static documentRootLoader(fixture, options) {
        return new TestbedHarnessEnvironment(document.body, fixture, options);
    }
    /**
     * Creates an instance of the given harness type, using the fixture's root element as the
     * harness's host element. This method should be used when creating a harness for the root element
     * of a fixture, as components do not have the correct selector when they are created as the root
     * of the fixture.
     */
    static harnessForFixture(fixture, harnessType, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const environment = new TestbedHarnessEnvironment(fixture.nativeElement, fixture, options);
            yield environment.forceStabilize();
            return environment.createComponentHarness(harnessType, fixture.nativeElement);
        });
    }
    forceStabilize() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._destroyed) {
                throw Error('Harness is attempting to use a fixture that has already been destroyed.');
            }
            this._fixture.detectChanges();
            yield this._fixture.whenStable();
        });
    }
    waitForTasksOutsideAngular() {
        return __awaiter(this, void 0, void 0, function* () {
            // If we run in the fake async zone, we run "flush" to run any scheduled tasks. This
            // ensures that the harnesses behave inside of the FakeAsyncTestZone similar to the
            // "AsyncTestZone" and the root zone (i.e. neither fakeAsync or async). Note that we
            // cannot just rely on the task state observable to become stable because the state will
            // never change. This is because the task queue will be only drained if the fake async
            // zone is being flushed.
            if (Zone.current.get('FakeAsyncTestZoneSpec')) {
                flush();
            }
            // Wait until the task queue has been drained and the zone is stable. Note that
            // we cannot rely on "fixture.whenStable" since it does not catch tasks scheduled
            // outside of the Angular zone. For test harnesses, we want to ensure that the
            // app is fully stabilized and therefore need to use our own zone interceptor.
            yield this._taskState.pipe(takeWhile(state => !state.stable)).toPromise();
        });
    }
    getDocumentRoot() {
        return document.body;
    }
    createTestElement(element) {
        return new UnitTestElement(element, () => this.forceStabilize());
    }
    createEnvironment(element) {
        return new TestbedHarnessEnvironment(element, this._fixture, this._options);
    }
    getAllRawElements(selector) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.forceStabilize();
            return Array.from(this._options.queryFn(selector, this.rawRootElement));
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdGJlZC1oYXJuZXNzLWVudmlyb25tZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2Nkay90ZXN0aW5nL3Rlc3RiZWQvdGVzdGJlZC1oYXJuZXNzLWVudmlyb25tZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7QUFFSCxPQUFPLEVBR0wsa0JBQWtCLEVBR25CLE1BQU0sc0JBQXNCLENBQUM7QUFDOUIsT0FBTyxFQUFtQixLQUFLLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUU5RCxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDekMsT0FBTyxFQUFZLHdCQUF3QixFQUFDLE1BQU0sK0JBQStCLENBQUM7QUFDbEYsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBUXBELHVDQUF1QztBQUN2QyxNQUFNLHlCQUF5QixHQUFxQztJQUNsRSxPQUFPLEVBQUUsQ0FBQyxRQUFnQixFQUFFLElBQWEsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQztDQUM5RSxDQUFDO0FBRUYsbUVBQW1FO0FBQ25FLE1BQU0sT0FBTyx5QkFBMEIsU0FBUSxrQkFBMkI7SUFVeEUsWUFBc0IsY0FBdUIsRUFBVSxRQUFtQyxFQUN0RixPQUEwQztRQUM1QyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUM7UUFGK0IsYUFBUSxHQUFSLFFBQVEsQ0FBMkI7UUFUMUYsa0RBQWtEO1FBQzFDLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFXekIsSUFBSSxDQUFDLFFBQVEsbUNBQU8seUJBQXlCLEdBQUssT0FBTyxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLFVBQVUsR0FBRyx3QkFBd0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNuRCxRQUFRLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRCw0RUFBNEU7SUFDNUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFrQyxFQUFFLE9BQTBDO1FBRTFGLE9BQU8sSUFBSSx5QkFBeUIsQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNoRixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLGtCQUFrQixDQUFDLE9BQWtDLEVBQ3hELE9BQTBDO1FBQzVDLE9BQU8sSUFBSSx5QkFBeUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxNQUFNLENBQU8saUJBQWlCLENBQzFCLE9BQWtDLEVBQUUsV0FBMkMsRUFDL0UsT0FBMEM7O1lBQzVDLE1BQU0sV0FBVyxHQUFHLElBQUkseUJBQXlCLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDM0YsTUFBTSxXQUFXLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDbkMsT0FBTyxXQUFXLENBQUMsc0JBQXNCLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNoRixDQUFDO0tBQUE7SUFFSyxjQUFjOztZQUNsQixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQ25CLE1BQU0sS0FBSyxDQUFDLHlFQUF5RSxDQUFDLENBQUM7YUFDeEY7WUFFRCxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQzlCLE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNuQyxDQUFDO0tBQUE7SUFFSywwQkFBMEI7O1lBQzlCLG9GQUFvRjtZQUNwRixtRkFBbUY7WUFDbkYsb0ZBQW9GO1lBQ3BGLHdGQUF3RjtZQUN4RixzRkFBc0Y7WUFDdEYseUJBQXlCO1lBQ3pCLElBQUksSUFBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsRUFBRTtnQkFDOUMsS0FBSyxFQUFFLENBQUM7YUFDVDtZQUVELCtFQUErRTtZQUMvRSxpRkFBaUY7WUFDakYsOEVBQThFO1lBQzlFLDhFQUE4RTtZQUM5RSxNQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDNUUsQ0FBQztLQUFBO0lBRVMsZUFBZTtRQUN2QixPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUM7SUFDdkIsQ0FBQztJQUVTLGlCQUFpQixDQUFDLE9BQWdCO1FBQzFDLE9BQU8sSUFBSSxlQUFlLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFFUyxpQkFBaUIsQ0FBQyxPQUFnQjtRQUMxQyxPQUFPLElBQUkseUJBQXlCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzlFLENBQUM7SUFFZSxpQkFBaUIsQ0FBQyxRQUFnQjs7WUFDaEQsTUFBTSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDNUIsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztRQUMxRSxDQUFDO0tBQUE7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge1xuICBDb21wb25lbnRIYXJuZXNzLFxuICBDb21wb25lbnRIYXJuZXNzQ29uc3RydWN0b3IsXG4gIEhhcm5lc3NFbnZpcm9ubWVudCxcbiAgSGFybmVzc0xvYWRlcixcbiAgVGVzdEVsZW1lbnRcbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL3Rlc3RpbmcnO1xuaW1wb3J0IHtDb21wb25lbnRGaXh0dXJlLCBmbHVzaH0gZnJvbSAnQGFuZ3VsYXIvY29yZS90ZXN0aW5nJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge3Rha2VXaGlsZX0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtUYXNrU3RhdGUsIFRhc2tTdGF0ZVpvbmVJbnRlcmNlcHRvcn0gZnJvbSAnLi90YXNrLXN0YXRlLXpvbmUtaW50ZXJjZXB0b3InO1xuaW1wb3J0IHtVbml0VGVzdEVsZW1lbnR9IGZyb20gJy4vdW5pdC10ZXN0LWVsZW1lbnQnO1xuXG4vKiogT3B0aW9ucyB0byBjb25maWd1cmUgdGhlIGVudmlyb25tZW50LiAqL1xuZXhwb3J0IGludGVyZmFjZSBUZXN0YmVkSGFybmVzc0Vudmlyb25tZW50T3B0aW9ucyB7XG4gIC8qKiBUaGUgcXVlcnkgZnVuY3Rpb24gdXNlZCB0byBmaW5kIERPTSBlbGVtZW50cy4gKi9cbiAgcXVlcnlGbjogKHNlbGVjdG9yOiBzdHJpbmcsIHJvb3Q6IEVsZW1lbnQpID0+IEl0ZXJhYmxlPEVsZW1lbnQ+IHwgQXJyYXlMaWtlPEVsZW1lbnQ+O1xufVxuXG4vKiogVGhlIGRlZmF1bHQgZW52aXJvbm1lbnQgb3B0aW9ucy4gKi9cbmNvbnN0IGRlZmF1bHRFbnZpcm9ubWVudE9wdGlvbnM6IFRlc3RiZWRIYXJuZXNzRW52aXJvbm1lbnRPcHRpb25zID0ge1xuICBxdWVyeUZuOiAoc2VsZWN0b3I6IHN0cmluZywgcm9vdDogRWxlbWVudCkgPT4gcm9vdC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKVxufTtcblxuLyoqIEEgYEhhcm5lc3NFbnZpcm9ubWVudGAgaW1wbGVtZW50YXRpb24gZm9yIEFuZ3VsYXIncyBUZXN0YmVkLiAqL1xuZXhwb3J0IGNsYXNzIFRlc3RiZWRIYXJuZXNzRW52aXJvbm1lbnQgZXh0ZW5kcyBIYXJuZXNzRW52aXJvbm1lbnQ8RWxlbWVudD4ge1xuICAvKiogV2hldGhlciB0aGUgZW52aXJvbm1lbnQgaGFzIGJlZW4gZGVzdHJveWVkLiAqL1xuICBwcml2YXRlIF9kZXN0cm95ZWQgPSBmYWxzZTtcblxuICAvKiogT2JzZXJ2YWJsZSB0aGF0IGVtaXRzIHdoZW5ldmVyIHRoZSB0ZXN0IHRhc2sgc3RhdGUgY2hhbmdlcy4gKi9cbiAgcHJpdmF0ZSBfdGFza1N0YXRlOiBPYnNlcnZhYmxlPFRhc2tTdGF0ZT47XG5cbiAgLyoqIFRoZSBvcHRpb25zIGZvciB0aGlzIGVudmlyb25tZW50LiAqL1xuICBwcml2YXRlIF9vcHRpb25zOiBUZXN0YmVkSGFybmVzc0Vudmlyb25tZW50T3B0aW9ucztcblxuICBwcm90ZWN0ZWQgY29uc3RydWN0b3IocmF3Um9vdEVsZW1lbnQ6IEVsZW1lbnQsIHByaXZhdGUgX2ZpeHR1cmU6IENvbXBvbmVudEZpeHR1cmU8dW5rbm93bj4sXG4gICAgICBvcHRpb25zPzogVGVzdGJlZEhhcm5lc3NFbnZpcm9ubWVudE9wdGlvbnMpIHtcbiAgICBzdXBlcihyYXdSb290RWxlbWVudCk7XG4gICAgdGhpcy5fb3B0aW9ucyA9IHsuLi5kZWZhdWx0RW52aXJvbm1lbnRPcHRpb25zLCAuLi5vcHRpb25zfTtcbiAgICB0aGlzLl90YXNrU3RhdGUgPSBUYXNrU3RhdGVab25lSW50ZXJjZXB0b3Iuc2V0dXAoKTtcbiAgICBfZml4dHVyZS5jb21wb25lbnRSZWYub25EZXN0cm95KCgpID0+IHRoaXMuX2Rlc3Ryb3llZCA9IHRydWUpO1xuICB9XG5cbiAgLyoqIENyZWF0ZXMgYSBgSGFybmVzc0xvYWRlcmAgcm9vdGVkIGF0IHRoZSBnaXZlbiBmaXh0dXJlJ3Mgcm9vdCBlbGVtZW50LiAqL1xuICBzdGF0aWMgbG9hZGVyKGZpeHR1cmU6IENvbXBvbmVudEZpeHR1cmU8dW5rbm93bj4sIG9wdGlvbnM/OiBUZXN0YmVkSGFybmVzc0Vudmlyb25tZW50T3B0aW9ucyk6XG4gICAgICBIYXJuZXNzTG9hZGVyIHtcbiAgICByZXR1cm4gbmV3IFRlc3RiZWRIYXJuZXNzRW52aXJvbm1lbnQoZml4dHVyZS5uYXRpdmVFbGVtZW50LCBmaXh0dXJlLCBvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgYEhhcm5lc3NMb2FkZXJgIGF0IHRoZSBkb2N1bWVudCByb290LiBUaGlzIGNhbiBiZSB1c2VkIGlmIGhhcm5lc3NlcyBhcmVcbiAgICogbG9jYXRlZCBvdXRzaWRlIG9mIGEgZml4dHVyZSAoZS5nLiBvdmVybGF5cyBhcHBlbmRlZCB0byB0aGUgZG9jdW1lbnQgYm9keSkuXG4gICAqL1xuICBzdGF0aWMgZG9jdW1lbnRSb290TG9hZGVyKGZpeHR1cmU6IENvbXBvbmVudEZpeHR1cmU8dW5rbm93bj4sXG4gICAgICBvcHRpb25zPzogVGVzdGJlZEhhcm5lc3NFbnZpcm9ubWVudE9wdGlvbnMpOiBIYXJuZXNzTG9hZGVyIHtcbiAgICByZXR1cm4gbmV3IFRlc3RiZWRIYXJuZXNzRW52aXJvbm1lbnQoZG9jdW1lbnQuYm9keSwgZml4dHVyZSwgb3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiB0aGUgZ2l2ZW4gaGFybmVzcyB0eXBlLCB1c2luZyB0aGUgZml4dHVyZSdzIHJvb3QgZWxlbWVudCBhcyB0aGVcbiAgICogaGFybmVzcydzIGhvc3QgZWxlbWVudC4gVGhpcyBtZXRob2Qgc2hvdWxkIGJlIHVzZWQgd2hlbiBjcmVhdGluZyBhIGhhcm5lc3MgZm9yIHRoZSByb290IGVsZW1lbnRcbiAgICogb2YgYSBmaXh0dXJlLCBhcyBjb21wb25lbnRzIGRvIG5vdCBoYXZlIHRoZSBjb3JyZWN0IHNlbGVjdG9yIHdoZW4gdGhleSBhcmUgY3JlYXRlZCBhcyB0aGUgcm9vdFxuICAgKiBvZiB0aGUgZml4dHVyZS5cbiAgICovXG4gIHN0YXRpYyBhc3luYyBoYXJuZXNzRm9yRml4dHVyZTxUIGV4dGVuZHMgQ29tcG9uZW50SGFybmVzcz4oXG4gICAgICBmaXh0dXJlOiBDb21wb25lbnRGaXh0dXJlPHVua25vd24+LCBoYXJuZXNzVHlwZTogQ29tcG9uZW50SGFybmVzc0NvbnN0cnVjdG9yPFQ+LFxuICAgICAgb3B0aW9ucz86IFRlc3RiZWRIYXJuZXNzRW52aXJvbm1lbnRPcHRpb25zKTogUHJvbWlzZTxUPiB7XG4gICAgY29uc3QgZW52aXJvbm1lbnQgPSBuZXcgVGVzdGJlZEhhcm5lc3NFbnZpcm9ubWVudChmaXh0dXJlLm5hdGl2ZUVsZW1lbnQsIGZpeHR1cmUsIG9wdGlvbnMpO1xuICAgIGF3YWl0IGVudmlyb25tZW50LmZvcmNlU3RhYmlsaXplKCk7XG4gICAgcmV0dXJuIGVudmlyb25tZW50LmNyZWF0ZUNvbXBvbmVudEhhcm5lc3MoaGFybmVzc1R5cGUsIGZpeHR1cmUubmF0aXZlRWxlbWVudCk7XG4gIH1cblxuICBhc3luYyBmb3JjZVN0YWJpbGl6ZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAodGhpcy5fZGVzdHJveWVkKSB7XG4gICAgICB0aHJvdyBFcnJvcignSGFybmVzcyBpcyBhdHRlbXB0aW5nIHRvIHVzZSBhIGZpeHR1cmUgdGhhdCBoYXMgYWxyZWFkeSBiZWVuIGRlc3Ryb3llZC4nKTtcbiAgICB9XG5cbiAgICB0aGlzLl9maXh0dXJlLmRldGVjdENoYW5nZXMoKTtcbiAgICBhd2FpdCB0aGlzLl9maXh0dXJlLndoZW5TdGFibGUoKTtcbiAgfVxuXG4gIGFzeW5jIHdhaXRGb3JUYXNrc091dHNpZGVBbmd1bGFyKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIC8vIElmIHdlIHJ1biBpbiB0aGUgZmFrZSBhc3luYyB6b25lLCB3ZSBydW4gXCJmbHVzaFwiIHRvIHJ1biBhbnkgc2NoZWR1bGVkIHRhc2tzLiBUaGlzXG4gICAgLy8gZW5zdXJlcyB0aGF0IHRoZSBoYXJuZXNzZXMgYmVoYXZlIGluc2lkZSBvZiB0aGUgRmFrZUFzeW5jVGVzdFpvbmUgc2ltaWxhciB0byB0aGVcbiAgICAvLyBcIkFzeW5jVGVzdFpvbmVcIiBhbmQgdGhlIHJvb3Qgem9uZSAoaS5lLiBuZWl0aGVyIGZha2VBc3luYyBvciBhc3luYykuIE5vdGUgdGhhdCB3ZVxuICAgIC8vIGNhbm5vdCBqdXN0IHJlbHkgb24gdGhlIHRhc2sgc3RhdGUgb2JzZXJ2YWJsZSB0byBiZWNvbWUgc3RhYmxlIGJlY2F1c2UgdGhlIHN0YXRlIHdpbGxcbiAgICAvLyBuZXZlciBjaGFuZ2UuIFRoaXMgaXMgYmVjYXVzZSB0aGUgdGFzayBxdWV1ZSB3aWxsIGJlIG9ubHkgZHJhaW5lZCBpZiB0aGUgZmFrZSBhc3luY1xuICAgIC8vIHpvbmUgaXMgYmVpbmcgZmx1c2hlZC5cbiAgICBpZiAoWm9uZSEuY3VycmVudC5nZXQoJ0Zha2VBc3luY1Rlc3Rab25lU3BlYycpKSB7XG4gICAgICBmbHVzaCgpO1xuICAgIH1cblxuICAgIC8vIFdhaXQgdW50aWwgdGhlIHRhc2sgcXVldWUgaGFzIGJlZW4gZHJhaW5lZCBhbmQgdGhlIHpvbmUgaXMgc3RhYmxlLiBOb3RlIHRoYXRcbiAgICAvLyB3ZSBjYW5ub3QgcmVseSBvbiBcImZpeHR1cmUud2hlblN0YWJsZVwiIHNpbmNlIGl0IGRvZXMgbm90IGNhdGNoIHRhc2tzIHNjaGVkdWxlZFxuICAgIC8vIG91dHNpZGUgb2YgdGhlIEFuZ3VsYXIgem9uZS4gRm9yIHRlc3QgaGFybmVzc2VzLCB3ZSB3YW50IHRvIGVuc3VyZSB0aGF0IHRoZVxuICAgIC8vIGFwcCBpcyBmdWxseSBzdGFiaWxpemVkIGFuZCB0aGVyZWZvcmUgbmVlZCB0byB1c2Ugb3VyIG93biB6b25lIGludGVyY2VwdG9yLlxuICAgIGF3YWl0IHRoaXMuX3Rhc2tTdGF0ZS5waXBlKHRha2VXaGlsZShzdGF0ZSA9PiAhc3RhdGUuc3RhYmxlKSkudG9Qcm9taXNlKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0RG9jdW1lbnRSb290KCk6IEVsZW1lbnQge1xuICAgIHJldHVybiBkb2N1bWVudC5ib2R5O1xuICB9XG5cbiAgcHJvdGVjdGVkIGNyZWF0ZVRlc3RFbGVtZW50KGVsZW1lbnQ6IEVsZW1lbnQpOiBUZXN0RWxlbWVudCB7XG4gICAgcmV0dXJuIG5ldyBVbml0VGVzdEVsZW1lbnQoZWxlbWVudCwgKCkgPT4gdGhpcy5mb3JjZVN0YWJpbGl6ZSgpKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBjcmVhdGVFbnZpcm9ubWVudChlbGVtZW50OiBFbGVtZW50KTogSGFybmVzc0Vudmlyb25tZW50PEVsZW1lbnQ+IHtcbiAgICByZXR1cm4gbmV3IFRlc3RiZWRIYXJuZXNzRW52aXJvbm1lbnQoZWxlbWVudCwgdGhpcy5fZml4dHVyZSwgdGhpcy5fb3B0aW9ucyk7XG4gIH1cblxuICBwcm90ZWN0ZWQgYXN5bmMgZ2V0QWxsUmF3RWxlbWVudHMoc2VsZWN0b3I6IHN0cmluZyk6IFByb21pc2U8RWxlbWVudFtdPiB7XG4gICAgYXdhaXQgdGhpcy5mb3JjZVN0YWJpbGl6ZSgpO1xuICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMuX29wdGlvbnMucXVlcnlGbihzZWxlY3RvciwgdGhpcy5yYXdSb290RWxlbWVudCkpO1xuICB9XG59XG4iXX0=