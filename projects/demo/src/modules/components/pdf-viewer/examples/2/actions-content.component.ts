import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import type {TuiDialog} from '@taiga-ui/cdk';
import type {TuiPdfViewerOptions} from '@taiga-ui/kit';
import {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';

import type {Buttons} from './index';

@Component({
    selector: 'tui-actions-content',
    templateUrl: './actions-content.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActionsContentComponent {
    constructor(
        @Inject(POLYMORPHEUS_CONTEXT)
        readonly context: TuiDialog<TuiPdfViewerOptions<Buttons>, string>,
    ) {}
}
