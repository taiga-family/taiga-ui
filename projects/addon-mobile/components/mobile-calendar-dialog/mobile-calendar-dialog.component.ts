import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {TuiMobileCalendarComponent} from '@taiga-ui/addon-mobile/components/mobile-calendar';
import type {TuiBooleanHandler, TuiDay, TuiDayRange} from '@taiga-ui/cdk';
import {TUI_FALSE_HANDLER, TUI_FIRST_DAY, TUI_LAST_DAY} from '@taiga-ui/cdk';
import type {TuiDialogContext} from '@taiga-ui/core';
import type {TuiMobileCalendarData} from '@taiga-ui/kit';
import {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';

/**
 * @deprecated in favor of dropdown
 * TODO: remove before 4.0
 */
@Component({
    standalone: true,
    selector: 'tui-mobile-calendar-dialog',
    imports: [TuiMobileCalendarComponent],
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
        return this.context.data?.disabledItemHandler || TUI_FALSE_HANDLER;
    }
}
