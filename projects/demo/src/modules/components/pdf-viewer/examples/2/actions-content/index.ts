import {NgForOf} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import type {TuiPopover} from '@taiga-ui/cdk';
import {TuiButtonDirective} from '@taiga-ui/core';
import type {TuiPdfViewerOptions} from '@taiga-ui/kit';
import {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';

import type {Buttons} from '../index';

@Component({
    standalone: true,
    imports: [NgForOf, TuiButtonDirective],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActionsContentComponent {
    protected readonly context =
        inject<TuiPopover<TuiPdfViewerOptions<Buttons>, string>>(POLYMORPHEUS_CONTEXT);
}
