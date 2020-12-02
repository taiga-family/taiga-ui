import { __awaiter } from 'tslib';
import '@angular/core';
import { getTestBed, TestBed } from '@angular/core/testing';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Reconfigures current test suit to prevent angular components re-compilation after every test run.
 * Forces angular test bed to re-create zone and all injectable services by directly
 * setting _instantiated variable to false after every test run.
 * Cleanups all the changes and reverts test bed configuration after suite has finished.
 *
 * @param configureAction an optional delegate which can be used to configure test bed for the current test suite
 * directly in the configureTestSuite call (you don't need extra BeforeAll in this case)
 */
const /** @type {?} */ configureTestSuite = (configureAction) => {
    const /** @type {?} */ testBedApi = getTestBed();
    const /** @type {?} */ originReset = TestBed.resetTestingModule;
    beforeAll(() => {
        TestBed.resetTestingModule();
        TestBed.resetTestingModule = () => TestBed;
    });
    if (configureAction) {
        beforeAll((done) => (() => __awaiter(this, void 0, void 0, function* () {
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
class TestCtx {
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
/**
 * Creates TestCtx instance for the Angular Component which is not initialized yet (no ngOnInit called)
 * Use case: you can override Component's providers before hooks are called.
 *
 * @param component - type of component to create instance of
 * *
 */
const /** @type {?} */ createTestContext = (component) => {
    const /** @type {?} */ fixture = TestBed.createComponent(component);
    const /** @type {?} */ testCtx = new TestCtx(fixture);
    return testCtx;
};
/**
 * Same as \@function createTestContext, but waits till fixture becomes stable
 */
const /** @type {?} */ createStableTestContext = (component) => __awaiter(this, void 0, void 0, function* () {
    const /** @type {?} */ testCtx = createTestContext(component);
    testCtx.detectChanges();
    yield testCtx.fixture.whenStable();
    testCtx.detectChanges();
    return testCtx;
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { configureTestSuite, TestCtx, createTestContext, createStableTestContext };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctYnVsbGV0LmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZy1idWxsZXQvc3JjL3Rlc3RpbmcudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRGaXh0dXJlLCBnZXRUZXN0QmVkLCBUZXN0QmVkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZS90ZXN0aW5nJztcclxuXHJcbi8qKlxyXG4gKiBSZWNvbmZpZ3VyZXMgY3VycmVudCB0ZXN0IHN1aXQgdG8gcHJldmVudCBhbmd1bGFyIGNvbXBvbmVudHMgcmUtY29tcGlsYXRpb24gYWZ0ZXIgZXZlcnkgdGVzdCBydW4uXHJcbiAqIEZvcmNlcyBhbmd1bGFyIHRlc3QgYmVkIHRvIHJlLWNyZWF0ZSB6b25lIGFuZCBhbGwgaW5qZWN0YWJsZSBzZXJ2aWNlcyBieSBkaXJlY3RseVxyXG4gKiBzZXR0aW5nIF9pbnN0YW50aWF0ZWQgdmFyaWFibGUgdG8gZmFsc2UgYWZ0ZXIgZXZlcnkgdGVzdCBydW4uXHJcbiAqIENsZWFudXBzIGFsbCB0aGUgY2hhbmdlcyBhbmQgcmV2ZXJ0cyB0ZXN0IGJlZCBjb25maWd1cmF0aW9uIGFmdGVyIHN1aXRlIGhhcyBmaW5pc2hlZC5cclxuICpcclxuICogQHBhcmFtIGNvbmZpZ3VyZUFjdGlvbiBhbiBvcHRpb25hbCBkZWxlZ2F0ZSB3aGljaCBjYW4gYmUgdXNlZCB0byBjb25maWd1cmUgdGVzdCBiZWQgZm9yIHRoZSBjdXJyZW50IHRlc3Qgc3VpdGVcclxuICogZGlyZWN0bHkgaW4gdGhlIGNvbmZpZ3VyZVRlc3RTdWl0ZSBjYWxsICh5b3UgZG9uJ3QgbmVlZCBleHRyYSBCZWZvcmVBbGwgaW4gdGhpcyBjYXNlKVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGNvbmZpZ3VyZVRlc3RTdWl0ZSA9IChjb25maWd1cmVBY3Rpb24/OiAoKSA9PiB2b2lkKSA9PiB7XHJcbiAgICBjb25zdCB0ZXN0QmVkQXBpOiBhbnkgPSBnZXRUZXN0QmVkKCk7XHJcbiAgICBjb25zdCBvcmlnaW5SZXNldCA9IFRlc3RCZWQucmVzZXRUZXN0aW5nTW9kdWxlO1xyXG5cclxuICAgIGJlZm9yZUFsbCgoKSA9PiB7XHJcbiAgICAgICAgVGVzdEJlZC5yZXNldFRlc3RpbmdNb2R1bGUoKTtcclxuICAgICAgICBUZXN0QmVkLnJlc2V0VGVzdGluZ01vZHVsZSA9ICgpID0+IFRlc3RCZWQ7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoY29uZmlndXJlQWN0aW9uKSB7XHJcbiAgICAgICAgYmVmb3JlQWxsKChkb25lOiBEb25lRm4pID0+IChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbmZpZ3VyZUFjdGlvbigpO1xyXG4gICAgICAgICAgICBhd2FpdCBUZXN0QmVkLmNvbXBpbGVDb21wb25lbnRzKCk7XHJcbiAgICAgICAgfSkoKS50aGVuKGRvbmUpLmNhdGNoKGRvbmUuZmFpbCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGFmdGVyRWFjaCgoKSA9PiB7XHJcbiAgICAgICAgdGVzdEJlZEFwaS5fYWN0aXZlRml4dHVyZXMuZm9yRWFjaCgoZml4dHVyZTogQ29tcG9uZW50Rml4dHVyZTxhbnk+KSA9PiBmaXh0dXJlLmRlc3Ryb3koKSk7XHJcbiAgICAgICAgdGVzdEJlZEFwaS5faW5zdGFudGlhdGVkID0gZmFsc2U7XHJcbiAgICB9KTtcclxuXHJcbiAgICBhZnRlckFsbCgoKSA9PiB7XHJcbiAgICAgICAgVGVzdEJlZC5yZXNldFRlc3RpbmdNb2R1bGUgPSBvcmlnaW5SZXNldDtcclxuICAgICAgICBUZXN0QmVkLnJlc2V0VGVzdGluZ01vZHVsZSgpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG4vKipcclxuICogQSB3cmFwcGVyIGNsYXNzIGFyb3VuZCBDb21wb25lbnRGaXh0dXJlLCB3aGljaCBwcm92aWRlcyB1c2VmdWwgYWNjZXNzcm9zOlxyXG4gKiBjb21wb25lbnQgLSB0byBhY2Nlc3MgY29tcG9uZW50IGluc3RhbmNlIG9mIGN1cnJlbnQgdGhlIGZpeHR1cmVcclxuICogZWxlbWVudCAtIHRvIGFjY2VzcyB1bmRlcmx5aW5nIG5hdGl2ZSBlbGVtZW50IG9mIHRoZSBjdXJyZW50IGNvbXBvbmVudFxyXG4gKiBkZXRlY3RDaGFuZ2VzIC0gdG8gcnVuIGNoYW5nZSBkZXRlY3Rpb25zIHVzaW5nIGN1cnJlbnQgZml4dHVyZVxyXG4gKiByZXNvbHZlIC0gdG8gcmVzb2x2ZSBhIHR5cGUgdXNpbmcgY3VycmVudCBmaXh0dXJlJ3MgaW5qZWN0b3JcclxuICovXHJcbmV4cG9ydCBjbGFzcyBUZXN0Q3R4PFQ+IHtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBmaXh0dXJlOiBDb21wb25lbnRGaXh0dXJlPFQ+KSB7IH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGNvbXBvbmVudCgpIHsgcmV0dXJuIHRoaXMuZml4dHVyZS5jb21wb25lbnRJbnN0YW5jZTsgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgZWxlbWVudCgpOiBIVE1MRWxlbWVudCB7IHJldHVybiB0aGlzLmZpeHR1cmUuZGVidWdFbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7IH1cclxuXHJcbiAgICBwdWJsaWMgZGV0ZWN0Q2hhbmdlcygpIHsgdGhpcy5maXh0dXJlLmRldGVjdENoYW5nZXMoKTsgfVxyXG5cclxuICAgIHB1YmxpYyByZXNvbHZlKGNvbXBvbmVudDogVHlwZTxhbnk+KSB7IHJldHVybiB0aGlzLmZpeHR1cmUuZGVidWdFbGVtZW50LmluamVjdG9yLmdldChjb21wb25lbnQpOyB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIFRlc3RDdHggaW5zdGFuY2UgZm9yIHRoZSBBbmd1bGFyIENvbXBvbmVudCB3aGljaCBpcyBub3QgaW5pdGlhbGl6ZWQgeWV0IChubyBuZ09uSW5pdCBjYWxsZWQpXHJcbiAqIFVzZSBjYXNlOiB5b3UgY2FuIG92ZXJyaWRlIENvbXBvbmVudCdzIHByb3ZpZGVycyBiZWZvcmUgaG9va3MgYXJlIGNhbGxlZC5cclxuICpcclxuICogQHBhcmFtIGNvbXBvbmVudCAtIHR5cGUgb2YgY29tcG9uZW50IHRvIGNyZWF0ZSBpbnN0YW5jZSBvZlxyXG4gKiAqKi9cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZVRlc3RDb250ZXh0ID0gPFQ+KGNvbXBvbmVudDogVHlwZTxUPikgPT4ge1xyXG4gICAgY29uc3QgZml4dHVyZSA9IFRlc3RCZWQuY3JlYXRlQ29tcG9uZW50PFQ+KGNvbXBvbmVudCk7XHJcbiAgICBjb25zdCB0ZXN0Q3R4ID0gbmV3IFRlc3RDdHg8VD4oZml4dHVyZSk7XHJcbiAgICByZXR1cm4gdGVzdEN0eDtcclxufTtcclxuXHJcbi8qKlNhbWUgYXMgQGZ1bmN0aW9uIGNyZWF0ZVRlc3RDb250ZXh0LCBidXQgd2FpdHMgdGlsbCBmaXh0dXJlIGJlY29tZXMgc3RhYmxlICovXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVTdGFibGVUZXN0Q29udGV4dCA9IGFzeW5jIDxUPihjb21wb25lbnQ6IFR5cGU8VD4pID0+IHtcclxuICAgIGNvbnN0IHRlc3RDdHggPSBjcmVhdGVUZXN0Q29udGV4dChjb21wb25lbnQpO1xyXG4gICAgdGVzdEN0eC5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICBhd2FpdCB0ZXN0Q3R4LmZpeHR1cmUud2hlblN0YWJsZSgpO1xyXG4gICAgdGVzdEN0eC5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICByZXR1cm4gdGVzdEN0eDtcclxufTtcclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWUEsdUJBQWEsa0JBQWtCLEdBQUcsQ0FBQyxlQUE0QjtJQUMzRCx1QkFBTSxVQUFVLEdBQVEsVUFBVSxFQUFFLENBQUM7SUFDckMsdUJBQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQztJQUUvQyxTQUFTLENBQUM7UUFDTixPQUFPLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUM3QixPQUFPLENBQUMsa0JBQWtCLEdBQUcsTUFBTSxPQUFPLENBQUM7S0FDOUMsQ0FBQyxDQUFDO0lBRUgsSUFBSSxlQUFlLEVBQUU7UUFDakIsU0FBUyxDQUFDLENBQUMsSUFBWSxLQUFLLENBQUM7WUFDekIsZUFBZSxFQUFFLENBQUM7WUFDbEIsTUFBTSxPQUFPLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztVQUNyQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztLQUNyQztJQUVELFNBQVMsQ0FBQztRQUNOLFVBQVUsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBOEIsS0FBSyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUMxRixVQUFVLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztLQUNwQyxDQUFDLENBQUM7SUFFSCxRQUFRLENBQUM7UUFDTCxPQUFPLENBQUMsa0JBQWtCLEdBQUcsV0FBVyxDQUFDO1FBQ3pDLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0tBQ2hDLENBQUMsQ0FBQztDQUNOLENBQUM7Ozs7Ozs7O0FBU0Y7Ozs7SUFDSSxZQUFtQixPQUE0QjtRQUE1QixZQUFPLEdBQVAsT0FBTyxDQUFxQjtLQUFLOzs7O1FBRXpDLFNBQVMsS0FBSyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUM7Ozs7UUFFcEQsT0FBTyxLQUFrQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQzs7OztJQUU1RSxhQUFhLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQzs7Ozs7SUFFL0MsT0FBTyxDQUFDLFNBQW9CLElBQUksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0NBQ25HOzs7Ozs7OztBQVFELHVCQUFhLGlCQUFpQixHQUFHLENBQUksU0FBa0I7SUFDbkQsdUJBQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxlQUFlLENBQUksU0FBUyxDQUFDLENBQUM7SUFDdEQsdUJBQU0sT0FBTyxHQUFHLElBQUksT0FBTyxDQUFJLE9BQU8sQ0FBQyxDQUFDO0lBQ3hDLE9BQU8sT0FBTyxDQUFDO0NBQ2xCLENBQUM7Ozs7QUFHRix1QkFBYSx1QkFBdUIsR0FBRyxDQUFVLFNBQWtCO0lBQy9ELHVCQUFNLE9BQU8sR0FBRyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM3QyxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDeEIsTUFBTSxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ25DLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN4QixPQUFPLE9BQU8sQ0FBQztFQUNsQjs7Ozs7Ozs7Ozs7Ozs7In0=