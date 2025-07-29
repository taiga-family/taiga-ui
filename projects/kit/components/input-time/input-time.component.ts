import {NgIf} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    Directive,
    inject,
    ViewEncapsulation,
} from '@angular/core';
import type {MaskitoTimeMode} from '@maskito/kit';
import {TuiControl} from '@taiga-ui/cdk/classes';
import type {TuiDay} from '@taiga-ui/cdk/date-time';
import {TuiTime} from '@taiga-ui/cdk/date-time';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {
    TuiTextfieldContent,
    TuiTextfieldDirective,
    TuiWithNativePicker,
} from '@taiga-ui/core/components/textfield';

import {TuiInputTimeDirective} from './input-time.directive';

@Directive({
    host: {
        '[attr.list]': 'null',
    },
})
export abstract class TuiNativeTimePicker {
    protected readonly list = tuiInjectElement().getAttribute('list');

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
    standalone: true,
    selector: 'input[tuiInputTime][type="time"]',
    imports: [NgIf, TuiTextfieldContent],
    templateUrl: './input-time.template.html',
    styleUrls: ['./input-time.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [TuiWithNativePicker],
    host: {ngSkipHydration: 'true'},
})
export class TuiInputTimeComponent extends TuiNativeTimePicker {
    private readonly control: TuiControl<TuiTime | null> = inject(TuiControl);

    protected readonly host = inject(TuiInputTimeDirective);

    protected readonly textfield = inject(TuiTextfieldDirective);
    protected readonly value = computed(() => this.toISOString(this.control.value()));

    protected readonly step = computed(() => this.getStep(this.host.timeMode()));

    protected setValue(value: string): void {
        this.host.setValue(TuiTime.fromString(value));
    }
}
