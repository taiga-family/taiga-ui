import {ChangeDetectionStrategy, Component, signal} from '@angular/core';

@Component({
    selector: 'tui-swipe-actions',
    templateUrl: './swipe-actions.template.html',
    styleUrl: './swipe-actions.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[style.--t-actions-width]': 'actionsWidth()',
        '[style.overscroll-behavior-x]': 'scrolled() ?  "contain" : "none"',
        '(scroll.zoneless)': 'scrolled.set($event.target.scrollLeft > 0)',
    },
})
export class TuiSwipeActions {
    protected readonly actionsWidth = signal(0);
    protected readonly scrolled = signal(false);
}
