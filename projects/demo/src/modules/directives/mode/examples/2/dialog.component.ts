import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {TuiDialogContext, TuiModeDirective} from '@taiga-ui/core';
import {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';

@Component({
    template: `
        <button
            tuiButton
            (click)="context.$implicit.complete()"
        >
            tuiMode is {{ tuiMode?.mode || 'null' }}
        </button>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogComponent {
    constructor(
        @Inject(POLYMORPHEUS_CONTEXT) readonly context: TuiDialogContext,
        @Inject(TuiModeDirective) readonly tuiMode: TuiModeDirective,
    ) {}
}
