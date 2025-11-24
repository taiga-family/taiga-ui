import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output,
} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {type TuiBooleanHandler, type TuiStringHandler} from '@taiga-ui/cdk';
import {TuiRoot, TuiTextfield} from '@taiga-ui/core';
import {TuiChevron, TuiSelect} from '@taiga-ui/kit';
import {createOutputSpy} from 'cypress/angular';

interface Item {
    id: number;
    name: string;
}

@Component({
    imports: [ReactiveFormsModule, TuiChevron, TuiRoot, TuiSelect, TuiTextfield],
    template: `
        <tui-root>
            <tui-textfield
                tuiChevron
                [disabledItemHandler]="disabledItemHandler"
                [stringify]="stringify"
            >
                <select
                    tuiSelect
                    [formControl]="control"
                    [items]="items"
                    [placeholder]="placeholder"
                ></select>
            </tui-textfield>
        </tui-root>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Sandbox {
    protected readonly control = new FormControl<Item | null>(null);
    protected items: readonly Item[] = [
        {name: 'First Item', id: 1},
        {name: '2nd Item', id: 2},
        {name: 'DisabledItem', id: 3},
        {name: '4th', id: 4},
    ];

    @Input()
    public placeholder = '';

    /**
     * TODO: use `import {output} from '@angular/core'`
     * after Cypress >=15.0.0 bump
     * https://github.com/cypress-io/cypress/issues/32137#issuecomment-3207460304
     */
    @Output()
    public readonly valueChanges = new EventEmitter<Item | null>();

    constructor() {
        this.control.valueChanges.subscribe((x) => this.valueChanges.emit(x));
    }

    protected readonly stringify: TuiStringHandler<Item> = (item) => item.name;
    protected readonly disabledItemHandler: TuiBooleanHandler<Item> = (item) =>
        item.name === 'DisabledItem';
}

describe('NativeSelect', () => {
    beforeEach(() => cy.viewport(300, 100));

    describe('without placeholder', () => {
        beforeEach(() => {
            cy.mount(Sandbox, {
                componentProperties: {
                    valueChanges: createOutputSpy('valueChanges'),
                },
            });
        });

        it('initial empty textfield', () => {
            cy.get('select').should('have.value', null);
            cy.get('@valueChanges').should('not.have.been.called');

            cy.compareSnapshot('initial-empty-textfield');
        });

        it('possible to select 1st option', () => {
            cy.get('select').select('First Item').should('have.value', 'First Item');
            cy.get('@valueChanges').should('have.been.calledOnceWith', {
                name: 'First Item',
                id: 1,
            });

            cy.compareSnapshot('first-option-selected');
        });

        it('possible to select new option after already selected option', () => {
            cy.get('select').select('First Item').select(3).should('have.value', '4th');
            cy.get('@valueChanges').should('have.been.calledWith', {
                name: '4th',
                id: 4,
            });

            cy.compareSnapshot('new-option-selected');
        });

        it('[disabledItemHandler] works', () => {
            cy.get('select').find('option[value="DisabledItem"]').should('be.disabled');
        });
    });
});
