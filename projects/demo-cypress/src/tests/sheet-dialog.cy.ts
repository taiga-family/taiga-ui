import {AsyncPipe, NgForOf} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiSheetDialog, type TuiSheetDialogOptions} from '@taiga-ui/addon-mobile';
import {TuiRepeatTimes} from '@taiga-ui/cdk';
import {TuiButton, TuiRoot} from '@taiga-ui/core';
import {BehaviorSubject, delay} from 'rxjs';

describe('TuiSheetDialog', () => {
    @Component({
        standalone: true,
        imports: [TuiButton, TuiRepeatTimes, TuiRoot, TuiSheetDialog],
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
                    <p *tuiRepeatTimes="let i of 50">{{ i }}</p>
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

        protected readonly options: Partial<TuiSheetDialogOptions> = {
            closeable: false,
        };
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
        standalone: true,
        imports: [AsyncPipe, NgForOf, TuiButton, TuiRoot, TuiSheetDialog],
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
                    [tuiSheetDialogOptions]="{closeable: true, bar: false}"
                    [(tuiSheetDialog)]="open"
                >
                    <div
                        *ngFor="let item of content$ | async"
                        class="async-item"
                    >
                        {{ item }}
                    </div>
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
