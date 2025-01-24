import type {ValueProvider} from '@angular/core';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {TuiMobileCalendar} from '@taiga-ui/addon-mobile/components/mobile-calendar';
import {TuiKeyboardService} from '@taiga-ui/addon-mobile/services';
import {TuiControl} from '@taiga-ui/cdk/classes';
import {TUI_FALSE_HANDLER} from '@taiga-ui/cdk/constants';
import type {TuiDayLike} from '@taiga-ui/cdk/date-time';
import {TUI_FIRST_DAY, TUI_LAST_DAY, TuiDay, TuiDayRange} from '@taiga-ui/cdk/date-time';
import {TuiActiveZone} from '@taiga-ui/cdk/directives/active-zone';
import type {TuiBooleanHandler} from '@taiga-ui/cdk/types';
import {tuiPure} from '@taiga-ui/cdk/utils/miscellaneous';
import {tuiFadeIn, tuiSlideInTop} from '@taiga-ui/core/animations';
import {TuiDropdownDirective} from '@taiga-ui/core/directives/dropdown';
import {TUI_ANIMATIONS_SPEED} from '@taiga-ui/core/tokens';
import {tuiGetDuration} from '@taiga-ui/core/utils/miscellaneous';
import {
    calculateDisabledItemHandler,
    TUI_DAY_CAPS_MAPPER,
} from '@taiga-ui/kit/components/calendar-range';
import {TUI_MOBILE_CALENDAR} from '@taiga-ui/kit/tokens';
import {injectContext} from '@taiga-ui/polymorpheus';
import type {Observer} from 'rxjs';

export interface TuiMobileCalendarData {
    disabledItemHandler?: TuiBooleanHandler<TuiDay>;
    max?: TuiDay | null;
    min?: TuiDay | null;
    multi?: boolean;
    single?: boolean;
}

@Component({
    standalone: true,
    selector: 'tui-mobile-calendar-dropdown',
    imports: [TuiMobileCalendar],
    templateUrl: './mobile-calendar-dropdown.template.html',
    styleUrls: ['./mobile-calendar-dropdown.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [tuiSlideInTop, tuiFadeIn],
    hostDirectives: [TuiActiveZone],
    host: {
        '[@tuiSlideInTop]': 'animation',
        '[@tuiFadeIn]': 'animation',
    },
})
export class TuiMobileCalendarDropdown {
    // TODO: Rework to use TuiDropdownOpenDirective so the focus returns to the field on closing
    private readonly dropdown = inject(TuiDropdownDirective, {optional: true});
    private readonly keyboard = inject(TuiKeyboardService);
    private readonly context = injectContext<Record<string, any>>({optional: true});
    private readonly observer?: Observer<any> = this.context?.$implicit;
    private readonly data: TuiMobileCalendarData = this.context?.data || {};

    private selectedPeriod: TuiDayRange | null = null;

    protected readonly animation = {
        value: '',
        params: {
            start: '100vh',
            duration: tuiGetDuration(inject(TUI_ANIMATIONS_SPEED)),
        },
    };

    // TODO: Refactor to proper Date, DateMulti and DateRange components after they are added to kit
    protected readonly control: any = inject(TuiControl, {optional: true});
    protected readonly range = this.is('tui-input-date-range');
    protected readonly multi = this.data.multi || this.is('tui-input-date[multiple]');
    protected readonly single =
        this.data.single || // TODO(v5): use `rangeMode` from DI token `TUI_CALENDAR_SHEET_DEFAULT_OPTIONS`
        this.is('tui-input-date:not([multiple])');

    constructor() {
        this.keyboard.hide();
    }

    public max(): TuiDay {
        return (
            this.data.max ||
            (this.range
                ? TUI_DAY_CAPS_MAPPER(
                      this.control.max,
                      this.selectedPeriod,
                      this.control.maxLength,
                      false,
                  )
                : this.control?.max) ||
            TUI_LAST_DAY
        );
    }

    public min(): TuiDay {
        return (
            this.data.min ||
            (this.range
                ? TUI_DAY_CAPS_MAPPER(
                      this.control.min,
                      this.selectedPeriod,
                      this.control.maxLength,
                      true,
                  )
                : this.control?.min) ||
            TUI_FIRST_DAY
        );
    }

    public onValueChange(value: TuiDay | TuiDayRange | readonly TuiDay[] | null): void {
        if (!this.range) {
            return;
        }

        if (value === null || value instanceof TuiDayRange) {
            this.selectedPeriod = value;
        } else if (value instanceof TuiDay) {
            this.selectedPeriod = new TuiDayRange(value, value);
        }
    }

    protected get calculatedDisabledItemHandler(): TuiBooleanHandler<TuiDay> {
        return this.calculateDisabledItemHandler(
            this.data.disabledItemHandler ||
                this.control?.disabledItemHandler ||
                TUI_FALSE_HANDLER,
            this.selectedPeriod,
            this.control?.minLength ?? null,
        );
    }

    protected close(): void {
        this.dropdown?.toggle(false);
        this.observer?.complete();
        this.keyboard.show();
    }

    protected confirm(value: any): void {
        const normalizedValue = this.range ? this.selectedPeriod : value;

        if (this.control) {
            this.control.value = normalizedValue;
        }

        this.observer?.next(normalizedValue);
        this.close();
    }

    @tuiPure
    private calculateDisabledItemHandler(
        disabledItemHandler: TuiBooleanHandler<TuiDay>,
        value: TuiDayRange | null,
        minLength: TuiDayLike | null,
    ): TuiBooleanHandler<TuiDay> {
        return calculateDisabledItemHandler(disabledItemHandler, value, minLength);
    }

    private is(selector: string): boolean {
        return !!this.dropdown?.el.closest(selector);
    }
}

export function tuiProvideMobileCalendar(): ValueProvider {
    return {
        provide: TUI_MOBILE_CALENDAR,
        useValue: TuiMobileCalendarDropdown,
    };
}
