/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Type } from "@angular/core";
import { ComponentFixture, getTestBed, TestBed } from "@angular/core/testing";
/**
 * Reconfigures current test suit to prevent angular components re-compilation after every test run.
 * Forces angular test bed to re-create zone and all injectable services by directly
 * setting _instantiated variable to false after every test run.
 * Cleanups all the changes and reverts test bed configuration after suite has finished.
 *
 * @param configureAction an optional delegate which can be used to configure test bed for the current test suite
 * directly in the configureTestSuite call (you don't need extra BeforeAll in this case)
 */
export const /** @type {?} */ configureTestSuite = (configureAction) => {
    const /** @type {?} */ testBedApi = getTestBed();
    const /** @type {?} */ originReset = TestBed.resetTestingModule;
    beforeAll(() => {
        TestBed.resetTestingModule();
        TestBed.resetTestingModule = () => TestBed;
    });
    if (configureAction) {
        beforeAll((done) => (() => tslib_1.__awaiter(this, void 0, void 0, function* () {
            configureAction();
            yield TestBed.compileComponents();
        }))().then(done).catch(done.fail));
    }
    afterEach(() => {
        testBedApi._activeFixtures.forEach((fixture) => fixture.destroy());
        testBedApi._instantiated = false;
    });
    afterAll(() => {
        TestBed.resetTestingModule = originReset;
        TestBed.resetTestingModule();
    });
};
/**
 * A wrapper class around ComponentFixture, which provides useful accessros:
 * component - to access component instance of current the fixture
 * element - to access underlying native element of the current component
 * detectChanges - to run change detections using current fixture
 * resolve - to resolve a type using current fixture's injector
 */
export class TestCtx {
    /**
     * @param {?} fixture
     */
    constructor(fixture) {
        this.fixture = fixture;
    }
    /**
     * @return {?}
     */
    get component() { return this.fixture.componentInstance; }
    /**
     * @return {?}
     */
    get element() { return this.fixture.debugElement.nativeElement; }
    /**
     * @return {?}
     */
    detectChanges() { this.fixture.detectChanges(); }
    /**
     * @param {?} component
     * @return {?}
     */
    resolve(component) { return this.fixture.debugElement.injector.get(component); }
}
function TestCtx_tsickle_Closure_declarations() {
    /** @type {?} */
    TestCtx.prototype.fixture;
}
/**
 * Creates TestCtx instance for the Angular Component which is not initialized yet (no ngOnInit called)
 * Use case: you can override Component's providers before hooks are called.
 *
 * @param component - type of component to create instance of
 * *
 */
export const /** @type {?} */ createTestContext = (component) => {
    const /** @type {?} */ fixture = TestBed.createComponent(component);
    const /** @type {?} */ testCtx = new TestCtx(fixture);
    return testCtx;
};
/**
 * Same as \@function createTestContext, but waits till fixture becomes stable
 */
export const /** @type {?} */ createStableTestContext = (component) => tslib_1.__awaiter(this, void 0, void 0, function* () {
    const /** @type {?} */ testCtx = createTestContext(component);
    testCtx.detectChanges();
    yield testCtx.fixture.whenStable();
    testCtx.detectChanges();
    return testCtx;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdGluZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWJ1bGxldC8iLCJzb3VyY2VzIjpbInNyYy90ZXN0aW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBRSxzQkFBc0I7QUFDckMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsOEJBQThCOzs7Ozs7Ozs7O0FBVzlFLE1BQU0sQ0FBQyx1QkFBTSxrQkFBa0IsR0FBRyxDQUFDLGVBQTRCLEVBQUUsRUFBRTtJQUMvRCx1QkFBTSxVQUFVLEdBQVEsVUFBVSxFQUFFLENBQUM7SUFDckMsdUJBQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQztJQUUvQyxTQUFTLENBQUMsR0FBRyxFQUFFO1FBQ1gsT0FBTyxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDN0IsT0FBTyxDQUFDLGtCQUFrQixHQUFHLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQztLQUM5QyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO1FBQ2xCLFNBQVMsQ0FBQyxDQUFDLElBQVksRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFTLEVBQUU7WUFDcEMsZUFBZSxFQUFFLENBQUM7WUFDbEIsTUFBTSxPQUFPLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztVQUNyQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0tBQ3JDO0lBRUQsU0FBUyxDQUFDLEdBQUcsRUFBRTtRQUNYLFVBQVUsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBOEIsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDMUYsVUFBVSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7S0FDcEMsQ0FBQyxDQUFDO0lBRUgsUUFBUSxDQUFDLEdBQUcsRUFBRTtRQUNWLE9BQU8sQ0FBQyxrQkFBa0IsR0FBRyxXQUFXLENBQUM7UUFDekMsT0FBTyxDQUFDLGtCQUFrQixFQUFFLENBQUM7S0FDaEMsQ0FBQyxDQUFDO0NBQ04sQ0FBQzs7Ozs7Ozs7QUFTRixNQUFNOzs7O0lBQ0YsWUFBbUIsT0FBNEI7UUFBNUIsWUFBTyxHQUFQLE9BQU8sQ0FBcUI7S0FBSzs7OztRQUV6QyxTQUFTLEtBQUssTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUM7Ozs7UUFFcEQsT0FBTyxLQUFrQixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDOzs7O0lBRTVFLGFBQWEsS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDOzs7OztJQUUvQyxPQUFPLENBQUMsU0FBb0IsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztDQUNuRzs7Ozs7Ozs7Ozs7O0FBUUQsTUFBTSxDQUFDLHVCQUFNLGlCQUFpQixHQUFHLENBQUksU0FBa0IsRUFBRSxFQUFFO0lBQ3ZELHVCQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsZUFBZSxDQUFJLFNBQVMsQ0FBQyxDQUFDO0lBQ3RELHVCQUFNLE9BQU8sR0FBRyxJQUFJLE9BQU8sQ0FBSSxPQUFPLENBQUMsQ0FBQztJQUN4QyxNQUFNLENBQUMsT0FBTyxDQUFDO0NBQ2xCLENBQUM7Ozs7QUFHRixNQUFNLENBQUMsdUJBQU0sdUJBQXVCLEdBQUcsQ0FBVSxTQUFrQixFQUFFLEVBQUU7SUFDbkUsdUJBQU0sT0FBTyxHQUFHLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzdDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN4QixNQUFNLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDbkMsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3hCLE1BQU0sQ0FBQyxPQUFPLENBQUM7RUFDbEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tcG9uZW50Rml4dHVyZSwgZ2V0VGVzdEJlZCwgVGVzdEJlZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvdGVzdGluZyc7XHJcblxyXG4vKipcclxuICogUmVjb25maWd1cmVzIGN1cnJlbnQgdGVzdCBzdWl0IHRvIHByZXZlbnQgYW5ndWxhciBjb21wb25lbnRzIHJlLWNvbXBpbGF0aW9uIGFmdGVyIGV2ZXJ5IHRlc3QgcnVuLlxyXG4gKiBGb3JjZXMgYW5ndWxhciB0ZXN0IGJlZCB0byByZS1jcmVhdGUgem9uZSBhbmQgYWxsIGluamVjdGFibGUgc2VydmljZXMgYnkgZGlyZWN0bHlcclxuICogc2V0dGluZyBfaW5zdGFudGlhdGVkIHZhcmlhYmxlIHRvIGZhbHNlIGFmdGVyIGV2ZXJ5IHRlc3QgcnVuLlxyXG4gKiBDbGVhbnVwcyBhbGwgdGhlIGNoYW5nZXMgYW5kIHJldmVydHMgdGVzdCBiZWQgY29uZmlndXJhdGlvbiBhZnRlciBzdWl0ZSBoYXMgZmluaXNoZWQuXHJcbiAqXHJcbiAqIEBwYXJhbSBjb25maWd1cmVBY3Rpb24gYW4gb3B0aW9uYWwgZGVsZWdhdGUgd2hpY2ggY2FuIGJlIHVzZWQgdG8gY29uZmlndXJlIHRlc3QgYmVkIGZvciB0aGUgY3VycmVudCB0ZXN0IHN1aXRlXHJcbiAqIGRpcmVjdGx5IGluIHRoZSBjb25maWd1cmVUZXN0U3VpdGUgY2FsbCAoeW91IGRvbid0IG5lZWQgZXh0cmEgQmVmb3JlQWxsIGluIHRoaXMgY2FzZSlcclxuICovXHJcbmV4cG9ydCBjb25zdCBjb25maWd1cmVUZXN0U3VpdGUgPSAoY29uZmlndXJlQWN0aW9uPzogKCkgPT4gdm9pZCkgPT4ge1xyXG4gICAgY29uc3QgdGVzdEJlZEFwaTogYW55ID0gZ2V0VGVzdEJlZCgpO1xyXG4gICAgY29uc3Qgb3JpZ2luUmVzZXQgPSBUZXN0QmVkLnJlc2V0VGVzdGluZ01vZHVsZTtcclxuXHJcbiAgICBiZWZvcmVBbGwoKCkgPT4ge1xyXG4gICAgICAgIFRlc3RCZWQucmVzZXRUZXN0aW5nTW9kdWxlKCk7XHJcbiAgICAgICAgVGVzdEJlZC5yZXNldFRlc3RpbmdNb2R1bGUgPSAoKSA9PiBUZXN0QmVkO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKGNvbmZpZ3VyZUFjdGlvbikge1xyXG4gICAgICAgIGJlZm9yZUFsbCgoZG9uZTogRG9uZUZuKSA9PiAoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25maWd1cmVBY3Rpb24oKTtcclxuICAgICAgICAgICAgYXdhaXQgVGVzdEJlZC5jb21waWxlQ29tcG9uZW50cygpO1xyXG4gICAgICAgIH0pKCkudGhlbihkb25lKS5jYXRjaChkb25lLmZhaWwpKTtcclxuICAgIH1cclxuXHJcbiAgICBhZnRlckVhY2goKCkgPT4ge1xyXG4gICAgICAgIHRlc3RCZWRBcGkuX2FjdGl2ZUZpeHR1cmVzLmZvckVhY2goKGZpeHR1cmU6IENvbXBvbmVudEZpeHR1cmU8YW55PikgPT4gZml4dHVyZS5kZXN0cm95KCkpO1xyXG4gICAgICAgIHRlc3RCZWRBcGkuX2luc3RhbnRpYXRlZCA9IGZhbHNlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgYWZ0ZXJBbGwoKCkgPT4ge1xyXG4gICAgICAgIFRlc3RCZWQucmVzZXRUZXN0aW5nTW9kdWxlID0gb3JpZ2luUmVzZXQ7XHJcbiAgICAgICAgVGVzdEJlZC5yZXNldFRlc3RpbmdNb2R1bGUoKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEEgd3JhcHBlciBjbGFzcyBhcm91bmQgQ29tcG9uZW50Rml4dHVyZSwgd2hpY2ggcHJvdmlkZXMgdXNlZnVsIGFjY2Vzc3JvczpcclxuICogY29tcG9uZW50IC0gdG8gYWNjZXNzIGNvbXBvbmVudCBpbnN0YW5jZSBvZiBjdXJyZW50IHRoZSBmaXh0dXJlXHJcbiAqIGVsZW1lbnQgLSB0byBhY2Nlc3MgdW5kZXJseWluZyBuYXRpdmUgZWxlbWVudCBvZiB0aGUgY3VycmVudCBjb21wb25lbnRcclxuICogZGV0ZWN0Q2hhbmdlcyAtIHRvIHJ1biBjaGFuZ2UgZGV0ZWN0aW9ucyB1c2luZyBjdXJyZW50IGZpeHR1cmVcclxuICogcmVzb2x2ZSAtIHRvIHJlc29sdmUgYSB0eXBlIHVzaW5nIGN1cnJlbnQgZml4dHVyZSdzIGluamVjdG9yXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgVGVzdEN0eDxUPiB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZml4dHVyZTogQ29tcG9uZW50Rml4dHVyZTxUPikgeyB9XHJcblxyXG4gICAgcHVibGljIGdldCBjb21wb25lbnQoKSB7IHJldHVybiB0aGlzLmZpeHR1cmUuY29tcG9uZW50SW5zdGFuY2U7IH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGVsZW1lbnQoKTogSFRNTEVsZW1lbnQgeyByZXR1cm4gdGhpcy5maXh0dXJlLmRlYnVnRWxlbWVudC5uYXRpdmVFbGVtZW50OyB9XHJcblxyXG4gICAgcHVibGljIGRldGVjdENoYW5nZXMoKSB7IHRoaXMuZml4dHVyZS5kZXRlY3RDaGFuZ2VzKCk7IH1cclxuXHJcbiAgICBwdWJsaWMgcmVzb2x2ZShjb21wb25lbnQ6IFR5cGU8YW55PikgeyByZXR1cm4gdGhpcy5maXh0dXJlLmRlYnVnRWxlbWVudC5pbmplY3Rvci5nZXQoY29tcG9uZW50KTsgfVxyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBUZXN0Q3R4IGluc3RhbmNlIGZvciB0aGUgQW5ndWxhciBDb21wb25lbnQgd2hpY2ggaXMgbm90IGluaXRpYWxpemVkIHlldCAobm8gbmdPbkluaXQgY2FsbGVkKVxyXG4gKiBVc2UgY2FzZTogeW91IGNhbiBvdmVycmlkZSBDb21wb25lbnQncyBwcm92aWRlcnMgYmVmb3JlIGhvb2tzIGFyZSBjYWxsZWQuXHJcbiAqXHJcbiAqIEBwYXJhbSBjb21wb25lbnQgLSB0eXBlIG9mIGNvbXBvbmVudCB0byBjcmVhdGUgaW5zdGFuY2Ugb2ZcclxuICogKiovXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVUZXN0Q29udGV4dCA9IDxUPihjb21wb25lbnQ6IFR5cGU8VD4pID0+IHtcclxuICAgIGNvbnN0IGZpeHR1cmUgPSBUZXN0QmVkLmNyZWF0ZUNvbXBvbmVudDxUPihjb21wb25lbnQpO1xyXG4gICAgY29uc3QgdGVzdEN0eCA9IG5ldyBUZXN0Q3R4PFQ+KGZpeHR1cmUpO1xyXG4gICAgcmV0dXJuIHRlc3RDdHg7XHJcbn07XHJcblxyXG4vKipTYW1lIGFzIEBmdW5jdGlvbiBjcmVhdGVUZXN0Q29udGV4dCwgYnV0IHdhaXRzIHRpbGwgZml4dHVyZSBiZWNvbWVzIHN0YWJsZSAqL1xyXG5leHBvcnQgY29uc3QgY3JlYXRlU3RhYmxlVGVzdENvbnRleHQgPSBhc3luYyA8VD4oY29tcG9uZW50OiBUeXBlPFQ+KSA9PiB7XHJcbiAgICBjb25zdCB0ZXN0Q3R4ID0gY3JlYXRlVGVzdENvbnRleHQoY29tcG9uZW50KTtcclxuICAgIHRlc3RDdHguZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgYXdhaXQgdGVzdEN0eC5maXh0dXJlLndoZW5TdGFibGUoKTtcclxuICAgIHRlc3RDdHguZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgcmV0dXJuIHRlc3RDdHg7XHJcbn07XHJcbiJdfQ==