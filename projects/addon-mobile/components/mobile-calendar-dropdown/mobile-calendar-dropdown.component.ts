import type {ValueProvider} from '@angular/core';
import {ChangeDetectionStrategy, Component, HostBinding, inject} from '@angular/core';
import {TuiMobileCalendarComponent} from '@taiga-ui/addon-mobile/components/mobile-calendar';
import {TuiKeyboardService} from '@taiga-ui/addon-mobile/services';
import {
    TUI_FALSE_HANDLER,
    TUI_FIRST_DAY,
    TUI_LAST_DAY,
    TuiActiveZoneDirective,
} from '@taiga-ui/cdk';
import {
    TUI_ANIMATIONS_SPEED,
    tuiFadeIn,
    tuiGetDuration,
    TuiHostedDropdownComponent,
    tuiSlideInTop,
} from '@taiga-ui/core';
import {
    TUI_MOBILE_CALENDAR,
    TuiInputDateComponent,
    TuiInputDateMultiComponent,
    TuiInputDateRangeComponent,
} from '@taiga-ui/kit';

@Component({
    standalone: true,
    selector: 'tui-mobile-calendar-dropdown',
    imports: [TuiActiveZoneDirective, TuiMobileCalendarComponent],
    templateUrl: './mobile-calendar-dropdown.template.html',
    styleUrls: ['./mobile-calendar-dropdown.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [tuiSlideInTop, tuiFadeIn],
})
export class TuiMobileCalendarDropdownComponent {
    private readonly dropdown = inject(TuiHostedDropdownComponent);
    private readonly keyboard = inject(TuiKeyboardService);

    @HostBinding('@tuiSlideInTop')
    @HostBinding('@tuiFadeIn')
    protected readonly animation = {
        value: '',
        params: {
            start: '100vh',
            duration: tuiGetDuration(inject(TUI_ANIMATIONS_SPEED)),
        },
    };

    protected readonly single = inject(TuiInputDateComponent, {optional: true});
    protected readonly multi = inject(TuiInputDateMultiComponent, {optional: true});
    protected readonly range = inject(TuiInputDateRangeComponent, {optional: true});
    protected readonly zone = inject(TuiActiveZoneDirective);

    protected readonly min =
        this.single?.min ||
        this.multi?.min ||
        this.range?.maxLengthMapper(
            this.range.computedMin,
            this.range.value,
            this.range.maxLength,
            true,
        ) ||
        TUI_FIRST_DAY;

    protected readonly max =
        this.single?.max ||
        this.multi?.max ||
        this.range?.maxLengthMapper(
            this.range.computedMax,
            this.range.value,
            this.range.maxLength,
            false,
        ) ||
        TUI_LAST_DAY;

    protected readonly disabledItemHandler =
        this.single?.disabledItemHandler ||
        this.multi?.disabledItemHandler ||
        this.range?.disabledItemHandler ||
        TUI_FALSE_HANDLER;

    constructor() {
        this.keyboard.hide();
    }

    protected close(): void {
        this.dropdown.nativeFocusableElement?.focus();
        this.dropdown.updateOpen(false);
        this.keyboard.show();
    }

    protected confirm(value: any): void {
        const control = this.single || this.multi || this.range;

        if (control) {
            control.value = value;
        }

        this.close();
    }
}

export function tuiProvideMobileCalendar(): ValueProvider {
    return {
        provide: TUI_MOBILE_CALENDAR,
        useValue: TuiMobileCalendarDropdownComponent,
    };
}
