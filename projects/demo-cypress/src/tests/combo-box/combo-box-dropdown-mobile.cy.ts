import {ChangeDetectionStrategy, Component, inject, input} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {WA_IS_MOBILE} from '@ng-web-apis/platform';
import {TuiDropdownMobile} from '@taiga-ui/addon-mobile';
import {TuiRoot, type TuiSizeL, type TuiSizeS} from '@taiga-ui/core';
import {TUI_COUNTRIES, TuiChevron, TuiComboBox, TuiDataListWrapper} from '@taiga-ui/kit';

@Component({
    imports: [
        FormsModule,
        TuiChevron,
        TuiComboBox,
        TuiDataListWrapper,
        TuiDropdownMobile,
        TuiRoot,
    ],
    template: `
        <tui-root>
            <tui-textfield
                tuiChevron
                tuiDropdownMobile
                [tuiTextfieldSize]="textfieldSize()"
            >
                <input
                    placeholder="Select destination"
                    tuiComboBox
                    [(ngModel)]="value"
                />

                <tui-data-list-wrapper
                    *tuiDropdown
                    [items]="countries"
                />
            </tui-textfield>
        </tui-root>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Sandbox {
    protected readonly countries = Object.values(inject(TUI_COUNTRIES)());
    protected value: string | null = null;

    public readonly textfieldSize = input<TuiSizeL | TuiSizeS>('l');
}

describe('ComboBox + DropdownMobile', () => {
    beforeEach(() => cy.viewport(300, 350));

    describe('enforces L-size for Datalist regardless of textfield size on mobile devices', () => {
        (['l', 'm', 's'] as const).forEach((size) => {
            it(`textfieldSize=${size}`, () => {
                cy.mount(Sandbox, {
                    componentProperties: {textfieldSize: size},
                    providers: [{provide: WA_IS_MOBILE, useValue: true}],
                });

                cy.get('input').click();
                cy.get('[tuiOption][data-size="l"]').should(
                    'have.length.greaterThan',
                    100,
                );
                cy.compareSnapshot(
                    `combo-box-with-dropdown-mobile--mobile--size-${size}`,
                );
            });
        });
    });

    describe('still regards textfield size on desktop', () => {
        (['l', 'm', 's'] as const).forEach((size) => {
            it(`textfieldSize=${size}`, () => {
                cy.mount(Sandbox, {
                    componentProperties: {textfieldSize: size},
                    providers: [{provide: WA_IS_MOBILE, useValue: false}],
                });

                cy.get('input').click();
                cy.get(`[tuiOption][data-size="${size}"]`).should(
                    'have.length.greaterThan',
                    100,
                );
                cy.compareSnapshot(
                    `combo-box-with-dropdown-mobile--desktop--size-${size}`,
                );
            });
        });
    });
});
