import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {
    ALWAYS_FALSE_HANDLER,
    TUI_FIRST_DAY,
    TUI_LAST_DAY,
    TuiBooleanHandler,
    TuiDay,
    TuiDayRange,
} from '@taiga-ui/cdk';
import {TuiDialogContext} from '@taiga-ui/core';
import {TuiMobileCalendarData} from '@taiga-ui/kit';
import {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';

@Component({
    selector: 'tui-mobile-calendar-dialog',
    templateUrl: './mobile-calendar-dialog.template.html',
    styleUrls: ['./mobile-calendar-dialog.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiMobileCalendarDialogComponent {
    protected readonly context =
        inject<
            TuiDialogContext<
                TuiDay | TuiDayRange | readonly TuiDay[],
                TuiMobileCalendarData | undefined
            >
        >(POLYMORPHEUS_CONTEXT);

    protected get single(): boolean {
        return this.context.data?.single === true;
    }

    protected get multi(): boolean {
        return this.context.data?.multi === true;
    }

    protected get min(): TuiDay {
        return this.context.data?.min || TUI_FIRST_DAY;
    }

    protected get max(): TuiDay {
        return this.context.data?.max || TUI_LAST_DAY;
    }

    protected get disabledItemHandler(): TuiBooleanHandler<TuiDay> {
        return this.context.data?.disabledItemHandler || ALWAYS_FALSE_HANDLER;
    }
}
