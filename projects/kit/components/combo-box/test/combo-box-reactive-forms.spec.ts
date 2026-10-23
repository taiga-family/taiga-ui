import {Component} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';
import {provideTaiga, TuiRoot} from '@taiga-ui/core';
import {TuiComboBox} from '@taiga-ui/kit';

describe('TuiComboBoxDirective with reactive forms', () => {
    @Component({
        imports: [ReactiveFormsModule, TuiComboBox, TuiRoot],
        template: `
            <tui-root>
                <tui-textfield>
                    <input
                        tuiComboBox
                        [formControl]="control"
                        [strict]="false"
                    />
                </tui-textfield>
                <form [formGroup]="form">
                    <tui-textfield [stringify]="stringify">
                        <input
                            tuiComboBox
                            formControlName="value"
                            [strict]="false"
                        />
                    </tui-textfield>
                </form>
                <tui-textfield>
                    <input
                        tuiComboBox
                        [formControl]="strictControl"
                    />
                </tui-textfield>
            </tui-root>
        `,
    })
    class Test {
        public readonly control = new FormControl<string | null>('https://example.com');
        public readonly strictControl = new FormControl<string | null>('Strict');
        public readonly form = new FormGroup({
            value: new FormControl<string | null>('Saved'),
        });

        public readonly stringify = (value: unknown): string => `Label: ${String(value)}`;
    }

    let fixture: ComponentFixture<Test>;

    beforeEach(async () => {
        TestBed.configureTestingModule({imports: [Test], providers: [provideTaiga()]});
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(Test);
        fixture.detectChanges();
    });

    it('preserves initial values in non-strict mode', () => {
        const inputs = fixture.debugElement.queryAll(By.css('input[tuiComboBox]'));

        expect(fixture.componentInstance.control.value).toBe('https://example.com');
        expect((inputs[0]?.nativeElement as HTMLInputElement).value).toBe(
            'https://example.com',
        );
        expect(fixture.componentInstance.form.controls.value.value).toBe('Saved');
        expect((inputs[1]?.nativeElement as HTMLInputElement).value).toBe('Label: Saved');
    });

    it('does not propagate free text in strict mode', () => {
        const inputs = fixture.debugElement.queryAll(By.css('input[tuiComboBox]'));
        const input = inputs[2]?.nativeElement as HTMLInputElement;

        input.value = 'Unknown';
        input.dispatchEvent(new Event('input', {bubbles: true}));
        fixture.detectChanges();

        expect(fixture.componentInstance.strictControl.value).toBe('Strict');
    });

    it('preserves values updated programmatically', () => {
        const input = fixture.debugElement.query(By.css('input[tuiComboBox]'))
            .nativeElement as HTMLInputElement;

        fixture.componentInstance.control.setValue('Programmatic');
        fixture.detectChanges();

        expect(fixture.componentInstance.control.value).toBe('Programmatic');
        expect(input.value).toBe('Programmatic');
    });

    it('clears the form control when the user clears the input', () => {
        const input = fixture.debugElement.query(By.css('input[tuiComboBox]'))
            .nativeElement as HTMLInputElement;

        input.value = '';
        input.dispatchEvent(new Event('input', {bubbles: true}));
        fixture.detectChanges();

        expect(fixture.componentInstance.control.value).toBeNull();
    });

    it('updates the form control when typing', () => {
        const input = fixture.debugElement.query(By.css('input[tuiComboBox]'))
            .nativeElement as HTMLInputElement;

        input.value = 'Updated';
        input.dispatchEvent(new Event('input', {bubbles: true}));
        fixture.detectChanges();

        expect(fixture.componentInstance.control.value).toBe('Updated');
    });
});
