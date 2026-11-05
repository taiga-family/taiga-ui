import {AsyncPipe} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject, signal} from '@angular/core';
import {
    TuiSheetDialog,
    type TuiSheetDialogContext,
    type TuiSheetDialogOptions,
    TuiSheetDialogService,
    TuiThemeColorService,
} from '@taiga-ui/addon-mobile';
import {TuiButton, TuiRoot} from '@taiga-ui/core';
import {injectContext, PolymorpheusComponent} from '@taiga-ui/polymorpheus';
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

describe('TuiSheetDialog scrollTo', () => {
    @Component({
        imports: [TuiButton],
        template: `
            @for (action of actions; track action.label) {
                <button
                    tuiButton
                    type="button"
                    (click)="context.scrollTo(action.index)"
                >
                    {{ action.label }}
                </button>
            }
            <button
                tuiButton
                type="button"
                (click)="grow()"
            >
                Grow
            </button>
            @for (paragraph of paragraphs(); track paragraph) {
                <p>{{ paragraph }}</p>
            }
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Content {
        protected readonly context = injectContext<TuiSheetDialogContext>();
        protected readonly paragraphs = signal(Array.from({length: 40}, (_, i) => i));
        protected readonly actions = [
            {label: 'Stop 1', index: 0},
            {label: 'Stop 2', index: 1},
            {label: 'Top', index: 2},
            {label: 'Beyond', index: 99},
        ];

        protected grow(): void {
            this.paragraphs.update((list) =>
                list.concat(list.map((i) => i + list.length)),
            );
        }
    }

    @Component({
        imports: [TuiButton, TuiRoot],
        template: `
            <tui-root>
                <button
                    tuiButton
                    type="button"
                    (click)="open()"
                >
                    Show
                </button>
            </tui-root>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        private readonly service = inject(TuiSheetDialogService);

        protected open(): void {
            this.service
                .open(new PolymorpheusComponent(Content), {stops: ['9.5rem', '18rem']})
                .subscribe();
        }
    }

    // Native click: Cypress would scroll the button into view and move the sheet itself
    function press(label: string): void {
        cy.contains('tui-sheet-dialog button', label).then(($button) => {
            $button[0]?.click();
        });
    }

    function expectAt(selector: string, index = 0): void {
        cy.get('tui-sheet-dialog').should(($sheet) => {
            const sheet = $sheet[0]!;
            const target = sheet.querySelectorAll<HTMLElement>(selector)[index]!;

            expect(sheet.scrollTop).to.be.closeTo(target.offsetTop, 1);
        });
    }

    beforeEach(() => {
        cy.viewport(375, 900);
        cy.mount(Test);
        cy.contains('button', 'Show').click();
        cy.get('tui-sheet-dialog').should('be.visible');
    });

    it('moves between stops by index', () => {
        expectAt('.t-stop', 0);

        press('Stop 2');
        expectAt('.t-stop', 1);

        press('Stop 1');
        expectAt('.t-stop', 0);
    });

    it('reaches the content top from the last index and beyond', () => {
        press('Top');
        expectAt('.t-sheet');

        press('Stop 1');
        expectAt('.t-stop', 0);

        press('Beyond');
        expectAt('.t-sheet');
    });

    it('keeps scrolling when the content grows mid-scroll', () => {
        cy.get('tui-sheet-dialog').then(($sheet) => {
            const click = (label: string): void =>
                Array.from($sheet[0]!.querySelectorAll('button'))
                    .find((button) => button.textContent?.trim() === label)
                    ?.click();

            click('Top');

            return new Cypress.Promise<void>((resolve) => {
                setTimeout(() => {
                    click('Grow');
                    resolve();
                }, 100);
            });
        });

        expectAt('.t-sheet');
    });
});
