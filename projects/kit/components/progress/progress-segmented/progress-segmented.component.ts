import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    Inject,
    Input,
} from '@angular/core';
import {tuiIsString} from '@taiga-ui/cdk';
import {MODE_PROVIDER, TUI_MODE, TuiBrightness, TuiSizeS} from '@taiga-ui/core';
import {Observable} from 'rxjs';

/**
 * @deprecated Use {@link http://taiga-ui.dev/experimental/progress-segmented TuiProgressSegmentedModule} (from `@taiga-ui/experimental`)
 * TODO: delete in v4.0
 */
@Component({
    selector: 'tui-progress-segmented',
    templateUrl: './progress-segmented.template.html',
    styleUrls: ['./progress-segmented.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [MODE_PROVIDER],
    host: {
        '($.data-mode.attr)': 'mode$',
    },
})
export class TuiProgressSegmentedComponent {
    @Input()
    value = 0;

    @Input()
    max = 1;

    @Input()
    @HostBinding('attr.data-size')
    size: TuiSizeS = 'm';

    @Input()
    colors: string | readonly string[] = 'currentColor';

    constructor(@Inject(TUI_MODE) readonly mode$: Observable<TuiBrightness | null>) {}

    getActiveColor(index = 0): string | null {
        return tuiIsString(this.colors)
            ? this.colors
            : this.colors[index] || this.colors[this.colors.length - 1];
    }
}
