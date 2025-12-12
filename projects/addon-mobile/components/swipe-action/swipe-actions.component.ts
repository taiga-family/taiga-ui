import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    inject,
} from '@angular/core';
import {WaResizeObserver} from '@ng-web-apis/resize-observer';

@Component({
    selector: 'tui-swipe-actions',
    imports: [WaResizeObserver],
    templateUrl: './swipe-actions.template.html',
    styleUrl: './swipe-actions.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {'[style.--t-actions-width]': 'actionsWidth'},
})
export class TuiSwipeActions {
    protected actionsWidth = 0;
    protected readonly cdr = inject(ChangeDetectorRef);

    protected onResize({target}: ResizeObserverEntry): void {
        this.actionsWidth = target.clientWidth;
        this.cdr.detectChanges();
    }
}
