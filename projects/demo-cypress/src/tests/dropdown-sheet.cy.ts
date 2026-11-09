import {ChangeDetectionStrategy, Component, input, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {WA_IS_MOBILE} from '@ng-web-apis/platform';
import {TuiDropdownSheet, type TuiSheetDialogOptions} from '@taiga-ui/addon-mobile';
import {TuiPortals, TuiPortalService, tuiProvide, TuiVCR} from '@taiga-ui/cdk';
import {TuiDataList, TuiDropdown, TuiPopupService, TuiRoot} from '@taiga-ui/core';
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

@Component({
    selector: 'tui-test-portal-host',
    imports: [TuiVCR],
    template: '<ng-content /><ng-container tuiVCR />',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiPopupService, tuiProvide(TuiPortalService, TuiPopupService)],
})
class PortalHost extends TuiPortals {}

@Component({
    imports: [
        FormsModule,
        PortalHost,
        TuiChevron,
        TuiDataListWrapper,
        TuiDropdownSheet,
        TuiRoot,
        TuiSelect,
    ],
    template: `
        <tui-root>
            <tui-test-portal-host>
                <tui-textfield
                    tuiChevron
                    tuiDropdownSheet="Select platform"
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
            </tui-test-portal-host>
        </tui-root>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
class PortalHostSandbox {
    protected readonly items = ['web', 'ios', 'android'];
    protected value: string | null = null;
}

// Cancelled mousedown keeps focus where it was, like Safari does for buttons
@Component({
    imports: [TuiDropdown, TuiDropdownSheet, TuiRoot],
    template: `
        <tui-root>
            <button
                tuiDropdownAuto
                type="button"
                class="outer"
                [tuiDropdown]="outer"
                (mousedown)="$event.preventDefault()"
            >
                Outer
            </button>
            <ng-template #outer>
                <button
                    tuiDropdownAuto
                    tuiDropdownSheet="Nested"
                    type="button"
                    class="nested"
                    tuiDropdown="Sheet content"
                    (mousedown)="$event.preventDefault()"
                >
                    Nested
                </button>
            </ng-template>
        </tui-root>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
class NestedSandbox {}

@Component({
    imports: [TuiDataList, TuiDropdown, TuiDropdownSheet, TuiRoot],
    template: `
        <tui-root>
            <p
                tuiDropdownContext
                tuiDropdownSheet="Actions"
                class="row"
                [tuiDropdown]="menu"
            >
                Row
            </p>
            <ng-template #menu>
                <tui-data-list>
                    <button
                        tuiOption
                        type="button"
                        (click)="picked.set('Delete')"
                    >
                        Delete
                    </button>
                </tui-data-list>
            </ng-template>
            <output>{{ picked() }}</output>
        </tui-root>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
class ContextSandbox {
    protected readonly picked = signal('');
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

    it('works inside a custom portal host', () => {
        cy.mount(PortalHostSandbox, {
            providers: [{provide: WA_IS_MOBILE, useValue: true}],
        });

        cy.get('input').click();
        cy.get('tui-sheet-dialog').should('be.visible');

        // The broken sheet closed ~300ms after opening, a retried assertion would pass before that
        cy.wait(1000);
        cy.get('tui-sheet-dialog')
            .should('be.visible')
            .closest('[inert]')
            .should('not.exist');

        cy.get('[tuiOption]').contains('android').click();
        cy.get('input').should('have.value', 'android');
    });

    it('stays open inside a dropdown when the trigger does not take focus on click', () => {
        cy.mount(NestedSandbox, {providers: [{provide: WA_IS_MOBILE, useValue: true}]});

        cy.get('.outer').click();
        cy.get('.nested').click();
        cy.get('tui-sheet-dialog')
            .should('be.visible')
            .should('contain', 'Sheet content');
        cy.get('.nested').should('exist');
    });

    it('lets a context menu sheet pick an action', () => {
        cy.mount(ContextSandbox, {providers: [{provide: WA_IS_MOBILE, useValue: true}]});

        cy.get('.row').rightclick();
        cy.get('tui-sheet-dialog [tuiOption]').click();
        cy.get('output').should('have.text', 'Delete');
    });
});
