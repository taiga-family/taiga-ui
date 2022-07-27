import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    HostBinding,
    Inject,
    Input,
    ViewChild,
} from '@angular/core';
import {USER_AGENT, WINDOW} from '@ng-web-apis/common';
import {
    CHROMIUM_EDGE_START_VERSION,
    isEdgeOlderThan,
    tuiDefaultProp,
} from '@taiga-ui/cdk';
import {TuiSizeS, TuiSizeXL} from '@taiga-ui/core';

// @dynamic
@Component({
    selector: `tui-progress-circle`,
    templateUrl: `./progress-circle.template.html`,
    styleUrls: [`./progress-circle.style.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiProgressCircleComponent {
    @ViewChild(`progressCircle`, {static: true})
    private readonly progressCircle!: ElementRef<SVGCircleElement>;

    @Input()
    @tuiDefaultProp()
    value = 0;

    @Input()
    @tuiDefaultProp()
    max = 1;

    @Input()
    @HostBinding(`style.--tui-progress-color`)
    @tuiDefaultProp()
    color: string | null = null;

    @Input()
    @HostBinding(`attr.data-size`)
    @tuiDefaultProp()
    size: TuiSizeS | TuiSizeXL = `m`;

    @HostBinding(`style.--progress-percentage`)
    get progressPercentage(): number {
        return this.value / this.max;
    }

    get oldEdgeRadiusFallback(): number | null {
        if (!isEdgeOlderThan(CHROMIUM_EDGE_START_VERSION, this.userAgent)) {
            return null;
        }

        const strokeWidth = parseInt(
            this.windowRef.getComputedStyle(this.progressCircle.nativeElement)
                .strokeWidth,
            10,
        );

        return (this.elementRef.nativeElement.offsetWidth - strokeWidth) / 2;
    }

    constructor(
        @Inject(USER_AGENT) private readonly userAgent: string,
        @Inject(WINDOW) private readonly windowRef: Window,
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
    ) {}
}
