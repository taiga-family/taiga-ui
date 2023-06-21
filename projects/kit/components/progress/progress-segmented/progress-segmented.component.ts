import {ChangeDetectionStrategy, Component, HostBinding, Input} from '@angular/core';
import {tuiIsString} from '@taiga-ui/cdk';
import {TuiSizeS} from '@taiga-ui/core';

@Component({
    selector: 'tui-progress-segmented',
    templateUrl: './progress-segmented.template.html',
    styleUrls: ['./progress-segmented.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
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
    colors: string | readonly string[] = 'var(--tui-primary)';

    getActiveColor(index: number = 0): string | null {
        return tuiIsString(this.colors)
            ? this.colors
            : this.colors[index] || this.colors[this.colors.length - 1];
    }
}
