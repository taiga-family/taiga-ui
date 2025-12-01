import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {TuiIcon} from '@taiga-ui/core/components/icon';
import {
    type TuiAppearanceOptions,
    tuiAppearanceOptionsProvider,
    TuiWithAppearance,
} from '@taiga-ui/core/directives/appearance';
import {TUI_COMMON_ICONS} from '@taiga-ui/core/tokens';

@Component({
    selector: 'button[tuiAppBarBack], a[tuiAppBarBack]',
    imports: [TuiIcon],
    templateUrl: './app-bar-back.template.html',
    styleUrl: './app-bar-back.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiAppearanceOptionsProvider(TuiAppBarBack)],
    hostDirectives: [TuiWithAppearance],
})
export class TuiAppBarBack implements TuiAppearanceOptions {
    protected readonly icons = inject(TUI_COMMON_ICONS);

    public readonly appearance = 'link';
}
