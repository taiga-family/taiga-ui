import {AsyncPipe} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {
    TuiSheetDialog,
    type TuiSheetDialogOptions,
    TuiThemeColorService,
} from '@taiga-ui/addon-mobile';
import {TuiButton, TuiRoot} from '@taiga-ui/core';
import {BehaviorSubject, delay} from 'rxjs';

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

describe('TuiSheetDialog with async content', () => {
    @Component({
        imports: [AsyncPipe, TuiButton, TuiRoot, TuiSheetDialog],
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
                    [tuiSheetDialogOptions]="{closable: true, bar: false}"
                    [(tuiSheetDialog)]="open"
                >
                    @for (item of content$ | async; track item) {
                        <div class="async-item">{{ item }}</div>
                    }
                </ng-template>
            </tui-root>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        protected open = false;

        // Streams in after `ngAfterViewInit`, reproducing the reported scenario.
        protected readonly content$ = new BehaviorSubject(
            Array.from({length: 100}, (_, i) => i),
        ).pipe(delay(500));
    }

    beforeEach(() => cy.mount(Test));

    it('opens at the top of the sheet, not scrolled to the bottom', () => {
        cy.get('button').click();
        cy.get('.async-item').should('have.length', 100);

        cy.get('tui-sheet-dialog').should(($el) => {
            const el = $el[0]!;
            const max = el.scrollHeight - el.clientHeight;

            expect(max, 'content overflows and is scrollable').to.be.greaterThan(0);
            expect(
                el.scrollTop,
                'sheet opens near the top, not snapped to the bottom',
            ).to.be.lessThan(max / 2);
        });
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
        cy.get('head meta[name="theme-color"]').should('have.attr', 'content', '#404040');

        cy.contains('tui-sheet-dialog button', 'Close').click();
        cy.get('tui-sheet-dialog').should('not.exist');
        // Reverts to the color that was set before opening, not a stale value.
        cy.get('head meta[name="theme-color"]').should('have.attr', 'content', '#000000');
    });
});
