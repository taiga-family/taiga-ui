import {ChangeDetectionStrategy, Component} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {provideTaiga, TuiInput, TuiRoot, TuiTextfield} from '@taiga-ui/core';

describe('TuiTextfield translation', () => {
    @Component({
        imports: [TuiInput, TuiRoot, TuiTextfield],
        template: `
            <tui-root>
                <tui-textfield multi>
                    <input
                        tuiInput
                        placeholder="Enter text"
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

    it('excludes the multi textfield ghost from translation', () => {
        const host: HTMLElement = fixture.nativeElement;
        const input = host.querySelector<HTMLInputElement>('input[tuiInput]')!;

        input.focus();
        fixture.detectChanges();

        const ghost = host.querySelector('tui-textfield[multi] .t-ghost');

        expect(ghost?.getAttribute('translate')).toBe('no');
    });
});
