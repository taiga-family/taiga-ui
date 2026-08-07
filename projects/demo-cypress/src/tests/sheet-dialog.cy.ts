import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {
    TuiSheetDialog,
    type TuiSheetDialogOptions,
    TuiThemeColorService,
} from '@taiga-ui/addon-mobile';
import {TuiButton, TuiRoot} from '@taiga-ui/core';

describe('TuiSheetDialog', () => {
    @Component({
        imports: [TuiButton, TuiRoot, TuiSheetDialog],
        template: `
            <tui-root>
                <button
                    tuiButton
                    type="button"
                    (click)="open = true"
                >
                    Show
                </button>
                <ng-template
                    let-observer
                    [tuiSheetDialogOptions]="options"
                    [(tuiSheetDialog)]="open"
                >
                    @for (_ of '-'.repeat(50); track $index) {
                        <p>{{ $index }}</p>
                    }
                    <footer class="footer">
                        <button
                            size="m"
                            tuiButton
                            type="button"
                            (click)="observer.complete()"
                        >
                            Close
                        </button>
                    </footer>
                </ng-template>
            </tui-root>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        protected open = false;
        protected readonly options: Partial<TuiSheetDialogOptions> = {closable: false};
    }

    beforeEach(() => cy.mount(Test));

    it('open sheet', () => {
        cy.get('button').click();

        cy.get('tui-sheet-dialog')
            .should('be.visible')
            .should(($el) => {
                expect($el[0]?.scrollTop).to.equal(0);
            });

        cy.get('tui-sheet-dialog').compareSnapshot('tui-sheet-dialog__1');
    });
});

describe('TuiSheetDialog theme-color', () => {
    @Component({
        imports: [TuiButton, TuiRoot, TuiSheetDialog],
        template: `
            <tui-root>
                <button
                    tuiButton
                    type="button"
                    (click)="open = true"
                >
                    Show
                </button>
                <ng-template
                    let-observer
                    [tuiSheetDialogOptions]="options"
                    [(tuiSheetDialog)]="open"
                >
                    <p>Sheet content</p>
                    <footer>
                        <button
                            size="m"
                            tuiButton
                            type="button"
                            (click)="observer.complete()"
                        >
                            Close
                        </button>
                    </footer>
                </ng-template>
            </tui-root>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        private readonly theme = inject(TuiThemeColorService);

        protected open = false;
        protected readonly options: Partial<TuiSheetDialogOptions> = {closable: false};

        constructor() {
            // Base address-bar color the sheet must revert to on close.
            this.theme.color = '#000000';
        }
    }

    beforeEach(() => cy.mount(Test));

    it('tints the address bar while open and reverts on close', () => {
        cy.get('head meta[name="theme-color"]').should('have.attr', 'content', '#000000');

        cy.contains('button', 'Show').click();
        cy.get('tui-sheet-dialog').should('be.visible');
        // Default themeColor (#404040) applied while the sheet is open.
        cy.get('head meta[name="theme-color"]').should('have.attr', 'content', '#404040');

        cy.contains('tui-sheet-dialog button', 'Close').click();
        cy.get('tui-sheet-dialog').should('not.exist');
        // Reverts to the color that was set before opening, not a stale value.
        cy.get('head meta[name="theme-color"]').should('have.attr', 'content', '#000000');
    });
});
