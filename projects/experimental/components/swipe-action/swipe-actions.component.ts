import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: 'tui-swipe-actions',
    templateUrl: './swipe-actions.template.html',
    styleUrls: ['./swipe-actions.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[style.--t-actions-width]': 'actionsWidth',
        '[style.--t-content-width]': 'contentWidth',
    },
})
export class TuiSwipeActionsComponent {
    actionsWidth = 0;
    contentWidth = 0;

    onResizeContent(event: ResizeObserverEntry): void {
        this.contentWidth = event.target.clientWidth;
    }

    onResizeActions(event: ResizeObserverEntry): void {
        this.actionsWidth = event.target.clientWidth;
    }
}
