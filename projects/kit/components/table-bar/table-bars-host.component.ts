import {AsyncPipe, NgForOf} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {
    TUI_ANIMATIONS_SPEED,
    tuiParentAnimation,
    tuiSlideInTop,
    tuiToAnimationOptions,
} from '@taiga-ui/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TUI_TABLE_BARS} from './table-bars.token';

@Component({
    standalone: true,
    selector: 'tui-table-bars-host',
    imports: [AsyncPipe, PolymorpheusModule, NgForOf],
    template: `
        <div
            *ngFor="let item of bars$ | async"
            class="t-wrapper"
            @tuiParentAnimation
            [@tuiSlideInTop]="animation"
        >
            <ng-container *polymorpheusOutlet="item.component; context: item" />
        </div>
    `,
    styleUrls: ['./table-bars-host.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [tuiParentAnimation, tuiSlideInTop],
})
export class TuiTableBarsHostComponent {
    protected bars$ = inject(TUI_TABLE_BARS);
    protected readonly animation = tuiToAnimationOptions(inject(TUI_ANIMATIONS_SPEED));
}
