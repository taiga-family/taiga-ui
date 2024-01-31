import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: 'tui-swipe-actions',
    templateUrl: './swipe-actions.template.html',
    styleUrls: ['./swipe-actions.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[style.--t-actions-width]': 'actionsWidth',
    },
})
export class TuiSwipeActionsComponent {
    actionsWidth = 0;

    onResize({target}: ResizeObserverEntry): void {
        this.actionsWidth = target.clientWidth;
    }
}
