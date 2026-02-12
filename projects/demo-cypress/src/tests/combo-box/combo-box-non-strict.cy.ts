import {ChangeDetectionStrategy, Component, inject, output} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {type TuiStringHandler} from '@taiga-ui/cdk';
import {TuiRoot} from '@taiga-ui/core';
import {TUI_COUNTRIES, TuiChevron, TuiComboBox, TuiDataListWrapper} from '@taiga-ui/kit';
import {createOutputSpy} from 'cypress/angular';

interface Country {
    id: string;
    name: string;
}

@Component({
    imports: [ReactiveFormsModule, TuiChevron, TuiComboBox, TuiDataListWrapper, TuiRoot],
    template: `
        <tui-root>
            <tui-textfield
                tuiChevron
                [stringify]="stringify"
            >
                <input
                    tuiComboBox
                    [formControl]="control"
                    [strict]="false"
                    (input)="inputEvent.emit($any($event.target).value)"
                />

                <tui-data-list-wrapper
                    *tuiDropdown
                    new
                    [items]="countries"
                />
            </tui-textfield>
        </tui-root>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestComboBox {
    protected readonly countries = Object.entries(inject(TUI_COUNTRIES)()).map(
        ([id, name]) => ({id, name}),
    );

    protected readonly control = new FormControl<Country | string | null>(null);

    public readonly valueChanges = output<Country | string | null>();

    public readonly inputEvent = output<string>();

    constructor() {
        this.control.valueChanges.subscribe((x) => this.valueChanges.emit(x));
    }

    protected readonly stringify: TuiStringHandler<Country> = (x) => x.name ?? x;
}

describe('ComboBox[strict=false]', () => {
    beforeEach(() => cy.viewport(300, 350));

    describe('form control value', () => {
        beforeEach(() => {
            cy.mount(TestComboBox, {
                componentProperties: {valueChanges: createOutputSpy('valueChanges')},
            });
        });

        it('emits object on click on item from datalist', () => {
            cy.get('[tuiComboBox]').click();
            cy.get('[tuiOption]').first().click();

            cy.get('@valueChanges').should('have.been.calledOnceWith', {
                id: 'AD',
                name: 'Andorra',
            });
        });

        it('does not emit new false positive value changes on focus/blur', () => {
            cy.get('[tuiComboBox]').click();
            cy.get('[tuiOption]').first().click();

            cy.get('[tuiComboBox]').blur().focus().blur().focus().blur().focus();

            cy.get('@valueChanges').should('have.been.calledOnceWith', {
                id: 'AD',
                name: 'Andorra',
            });
        });

        it('emits string for unmatched value', () => {
            cy.get('[tuiComboBox]').type('Andorr');

            cy.get('@valueChanges').should('have.callCount', 'Andorr'.length);
            cy.get('@valueChanges').should('have.been.calledWith', 'Andorr');
        });

        it('emits object match value with datalist item (after unmatched string value)', () => {
            cy.get('[tuiComboBox]').type('Andorra');

            cy.get('@valueChanges').should('have.callCount', 'Andorra'.length);
            cy.get('@valueChanges').should('have.been.calledWith', {
                id: 'AD',
                name: 'Andorra',
            });
        });

        it('formats textfield value on matching', () => {
            cy.get('[tuiComboBox]').type('aNdOrRa').should('have.value', 'Andorra');

            cy.get('@valueChanges').should('have.been.calledWith', {
                id: 'AD',
                name: 'Andorra',
            });
        });
    });

    describe('on cleaner click', () => {
        beforeEach(() => {
            cy.mount(TestComboBox, {
                componentProperties: {
                    valueChanges: createOutputSpy('valueChanges'),
                    inputEvent: createOutputSpy('inputEvent'),
                },
            });
        });

        it('emits (input) event with empty string', () => {
            cy.get('[tuiComboBox]').click();
            cy.get('[tuiOption]').first().click();

            cy.get('@valueChanges').should('have.been.calledOnceWith', {
                id: 'AD',
                name: 'Andorra',
            });

            cy.get('@inputEvent').should('have.been.calledWith', 'Andorra');

            cy.get('tui-textfield [tuiButtonX]').click();

            cy.get('@inputEvent').should('have.been.calledTwice');
            cy.get('@inputEvent').should('have.been.calledWith', '');
        });

        it('form control emits null', () => {
            cy.get('[tuiComboBox]').click();
            cy.get('[tuiOption]').first().click();

            cy.get('@valueChanges').should('have.been.calledOnceWith', {
                id: 'AD',
                name: 'Andorra',
            });

            cy.get('tui-textfield [tuiButtonX]').click();

            cy.get('@valueChanges').should('have.been.calledTwice');
            cy.get('@valueChanges').should('have.been.calledWith', null);
        });
    });

    it('set caret to the end after click on item from datalist', () => {
        cy.mount(TestComboBox);
        cy.get('[tuiComboBox]').focus().type('and');
        cy.get('[tuiOption]').first().click();

        cy.get('[tuiComboBox]')
            .should('have.value', 'Andorra')
            .should('have.prop', 'selectionStart', 'Andorra'.length)
            .should('have.prop', 'selectionEnd', 'Andorra'.length);
    });
});
