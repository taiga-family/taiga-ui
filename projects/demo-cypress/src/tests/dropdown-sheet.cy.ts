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
                [tuiDropdownSheet]="options()"
            >
                <input
                    tuiSelect
                    placeholder="Platform"
                    [(ngModel)]="value"
                />

                <tui-data-list-wrapper
                    *tuiDropdown
                    [items]="items"
                />
            </tui-textfield>
        </tui-root>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Sandbox {
    protected readonly items = Array.from({length: 20}, (_, i) => `Item ${i}`);
    protected value: string | null = null;

    public readonly options = input<Partial<TuiSheetDialogOptions> | string>(
        'Select platform',
    );
}

describe('DropdownSheet', () => {
    beforeEach(() => cy.viewport(300, 350));

    describe('accepts either a string shorthand or an options object as label', () => {
        (['Select platform', {label: 'Select platform'}] as const).forEach((options) => {
            it(JSON.stringify(options), () => {
                cy.mount(Sandbox, {
                    componentProperties: {options},
                    providers: [{provide: WA_IS_MOBILE, useValue: true}],
                });

                cy.get('input').click();
                cy.get('tui-sheet-dialog header').should('have.text', 'Select platform');
            });
        });
    });

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
            componentProperties: {options: {label: 'Select platform', closable: false}},
            providers: [{provide: WA_IS_MOBILE, useValue: true}],
        });

        cy.get('input').click();
        cy.get('tui-sheet-dialog')
            .should('be.visible')
            .should('not.have.class', '_closeable');

        cy.get('tui-sheet-dialog').trigger('touchstart');
        cy.get('tui-sheet-dialog').scrollTo('bottom');
        cy.get('tui-sheet-dialog').scrollTo('top');
        cy.get('tui-sheet-dialog').trigger('touchend');

        cy.get('tui-sheet-dialog').should('be.visible');
        cy.get('[tuiOption]').should('have.length', 20);
    });
});
