import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {
    TuiButton,
    TuiDropdown,
    TuiIcon,
    TuiInput,
    TuiRoot,
    TuiTextfield,
} from '@taiga-ui/core';
import {TuiCopy} from '@taiga-ui/kit';

@Component({
    imports: [
        FormsModule,
        TuiButton,
        TuiCopy,
        TuiDropdown,
        TuiIcon,
        TuiInput,
        TuiRoot,
        TuiTextfield,
    ],
    template: `
        <tui-root>
            <div
                [tuiDropdown]="dropdown"
                [tuiDropdownOpen]="open"
                (tuiDropdownOpenChange)="open = $event"
            >
                <button
                    tuiButton
                    type="button"
                >
                    Open dropdown
                </button>
            </div>

            <ng-template #dropdown>
                <tui-textfield [style.width.px]="400">
                    <label tuiLabel>Copy link</label>

                    <input
                        tuiInput
                        [(ngModel)]="link"
                    />

                    <tui-icon tuiCopy />
                </tui-textfield>
            </ng-template>
        </tui-root>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
class Example {
    protected open = false;
    protected link = 'https://taiga-ui.dev';
}

describe('Copy | Dropdown', () => {
    beforeEach(() => {
        cy.mount(Example);
    });

    it('should copy input value when clicking copy icon', () => {
        cy.get('button[tuiButton]').click();

        cy.document().then((doc) => {
            cy.stub(doc, 'execCommand').callsFake((command) => {
                const input = doc.querySelector<HTMLInputElement>('input[tuiInput]')!;

                const selectedText = input.value.slice(
                    input.selectionStart ?? 0,
                    input.selectionEnd ?? 0,
                );

                expect(command).to.equal('copy');
                expect(doc.activeElement).to.equal(input);
                expect(selectedText).to.equal('https://taiga-ui.dev');

                return true;
            });
        });

        cy.get('tui-icon[tuiCopy]').click();

        cy.wait(300).compareSnapshot('copy-dropdown-opened');
    });
});
