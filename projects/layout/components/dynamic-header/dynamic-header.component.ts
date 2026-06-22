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
    styles: `
        [data-tui-version='${TUI_VERSION}'] {
            @import './dynamic-header.style.less';
        }
    `,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        'data-tui-version': TUI_VERSION,
        '[style.--t-dir]': 'container.scrollDir() || -1',
    },
})
export class TuiDynamicHeaderComponent {
    protected readonly container = inject(TuiDynamicHeaderContainerDirective);
}
