import {ChangeDetectionStrategy, Component} from '@angular/core';
import type {TuiSheetDialogOptions} from '@taiga-ui/addon-mobile';
import {TuiSheetDialog} from '@taiga-ui/addon-mobile';
import {TuiRepeatTimes} from '@taiga-ui/cdk';
import {TuiButton, TuiRoot} from '@taiga-ui/core';

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
        cy.get('tui-sheet-dialog').compareSnapshot('tui-sheet-dialog__1');
    });
});
