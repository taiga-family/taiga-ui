import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ResizeObserverModule} from '@ng-web-apis/resize-observer';

@Component({
    standalone: true,
    selector: 'tui-swipe-actions',
    imports: [ResizeObserverModule],
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
