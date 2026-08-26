import {ChangeDetectionStrategy, Component, output} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiRoot, TuiTextfield} from '@taiga-ui/core';
import {TuiInputChip} from '@taiga-ui/kit';
import {createOutputSpy} from 'cypress/angular';

@Component({
    imports: [ReactiveFormsModule, TuiInputChip, TuiRoot, TuiTextfield],
    template: `
        <tui-root>
            <form (submit)="submitEvent.emit(); $event.preventDefault()">
                <tui-textfield multi>
                    <input
                        tuiInputChip
                        [formControl]="control"
                    />
                    <tui-input-chip *tuiItem />
                </tui-textfield>

                <button type="submit">Submit</button>
            </form>
        </tui-root>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Sandbox {
    protected readonly control = new FormControl(['Taiga UI'], {nonNullable: true});

    public readonly submitEvent = output<void>();
}

describe('InputChip | form submit', () => {
    beforeEach(() => {
        cy.mount(Sandbox, {
            componentProperties: {
                submitEvent: createOutputSpy('submitEvent'),
            },
        });
    });

    it('does not submit parent form on Enter while editing chip', () => {
        cy.get('tui-input-chip .t-text').dblclick();
        cy.get('tui-input-chip input').should('be.enabled');

        cy.press(Cypress.Keyboard.Keys.ENTER);

        cy.get('@submitEvent').should('not.have.been.called');
        cy.get('tui-input-chip input').should('be.disabled');
    });
});
