import {I18nPluralPipe} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {CHAR_ZERO_WIDTH_SPACE} from '@taiga-ui/cdk';
import {TuiRoot, TuiTextfield} from '@taiga-ui/core';
import {TuiInputNumber, tuiInputNumberOptionsProvider} from '@taiga-ui/kit';

@Component({
    imports: [I18nPluralPipe, ReactiveFormsModule, TuiInputNumber, TuiRoot, TuiTextfield],
    template: `
        <tui-root>
            <tui-textfield>
                <input
                    tuiInputNumber
                    [formControl]="control"
                    [max]="0"
                    [min]="min"
                    [postfix]="control.value | i18nPlural: pluralize"
                />
            </tui-textfield>

            <button
                id="min"
                type="button"
                (click)="min = -29"
            >
                Change min
            </button>
        </tui-root>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        // https://taiga-ui.dev/components/input-range#hidden-minus-sign
        tuiInputNumberOptionsProvider({
            minusSign: CHAR_ZERO_WIDTH_SPACE,
            prefix: CHAR_ZERO_WIDTH_SPACE,
        }),
    ],
})
class SandBox {
    protected min = -30;
    protected readonly pluralize = {
        '=-1': ' day ago',
        other: ' days ago',
    };

    public readonly control = new FormControl<number | null>(null);
}

describe('InputNumber | Allow using negative values with hidden minus sign', () => {
    let component: SandBox;

    beforeEach(() => {
        cy.mount(SandBox).then((x) => {
            component = x.component;
        });
    });

    it('Enter 5 => Textfield contains `5 days ago` & form control contains `-5`', () => {
        cy.get('[tuiInputNumber]')
            .type('5')
            .should('have.value', `${CHAR_ZERO_WIDTH_SPACE}5 days ago`)
            .should('have.prop', 'selectionStart', 2)
            .should('have.prop', 'selectionEnd', 2)
            .then(() => {
                expect(component.control.value).to.equal(-5);
            });
    });

    it('Enter 1 => => Textfield contains `1 day ago` & form control contains `-1`', () => {
        cy.get('[tuiInputNumber]')
            .type('1')
            .should('have.value', `${CHAR_ZERO_WIDTH_SPACE}1 day ago`)
            .should('have.prop', 'selectionStart', 2)
            .should('have.prop', 'selectionEnd', 2)
            .then(() => {
                expect(component.control.value).to.equal(-1);
            });
    });

    it('1| day ago => => Press 5 => Textfield contains `15 days ago` & form control contains `-15`', () => {
        cy.get('[tuiInputNumber]')
            .type('1')
            .should('have.value', `${CHAR_ZERO_WIDTH_SPACE}1 day ago`)
            .type('5')
            .should('have.value', `${CHAR_ZERO_WIDTH_SPACE}15 days ago`)
            .should('have.prop', 'selectionStart', 3)
            .should('have.prop', 'selectionEnd', 3)
            .then(() => {
                expect(component.control.value).to.equal(-15);
            });
    });

    it('15| days ago => => Backspace => Textfield contains `1 day ago` & form control contains `-1`', () => {
        cy.get('[tuiInputNumber]')
            .type('15')
            .should('have.value', `${CHAR_ZERO_WIDTH_SPACE}15 days ago`)
            .type('{backspace}')
            .should('have.value', `${CHAR_ZERO_WIDTH_SPACE}1 day ago`)
            .should('have.prop', 'selectionStart', 2)
            .should('have.prop', 'selectionEnd', 2)
            .then(() => {
                expect(component.control.value).to.equal(-1);
            });
    });

    describe('attempts to violate min/max restrictions', () => {
        it('3| days ago => => Type 5 => Textfield contains `30 days ago` & form control contains `-30`', () => {
            cy.get('[tuiInputNumber]')
                .type('3')
                .should('have.value', `${CHAR_ZERO_WIDTH_SPACE}3 days ago`)
                .type('5')
                .should('have.value', `${CHAR_ZERO_WIDTH_SPACE}30 days ago`)
                .should('have.prop', 'selectionStart', 3)
                .should('have.prop', 'selectionEnd', 3)
                .then(() => {
                    expect(component.control.value).to.equal(-30);
                });
        });

        it('2|5 days ago => => Type 0 => Textfield contains `30 days ago` & form control contains `-30`', () => {
            cy.get('[tuiInputNumber]')
                .type('25')
                .should('have.value', `${CHAR_ZERO_WIDTH_SPACE}25 days ago`)
                .type('{leftArrow}')
                .type('0')
                .should('have.value', `${CHAR_ZERO_WIDTH_SPACE}30 days ago`)
                .should('have.prop', 'selectionStart', 3)
                .should('have.prop', 'selectionEnd', 3)
                .then(() => {
                    expect(component.control.value).to.equal(-30);
                });
        });
    });

    describe('runtime changes of input property `[min]`', () => {
        it('textfield keeps the same value after focus + blur', () => {
            cy.get('[tuiInputNumber]')
                .type('5')
                .should('have.value', `${CHAR_ZERO_WIDTH_SPACE}5 days ago`)
                .then(() => {
                    expect(component.control.value).to.equal(-5);
                });

            cy.get('#min').click();

            cy.get('[tuiInputNumber]')
                .click()
                .should('have.value', `${CHAR_ZERO_WIDTH_SPACE}5 days ago`)
                .then(() => {
                    expect(component.control.value).to.equal(-5);
                })
                .blur()
                .should('have.value', `${CHAR_ZERO_WIDTH_SPACE}5 days ago`)
                .then(() => {
                    expect(component.control.value).to.equal(-5);
                });
        });

        it('allow to enter new valid value', () => {
            cy.get('[tuiInputNumber]')
                .type('1')
                .should('have.value', `${CHAR_ZERO_WIDTH_SPACE}1 day ago`)
                .then(() => {
                    expect(component.control.value).to.equal(-1);
                });

            cy.get('#min').click();

            cy.get('[tuiInputNumber]')
                .type('7')
                .should('have.value', `${CHAR_ZERO_WIDTH_SPACE}17 days ago`)
                .then(() => {
                    expect(component.control.value).to.equal(-17);
                })
                .blur()
                .should('have.value', `${CHAR_ZERO_WIDTH_SPACE}17 days ago`)
                .then(() => {
                    expect(component.control.value).to.equal(-17);
                });
        });
    });

    describe('Should prevent any attempts to erase hidden minus', () => {
        it('when control is empty by Backspace', () => {
            cy.get('[tuiInputNumber]')
                .focus()
                .should('have.value', CHAR_ZERO_WIDTH_SPACE)
                .type('{backspace}')
                .should('have.value', CHAR_ZERO_WIDTH_SPACE)
                .then(() => {
                    expect(component.control.value).to.equal(null);
                });
        });

        it('by keyboard arrow navigation + Delete', () => {
            cy.get('[tuiInputNumber]')
                .focus()
                .should('have.value', CHAR_ZERO_WIDTH_SPACE)
                .should('have.prop', 'selectionStart', 1)
                .should('have.prop', 'selectionEnd', 1)
                .type('{moveToStart}')
                .should('have.prop', 'selectionStart', 1)
                .should('have.prop', 'selectionEnd', 1)
                .type('{leftArrow}')
                .should('have.prop', 'selectionStart', 1)
                .should('have.prop', 'selectionEnd', 1)
                .type('{del}')
                .should('have.value', CHAR_ZERO_WIDTH_SPACE)
                .should('have.prop', 'selectionStart', 1)
                .should('have.prop', 'selectionEnd', 1);
        });

        it('by select all + Delete', () => {
            cy.get('[tuiInputNumber]')
                .focus()
                .type('{selectAll}{del}')
                .should('have.value', CHAR_ZERO_WIDTH_SPACE)
                .should('have.prop', 'selectionStart', 1)
                .should('have.prop', 'selectionEnd', 1);
        });

        it('by select all + Backspace', () => {
            cy.get('[tuiInputNumber]')
                .type('4')
                .should('have.value', `${CHAR_ZERO_WIDTH_SPACE}4 days ago`)
                .type('{selectAll}{backspace}')
                .should('have.value', CHAR_ZERO_WIDTH_SPACE)
                .should('have.prop', 'selectionStart', 1)
                .should('have.prop', 'selectionEnd', 1);
        });
    });

    describe('Should prevent any attempts to duplicate hidden minus', () => {
        it('by typing excessive hyphen', () => {
            cy.get('[tuiInputNumber]')
                .type('-1')
                .should('have.value', `${CHAR_ZERO_WIDTH_SPACE}1 day ago`);
        });

        it('by typing excessive zero-width space', () => {
            cy.get('[tuiInputNumber]')
                .type(`${CHAR_ZERO_WIDTH_SPACE}7`)
                .should('have.value', `${CHAR_ZERO_WIDTH_SPACE}7 days ago`);
        });
    });

    it('hidden minus is not visible in the textfield', () => {
        cy.viewport(200, 200);

        cy.get('[tuiInputNumber]')
            .type('15')
            .should('have.value', `${CHAR_ZERO_WIDTH_SPACE}15 days ago`)
            .compareSnapshot('input-number-with-hidden-minus');
    });
});
