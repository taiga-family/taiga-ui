import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {provideTaiga, TuiDataList, TuiDropdown, TuiInput, TuiRoot} from '@taiga-ui/core';

describe('TuiDropdownA11y', () => {
    @Component({
        imports: [TuiDataList, TuiDropdown, TuiInput, TuiRoot],
        template: `
            <tui-root>
                <tui-textfield>
                    <input
                        id="textbox"
                        tuiInput
                    />
                </tui-textfield>
                <tui-textfield [(open)]="open">
                    <input
                        id="combobox"
                        tuiInput
                    />
                    <tui-data-list *tuiDropdown>
                        <button
                            tuiOption
                            value="Suggestion"
                        >
                            Suggestion
                        </button>
                    </tui-data-list>
                </tui-textfield>
            </tui-root>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        public readonly open = signal(false);
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

    it('input has implicit role without dropdown', () => {
        expect(
            fixture.debugElement.query(By.css('#textbox'))?.nativeElement.role,
        ).toBeFalsy();
    });

    it('input has combobox role with dropdown', () => {
        expect(fixture.debugElement.query(By.css('#combobox'))?.nativeElement.role).toBe(
            'combobox',
        );
    });

    it('has no dropdown aria without dropdown content', () => {
        const host = fixture.debugElement.query(By.css('#textbox')).nativeElement;

        expect(host.hasAttribute('aria-expanded')).toBe(false);
        expect(host.hasAttribute('aria-controls')).toBe(false);
        expect(host.hasAttribute('aria-haspopup')).toBe(false);
    });

    it('has proper aria link between host and dropdown', () => {
        const host = fixture.debugElement.query(By.css('#combobox')).nativeElement;

        expect(host.getAttribute('aria-expanded')).toBe('false');

        fixture.componentInstance.open.set(true);
        fixture.detectChanges();

        const dropdown = fixture.debugElement.query(By.css('tui-dropdown')).nativeElement;

        expect(dropdown.getAttribute('role')).toBe('listbox');
        expect(host.getAttribute('aria-expanded')).toBe('true');
        expect(host.getAttribute('aria-controls')).toBe(dropdown.id);
        expect(host.getAttribute('aria-haspopup')).toBe(dropdown.getAttribute('role'));
    });
});
