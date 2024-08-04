import {ChangeDetectionStrategy, Component} from '@angular/core';
import {WaResizeObserver} from '@ng-web-apis/resize-observer';

@Component({
    standalone: true,
    selector: 'tui-swipe-actions',
    imports: [WaResizeObserver],
    templateUrl: './swipe-actions.template.html',
    styleUrls: ['./swipe-actions.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[style.--t-actions-width]': 'actionsWidth',
    },
})
export class TuiSwipeActions {
    protected actionsWidth = 0;

    protected onResize(entry?: ResizeObserverEntry): void {
        this.actionsWidth = entry?.target.clientWidth || 0;
    }
}
