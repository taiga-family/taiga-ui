import {ChangeDetectorRef, Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {WA_WINDOW} from '@ng-web-apis/common';
import {WaResizeObserver} from '@ng-web-apis/resize-observer';
import {TuiLineClamp} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiLineClamp, WaResizeObserver],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly win = inject(WA_WINDOW);
    private readonly cd = inject(ChangeDetectorRef);
    protected lineHeight = NaN;
    protected lineLimit = NaN;

    protected getDynamicLineHeight(element: HTMLDivElement): number {
        return parseInt(this.win.getComputedStyle(element).lineHeight, 10);
    }

    protected getDynamicLineLimit(element: HTMLDivElement): number {
        return Math.floor(element.offsetHeight / 24);
    }

    protected onResize(element: HTMLDivElement): void {
        this.lineHeight = this.getDynamicLineHeight(element);
        this.lineLimit = this.getDynamicLineLimit(element);
        this.cd.detectChanges();
    }
}
