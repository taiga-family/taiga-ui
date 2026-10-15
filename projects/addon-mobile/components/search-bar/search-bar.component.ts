import {ChangeDetectionStrategy, Component, inject, input} from '@angular/core';
import {TUI_PLATFORM} from '@taiga-ui/cdk/tokens';
import {tuiButtonXOptionsProvider} from '@taiga-ui/core/directives/button-x';
import {tuiCommonIconsProvider} from '@taiga-ui/core/tokens';
import {TUI_LIQUID_GLASS} from '@taiga-ui/core/utils/miscellaneous';
import {TuiProgressiveBlur} from '@taiga-ui/layout/components/progressive-blur';

import {TUI_SEARCH_BAR_OPTIONS} from './search-bar.options';

@Component({
    selector: 'form[tuiSearchBar],search[tuiSearchBar]',
    imports: [TuiProgressiveBlur],
    template: `
        @if (liquidGlass) {
            <tui-progressive-blur />
        }
        <div class="t-wrapper">
            <ng-content select="input" />
        </div>
        <ng-content />
    `,
    styleUrl: './search-bar.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiButtonXOptionsProvider((platform = inject(TUI_PLATFORM)) => ({
            appearance: platform === 'android' ? 'action' : '',
            size: platform === 'android' ? 's' : 'm',
        })),
        tuiCommonIconsProvider((platform = inject(TUI_PLATFORM)) => {
            const close = inject(TUI_SEARCH_BAR_OPTIONS).closeIcon(platform);

            return close ? {close} : {};
        }),
    ],
    host: {'[attr.data-appearance]': 'appearance()'},
})
export class TuiSearchBarComponent {
    protected readonly liquidGlass =
        inject(TUI_LIQUID_GLASS) && inject(TUI_PLATFORM) === 'ios';

    public readonly appearance = input<'floating' | 'neutral'>('neutral');
}
