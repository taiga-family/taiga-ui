import {DebugElement} from '@angular/core';
import {ComponentFixture} from '@angular/core/testing';
import {FormControl} from '@angular/forms';

import {PageObject} from '../page-object';

interface TestParams {
    pageObject: PageObject<unknown>;
    fixture: ComponentFixture<unknown>;
    testComponent: TestComponent;
    prefix: string;
}

interface TestComponent {
    readOnly: boolean;
    hintContent: string | null;
    size: unknown;
    control?: FormControl;
    disabled?: boolean;
}

export function testTooltip(context: TestParams): void {
    let pageObject: PageObject<unknown>;
    let fixture: ComponentFixture<unknown>;
    let testComponent: TestComponent;

    describe('Tooltip in a field', () => {
        beforeEach(() => {
            pageObject = context.pageObject;
            fixture = context.fixture;
            testComponent = context.testComponent;

            fixture.detectChanges();
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
