import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {TUI_IS_IOS, TuiPopover} from '@taiga-ui/cdk';
import {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';

import {TuiMobileDialogOptions} from './mobile-dialog.options';

@Component({
    selector: 'tui-mobile-dialog',
    templateUrl: './mobile-dialog.template.html',
    styleUrls: ['./mobile-dialog.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[class._ios]': 'isIOS',
    },
})
export class TuiMobileDialogComponent<I> {
    protected readonly isIOS = inject(TUI_IS_IOS);
    protected readonly context =
        inject<TuiPopover<TuiMobileDialogOptions<I>, number>>(POLYMORPHEUS_CONTEXT);

    protected onAction(index: number): void {
        this.context.completeWith(index);
    }
}
