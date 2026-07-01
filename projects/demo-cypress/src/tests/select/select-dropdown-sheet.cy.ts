import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {WA_IS_MOBILE} from '@ng-web-apis/platform';
import {TuiDropdownSheet} from '@taiga-ui/addon-mobile';
import {TuiRoot, type TuiSizeL, type TuiSizeS} from '@taiga-ui/core';
import {TuiChevron, TuiDataListWrapper, TuiSelect} from '@taiga-ui/kit';

@Component({
    imports: [
        FormsModule,
        TuiChevron,
        TuiDataListWrapper,
        TuiDropdownSheet,
        TuiRoot,
        TuiSelect,
    ],
    template: `
        <tui-root>
            <tui-textfield
                tuiChevron
                tuiDropdownSheet="Select platform"
                [tuiTextfieldSize]="textfieldSize()"
            >
                <label tuiLabel>Platform</label>

                <input
                    tuiSelect
                    [(ngModel)]="value"
                />

                <tui-data-list-wrapper
                    *tuiDropdown
                    [items]="platforms"
                />
            </tui-textfield>
        </tui-root>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Sandbox {
    protected readonly platforms = ['web', 'ios', 'android'] as const;
    protected value: 'android' | 'ios' | 'web' | null = 'ios';

    public readonly textfieldSize = input<TuiSizeL | TuiSizeS>('l');
}

describe('Select + DropdownSheet', () => {
    beforeEach(() => cy.viewport(300, 350));

    describe('enforces L-size for Datalist regardless of textfield size on mobile devices', () => {
        (['l', 'm', 's'] as const).forEach((size) => {
            it(`textfieldSize=${size}`, () => {
                cy.mount(Sandbox, {
                    componentProperties: {textfieldSize: size},
                    providers: [{provide: WA_IS_MOBILE, useValue: true}],
                });

                cy.get('input').click();
                cy.get('[tuiOption][data-size="l"]').should('have.length', 3);
                cy.compareSnapshot(`select-with-dropdown-sheet--mobile--size-${size}`);
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
                cy.get(`[tuiOption][data-size="${size}"]`).should('have.length', 3);
                cy.compareSnapshot(`select-with-dropdown-sheet--desktop--size-${size}`);
            });
        });
    });
});
