import {ChangeDetectionStrategy, Component, inject, input} from '@angular/core';
import {TUI_PLATFORM} from '@taiga-ui/cdk/tokens';
import {tuiButtonXOptionsProvider} from '@taiga-ui/core/directives/button-x';
import {tuiCommonIconsProvider} from '@taiga-ui/core/tokens';

@Component({
    selector: 'form[tuiSearchBar],search[tuiSearchBar]',
    template: `
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
        tuiCommonIconsProvider((platform = inject(TUI_PLATFORM)) =>
            platform === 'android' ? {close: '@tui.arrow-left'} : {},
        ),
    ],
    host: {'[attr.data-appearance]': 'appearance()'},
})
export class TuiSearchBarComponent {
    public readonly appearance = input<'floating' | 'neutral'>('neutral');
}
