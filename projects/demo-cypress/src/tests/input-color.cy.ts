import {ChangeDetectionStrategy, Component, input, model} from '@angular/core';
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
                [format]="format()"
            />
        </tui-textfield>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
class TestInputColor {
    public readonly value = model('#ffffff');
    public readonly format = input<'hex' | 'hexa'>('hexa');
}

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
class TestTransparentInputColor {
    public value = '#ffffff00';
    public format: 'hex' | 'hexa' = 'hexa';
}

describe('InputColor', () => {
    (['hex', 'hexa'] as const).forEach((format) => {
        describe(`${format} mode`, () => {
            it('keeps an initially empty form value when the native picker defaults to black', () => {
                cy.mount(TestInputColor, {componentProperties: {format, value: ''}}).then(
                    ({component}) => {
                        cy.get('input[type="color"]').should('have.value', '#000000');
                        cy.get('input[tuiInputColor]').should('have.value', '');
                        cy.then(() => expect(component.value()).to.equal(''));
                    },
                );
            });

            it('clears the value and accepts a new color from the native picker', () => {
                cy.mount(TestInputColor, {componentProperties: {format}}).then(
                    ({component}) => {
                        cy.get('input[tuiInputColor]').focus();
                        cy.get('button[tuiButtonX]').click();
                        cy.get('input[type="color"]').should('have.value', '#000000');
                        cy.then(() => expect(component.value()).to.equal(''));

                        cy.get('input[type="color"]').then(($input) => {
                            const input = $input.get(0) as HTMLInputElement;

                            input.value = '#123456';
                            input.dispatchEvent(new Event('input', {bubbles: true}));
                        });

                        const expected = format === 'hexa' ? '#123456ff' : '#123456';

                        cy.get('input[tuiInputColor]').should('have.value', expected);
                        cy.then(() => expect(component.value()).to.equal(expected));
                    },
                );
            });
        });
    });

    describe('hexa mode', () => {
        it('shows color preview when 7-char hex is entered without alpha', () => {
            cy.mount(TestInputColor);

            cy.get('input[type="color"]').should(($input) => {
                expect($input.get(0).style.getPropertyValue('--t-opacity')).to.equal('1');
            });
        });

        it('preserves base color when opacity slider changes before alpha is typed', () => {
            cy.mount(TestInputColor);

            cy.get('input[type="range"]').then(($input) => {
                const input = $input.get(0) as HTMLInputElement;

                input.value = '128';
                input.dispatchEvent(new Event('input', {bubbles: true}));
            });

            cy.get('input[tuiInputColor]').should('have.value', '#ffffff80');
        });

        it('keeps zero opacity for fully transparent hexa value', () => {
            cy.mount(TestTransparentInputColor);

            cy.get('input[type="color"]').should(($input) => {
                expect($input.get(0).style.getPropertyValue('--t-opacity')).to.equal('0');
            });

            cy.get('input[type="range"]').should('have.value', '0');
        });
    });
});
