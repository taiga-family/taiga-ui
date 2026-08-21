import {
    ChangeDetectionStrategy,
    Component,
    input,
    ViewEncapsulation,
} from '@angular/core';
import {TUI_VERSION} from '@taiga-ui/cdk/constants';

import {TUI_SEARCHBAR_PROVIDERS} from './searchbar.providers';

@Component({
    selector: 'tui-searchbar',
    template: `
        <div class="t-wrapper">
            <ng-content select="input" />
        </div>
        <ng-content />
    `,
    styles: `
        [data-tui-version='${TUI_VERSION}'] {
            @import './searchbar.style.less';
        }
    `,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: TUI_SEARCHBAR_PROVIDERS,
    host: {
        'data-tui-version': TUI_VERSION,
        '[attr.data-appearance]': 'appearance()',
    },
})
export class TuiSearchbarComponent {
    public readonly appearance = input<'' | 'floating'>('');
}
