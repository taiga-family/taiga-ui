import {ComponentFixture, getTestBed, TestBed} from '@angular/core/testing';

// type CallbackVoid = () => void;

export const configureTestSuite = (
    configureModule?: () => void,
    createComponent?: () => void,
) => {
    const testBedApi = getTestBed();
    const originReset = TestBed.resetTestingModule;

    beforeAll(() => {
        TestBed.resetTestingModule();
        TestBed.resetTestingModule = () => TestBed;
    });

    // Original hook from ng-bullet
    // if (configureModule) {
    //     beforeAll((done: DoneFn) =>
    //         (async () => {
    //             configureModule();
    //             await TestBed.compileComponents();
    //         })()
    //             .then(done)
    //             .catch(done.fail),
    //     );
    // }

    // Modified hook from ng-bullet pr
    // if (configureModule) {
    //     beforeAll((done: DoneFn) => {
    //         (async function () {
    //             configureModule();
    //             await TestBed.compileComponents();
    //         })()
    //             .then(done)
    //             .catch(done.fail);
    //     });
    // }

    // Custom hook
    if (configureModule) {
        beforeAll(async () => {
            configureModule();
            await TestBed.compileComponents();
        });
    }

    if (createComponent) {
        beforeEach(() => createComponent());
    }

    afterEach(() => {
        // @ts-ignore
        testBedApi['_activeFixtures'].forEach((fixture: ComponentFixture<unknown>) =>
            fixture.destroy(),
        );
        // reset ViewEngine TestBed
        // @ts-ignore
        testBedApi['_instantiated'] = false;
        // reset Ivy TestBed
        // @ts-ignore
        testBedApi['_testModuleRef'] = null;
    });

    afterAll(() => {
        TestBed.resetTestingModule = originReset;
        TestBed.resetTestingModule();
    });
};
