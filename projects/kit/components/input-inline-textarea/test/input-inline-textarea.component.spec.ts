import type {DebugElement} from '@angular/core';
import {ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {NG_EVENT_PLUGINS} from '@taiga-ui/event-plugins';
import {TuiPageObject} from '@taiga-ui/testing';

import {TuiInputInlineTextarea} from '../input-inline-textarea.component';

describe('InputInlineTextarea', () => {
    @Component({
        standalone: true,
        imports: [ReactiveFormsModule, TuiInputInlineTextarea],
        template: `
            <tui-input-inline-textarea>
                <textarea
                    automation-id="tui-input-inline-textarea__native"
                    [formControl]="control"
                ></textarea>
            </tui-input-inline-textarea>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        @ViewChild(TuiInputInlineTextarea, {static: true})
        public component!: TuiInputInlineTextarea;

        public control = new FormControl('');
    }

    let fixture: ComponentFixture<Test>;
    let testComponent: Test;
    let pageObject: TuiPageObject<Test>;
    const testContext = {
        get prefix() {
            return 'tui-input-inline-textarea__';
        },
    };

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [Test],
            providers: [NG_EVENT_PLUGINS],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(Test);
        pageObject = new TuiPageObject(fixture);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe('placeholder', () => {
        it('displayed if no value', () => {
            expect(getPlaceholder()).not.toBeNull();
        });

        it('not displayed if there is a value', () => {
            testComponent.control.setValue('Multi-line\ntext content');
            fixture.detectChanges();

            expect(getPlaceholder()).toBeNull();
        });
    });

    describe('entry field', () => {
        it('editable if not locked', () => {
            expect(getNative()!.nativeElement.disabled).toBe(false);
        });

        it('not editable if locked', async () => {
            testComponent.control.disable();
            fixture.detectChanges();

            await fixture.whenStable();

            expect(getNative()?.nativeElement.disabled).toBe(true);
        });
    });

    describe('multiline content', () => {
        it('handles multiline text properly', () => {
            const multilineText = 'Line 1\nLine 2\nLine 3';
            testComponent.control.setValue(multilineText);
            fixture.detectChanges();

            expect(testComponent.control.value).toBe(multilineText);
        });
    });

    function getPlaceholder(): DebugElement | null {
        return pageObject.getByAutomationId(`${testContext.prefix}placeholder`);
    }

    function getNative(): DebugElement | null {
        return pageObject.getByAutomationId(`${testContext.prefix}native`);
    }
});