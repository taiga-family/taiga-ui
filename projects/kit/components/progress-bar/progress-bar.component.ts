import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    HostBinding,
    Inject,
    Input,
} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import {tuiDefaultProp, tuiPure} from '@taiga-ui/cdk';

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
    @HostBinding('value')
    @tuiDefaultProp()
    readonly value: number = 0;

    @Input()
    @HostBinding('max')
    @tuiDefaultProp()
    readonly max: number = 1;

    @Input()
    @tuiDefaultProp()
    colors: string | string[] = this.defaultColor;

    constructor(
        @Inject(WINDOW) private readonly windowRef: Window,
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
    ) {}

    get width(): number {
        return parseInt(
            this.windowRef.getComputedStyle(this.elementRef.nativeElement).width,
            10,
        );
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
        const segmentWidth = width / colors.length;
        const colorsString = colors.reduce(
            (acc, color, i) =>
                `${acc}, ${color} ${i * segmentWidth}px ${(i + 1) * segmentWidth}px`,
            '',
        );

        return `linear-gradient(to right ${colorsString})`;
    }
}
