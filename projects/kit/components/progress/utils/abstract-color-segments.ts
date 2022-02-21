import {ElementRef, Inject, Injectable, PipeTransform} from '@angular/core';
import {USER_AGENT} from '@ng-web-apis/common';
import {CHROMIUM_EDGE_START_VERSION, isEdgeOlderThan, isIE} from '@taiga-ui/cdk';

import {calculateColorSegments} from './calculate-color-segments';

// TODO delete in v3.0
@Injectable()
export abstract class AbstractTuiColorSegments<T> implements PipeTransform {
    private readonly isOldBrowsers =
        isEdgeOlderThan(CHROMIUM_EDGE_START_VERSION, this.userAgent) ||
        isIE(this.userAgent);

    constructor(
        @Inject(USER_AGENT) private readonly userAgent: string,
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
    ) {}

    abstract transform(colors: string[]): T;

    protected calculate(colors: string[]): string {
        if (this.isOldBrowsers) {
            return colors[0];
        }

        const elementWidth = this.elementRef.nativeElement.offsetWidth;

        return calculateColorSegments(colors, elementWidth);
    }
}
