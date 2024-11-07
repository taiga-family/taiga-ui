import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {TuiIcon} from '@taiga-ui/core/components/icon';
import type {TuiAppearanceOptions} from '@taiga-ui/core/directives/appearance';
import {
    tuiAppearanceOptionsProvider,
    TuiWithAppearance,
} from '@taiga-ui/core/directives/appearance';
import {TUI_SPIN_ICONS} from '@taiga-ui/core/tokens';

@Component({
    standalone: true,
    selector: 'button[tuiAppBarBack], a[tuiAppBarBack]',
    imports: [TuiIcon],
    templateUrl: './app-bar-back.template.html',
    styleUrls: ['./app-bar-back.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiAppearanceOptionsProvider(TuiAppBarBack)],
    hostDirectives: [TuiWithAppearance],
})
export class TuiAppBarBack implements TuiAppearanceOptions {
    protected readonly icons = inject(TUI_SPIN_ICONS);

    public readonly appearance = 'link';
}
