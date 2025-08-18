import {I18nPluralPipe} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiRoot, TuiTextfield} from '@taiga-ui/core';
import {TuiInputNumber, tuiInputNumberOptionsProvider} from '@taiga-ui/kit';

@Component({
    standalone: true,
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
        // https://taiga-ui.dev/legacy/input-range#negative
        tuiInputNumberOptionsProvider({
            valueTransformer: {
                fromControlValue(value: number | null): number | null {
                    return value && Math.abs(value);
                },
                toControlValue(value: number | null): number | null {
                    return value && -1 * Math.abs(value);
                },
            },
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

describe('InputNumber | Abs transformer (allow using negative values without minus sign)', () => {
    let component: SandBox;

    beforeEach(() => {
        cy.mount(SandBox).then((x) => {
            component = x.component;
        });
    });

    it('Enter 5 => Textfield contains `5 days ago` & form control contains `-5`', () => {
        cy.get('[tuiInputNumber]')
            .type('5')
            .should('have.value', '5 days ago')
            .should('have.prop', 'selectionStart', 1)
            .should('have.prop', 'selectionEnd', 1)
            .then(() => {
                expect(component.control.value).to.equal(-5);
            });
    });

    it('Enter 1 => => Textfield contains `1 day ago` & form control contains `-1`', () => {
        cy.get('[tuiInputNumber]')
            .type('1')
            .should('have.value', '1 day ago')
            .should('have.prop', 'selectionStart', 1)
            .should('have.prop', 'selectionEnd', 1)
            .then(() => {
                expect(component.control.value).to.equal(-1);
            });
    });

    it('1| day ago => => Press 5 => Textfield contains `15 days ago` & form control contains `-15`', () => {
        cy.get('[tuiInputNumber]')
            .type('1')
            .should('have.value', '1 day ago')
            .type('5')
            .should('have.value', '15 days ago')
            .should('have.prop', 'selectionStart', 2)
            .should('have.prop', 'selectionEnd', 2)
            .then(() => {
                expect(component.control.value).to.equal(-15);
            });
    });

    it('15| days ago => => Backspace => Textfield contains `1 day ago` & form control contains `-1`', () => {
        cy.get('[tuiInputNumber]')
            .type('15')
            .should('have.value', '15 days ago')
            .type('{backspace}')
            .should('have.value', '1 day ago')
            .should('have.prop', 'selectionStart', 1)
            .should('have.prop', 'selectionEnd', 1)
            .then(() => {
                expect(component.control.value).to.equal(-1);
            });
    });

    describe('attempts to violate min/max restrictions', () => {
        it('3| days ago => => Type 5 => Textfield contains `30 days ago` & form control contains `-30`', () => {
            cy.get('[tuiInputNumber]')
                .type('3')
                .should('have.value', '3 days ago')
                .type('5')
                .should('have.value', '30 days ago')
                .should('have.prop', 'selectionStart', 2)
                .should('have.prop', 'selectionEnd', 2)
                .then(() => {
                    expect(component.control.value).to.equal(-30);
                });
        });

        it('2|5 days ago => => Type 0 => Textfield contains `30 days ago` & form control contains `-30`', () => {
            cy.get('[tuiInputNumber]')
                .type('25')
                .should('have.value', '25 days ago')
                .type('{leftArrow}')
                .type('0')
                .should('have.value', '30 days ago')
                .should('have.prop', 'selectionStart', 2)
                .should('have.prop', 'selectionEnd', 2)
                .then(() => {
                    expect(component.control.value).to.equal(-30);
                });
        });
    });

    describe('runtime changes of input property `[min]`', () => {
        it('textfield keeps the same value after focus + blur', () => {
            cy.get('[tuiInputNumber]')
                .type('5')
                .should('have.value', '5 days ago')
                .then(() => {
                    expect(component.control.value).to.equal(-5);
                });

            cy.get('#min').click();

            cy.get('[tuiInputNumber]')
                .click()
                .should('have.value', '5 days ago')
                .then(() => {
                    expect(component.control.value).to.equal(-5);
                })
                .blur()
                .should('have.value', '5 days ago')
                .then(() => {
                    expect(component.control.value).to.equal(-5);
                });
        });

        it('allow to enter new valid value', () => {
            cy.get('[tuiInputNumber]')
                .type('1')
                .should('have.value', '1 day ago')
                .then(() => {
                    expect(component.control.value).to.equal(-1);
                });

            cy.get('#min').click();

            cy.get('[tuiInputNumber]')
                .type('7')
                .should('have.value', '17 days ago')
                .then(() => {
                    expect(component.control.value).to.equal(-17);
                })
                .blur()
                .should('have.value', '17 days ago')
                .then(() => {
                    expect(component.control.value).to.equal(-17);
                });
        });
    });
});
