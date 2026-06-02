import {Directive, HostAttributeToken, inject} from '@angular/core';
import {type MaskitoTimeMode} from '@maskito/kit';
import {TUI_VERSION} from '@taiga-ui/cdk/constants';
import {type TuiDay, type TuiTime} from '@taiga-ui/cdk/date-time';
import {
    tuiAsTextfieldContent,
    TuiTextfieldContent,
    TuiWithNativePicker,
} from '@taiga-ui/core/components/textfield';

import {TuiInputTimeContent} from './input-time-content.component';

export abstract class TuiNativeTimePicker {
    public readonly list = inject(new HostAttributeToken('list'), {optional: true});

    public getStep(timeMode: MaskitoTimeMode): number {
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

    public toISOString(
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
    host: {'data-tui-version': TUI_VERSION, '[attr.list]': 'null'},
})
export class TuiInputTimeComponent extends TuiNativeTimePicker {}
