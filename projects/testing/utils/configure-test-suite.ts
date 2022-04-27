import {ComponentFixture, getTestBed, TestBed} from '@angular/core/testing';

// Forked from: https://github.com/topnotch48/ng-bullet-workspace/blob/6440299/projects/ng-bullet/src/testing.ts
export const configureTestSuite = (configureModule?: () => void): void => {
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
