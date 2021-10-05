import {Component, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TUI_DIGIT_REGEXP} from '@taiga-ui/core';
import {configureTestSuite} from 'ng-bullet';
import {TuiInputCVCComponent} from '../input-CVC.component';
import {TuiInputCVCModule} from '../input-CVC.module';

describe('InputCVC', () => {
    @Component({
        template: `
            <tui-input-cvc #default [formControl]="control"></tui-input-cvc>
            <tui-input-cvc #custom [formControl]="control" [length]="4"></tui-input-cvc>
        `,
    })
    class TestComponent {
        @ViewChild('default')
        default: TuiInputCVCComponent;

        @ViewChild('custom')
        custom: TuiInputCVCComponent;

        control = new FormControl('');
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [ReactiveFormsModule, TuiInputCVCModule],
            declarations: [TestComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe('Default', () => {
        it('exampleText', () => {
            expect(testComponent.default.exampleText).toBe('000');
        });

        it('textMaskOptions', () => {
            expect(testComponent.default.textMaskOptions).toEqual({
                mask: [TUI_DIGIT_REGEXP, TUI_DIGIT_REGEXP, TUI_DIGIT_REGEXP],
                guide: false,
            });
        });
    });

    describe('Modified', () => {
        it('exampleText', () => {
            expect(testComponent.custom.exampleText).toBe('0000');
        });

        it('textMaskOptions', () => {
            expect(testComponent.custom.textMaskOptions).toEqual({
                mask: [
                    TUI_DIGIT_REGEXP,
                    TUI_DIGIT_REGEXP,
                    TUI_DIGIT_REGEXP,
                    TUI_DIGIT_REGEXP,
                ],
                guide: false,
            });
        });
    });
});
