import {ChangeDetectionStrategy, Component} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiDay, TuiTime} from '@taiga-ui/cdk';
import {provideTaiga, TuiRoot, TuiTextfield} from '@taiga-ui/core';
import {TuiInputDateTime} from '@taiga-ui/kit';

describe('TuiInputDateTimeDirective midnight', () => {
    const day = new TuiDay(2026, 10, 15);
    const midnight = new TuiTime(0, 0);

    @Component({
        imports: [ReactiveFormsModule, TuiInputDateTime, TuiRoot, TuiTextfield],
        template: `
            <tui-root>
                <tui-textfield>
                    <input
                        tuiInputDateTime
                        [formControl]="control"
                    />
                </tui-textfield>
            </tui-root>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        public readonly control = new FormControl<readonly [TuiDay, TuiTime | null]>([
            day,
            null,
        ]);
    }

    let fixture: ComponentFixture<Test>;
    let input: HTMLInputElement;
    let control: Test['control'];

    beforeEach(async () => {
        TestBed.configureTestingModule({imports: [Test], providers: [provideTaiga()]});
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(Test);
        fixture.detectChanges();
        input = fixture.nativeElement.querySelector('input');
        control = fixture.componentInstance.control;
    });

    it('updates the time when the same date with midnight is pasted', () => {
        expect(input.value).toBe('15.11.2026');
        input.value = '15.11.2026, 00:00';
        input.dispatchEvent(
            new InputEvent('input', {bubbles: true, inputType: 'insertFromPaste'}),
        );
        input.dispatchEvent(new FocusEvent('blur'));
        fixture.detectChanges();

        expect(input.value).toBe('15.11.2026, 00:00');
        expect(control.value).toEqual([day, midnight]);
    });

    it('clears midnight when the time and separator are deleted together', () => {
        control.setValue([day, midnight]);
        fixture.detectChanges();
        expect(input.value).toBe('15.11.2026, 00:00');

        input.value = '15.11.2026';
        input.dispatchEvent(
            new InputEvent('input', {bubbles: true, inputType: 'deleteContentBackward'}),
        );
        input.dispatchEvent(new FocusEvent('blur'));
        fixture.detectChanges();

        expect(input.value).toBe('15.11.2026');
        expect(control.value).toEqual([day, null]);
    });
});
