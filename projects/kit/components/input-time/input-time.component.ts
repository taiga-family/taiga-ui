import {
    ChangeDetectionStrategy,
    Component,
    computed,
    Directive,
    HostAttributeToken,
    inject,
    ViewEncapsulation,
} from '@angular/core';
import {type MaskitoTimeMode} from '@maskito/kit';
import {TuiControl} from '@taiga-ui/cdk/classes';
import {type TuiDay, TuiTime} from '@taiga-ui/cdk/date-time';
import {
    TuiTextfieldContent,
    TuiWithNativePicker,
} from '@taiga-ui/core/components/textfield';

import {TuiInputTimeDirective} from './input-time.directive';

@Directive({host: {'[attr.list]': 'null'}})
export abstract class TuiNativeTimePicker {
    protected readonly list = inject(new HostAttributeToken('list'), {optional: true});

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

@Component({
    selector: 'input[tuiInputTime][type="time"]',
    imports: [TuiTextfieldContent],
    templateUrl: './input-time.template.html',
    styleUrl: './input-time.style.less',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [TuiWithNativePicker],
    host: {ngSkipHydration: 'true'},
})
export class TuiInputTimeComponent extends TuiNativeTimePicker {
    private readonly control: TuiControl<TuiTime | null> = inject(TuiControl);

    protected readonly host = inject(TuiInputTimeDirective);
    protected readonly value = computed(() => this.toISOString(this.control.value()));
    protected readonly step = computed(() => this.getStep(this.host.timeMode()));

    protected setValue(value: string): void {
        this.host.setValue(TuiTime.fromString(value));
    }
}
