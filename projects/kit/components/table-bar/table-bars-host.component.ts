import {AsyncPipe, NgForOf} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import type {TuiPopover} from '@taiga-ui/cdk';
import {
    TUI_ANIMATIONS_SPEED,
    tuiFadeIn,
    tuiParentAnimation,
    tuiSlideInTop,
    tuiToAnimationOptions,
} from '@taiga-ui/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';
import type {BehaviorSubject} from 'rxjs';

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
            [@tuiFadeIn]="animation"
            [@tuiSlideInTop]="animation"
        >
            <ng-container *polymorpheusOutlet="item.component; context: item" />
        </div>
    `,
    styleUrls: ['./table-bars-host.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [tuiParentAnimation, tuiSlideInTop, tuiFadeIn],
})
export class TuiTableBarsHostComponent {
    protected bars$: BehaviorSubject<ReadonlyArray<TuiPopover<void, void>>> =
        inject(TUI_TABLE_BARS);

    protected readonly animation = tuiToAnimationOptions(inject(TUI_ANIMATIONS_SPEED));
}
