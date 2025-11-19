import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiSheetDialog, type TuiSheetDialogOptions} from '@taiga-ui/addon-mobile';
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

        protected readonly options: Partial<TuiSheetDialogOptions> = {
            closable: false,
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
