import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {
    TuiNumberFormat,
    type TuiNumberFormatSettings,
    TuiRoot,
    TuiTextfield,
} from '@taiga-ui/core';
import {TuiInputNumber} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiInputNumber, TuiNumberFormat, TuiRoot, TuiTextfield],
    template: `
        <tui-root>
            <tui-textfield>
                <input
                    tuiInputNumber
                    [tuiNumberFormat]="numberFormat()"
                    [(ngModel)]="value"
                />
            </tui-textfield>
        </tui-root>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
class Test {
    protected value: number | null = null;

    public readonly numberFormat = input<Partial<TuiNumberFormatSettings>>({});
}

describe('InputNumber with [tuiNumberFormat]', () => {
    it('[precision]=Infinity', () => {
        cy.mount(Test, {
            componentProperties: {numberFormat: {precision: Infinity}},
        });

        cy.get('[tuiInputNumber]')
            .type(',123456789012345')
            .should('have.value', '0.123456789012345')
            .should('have.prop', 'selectionStart', '0.123456789012345'.length)
            .should('have.prop', 'selectionEnd', '0.123456789012345'.length);
    });
});
