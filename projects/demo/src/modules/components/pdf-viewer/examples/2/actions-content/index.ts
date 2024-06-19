import {NgForOf} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import type {TuiPopover} from '@taiga-ui/cdk';
import {TuiButton} from '@taiga-ui/core';
import type {TuiPdfViewerOptions} from '@taiga-ui/kit';
import {POLYMORPHEUS_CONTEXT} from '@taiga-ui/polymorpheus';

import type {Buttons} from '../index';

@Component({
    standalone: true,
    imports: [NgForOf, TuiButton],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActionsContent {
    protected readonly context =
        inject<TuiPopover<TuiPdfViewerOptions<Buttons>, string>>(POLYMORPHEUS_CONTEXT);
}
