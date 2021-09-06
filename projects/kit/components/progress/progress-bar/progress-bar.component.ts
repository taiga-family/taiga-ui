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
    @Input()
    @tuiDefaultProp()
    colors: string | string[] = 'var(--tui-primary)';

    @Input()
    @HostBinding('attr.data-size')
    @tuiDefaultProp()
    size: TuiSizeS = 'm';

    constructor(
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
    ) {}

    get width(): number {
        return this.elementRef.nativeElement.offsetWidth;
    }

    get color() {
        return Array.isArray(this.colors)
            ? this.computeGradient(this.colors, this.width)
            : this.colors;
    }

    get oldEdgeColor(): string {
        return Array.isArray(this.colors) ? this.colors[0] : this.colors;
    }

    @tuiPure
    private computeGradient(colors: string[], width: number): string {
        const segmentWidth = Math.ceil(width / colors.length);
        const colorsString = colors.reduce(
            (acc, color, i) =>
                `${acc}, ${color} ${i * segmentWidth}px ${(i + 1) * segmentWidth}px`,
            '',
        );

        return `linear-gradient(to right ${colorsString})`;
    }
}
