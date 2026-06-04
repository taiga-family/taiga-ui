import {ChangeDetectionStrategy, Component, viewChild} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {provideTaiga, TuiTextfield} from '@taiga-ui/core';
import {TuiInputPin, TuiInputPinComponent} from '@taiga-ui/kit';

describe('TuiInputPinComponent', () => {
    @Component({
        imports: [ReactiveFormsModule, TuiInputPin, TuiTextfield],
        template: `
            <tui-textfield>
                <input
                    maxlength="4"
                    tuiInputPin
                    [formControl]="control"
                />
            </tui-textfield>
        `,
        // eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
        changeDetection: ChangeDetectionStrategy.Default,
    })
    class Test {
        public readonly inputPin = viewChild.required(TuiInputPinComponent);
        public readonly control = new FormControl('');
    }

    let fixture: ComponentFixture<Test>;
    let testComponent: Test;
    let inputPin: TuiInputPinComponent;
    let el: HTMLInputElement;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [Test],
            providers: [provideTaiga()],
        });

        await TestBed.compileComponents();
        fixture = TestBed.createComponent(Test);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
        await fixture.whenStable();
        fixture.detectChanges();
        inputPin = testComponent.inputPin();
        el = fixture.nativeElement.querySelector('input[tuiInputPin]');
    });

    describe('onSelection', () => {
        it('extends collapsed [0, 0] to [0, 1] when value is non-empty', () => {
            el.value = '1';
            el.setSelectionRange(0, 0);
            inputPin.onSelection();
            fixture.detectChanges();

            expect(el.selectionStart).toBe(0);
            expect(el.selectionEnd).toBe(1);
        });

        it('does not extend [0, 0] when value is empty', () => {
            el.value = '';
            el.setSelectionRange(0, 0);
            inputPin.onSelection();
            fixture.detectChanges();

            expect(el.selectionStart).toBe(0);
            expect(el.selectionEnd).toBe(0);
        });

        it('does not change selection when cursor is not at [0, 0]', () => {
            el.value = '12';
            el.setSelectionRange(1, 1);
            inputPin.onSelection();
            fixture.detectChanges();

            expect(el.selectionStart).toBe(1);
            expect(el.selectionEnd).toBe(1);
        });

        it('collapses cursor to [maxLength-1, maxLength-1] when at maxLength', () => {
            el.value = '1234';
            el.setSelectionRange(4, 4);
            inputPin.onSelection();
            fixture.detectChanges();

            expect(el.selectionStart).toBe(3);
            expect(el.selectionEnd).toBe(3);
        });
    });
});
