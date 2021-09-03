import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    HostBinding,
    Inject,
    Input,
} from '@angular/core';
import {tuiDefaultProp, tuiPure} from '@taiga-ui/cdk';
import {TuiSizeS} from '@taiga-ui/core';

@Component({
    selector: 'progress[tuiProgressBar]',
    template: '',
    styleUrls: ['./progress-bar.component.less'],
    host: {
        '[style.--tui-progress-color]': 'color',
        '[style.--tui-progress-color-old-edge]': 'oldEdgeColor',
    },
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiProgressBarComponent {
    private readonly defaultColor = 'var(--tui-primary)';

    @Input()
    @tuiDefaultProp()
    colors: string | string[] = this.defaultColor;

    @Input()
    @HostBinding('attr.data-tui-host-size')
    @tuiDefaultProp()
    size: TuiSizeS = 'm';

    constructor(
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
    ) {}

    get width(): number {
        return this.elementRef.nativeElement.offsetWidth;
    }

    get color() {
        if (Array.isArray(this.colors)) {
            return this.getHardLinesGradientColor(this.colors, this.width);
        }

        return this.colors;
    }

    get oldEdgeColor(): string {
        return Array.isArray(this.colors) ? this.defaultColor : this.colors;
    }

    @tuiPure
    private getHardLinesGradientColor(colors: string[], width: number): string {
        const segmentWidth = Math.ceil(width / colors.length);
        const colorsString = colors.reduce(
            (acc, color, i) =>
                `${acc}, ${color} ${i * segmentWidth}px ${(i + 1) * segmentWidth}px`,
            '',
        );

        return `linear-gradient(to right ${colorsString})`;
    }
}
