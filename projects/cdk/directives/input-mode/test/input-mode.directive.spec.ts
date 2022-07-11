import {Component, ElementRef, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {configureTestSuite} from '@taiga-ui/testing';

import {TuiInputMode} from '../../../types/input-mode';
import {TuiInputModeModule} from '../input-mode.module';

describe('TuiInputMode directive', () => {
    @Component({
        template: `
            <input
                #inputDefault
                pattern="123"
                [tuiInputMode]
            />
            <input
                #inputCustom
                [tuiInputMode]="inputMode"
            />
            <input
                #inputWithPattern
                pattern="123"
                [tuiInputMode]="inputMode"
            />
        `,
    })
    class TestComponent {
        @ViewChild('inputDefault')
        inputDefault!: ElementRef<HTMLInputElement>;

        @ViewChild('inputCustom')
        inputCustom!: ElementRef<HTMLInputElement>;

        @ViewChild('inputWithPattern')
        inputWithPattern!: ElementRef<HTMLInputElement>;

        inputMode: TuiInputMode = 'decimal';

        default = true;
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [TuiInputModeModule],
            declarations: [TestComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe('Default value', () => {
        it('sets inputmode', () => {
            expect(native().getAttribute('inputmode')).toBe('text');
        });

        it('sets x-inputmode', () => {
            expect(native().getAttribute('x-inputmode')).toBe('text');
        });

        it('does not touch pattern', () => {
            expect(native().getAttribute('pattern')).toBe('123');
        });
    });

    describe('Custom value', () => {
        it('sets inputmode', () => {
            expect(custom().getAttribute('inputmode')).toBe('decimal');
        });

        it('sets x-inputmode', () => {
            expect(custom().getAttribute('x-inputmode')).toBe('decimal');
        });

        it('does not touch pattern', () => {
            expect(custom().getAttribute('pattern')).toBeNull();
        });

        // Only does so on iOS
        it('does not add pattern for numeric', () => {
            testComponent.inputMode = 'numeric';
            fixture.detectChanges();

            expect(custom().getAttribute('pattern')).toBeNull();
        });
    });

    function native(): HTMLInputElement {
        return testComponent.inputDefault.nativeElement;
    }

    function custom(): HTMLInputElement {
        return testComponent.inputCustom.nativeElement;
    }
});
