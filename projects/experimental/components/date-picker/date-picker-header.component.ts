import {ChangeDetectionStrategy, Component, inject, input} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AbstractTuiCalendar} from '@taiga-ui/core/components';
import {TUI_DROPDOWN_HOST} from '@taiga-ui/core/portals';
import {
    TuiInputDate,
    TuiInputDateMulti,
    tuiInputDateOptionsProvider,
    TuiInputDateRange,
} from '@taiga-ui/kit/components';

@Component({
    selector: 'tui-date-picker-header',
    imports: [FormsModule, TuiInputDate, TuiInputDateMulti, TuiInputDateRange],
    template: `
        @switch (mode()) {
            @case ('multi') {
                <tui-textfield multi>
                    <input
                        tuiInputDateMulti
                        [attr.aria-labelledby]="dropdown?.nativeElement?.id || null"
                        [max]="picker.max()"
                        [min]="picker.min()"
                        [(ngModel)]="picker.value"
                    />
                </tui-textfield>
            }
            @case ('range') {
                <tui-textfield>
                    <input
                        tuiInputDateRange
                        [attr.aria-labelledby]="dropdown?.nativeElement?.id || null"
                        [max]="picker.max()"
                        [min]="picker.min()"
                        [(ngModel)]="picker.value"
                    />
                </tui-textfield>
            }
            @default {
                <tui-textfield>
                    <input
                        tuiInputDate
                        [attr.aria-labelledby]="dropdown?.nativeElement?.id || null"
                        [max]="picker.max()"
                        [min]="picker.min()"
                        [(ngModel)]="picker.value"
                    />
                </tui-textfield>
            }
        }
    `,
    styles: `
        :host {
            position: absolute;
            inset: 0.125rem;
            opacity: 0;
            pointer-events: none;
            visibility: visible;

            &:focus-within {
                opacity: 1;
                pointer-events: auto;
            }
        }
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiInputDateOptionsProvider({icon: ''})],
})
export class TuiDatePickerHeader {
    protected readonly picker = inject(AbstractTuiCalendar);
    protected readonly dropdown = inject(TUI_DROPDOWN_HOST, {optional: true});

    public readonly mode = input<'multi' | 'range' | 'single'>();
}
