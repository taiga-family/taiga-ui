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
                (input)="textfieldEvent.emit(describeEvent($any($event.target)))"
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

    protected describeEvent(target: HTMLInputElement): string {
        const owner = target.matches('[tuiInputChip]') ? 'input' : 'chip';

        return `${owner}:${target.value}`;
    }
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
            cy.get('[tuiInputChip]').type('aus');

            cy.get('@inputEvent').should('have.callCount', 3);
            cy.get('@inputEvent').should('have.been.calledWith', 'aus');
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

    describe('listener on tui-textfield', () => {
        it('receives bubbled events of input[tuiInputChip]', () => {
            cy.get('[tuiInputChip]').type('aus');

            cy.get('@textfieldEvent')
                .its('args')
                .should('deep.equal', [['input:a'], ['input:au'], ['input:aus']]);
        });

        it('receives 1 event on creation of the chip (`[tuiInputChip]` becomes empty)', () => {
            cy.get('[tuiInputChip]').type('aus');
            cy.get('[tuiOption]').should('have.length', 2);
            cy.get('@textfieldEvent').invoke('resetHistory');

            cy.get('[tuiOption]').first().click();

            cy.get('tui-input-chip').should('have.length', 1);

            cy.get('@textfieldEvent')
                .its('args')
                .should('deep.equal', [['input:']]);
        });

        it('does not receive events of the chip created by click on item from datalist while input[tuiInputChip] is empty', () => {
            cy.get('[tuiInputChip]').click().type('{downArrow}');
            cy.get('[tuiOption]').first().click();

            cy.get('tui-input-chip').should('have.length', 1);

            cy.wait(300); // ensure delayed async tasks are completed
            cy.get('@textfieldEvent').should('not.have.been.called');
        });

        it('receives 1 event on creation of the chip by enter (`[tuiInputChip]` becomes empty)', () => {
            cy.get('[tuiInputChip]').type('Austria');
            cy.get('@textfieldEvent').invoke('resetHistory');

            cy.get('[tuiInputChip]').type('{enter}');

            cy.get('tui-input-chip').should('have.length', 1);

            cy.get('@textfieldEvent')
                .its('args')
                .should('deep.equal', [['input:']]);
        });

        it('receives 2 events on creation of the chip by separator (insertion of separator + `[tuiInputChip]` becomes empty)', () => {
            cy.get('[tuiInputChip]').type('Austria');
            cy.get('@textfieldEvent').invoke('resetHistory');

            cy.get('[tuiInputChip]').type(',');

            cy.get('tui-input-chip').should('have.length', 1);

            cy.get('@textfieldEvent')
                .its('args')
                .should('deep.equal', [['input:'], ['input:']]);
        });

        it('receives nothing extra on committed chip edit', () => {
            cy.get('[tuiInputChip]').click().type('{downArrow}');
            cy.get('[tuiOption]').first().click();

            cy.get('tui-input-chip').should('have.length', 1);
            cy.get('@textfieldEvent').invoke('resetHistory');

            cy.get('tui-input-chip').dblclick();
            cy.get('tui-input-chip input').type('{selectall}Austria');

            cy.get('@textfieldEvent')
                .its('args')
                .should('deep.equal', [
                    ['chip:A'],
                    ['chip:Au'],
                    ['chip:Aus'],
                    ['chip:Aust'],
                    ['chip:Austr'],
                    ['chip:Austri'],
                    ['chip:Austria'],
                ]);

            cy.get('@textfieldEvent').invoke('resetHistory');

            cy.get('tui-input-chip input').type('{enter}');

            cy.get('tui-input-chip').should('contain.text', 'Austria');

            cy.wait(300); // ensure delayed async tasks are completed
            cy.get('@textfieldEvent').should('not.have.been.called');
        });

        it('receives event of the chip input deleted by cross', () => {
            cy.get('[tuiInputChip]').click().type('{downArrow}');
            cy.get('[tuiOption]').first().click();

            cy.get('tui-input-chip').should('have.length', 1);
            cy.get('@textfieldEvent').invoke('resetHistory');

            cy.get('tui-input-chip button').click();

            cy.get('tui-input-chip').should('have.length', 0);

            cy.get('@textfieldEvent').should('have.been.calledOnce');
            cy.get('@textfieldEvent').should('have.been.calledWith', 'chip:');
        });

        it('receives event of the chip input deselected in datalist', () => {
            cy.get('[tuiInputChip]').click().type('{downArrow}');
            cy.get('[tuiOption]').first().click();

            cy.get('tui-input-chip').should('have.length', 1);
            cy.get('@textfieldEvent').invoke('resetHistory');

            cy.get('[tuiOption]').first().click();

            cy.get('tui-input-chip').should('have.length', 0);

            cy.get('@textfieldEvent').should('have.been.calledOnce');
            cy.get('@textfieldEvent').should('have.been.calledWith', 'chip:');
        });

        it('receives event of the chip input deleted by backspace', () => {
            cy.get('[tuiInputChip]').click().type('{downArrow}');
            cy.get('[tuiOption]').first().click();

            cy.get('tui-input-chip').should('have.length', 1);
            cy.get('@textfieldEvent').invoke('resetHistory');

            cy.get('[tuiInputChip]').focus();

            cy.press(Cypress.Keyboard.Keys.BACKSPACE); // moves focus from the empty input to the chip
            cy.press(Cypress.Keyboard.Keys.BACKSPACE); // delete chip

            cy.get('tui-input-chip').should('have.length', 0);

            cy.get('@textfieldEvent').should('have.been.calledOnce');
            cy.get('@textfieldEvent').should('have.been.calledWith', 'chip:');
        });

        it('receives event of the chip input emptied and committed', () => {
            cy.get('[tuiInputChip]').click().type('{downArrow}');
            cy.get('[tuiOption]').first().click();

            cy.get('tui-input-chip').should('have.length', 1);

            cy.get('tui-input-chip').dblclick();
            cy.get('tui-input-chip input').type('{selectall}{backspace}');
            cy.get('@textfieldEvent').invoke('resetHistory');

            cy.get('tui-input-chip input').type('{enter}');

            cy.get('tui-input-chip').should('have.length', 0);

            cy.get('@textfieldEvent').should('have.been.calledOnce');
            cy.get('@textfieldEvent').should('have.been.calledWith', 'chip:');
        });

        it('receives event of every chip input on cleaner click', () => {
            cy.get('[tuiInputChip]').click().type('{downArrow}');
            cy.get('[tuiOption]').first().click();
            cy.get('[tuiInputChip]').type('aus');
            cy.get('[tuiOption]').first().click();

            cy.get('tui-input-chip').should('have.length', 2);

            cy.get('[tuiInputChip]').type('aus');
            cy.get('@textfieldEvent').invoke('resetHistory');

            cy.get('tui-textfield [tuiButtonX]').click();

            cy.get('tui-input-chip').should('have.length', 0);

            cy.get('@textfieldEvent').should('have.callCount', 3);
            cy.get('@textfieldEvent').its('firstCall.args.0').should('eq', 'input:');
            cy.get('@textfieldEvent').its('secondCall.args.0').should('eq', 'chip:');
            cy.get('@textfieldEvent').its('thirdCall.args.0').should('eq', 'chip:');
        });

        it('receives nothing from the empty input on cleaner click', () => {
            cy.get('[tuiInputChip]').click().type('{downArrow}');
            cy.get('[tuiOption]').first().click();
            cy.get('[tuiOption]').eq(1).click();

            cy.get('tui-input-chip').should('have.length', 2);
            cy.get('@textfieldEvent').invoke('resetHistory');

            cy.get('tui-textfield [tuiButtonX]').click();

            cy.get('tui-input-chip').should('have.length', 0);

            cy.wait(300); // ensure delayed async tasks are completed
            cy.get('@textfieldEvent')
                .its('args')
                .should('deep.equal', [['chip:'], ['chip:']]);
        });
    });
});
