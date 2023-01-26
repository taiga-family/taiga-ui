import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {TuiDialog} from '@taiga-ui/cdk';
import {TuiPdfViewerOptions} from '@taiga-ui/kit';
import {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';

import type {Buttons} from './index';

@Component({
    selector: 'tui-actions-content',
    template: `
        <button
            *ngFor="let button of context.data"
            tuiButton
            size="s"
            shape="rounded"
            class="tui-space_left-3"
            (click)="button.onClick(context)"
        >
            {{ button.text }}
        </button>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActionsContentComponent {
    constructor(
        @Inject(POLYMORPHEUS_CONTEXT)
        readonly context: TuiDialog<TuiPdfViewerOptions<Buttons>, string>,
    ) {}
}
