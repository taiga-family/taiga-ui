import {ChangeDetectionStrategy, Component} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {provideTaiga, TuiInput, TuiRoot} from '@taiga-ui/core';

describe('TuiTextfieldComponent label association', () => {
    @Component({
        imports: [TuiInput, TuiRoot],
        template: `
            <tui-root>
                <tui-textfield>
                    <label tuiLabel>Generated ID</label>
                    <input tuiInput />
                </tui-textfield>
                <tui-textfield>
                    <label tuiLabel>Explicit ID</label>
                    <input
                        id="explicit"
                        tuiInput
                    />
                </tui-textfield>
                <tui-textfield>
                    <label tuiLabel>Bound ID</label>
                    <input
                        tuiInput
                        [id]="id"
                    />
                </tui-textfield>
            </tui-root>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        protected readonly id = 'bound';
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

    it('associates a label with an input', () => {
        const labels = Array.from<HTMLLabelElement>(
            fixture.nativeElement.querySelectorAll('[tuiLabel]'),
        );

        const inputs = Array.from<HTMLInputElement>(
            fixture.nativeElement.querySelectorAll('[tuiInput]'),
        );

        // Triggering any interaction for change detection to properly run.
        // In reality, just loading the component refreshes the label htmlFor
        // even in zoneless change detection, but in tests auto id is not propagated
        // from input to label unless another interaction happens
        inputs[0]?.focus();
        fixture.detectChanges();

        expect(inputs.every(({id}) => Boolean(id))).toBe(true);
        expect(labels.every(({htmlFor}, index) => inputs[index]?.id === htmlFor)).toBe(
            true,
        );
    });
});
