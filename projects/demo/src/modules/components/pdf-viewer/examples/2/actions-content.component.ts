import {Component, Inject} from '@angular/core';
import {TuiDialog} from '@taiga-ui/cdk';
import {TuiPdfViewerOptions} from '@taiga-ui/kit';
import {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';

import type {Buttons} from './index';

@Component({
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
})
export class ActionsContent {
    constructor(
        @Inject(POLYMORPHEUS_CONTEXT)
        readonly context: TuiDialog<TuiPdfViewerOptions<Buttons>, string>,
    ) {}
}
