import {ChangeDetectionStrategy, Component} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {TuiRoot, TuiTextfield} from '@taiga-ui/core';
import {NG_EVENT_PLUGINS} from '@taiga-ui/event-plugins';

import {TuiInputNumberDirective} from '../input-number.directive';

describe('TuiInputNumberDirective updateOn behavior', () => {
    @Component({
        standalone: true,
        imports: [ReactiveFormsModule, TuiInputNumberDirective, TuiRoot, TuiTextfield],
        template: `
            <tui-root>
                <form [formGroup]="form">
                    <tui-textfield>
                        <input
                            formControlName="control"
                            tuiInputNumber
                        />
                    </tui-textfield>
                </form>
            </tui-root>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class TestComponent {
        public form = new FormGroup({
            control: new FormControl(321, {updateOn: 'blur'}),
        });
    }

    let fixture: ComponentFixture<TestComponent>;
    let component: TestComponent;
    let inputElement: HTMLInputElement;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [TestComponent],
            providers: [NG_EVENT_PLUGINS],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(TestComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

        inputElement = fixture.nativeElement.querySelector('input[tuiInputNumber]');
    });

    it('should setup correctly', () => {
        expect(inputElement).toBeTruthy();
        expect(inputElement.value).toBe('321');
        expect(component.form.controls.control.value).toBe(321);
    });

    describe('updateOn: blur behavior', () => {
        it('should detect updateOn: blur configuration', () => {
            expect(component.form.controls.control.updateOn).toBe('blur');
        });

        it('should not reset input value on blur when updateOn is blur', () => {
            inputElement.value = '456';
            inputElement.dispatchEvent(new Event('input', {bubbles: true}));

            expect(component.form.controls.control.value).toBe(321);

            inputElement.dispatchEvent(new Event('blur', {bubbles: true}));
            fixture.detectChanges();

            expect(inputElement.value).toBe('456');
        });
    });

    describe('default updateOn behavior', () => {
        @Component({
            standalone: true,
            imports: [
                ReactiveFormsModule,
                TuiInputNumberDirective,
                TuiRoot,
                TuiTextfield,
            ],
            template: `
                <tui-root>
                    <form [formGroup]="form">
                        <tui-textfield>
                            <input
                                formControlName="control"
                                tuiInputNumber
                            />
                        </tui-textfield>
                    </form>
                </tui-root>
            `,
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
        class DefaultTestComponent {
            public form = new FormGroup({
                control: new FormControl(100),
            });
        }

        it('should still work correctly for default updateOn: change', () => {
            const defaultFixture = TestBed.createComponent(DefaultTestComponent);
            const defaultComponent = defaultFixture.componentInstance;

            defaultFixture.detectChanges();

            const defaultInputElement = defaultFixture.nativeElement.querySelector(
                'input[tuiInputNumber]',
            );

            expect(defaultComponent.form.controls.control.updateOn).toBe('change');

            defaultInputElement.value = '200';
            defaultInputElement.dispatchEvent(new Event('input', {bubbles: true}));
            defaultFixture.detectChanges();

            expect(defaultComponent.form.controls.control.value).toBe(200);

            defaultInputElement.dispatchEvent(new Event('blur', {bubbles: true}));
            defaultFixture.detectChanges();

            expect(defaultInputElement.value).toBe('200');
            expect(defaultComponent.form.controls.control.value).toBe(200);
        });
    });
});
