import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {provideTaiga, TuiButton, TuiDropdown, TuiRoot} from '@taiga-ui/core';
import {TuiInputNumber} from '@taiga-ui/kit';
import {PolymorpheusTemplate} from '@taiga-ui/polymorpheus';

describe('TuiInputNumberStep', () => {
    @Component({
        imports: [
            PolymorpheusTemplate,
            ReactiveFormsModule,
            TuiButton,
            TuiDropdown,
            TuiInputNumber,
            TuiRoot,
        ],
        template: `
            <tui-root>
                <button
                    tuiButton
                    type="button"
                    [tuiDropdown]="dropdown"
                    [tuiDropdownManual]="open()"
                >
                    Open
                    <ng-template
                        #dropdown="polymorpheus"
                        polymorpheus
                    >
                        <tui-textfield [tuiTextfieldAppearance]="appearance()">
                            <input
                                tuiInputNumber
                                [formControl]="control"
                                [step]="step()"
                            />
                        </tui-textfield>
                    </ng-template>
                </button>
            </tui-root>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        public readonly control = new FormControl(0);
        public readonly open = signal(false);
        public readonly appearance = signal('textfield');
        public readonly step = signal(0);
    }

    let fixture: ComponentFixture<Test>;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [Test],
            providers: [provideTaiga()],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(Test);
        fixture.detectChanges();
    });

    it.each([
        {step: 0, appearance: 'textfield'},
        {step: 1, appearance: 'textfield'},
        {step: 0, appearance: 'outline'},
        {step: 1, appearance: 'outline'},
    ])(
        'preserves $appearance appearance in a button dropdown with step=$step',
        ({step, appearance}) => {
            fixture.componentInstance.step.set(step);
            fixture.componentInstance.appearance.set(appearance);
            fixture.componentInstance.open.set(true);
            fixture.detectChanges();

            const textfield: HTMLElement =
                fixture.nativeElement.querySelector('tui-textfield');

            const button: HTMLElement =
                fixture.nativeElement.querySelector('[tuiButton]');

            expect(textfield.getAttribute('data-appearance')).toBe('');
            expect(
                textfield.querySelector('input')?.getAttribute('data-appearance'),
            ).toBe(appearance);
            expect(button.getAttribute('data-appearance')).toBe('primary');
            expect(
                textfield.querySelectorAll('.t-input-number-buttons button'),
            ).toHaveLength(step ? 2 : 0);
        },
    );

    it('updates the appearance of the textfield and step buttons', () => {
        fixture.componentInstance.step.set(1);
        fixture.componentInstance.open.set(true);
        fixture.detectChanges();

        fixture.componentInstance.appearance.set('outline');
        fixture.detectChanges();

        const textfield: HTMLElement =
            fixture.nativeElement.querySelector('tui-textfield');

        expect(textfield.getAttribute('data-appearance')).toBe('');
        expect(textfield.querySelector('input')?.getAttribute('data-appearance')).toBe(
            'outline',
        );
        expect(textfield.querySelectorAll('.t-input-number-buttons button')).toHaveLength(
            2,
        );

        textfield.querySelectorAll('.t-input-number-buttons button').forEach((button) => {
            expect(button.getAttribute('data-appearance')).toBe('outline');
        });
    });
});
