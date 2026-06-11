import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiInputColor} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiInputColor, TuiTextfield],
    template: `
        <tui-textfield>
            <input
                tuiInputColor
                [(ngModel)]="value"
                [format]="format"
            />
        </tui-textfield>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
class TestInputColor {
    public value = '#ffffff';
    public format: 'hex' | 'hexa' = 'hexa';
}

describe('InputColor', () => {
    describe('hexa mode', () => {
        beforeEach(() => {
            cy.mount(TestInputColor);
        });

        it('shows color preview when 7-char hex is entered without alpha', () => {
            cy.get('input[type="color"]').should(($input) => {
                expect($input.get(0).style.getPropertyValue('--t-opacity')).to.equal('1');
            });
        });

        it('preserves base color when opacity slider changes before alpha is typed', () => {
            cy.get('input[type="range"]').then(($input) => {
                const input = $input.get(0) as HTMLInputElement;

                input.value = '128';
                input.dispatchEvent(new Event('input', {bubbles: true}));
            });

            cy.get('input[tuiInputColor]').should('have.value', '#ffffff80');
        });
    });
});
