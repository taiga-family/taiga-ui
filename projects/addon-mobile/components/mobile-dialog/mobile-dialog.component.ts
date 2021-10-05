import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {TUI_IS_IOS, TuiDialog} from '@taiga-ui/cdk';
import {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';
import {TuiMobileDialogOptions} from './mobile-dialog-options';

// @dynamic
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
    constructor(
        @Inject(TUI_IS_IOS) readonly isIOS: boolean,
        @Inject(POLYMORPHEUS_CONTEXT)
        readonly context: TuiDialog<TuiMobileDialogOptions<I>, number>,
    ) {}

    onAction(index: number) {
        this.context.completeWith(index);
    }
}
