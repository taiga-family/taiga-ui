import {ChangeDetectionStrategy, Component} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {
    provideTaiga,
    TuiButton,
    TuiDropdown,
    TuiRoot,
    TuiTextfield,
} from '@taiga-ui/core';
import {PolymorpheusTemplate} from '@taiga-ui/polymorpheus';

describe('TuiTextfield appearance', () => {
    @Component({
        imports: [PolymorpheusTemplate, TuiButton, TuiDropdown, TuiRoot, TuiTextfield],
        template: `
            <tui-root>
                <button
                    tuiButton
                    type="button"
                    [tuiDropdown]="dropdown"
                    [tuiDropdownManual]="true"
                >
                    Open
                    <ng-template
                        #dropdown="polymorpheus"
                        polymorpheus
                    >
                        <tui-textfield />
                        <tui-textfield multi />
                    </ng-template>
                </button>
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

    it.each(['tui-textfield:not([multi])', 'tui-textfield[multi]'])(
        '%s does not inherit the dropdown button appearance',
        (selector) => {
            const textfield: HTMLElement = fixture.nativeElement.querySelector(selector);
            const button: HTMLElement =
                fixture.nativeElement.querySelector('[tuiButton]');

            expect(textfield.getAttribute('data-appearance')).toBe('');
            expect(button.getAttribute('data-appearance')).toBe('primary');
        },
    );
});
