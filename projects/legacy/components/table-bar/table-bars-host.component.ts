import {AsyncPipe} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {tuiParentAnimation} from '@taiga-ui/core/animations';
import {PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

import {TUI_TABLE_BARS} from './table-bar.options';

/**
 * @deprecated drop in v5.0 use {@link TuiActionBar}
 * https://taiga-ui.dev/components/actions-bar
 */
@Component({
    selector: 'tui-table-bars-host',
    imports: [AsyncPipe, PolymorpheusOutlet],
    template: `
        @for (item of bars$ | async; track item) {
            <div
                class="t-wrapper"
                @tuiParentAnimation
            >
                <ng-container *polymorpheusOutlet="item.component; context: item" />
            </div>
        }
    `,
    styleUrls: ['./table-bars-host.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [tuiParentAnimation],
})
export class TuiTableBarsHostComponent {
    protected bars$ = inject(TUI_TABLE_BARS);
}
