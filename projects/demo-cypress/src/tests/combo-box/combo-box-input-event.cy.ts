import {ChangeDetectionStrategy, Component, inject, output} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {type TuiStringHandler} from '@taiga-ui/cdk';
import {TuiRoot} from '@taiga-ui/core';
import {
    TUI_COUNTRIES,
    TuiChevron,
    TuiComboBox,
    TuiDataListWrapper,
    TuiFilterByInputPipe,
} from '@taiga-ui/kit';
import {createOutputSpy} from 'cypress/angular';

interface Country {
    id: string;
    name: string;
}

@Component({
    imports: [
        ReactiveFormsModule,
        TuiChevron,
        TuiComboBox,
        TuiDataListWrapper,
        TuiFilterByInputPipe,
        TuiRoot,
    ],
    template: `
        <tui-root>
            <tui-textfield
                tuiChevron
                [stringify]="stringify"
            >
                <input
                    tuiComboBox
                    [formControl]="control"
                    (input)="inputEvent.emit($any($event.target).value)"
                />

                <tui-data-list-wrapper
                    *tuiDropdown
                    [items]="countries | tuiFilterByInput"
                />
            </tui-textfield>
        </tui-root>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Sandbox {
    protected readonly control = new FormControl<Country | string | null>(null);
    protected readonly countries = Object.entries(inject(TUI_COUNTRIES)()).map(
        ([id, name]) => ({id, name}),
    );

    public readonly inputEvent = output<string>();

    protected readonly stringify: TuiStringHandler<Country> = (x) => x.name ?? x;
}

describe('ComboBox | Dispatches (input) event on programmatic updates', () => {
    beforeEach(() => cy.viewport(300, 350));

    beforeEach(() => {
        cy.mount(Sandbox, {
            componentProperties: {inputEvent: createOutputSpy('inputEvent')},
        });
    });

    it('emits (input) event on datalist item click', () => {
        cy.get('[tuiComboBox]').click();
        cy.get('[tuiOption]').first().click();

        cy.get('@inputEvent').should('have.been.calledWith', 'Andorra');
    });

    it('emits (input) event on cleaner click', () => {
        cy.get('[tuiComboBox]').click();
        cy.get('[tuiOption]').first().click();
        cy.get('tui-textfield [tuiButtonX]').click();

        cy.get('@inputEvent').should('have.been.calledTwice');
        cy.get('@inputEvent').should('have.been.calledWith', '');
    });

    it('emits (input) event on erasing unmatched value on blur', () => {
        cy.get('[tuiComboBox]').type('aus');
        cy.get('[tuiOption]').should('have.length', 2);

        cy.get('@inputEvent').should('have.callCount', 3);
        cy.get('@inputEvent').should('have.been.calledWith', 'aus');

        cy.get('[tuiComboBox]').blur();

        cy.get('@inputEvent').should('have.callCount', 4);
        cy.get('@inputEvent').should('have.been.calledWith', '');

        cy.get('[tuiComboBox]').should('have.value', '');
    });
});
