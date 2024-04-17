import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    Inject,
    Optional,
} from '@angular/core';
import {
    ALWAYS_FALSE_HANDLER,
    TUI_FIRST_DAY,
    TUI_LAST_DAY,
    TuiActiveZoneDirective,
} from '@taiga-ui/cdk';
import {
    TUI_ANIMATIONS_DURATION,
    tuiFadeIn,
    TuiHostedDropdownComponent,
    tuiSlideInTop,
} from '@taiga-ui/core';
import {
    TuiInputDateComponent,
    TuiInputDateMultiComponent,
    TuiInputDateRangeComponent,
} from '@taiga-ui/kit';

@Component({
    selector: 'tui-mobile-calendar-dropdown',
    templateUrl: './mobile-calendar-dropdown.template.html',
    styleUrls: ['./mobile-calendar-dropdown.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [tuiSlideInTop, tuiFadeIn],
})
export class TuiMobileCalendarDropdownComponent {
    @HostBinding('@tuiSlideInTop')
    @HostBinding('@tuiFadeIn')
    readonly animation = {
        value: '',
        params: {
            start: '100vh',
            duration: this.duration,
        },
    } as const;

    readonly min =
        this.single?.min ||
        this.multi?.min ||
        this.range?.maxLengthMapper(
            this.range.computedMin,
            this.range.value,
            this.range.maxLength,
            true,
        ) ||
        TUI_FIRST_DAY;

    readonly max =
        this.single?.max ||
        this.multi?.max ||
        this.range?.maxLengthMapper(
            this.range.computedMax,
            this.range.value,
            this.range.maxLength,
            false,
        ) ||
        TUI_LAST_DAY;

    readonly disabledItemHandler =
        this.single?.disabledItemHandler ||
        this.multi?.disabledItemHandler ||
        this.range?.disabledItemHandler ||
        ALWAYS_FALSE_HANDLER;

    constructor(
        @Inject(TuiActiveZoneDirective) readonly zone: TuiActiveZoneDirective,
        @Inject(TUI_ANIMATIONS_DURATION) private readonly duration: number,
        @Optional()
        @Inject(TuiInputDateComponent)
        readonly single: TuiInputDateComponent | null,
        @Optional()
        @Inject(TuiInputDateMultiComponent)
        readonly multi: TuiInputDateMultiComponent | null,
        @Optional()
        @Inject(TuiInputDateRangeComponent)
        private readonly range: TuiInputDateRangeComponent | null,
        @Inject(TuiHostedDropdownComponent)
        private readonly dropdown: TuiHostedDropdownComponent,
    ) {}

    close(): void {
        this.dropdown.computedHost.focus();
        this.dropdown.updateOpen(false);
    }

    confirm(value: any): void {
        const control = this.single || this.multi || this.range;

        if (control) {
            control.value = value;
        }

        this.close();
    }
}
