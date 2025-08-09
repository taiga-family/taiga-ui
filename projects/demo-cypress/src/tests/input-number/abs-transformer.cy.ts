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
                    [min]="-30"
                    [postfix]="control.value | i18nPlural: pluralize"
                />
            </tui-textfield>
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
    protected readonly pluralize = {
        '=-1': 'day ago',
        other: 'days ago',
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

    // TODO
    it('Enter 5 => Textfield contains `5 days ago` & form control contans `-5`', () => {
        cy.get('[tuiInputNumber]')
            .click()
            .type('5')
            .should('have.value', '5 days ago')
            .should('have.prop', 'selectionStart', 1)
            .should('have.prop', 'selectionEnd', 1)
            .then(() => {
                expect(component.control.value).to.equal(-5);
            });
    });

    // TODO
    it('Enter 1 => => Textfield contains `1 day ago` & form control contans `-1`', () => {
        cy.get('[tuiInputNumber]')
            .type('1')
            .should('have.value', '1 day ago')
            .should('have.prop', 'selectionStart', 1)
            .should('have.prop', 'selectionEnd', 1)
            .then(() => {
                expect(component.control.value).to.equal(-1);
            });
    });
});
