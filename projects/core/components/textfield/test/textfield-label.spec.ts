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
                        id="explicit-input"
                        tuiInput
                    />
                </tui-textfield>
            </tui-root>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {}

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

    it('associates a label with an input using a generated ID', () => {
        const label = fixture.nativeElement.querySelectorAll('label[tuiLabel]')[0];
        const input = fixture.nativeElement.querySelectorAll('input[tuiInput]')[0];

        expect(input.id).toBeTruthy();
        expect(label.htmlFor).toBe(input.id);
    });

    it('associates a label with an input using an explicit ID', () => {
        const label = fixture.nativeElement.querySelectorAll('label[tuiLabel]')[1];
        const input = fixture.nativeElement.querySelector('#explicit-input');

        expect(label.htmlFor).toBe(input.id);
    });
});
