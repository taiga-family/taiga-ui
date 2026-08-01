import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiRoot, TuiTextfield} from '@taiga-ui/core';
import {TuiInputChip} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiInputChip, TuiRoot, TuiTextfield],
    template: `
        <tui-root>
            <button
                data-testid="outside"
                type="button"
            >
                Outside
            </button>

            <div data-testid="state">
                TOUCHED: {{ control.touched ? 'TRUE' : 'FALSE' }}
            </div>

            <tui-textfield multi>
                <input
                    tuiInputChip
                    [formControl]="control"
                />

                <tui-input-chip *tuiItem />
            </tui-textfield>
        </tui-root>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestInputChip {
    protected readonly control = new FormControl<string[]>([]);
}

describe('InputChip | touched state', () => {
    // `Element.prototype.scrollTo` currently returns `undefined`, but a future Chrome
    // binary (e.g. bumped to 150) may return a `Promise`. `TuiTextfieldMulti` must mark
    // the control as touched on blur regardless of what `scrollTo` returns, so we stub it
    // to return a truthy `Promise` to lock in that behavior independently of the browser.
    it('marks control as touched on blur even when scrollTo returns a Promise', () => {
        cy.mount(TestInputChip);

        cy.window().then((win) => {
            cy.stub(win.Element.prototype, 'scrollTo').returns(
                Promise.resolve(true) as never,
            );
        });

        cy.get('[data-testid="state"]').should('contain.text', 'TOUCHED: FALSE');

        cy.get('input[tuiInputChip]').focus();
        cy.get('[data-testid="outside"]').click();

        cy.get('[data-testid="state"]').should('contain.text', 'TOUCHED: TRUE');
    });
});
