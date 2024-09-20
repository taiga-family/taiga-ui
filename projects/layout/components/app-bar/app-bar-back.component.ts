import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {TUI_SPIN_ICONS, TuiIcon} from '@taiga-ui/core';
import type {TuiAppearanceOptions} from '@taiga-ui/core/directives/appearance';
import {
    TuiAppearance,
    tuiAppearanceOptionsProvider,
} from '@taiga-ui/core/directives/appearance';

@Component({
    standalone: true,
    selector: 'button[tuiAppBarBack], a[tuiAppBarBack]',
    templateUrl: './app-bar-back.template.html',
    styleUrls: ['./app-bar-back.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiAppearanceOptionsProvider(TuiAppBarBack)],
    hostDirectives: [TuiAppearance],
    imports: [TuiIcon],
})
export class TuiAppBarBack implements TuiAppearanceOptions {
    protected readonly icons = inject(TUI_SPIN_ICONS);

    public readonly appearance = 'link';
}
