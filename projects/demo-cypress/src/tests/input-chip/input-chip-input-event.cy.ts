import {ChangeDetectionStrategy, Component, inject, output} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {type TuiBooleanHandler} from '@taiga-ui/cdk';
import {TuiFilterByInputPipe, TuiRoot} from '@taiga-ui/core';
import {
    TUI_COUNTRIES,
    TuiChevron,
    TuiDataListWrapper,
    TuiInputChip,
    TuiMultiSelect,
} from '@taiga-ui/kit';
import {createOutputSpy} from 'cypress/angular';

@Component({
    imports: [
        ReactiveFormsModule,
        TuiChevron,
        TuiDataListWrapper,
        TuiFilterByInputPipe,
        TuiInputChip,
        TuiMultiSelect,
        TuiRoot,
    ],
    template: `
        <tui-root>
            <tui-textfield
                multi
                tuiChevron
                [disabledItemHandler]="notFromList"
            >
                <input
                    tuiInputChip
                    [formControl]="control"
                    (input)="inputEvent.emit($any($event.target).value)"
                />

                <tui-input-chip *tuiItem />

                <tui-data-list-wrapper
                    *tuiDropdown
                    tuiMultiSelectGroup
                    [items]="countries | tuiFilterByInput"
                />
            </tui-textfield>
        </tui-root>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Sandbox {
    protected readonly control = new FormControl<string[]>([], {nonNullable: true});
    protected readonly countries = Object.values(inject(TUI_COUNTRIES)());

    public readonly inputEvent = output<string>();
    public readonly textfieldEvent = output<string>();

    protected readonly notFromList: TuiBooleanHandler<string> = (item) =>
        !this.countries.includes(item);
}

describe('InputChip | (input) event', () => {
    beforeEach(() => {
        cy.mount(Sandbox, {
            componentProperties: {
                inputEvent: createOutputSpy('inputEvent'),
                textfieldEvent: createOutputSpy('textfieldEvent'),
            },
        });
    });

    describe('listener on input[tuiInputChip]', () => {
        it('emits on keyboard input', () => {
            cy.get('[tuiInputChip]').type('peru');

            cy.get('@inputEvent').should('have.callCount', 4);
            cy.get('@inputEvent').should('have.been.calledWith', 'peru');
        });

        it('emits on Enter (input becomes empty)', () => {
            cy.get('[tuiInputChip]').type('Peru');
            cy.press(Cypress.Keyboard.Keys.ENTER);
            cy.get('tui-input-chip').should('have.length', 1);

            cy.get('@inputEvent').should('have.callCount', 'Peru'.length + 1);
            cy.get('@inputEvent').should('have.been.calledWith', '');
        });

        it('emits on cleaner click', () => {
            cy.get('[tuiInputChip]').type('Peru');
            cy.press(Cypress.Keyboard.Keys.ENTER);

            cy.get('[tuiInputChip]').type('au');
            cy.get('@inputEvent').should(
                'have.callCount',
                'Peru'.length + 1 + 'au'.length,
            );
            cy.get('tui-textfield [tuiButtonX]').click();

            cy.get('@inputEvent').should(
                'have.callCount',
                'Peru'.length + 1 + 'au'.length + 1,
            );
            cy.get('@inputEvent').should('have.been.calledWith', '');

            cy.get('[tuiInputChip]').should('have.value', '');
        });

        it('emits empty string on datalist item click erasing manually typed text earlier', () => {
            cy.get('[tuiInputChip]').type('aus');

            cy.get('@inputEvent').should('have.callCount', 3);
            cy.get('@inputEvent').should('have.been.calledWith', 'aus');

            cy.get('[tuiOption]').should('have.length', 2);
            cy.get('[tuiOption]').first().click();

            cy.get('@inputEvent').should('have.callCount', 4);
            cy.get('@inputEvent').should('have.been.calledWith', '');

            cy.get('[tuiInputChip]').should('have.value', '');
        });

        it('does not emit on datalist item click while empty', () => {
            cy.get('[tuiInputChip]').click().type('{downArrow}');
            cy.get('[tuiOption]').first().click();

            cy.get('tui-input-chip').should('have.length', 1);

            cy.wait(300); // ensure delayed async tasks are completed
            cy.get('@inputEvent').should('not.have.been.called');
        });

        it('emits empty string on blur erasing value rejected by disabledItemHandler', () => {
            cy.get('[tuiInputChip]').type('aus');

            cy.get('@inputEvent').should('have.callCount', 3);
            cy.get('@inputEvent').should('have.been.calledWith', 'aus');

            cy.get('[tuiInputChip]').blur();

            cy.get('tui-input-chip').should('have.length', 0);

            cy.get('@inputEvent').should('have.callCount', 4);
            cy.get('@inputEvent').should('have.been.calledWith', '');

            cy.get('[tuiInputChip]').should('have.value', '');
        });

        it('does not emit on chip deletion', () => {
            cy.get('[tuiInputChip]').click().type('{downArrow}');
            cy.get('[tuiOption]').first().click();

            cy.get('tui-input-chip').should('have.length', 1);
            cy.get('@inputEvent').should('not.have.been.called');

            cy.get('tui-input-chip button').click();

            cy.get('tui-input-chip').should('have.length', 0);

            cy.wait(300); // ensure delayed async tasks are completed
            cy.get('@inputEvent').should('not.have.been.called');
        });
    });
});
