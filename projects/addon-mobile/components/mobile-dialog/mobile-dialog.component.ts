import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {
    TUI_IS_IOS,
    TuiAriaDialogContext,
    TuiBaseDialog,
    TuiBaseDialogContext,
    tuiPure,
} from '@taiga-ui/cdk';
import {POLYMORPHEUS_CONTEXT, PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {TuiMobileDialogOptions} from './mobile-dialog-options';

type InternalContext<I> = TuiBaseDialog<
    number,
    TuiBaseDialogContext<number> & TuiMobileDialogOptions<I>
> &
    TuiMobileDialogOptions<I> &
    TuiAriaDialogContext;

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
        @Inject(POLYMORPHEUS_CONTEXT) readonly internal: InternalContext<I>,
    ) {}

    get content(): PolymorpheusContent<
        TuiBaseDialogContext<number> & TuiMobileDialogOptions<I>
    > {
        return this.internal.content;
    }

    @tuiPure
    get context(): TuiBaseDialogContext<number> & TuiMobileDialogOptions<I> {
        const internal = {...this.internal};
        const $implicit = internal.observer;
        const completeWith = (result: number) => {
            $implicit.next(result);
            $implicit.complete();
        };

        return {
            ...internal,
            completeWith,
            $implicit,
        };
    }

    onAction(index: number) {
        this.context.completeWith(index);
    }
}
