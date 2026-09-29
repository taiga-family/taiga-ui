import {NgForOf, NgIf} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    inject,
    ViewEncapsulation,
} from '@angular/core';
import {TUI_VERSION} from '@taiga-ui/cdk/constants';
import {TuiAnimated} from '@taiga-ui/cdk/directives/animated';
import {PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

import {TuiDynamicHeaderContainerDirective} from './dynamic-header-container.directive';

@Component({
    standalone: true,
    selector: '[tuiDynamicHeader]',
    imports: [NgForOf, NgIf, PolymorpheusOutlet, TuiAnimated],
    template: `
        <div
            *ngIf="!container.hiddenHeaders().length; else dynamic"
            tuiAnimated
        >
            <ng-content />
        </div>
        <ng-template #dynamic>
            <ng-container
                *ngFor="let header of container.hiddenHeaders(); let last = last"
            >
                <div
                    *ngIf="last"
                    tuiAnimated
                >
                    <div *polymorpheusOutlet="header as text">{{ text }}</div>
                </div>
            </ng-container>
        </ng-template>
    `,
    styleUrls: ['./dynamic-header.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        tuiDynamicHeaderV: TUI_VERSION,
        '[style.--t-dir]': 'container.scrollDir() || -1',
    },
})
export class TuiDynamicHeaderComponent {
    protected readonly container = inject(TuiDynamicHeaderContainerDirective);
}
