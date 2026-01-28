import {ChangeDetectionStrategy, Component, input, model} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiInput, TuiRoot} from '@taiga-ui/core';

@Component({
    imports: [FormsModule, TuiInput, TuiRoot],
    template: `
        <tui-root>
            <tui-textfield
                #textfield
                [content]="textfield.focused() ? '' : content()"
                [filler]="filler()"
            >
                <input
                    tuiInput
                    [placeholder]="placeholder()"
                    [(ngModel)]="initialValue"
                />
            </tui-textfield>
        </tui-root>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestTextfield {
    public readonly initialValue = model('');

    public readonly filler = input('');

    public readonly content = input('');

    public readonly placeholder = input('');
}

describe('Input', () => {
    beforeEach(() => cy.viewport(200, 150));

    describe('[filler] property', () => {
        describe('with initial value', () => {
            ['2', '23', '23:', '23:5', '23:59'].forEach((initialValue) => {
                it(initialValue, () => {
                    cy.mount(TestTextfield, {
                        componentProperties: {
                            initialValue,
                            filler: 'HH:MM',
                        },
                    });

                    cy.get('tui-textfield input[tuiInput]').focus();
                    cy.get('tui-textfield').compareSnapshot(
                        `[filler]-initial-value_${initialValue.replaceAll(':', '-')}`,
                    );
                });
            });
        });

        describe('user types new value', () => {
            beforeEach(() => {
                cy.mount(TestTextfield, {componentProperties: {filler: 'HH:MM'}});

                cy.get('tui-textfield input[tuiInput]').focus();
            });

            ['2', '23', '23:', '23:5', '23:59'].forEach((value) => {
                it(value, () => {
                    cy.get('tui-textfield input[tuiInput]').type(value);

                    cy.get('tui-textfield').compareSnapshot(
                        `[filler]-user-types_${value.replaceAll(':', '-')}`,
                    );
                });
            });
        });
    });

    describe('[content] property', () => {
        beforeEach(() => {
            cy.mount(TestTextfield, {
                componentProperties: {
                    initialValue: '42',
                    content: 'TOP-SECRET',
                },
            });
        });

        it('shows content for untouched field without focus', () => {
            cy.get('tui-textfield').compareSnapshot('[content]-pristine-unfocused');
        });

        it('hides content and show value on focus', () => {
            cy.get('tui-textfield input[tuiInput]').focus();

            cy.get('tui-textfield').compareSnapshot('[content]-focused');
        });

        it('shows content again after blur', () => {
            cy.get('tui-textfield input[tuiInput]')
                .focus()
                .wait(300) // to ensure that all possible operations are finished
                .blur();

            cy.get('tui-textfield').compareSnapshot('[content]-after-blur');
        });
    });

    describe('[placeholder]', () => {
        beforeEach(() => {
            cy.mount(TestTextfield, {
                componentProperties: {
                    initialValue: '',
                    placeholder:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                },
            });
        });

        it('long placeholder', () => {
            cy.get('tui-textfield input[tuiInput]')
                .focus()
                .wait(300) // to ensure that all possible operations are finished
                .blur();

            cy.get('tui-textfield').compareSnapshot('[placeholder]-long-placeholder');
        });
    });
});
