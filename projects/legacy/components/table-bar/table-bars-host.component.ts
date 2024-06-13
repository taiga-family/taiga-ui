import {AsyncPipe, NgForOf} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {tuiParentAnimation} from '@taiga-ui/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TUI_TABLE_BARS} from './table-bar.options';

@Component({
    standalone: true,
    selector: 'tui-table-bars-host',
    imports: [AsyncPipe, PolymorpheusModule, NgForOf],
    template: `
        <div
            *ngFor="let item of bars$ | async"
            class="t-wrapper"
            @tuiParentAnimation
        >
            <ng-container *polymorpheusOutlet="item.component; context: item" />
        </div>
    `,
    styleUrls: ['./table-bars-host.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [tuiParentAnimation],
})
export class TuiTableBarsHostComponent {
    protected bars$ = inject(TUI_TABLE_BARS);
}
