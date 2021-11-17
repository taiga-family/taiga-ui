import {ElementRef, Inject, Injectable, PipeTransform} from '@angular/core';
import {USER_AGENT} from '@ng-web-apis/common';
import {CHROMIUM_EDGE_START_VERSION, isEdgeOlderThan, isIE} from '@taiga-ui/cdk';

@Injectable()
export abstract class AbstractTuiColorSegments<T> implements PipeTransform {
    private readonly isOldBrowsers =
        isEdgeOlderThan(CHROMIUM_EDGE_START_VERSION, this.userAgent) ||
        isIE(this.userAgent);

    constructor(
        @Inject(USER_AGENT) private readonly userAgent: string,
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
    ) {}

    public abstract transform(colors: string[]): T;

    protected calculate(colors: string[]): string {
        if (this.isOldBrowsers) {
            return colors[0];
        }

        const elementWidth = this.elementRef.nativeElement.offsetWidth;
        const segmentWidth = Math.ceil(elementWidth / colors.length);
        const colorsString = colors.reduce(
            (acc, color, i) =>
                `${acc}, ${color} ${i * segmentWidth}px ${(i + 1) * segmentWidth}px`,
            '',
        );

        return `linear-gradient(to right ${colorsString})`;
    }
}
