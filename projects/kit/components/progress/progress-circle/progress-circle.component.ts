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
    tuiDefaultProp,
    tuiIsEdgeOlderThan,
} from '@taiga-ui/cdk';
import {TuiSizeS, TuiSizeXL} from '@taiga-ui/core';
import {of} from 'rxjs';
import {delay} from 'rxjs/operators';

// @dynamic
@Component({
    selector: 'tui-progress-circle',
    templateUrl: './progress-circle.template.html',
    styleUrls: ['./progress-circle.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiProgressCircleComponent {
    @ViewChild('progressCircle', {static: true})
    private readonly progressCircle!: ElementRef<SVGCircleElement>;

    @Input()
    @tuiDefaultProp()
    value = 0;

    @Input()
    @tuiDefaultProp()
    max = 1;

    @Input()
    @HostBinding('style.--tui-progress-color')
    @tuiDefaultProp()
    color: string | null = null;

    @Input()
    @HostBinding('attr.data-size')
    @tuiDefaultProp()
    size: TuiSizeS | TuiSizeXL = 'm';

    @HostBinding('style.--progress-percentage')
    get progressPercentage(): number {
        return this.value / this.max;
    }

    animationDelay$ = of(true).pipe(delay(0));

    get oldEdgeRadiusFallback(): number | null {
        if (!tuiIsEdgeOlderThan(CHROMIUM_EDGE_START_VERSION, this.userAgent)) {
            return null;
        }

        const strokeWidth = parseInt(
            this.win.getComputedStyle(this.progressCircle.nativeElement).strokeWidth,
            10,
        );

        return (this.el.nativeElement.offsetWidth - strokeWidth) / 2;
    }

    constructor(
        @Inject(USER_AGENT) private readonly userAgent: string,
        @Inject(WINDOW) private readonly win: Window,
        @Inject(ElementRef) private readonly el: ElementRef<HTMLElement>,
    ) {}
}
