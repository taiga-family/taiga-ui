import {type DebugElement} from '@angular/core';
import {type ComponentFixture} from '@angular/core/testing';
import {type FormControl} from '@angular/forms';

import {type TuiPageObject} from '../page-object';

interface TestParams {
    fixture: ComponentFixture<unknown>;
    pageObject: TuiPageObject<unknown>;
    prefix: string;
    testComponent: Test;
}

interface Test {
    control?: FormControl;
    disabled?: boolean;
    hintContent: string | null;
    readOnly: boolean;
    size: unknown;
}

export function tuiTestTooltip(context: TestParams): void {
    let pageObject: TuiPageObject<unknown>;
    let fixture: ComponentFixture<unknown>;
    let testComponent: Test;

    describe('Tooltip in a field', () => {
        beforeEach(() => {
            pageObject = context.pageObject;
            fixture = context.fixture;
            testComponent = context.testComponent;

            fixture.autoDetectChanges();
        });

        describe('There is tooltip content', () => {
            it('if field is disabled, there is no tooltip', () => {
                testComponent.disabled = true;

                if (testComponent.control) {
                    testComponent.control.disable();
                }

                fixture.detectChanges();

                expect(getTooltip()).toBeNull();
            });

            it('if field is not disabled, there is tooltip', () => {
                fixture.detectChanges();

                expect(getTooltip()).not.toBeNull();
            });

            it('if field is readonly, there is tooltip', () => {
                testComponent.readOnly = true;
                fixture.detectChanges();

                expect(getTooltip()).not.toBeNull();
            });
        });

        describe('There is no tooltip content', () => {
            beforeEach(() => {
                testComponent.hintContent = null;
                fixture.detectChanges();
            });

            it('tooltip without content is hidden', () => {
                fixture.detectChanges();

                expect(getTooltip()).toBeNull();
            });
        });
    });

    function getTooltip(): DebugElement | null {
        return pageObject.getByAutomationId(`${context.prefix}tooltip`);
    }
}
