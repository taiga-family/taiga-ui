import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {WA_IS_MOBILE} from '@ng-web-apis/platform';
import {TuiDropdownSheet, type TuiSheetDialogOptions} from '@taiga-ui/addon-mobile';
import {TuiRoot} from '@taiga-ui/core';
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
                [tuiDropdownSheetOptions]="options()"
            >
                <input
                    tuiSelect
                    placeholder="Platform"
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

    public readonly options = input<Partial<TuiSheetDialogOptions>>({});
}

describe('DropdownSheet with sheet dialog options', () => {
    beforeEach(() => cy.viewport(300, 350));

    it('closes sheet when swipe ends at the top by default', () => {
        cy.mount(Sandbox, {providers: [{provide: WA_IS_MOBILE, useValue: true}]});

        cy.get('input').click();
        cy.get('tui-sheet-dialog')
            .should('be.visible')
            .should('have.class', '_closeable');

        cy.get('tui-sheet-dialog').trigger('touchstart');
        cy.get('tui-sheet-dialog').scrollTo('top');
        cy.get('tui-sheet-dialog').trigger('touchend');

        cy.get('tui-sheet-dialog').should('not.exist');
    });

    it('keeps sheet open when closable is false', () => {
        cy.mount(Sandbox, {
            componentProperties: {options: {closable: false}},
            providers: [{provide: WA_IS_MOBILE, useValue: true}],
        });

        cy.get('input').click();
        cy.get('tui-sheet-dialog')
            .should('be.visible')
            .should('not.have.class', '_closeable');

        cy.get('tui-sheet-dialog').trigger('touchstart');
        cy.get('tui-sheet-dialog').scrollTo('top', {ensureScrollable: false});
        cy.get('tui-sheet-dialog').trigger('touchend');

        cy.get('tui-sheet-dialog').should('be.visible');
        cy.get('[tuiOption]').should('have.length', 3);
    });
});
