import {NgForOf} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import type {TuiPopover} from '@taiga-ui/cdk';
import {TuiButton} from '@taiga-ui/core';
import type {TuiPdfViewerOptions} from '@taiga-ui/kit';
import {injectContext} from '@taiga-ui/polymorpheus';

import type {Buttons} from '..';

@Component({
    standalone: true,
    imports: [NgForOf, TuiButton],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActionsContent {
    protected readonly context =
        injectContext<TuiPopover<TuiPdfViewerOptions<Buttons>, string>>();
}
