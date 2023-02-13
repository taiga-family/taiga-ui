import {NgModule} from '@angular/core';
import {ComponentFixture, getTestBed, TestBed} from '@angular/core/testing';

export const configureTestSuite = (configureModule?: () => void): void => {
    const testBedApi = getTestBed() as TestBed & {
        _activeFixtures: Array<ComponentFixture<unknown>>;
        _instantiated: boolean;
        _testModuleRef: NgModule | null;
    };

    const originReset = TestBed.resetTestingModule;

    beforeAll(() => {
        TestBed.resetTestingModule();
        TestBed.resetTestingModule = () => TestBed;
    });

    // Custom hook
    if (configureModule) {
        beforeAll(async () => {
            configureModule();
            await TestBed.compileComponents();
        });
    }

    afterEach(() => {
        testBedApi?._activeFixtures.forEach(fixture => fixture.destroy());
        // reset ViewEngine TestBed
        testBedApi._instantiated = false;
        // reset Ivy TestBed
        testBedApi._testModuleRef = null;
    });

    afterAll(() => {
        TestBed.resetTestingModule = originReset;
        TestBed.resetTestingModule();
    });
};
