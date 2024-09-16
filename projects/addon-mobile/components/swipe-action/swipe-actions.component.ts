import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    inject,
} from '@angular/core';

@Component({
    standalone: true,
    selector: 'tui-swipe-actions',
    templateUrl: './swipe-actions.template.html',
    styleUrls: ['./swipe-actions.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[style.--t-actions-width]': 'actionsWidth',
    },
})
export class TuiSwipeActions {
    protected actionsWidth = 0;

    protected readonly cdr = inject(ChangeDetectorRef);

    protected onResize(event: UIEvent): void {
        const [entry] = event as unknown as ResizeObserverEntry[];

        if (!entry) {
            return;
        }

        this.actionsWidth = entry.target.clientWidth;
        this.cdr.detectChanges();
    }
}
