import {computed, Directive, HostAttributeToken, inject} from '@angular/core';
import {maskitoParseTime, type MaskitoTimeMode} from '@maskito/kit';
import {TuiControl} from '@taiga-ui/cdk/classes';
import {TUI_VERSION} from '@taiga-ui/cdk/constants';
import {type TuiDay, TuiTime} from '@taiga-ui/cdk/date-time';
import {
    tuiAsTextfieldContent,
    TuiTextfieldContent,
    TuiWithNativePicker,
} from '@taiga-ui/core/components/textfield';

import {TuiInputTimeDirective} from './input-time.directive';
import {TuiInputTimeContent} from './input-time-content.component';

export abstract class TuiNativeTimePicker {
    public readonly list = inject(new HostAttributeToken('list'), {optional: true});

    protected getStep(timeMode: MaskitoTimeMode): number {
        switch (timeMode) {
            case 'HH:MM:SS':
            case 'HH:MM:SS AA':
                return 1;
            case 'HH:MM:SS.MSS':
            case 'HH:MM:SS.MSS AA':
                return 0.001;
            default:
                return 60;
        }
    }

    protected toISOString(
        value: TuiTime | readonly [TuiDay, TuiTime | null] | null,
    ): string {
        const [day, time] = Array.isArray(value) ? value : [null, value];
        const dateString = day ? day.toJSON() + (time ? 'T' : '') : '';
        const timeString = time ? time.toString('HH:MM:SS.MSS') : '';

        return dateString + timeString;
    }
}

@Directive({
    selector: 'input[tuiInputTime][type="time"]',
    providers: [tuiAsTextfieldContent(TuiInputTimeContent)],
    hostDirectives: [TuiWithNativePicker, TuiTextfieldContent],
    host: {'data-tui-version': TUI_VERSION},
})
export class TuiInputTimeComponent extends TuiNativeTimePicker {
    private readonly control: TuiControl<TuiTime | null> = inject(TuiControl);

    public readonly host = inject(TuiInputTimeDirective);
    public readonly value = computed(() => this.toISOString(this.control.value()));
    public readonly step = computed(() => this.getStep(this.host.timeMode()));

    public setValue(value: string): void {
        this.host.setValue(
            TuiTime.fromAbsoluteMilliseconds(
                maskitoParseTime(value, {mode: 'HH:MM:SS.MSS'}),
            ),
        );
    }
}
