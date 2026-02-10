import {ChangeDetectionStrategy, Component, input, output} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {type TuiContext, type TuiStringHandler} from '@taiga-ui/cdk';
import {TuiRoot, TuiTextfield} from '@taiga-ui/core';
import {TuiChevron, TuiDataListWrapper, TuiSelect} from '@taiga-ui/kit';
import {type PolymorpheusContent} from '@taiga-ui/polymorpheus';
import {createOutputSpy} from 'cypress/angular';

interface User {
    name: string;
    balance: number;
}

@Component({
    imports: [
        ReactiveFormsModule,
        TuiChevron,
        TuiDataListWrapper,
        TuiRoot,
        TuiSelect,
        TuiTextfield,
    ],
    template: `
        <tui-root>
            <tui-textfield
                tuiChevron
                [content]="content()"
                [stringify]="stringify()"
            >
                <input
                    tuiSelect
                    [formControl]="control"
                />

                <tui-data-list-wrapper
                    *tuiDropdown
                    [itemContent]="content()"
                    [items]="options"
                    (itemClick)="itemClick.emit($event)"
                />
            </tui-textfield>

            <button
                id="patch"
                type="button"
                (click)="control.setValue(options.at(-1))"
            >
                Patch with last option
            </button>
        </tui-root>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Sandbox {
    protected readonly options: User[] = Array.from({length: 5}, (_, i) => ({
        name: `User${i}`,
        balance: i,
    }));

    protected readonly control = new FormControl(this.options[0]!);

    public readonly itemClick = output<User>();

    public readonly content = input<PolymorpheusContent<TuiContext<User>>>(
        ({$implicit}) => this.stringify()($implicit),
    );

    public readonly stringify = input<TuiStringHandler<User>>((x) => x.name);
}

describe('Select', () => {
    beforeEach(() => cy.viewport(300, 350));

    describe('checked state of option', () => {
        beforeEach(() => {
            cy.mount(Sandbox);
        });

        it('form control has initial value => initial option has check mark', () => {
            cy.get('[tuiSelect]').click().should('have.value', 'User0');

            cy.get('[tuiOption]')
                .contains('User0')
                .find('input[type="checkbox"]')
                .should('be.checked');

            cy.get('[tuiOption]')
                .contains('User2')
                .find('input[type="checkbox"]')
                .should('not.exist');

            cy.compareSnapshot('select-form-control-has-initial-value-option-checked');
        });

        it('select new option from datalist => new option has check mark', () => {
            cy.get('[tuiSelect]').click();
            cy.get('[tuiOption]').last().click();
            cy.get('[tuiSelect]').click();

            cy.get('[tuiOption]')
                .contains('User0')
                .find('input[type="checkbox"]')
                .should('not.exist');

            cy.get('[tuiOption]')
                .last()
                .find('input[type="checkbox"]')
                .should('be.checked');

            cy.compareSnapshot('select-new-selected-option-checked');
        });
    });

    describe('DataListWrapper', () => {
        beforeEach(() => {
            cy.mount(Sandbox, {
                componentProperties: {itemClick: createOutputSpy('itemClick')},
            });
        });

        it('emits (itemClick) on the first option click ', () => {
            cy.get('[tuiSelect]').click();
            cy.get('[tuiOption]').first().click();

            cy.get('@itemClick').should('have.been.calledWith', {
                name: 'User0',
                balance: 0,
            });
        });

        it('emits (itemClick) on the last option click ', () => {
            cy.get('[tuiSelect]').click();
            cy.get('[tuiOption]').last().click();

            cy.get('@itemClick').should('have.been.calledWith', {
                name: 'User4',
                balance: 4,
            });
        });
    });

    it('tui-textfield[content] + formControl.setValue', () => {
        cy.mount(Sandbox, {
            componentProperties: {
                content: ({$implicit}) => $implicit.name,
                stringify: String, // default
            },
        });

        cy.get('tui-textfield:has([tuiSelect])').should('contain.text', 'User0');
        cy.get('#patch').click();
        cy.get('tui-textfield:has([tuiSelect])').should('contain.text', 'User4');
    });
});
