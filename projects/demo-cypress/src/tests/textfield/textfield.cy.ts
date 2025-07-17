import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TUI_ANIMATIONS_SPEED, TuiRoot, TuiTextfield} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [FormsModule, TuiRoot, TuiTextfield],
    template: `
        <tui-root>
            <tui-textfield
                #textfield
                [content]="textfield.focused() ? '' : content"
                [filler]="filler"
            >
                <input
                    tuiTextfield
                    [(ngModel)]="initialValue"
                />
            </tui-textfield>
        </tui-root>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [{provide: TUI_ANIMATIONS_SPEED, useValue: 0}],
})
export class TestTextfield {
    @Input()
    public initialValue = '';

    @Input()
    public filler = '';

    @Input()
    public content = '';
}

describe('Textfield', () => {
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

                    cy.get('input[tuiTextfield]').focus();
                    cy.get('tui-textfield').compareSnapshot(
                        `[filler]-initial-value_${initialValue.replaceAll(':', '-')}`,
                    );
                });
            });
        });

        describe('user types new value', () => {
            beforeEach(() => {
                cy.mount(TestTextfield, {
                    componentProperties: {
                        filler: 'HH:MM',
                    },
                });

                cy.get('input[tuiTextfield]').focus();
            });

            ['2', '23', '23:', '23:5', '23:59'].forEach((value) => {
                it(value, () => {
                    cy.get('input[tuiTextfield]').type(value);

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
            cy.get('input[tuiTextfield]').focus();

            cy.get('tui-textfield').compareSnapshot('[content]-focused');
        });

        it('shows content again after blur', () => {
            cy.get('input[tuiTextfield]')
                .focus()
                .wait(300) // to ensure that all possible operations are finished
                .blur();

            cy.get('tui-textfield').compareSnapshot('[content]-after-blur');
        });
    });
});
