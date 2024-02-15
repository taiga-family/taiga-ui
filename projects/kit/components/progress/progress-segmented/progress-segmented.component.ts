import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    inject,
    Input,
} from '@angular/core';
import {tuiIsString} from '@taiga-ui/cdk';
import {MODE_PROVIDER, TUI_MODE, TuiSizeS} from '@taiga-ui/core';

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

    readonly mode$ = inject(TUI_MODE);

    getActiveColor(index = 0): string | null {
        return tuiIsString(this.colors)
            ? this.colors
            : this.colors[index] || this.colors[this.colors.length - 1];
    }
}
