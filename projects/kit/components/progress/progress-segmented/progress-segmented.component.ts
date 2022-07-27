import {ChangeDetectionStrategy, Component, HostBinding, Input} from '@angular/core';
import {tuiDefaultProp} from '@taiga-ui/cdk';
import {TuiSizeS} from '@taiga-ui/core';

// eslint-disable-next-line @typescript-eslint/naming-convention
export function nonNegativeInt(value: number): boolean {
    return Number.isInteger(value) && value >= 0;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export function positiveInt(value: number): boolean {
    return Number.isInteger(value) && value > 0;
}

@Component({
    selector: `tui-progress-segmented`,
    templateUrl: `./progress-segmented.template.html`,
    styleUrls: [`./progress-segmented.style.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiProgressSegmentedComponent {
    @Input()
    @tuiDefaultProp(nonNegativeInt, `Must be non-negative integer between 0 and max`)
    value = 0;

    @Input()
    @tuiDefaultProp(positiveInt, `Must be positive integer`)
    max = 1;

    @Input()
    @HostBinding(`attr.data-size`)
    size: TuiSizeS = `m`;

    @Input()
    @tuiDefaultProp()
    colors: string | readonly string[] = `var(--tui-primary)`;

    getActiveColor(index: number = 0): string | null {
        return typeof this.colors === `string`
            ? this.colors
            : this.colors[index] || this.colors[this.colors.length - 1];
    }
}
