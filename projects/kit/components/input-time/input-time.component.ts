import {NgIf} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    ViewEncapsulation,
} from '@angular/core';
import type {MaskitoTimeMode} from '@maskito/kit';
import {TuiControl} from '@taiga-ui/cdk/classes';
import {TuiTime} from '@taiga-ui/cdk/date-time';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {
    TuiTextfieldContent,
    TuiTextfieldDirective,
} from '@taiga-ui/core/components/textfield';

import {TuiInputTimeDirective} from './input-time.directive';

@Component({
    standalone: true,
    selector: 'input[tuiInputTime][type="time"]',
    imports: [NgIf, TuiTextfieldContent],
    templateUrl: './input-time.template.html',
    styleUrls: ['./input-time.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        ngSkipHydration: 'true',
        '[type]': '"text"',
        '[attr.list]': 'null',
    },
})
export class TuiInputTimeComponent {
    private readonly control: TuiControl<TuiTime | null> = inject(TuiControl);

    protected readonly list = tuiInjectElement().getAttribute('list');
    protected readonly host = inject(TuiInputTimeDirective);
    protected readonly textfield = inject(TuiTextfieldDirective);
    protected readonly value = computed((value = this.control.value()) =>
        value
            ? value.toString(this.host.timeMode().replace(' AA', '') as MaskitoTimeMode)
            : '',
    );

    protected readonly step = computed((mode = this.host.timeMode()) => {
        switch (mode) {
            case 'HH:MM:SS':
            case 'HH:MM:SS AA':
                return 1;
            case 'HH:MM:SS.MSS':
            case 'HH:MM:SS.MSS AA':
                return 0.001;
            default:
                return 60;
        }
    });

    protected setValue(value: string): void {
        this.host.setValue(TuiTime.fromString(value));
    }
}
