import {ChangeDetectionStrategy, Component, HostBinding, Input} from '@angular/core';
import {tuiDefaultProp} from '@taiga-ui/cdk';
import {TuiSizeS} from '@taiga-ui/core';

export const nonNegativeInt = (value: number | string) =>
    Number.isInteger(+value) && value >= 0;
export const positiveInt = (value: number | string) =>
    Number.isInteger(+value) && value > 0;

@Component({
    selector: 'tui-progress-segmented',
    templateUrl: './progress-segmented.template.html',
    styleUrls: ['./progress-segmented.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiProgressSegmentedComponent {
    @Input()
    @tuiDefaultProp(nonNegativeInt, 'Must be non-negative integer between 0 and max')
    value = 0;

    @Input()
    @tuiDefaultProp(positiveInt, 'Must be positive integer')
    max = 1;

    @Input()
    @HostBinding('attr.data-size')
    size: TuiSizeS = 'm';

    @Input()
    @tuiDefaultProp()
    colors: string | ReadonlyArray<string> | null = null;

    getActiveColor(index: number = 0): string | null {
        if (!this.colors) {
            return null;
        }

        if (typeof this.colors === 'string') {
            return this.colors;
        }

        return this.colors[index] || this.colors[this.colors.length - 1];
    }
}
