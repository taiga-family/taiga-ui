import {Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import type {TuiInputCVCComponent} from '@taiga-ui/addon-commerce';
import {TuiInputCVCModule} from '@taiga-ui/addon-commerce';
import {TUI_DIGIT_REGEXP} from '@taiga-ui/cdk';

describe('InputCVC', () => {
    @Component({
        template: `
            <tui-input-cvc
                #default
                [formControl]="control"
            ></tui-input-cvc>
            <tui-input-cvc
                #custom
                [formControl]="control"
                [length]="4"
            ></tui-input-cvc>
        `,
    })
    class TestComponent {
        @ViewChild('default')
        public default!: TuiInputCVCComponent;

        @ViewChild('custom')
        public custom!: TuiInputCVCComponent;

        public control = new FormControl('');
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [ReactiveFormsModule, TuiInputCVCModule],
            declarations: [TestComponent],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe('Default', () => {
        it('exampleText', () => {
            expect(testComponent.default.exampleText).toBe('000');
        });

        it('MaskOptions', () => {
            expect(testComponent.default.maskOptions).toEqual({
                mask: [TUI_DIGIT_REGEXP, TUI_DIGIT_REGEXP, TUI_DIGIT_REGEXP],
            });
        });
    });

    describe('Modified', () => {
        it('exampleText', () => {
            expect(testComponent.custom.exampleText).toBe('0000');
        });

        it('MaskOptions', () => {
            expect(testComponent.custom.maskOptions).toEqual({
                mask: [
                    TUI_DIGIT_REGEXP,
                    TUI_DIGIT_REGEXP,
                    TUI_DIGIT_REGEXP,
                    TUI_DIGIT_REGEXP,
                ],
            });
        });
    });
});
