import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {TuiAnimated} from '@taiga-ui/cdk/directives/animated';
import {PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

import {TuiDynamicHeaderContainerDirective} from './dynamic-header-container.directive';

@Component({
    selector: '[tuiDynamicHeader]',
    imports: [PolymorpheusOutlet, TuiAnimated],
    template: `
        @for (header of container.hiddenHeaders(); track header) {
            @if ($last) {
                <div tuiAnimated>
                    <div *polymorpheusOutlet="header as text">{{ text }}</div>
                </div>
            }
        } @empty {
            <div tuiAnimated>
                <ng-content />
            </div>
        }
    `,
    styleUrl: './dynamic-header.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[style.--t-dir]': 'container.scrollDir() || -1',
    },
})
export class TuiDynamicHeaderComponent {
    protected readonly container = inject(TuiDynamicHeaderContainerDirective);
}
