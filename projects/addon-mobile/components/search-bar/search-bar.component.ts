import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {TUI_PLATFORM} from '@taiga-ui/cdk/tokens';
import {tuiCommonIconsProvider} from '@taiga-ui/core/tokens';
import {tuiButtonCloseOptionsProvider} from '@taiga-ui/kit/directives/button-close';

@Component({
    standalone: true,
    selector: 'form[tuiSearchBar],search[tuiSearchBar]',
    template: `
        <div class="t-wrapper">
            <ng-content select="input" />
        </div>
        <ng-content />
    `,
    styleUrls: ['./search-bar.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiButtonCloseOptionsProvider((platform = inject(TUI_PLATFORM)) => ({
            appearance: platform === 'android' ? 'action' : '',
            size: platform === 'android' ? 's' : 'm',
        })),
        tuiCommonIconsProvider((platform = inject(TUI_PLATFORM)) =>
            platform === 'android' ? {close: '@tui.arrow-left'} : {},
        ),
    ],
    host: {'[attr.data-appearance]': 'appearance'},
})
export class TuiSearchBarComponent {
    @Input()
    public appearance: 'floating' | 'neutral' = 'neutral';
}
