import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    inject,
    signal,
} from '@angular/core';
import {WaResizeObserver} from '@ng-web-apis/resize-observer';

@Component({
    selector: 'tui-swipe-actions',
    imports: [WaResizeObserver],
    templateUrl: './swipe-actions.template.html',
    styleUrl: './swipe-actions.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[style.--t-actions-width]': 'actionsWidth',
        '[style.overscroll-behavior-x]': 'scrolled() ?  "contain" : "none"',
        '(scroll.zoneless)': 'scrolled.set($event.target.scrollLeft > 0)',
    },
})
export class TuiSwipeActions {
    protected actionsWidth = 0;
    protected readonly cdr = inject(ChangeDetectorRef);
    protected readonly scrolled = signal(false);

    protected onResize({target}: ResizeObserverEntry): void {
        this.actionsWidth = target.clientWidth;
        this.cdr.detectChanges();
    }
}
