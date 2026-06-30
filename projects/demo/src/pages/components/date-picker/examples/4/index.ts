import {Component, computed, signal, ViewEncapsulation} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {type TuiDay, type TuiStringHandler} from '@taiga-ui/cdk';
import {TuiDataList, TuiHint, TuiIcon} from '@taiga-ui/core';
import {TuiDatePicker} from '@taiga-ui/experimental';
import {TuiAvatar, TuiInitialsPipe, TuiInputDateMulti} from '@taiga-ui/kit';

@Component({
    imports: [
        FormsModule,
        TuiAvatar,
        TuiDataList,
        TuiDatePicker,
        TuiIcon,
        TuiInitialsPipe,
        TuiInputDateMulti,
        TuiHint,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation: ViewEncapsulation.None,
    changeDetection,
})
export default class Example {
    protected readonly users = ['Alex Inkin', 'Roman Sedov'];
    protected readonly value = computed(() => this.groups().flat());
    protected readonly current = signal(0);

    protected readonly groups = signal<TuiDay[][]>(
        Array.from({length: this.users.length}, () => []),
    );

    protected readonly dayType = computed<TuiStringHandler<TuiDay>>(
        (groups = this.groups(), current = this.current()) =>
            (day) =>
                [
                    day.isWeekend ? 'weekend' : 'weekday',
                    groups[current]?.find((item) => item.daySame(day))
                        ? 'current'
                        : 'other',
                ].join(' '),
    );

    protected onValueChange(value: TuiDay[]): void {
        const added = value.filter((item) => !this.value().includes(item));
        const removed = this.value().filter((item) => !value.includes(item));

        this.groups.update((groups) =>
            groups
                .map((group) => group.filter((item) => !removed.includes(item)))
                .map((group, i) => (i === this.current() ? group.concat(added) : group)),
        );
    }

    protected getHint(day: TuiDay): string | undefined {
        return this.users[
            this.groups().findIndex((group) => group.find((item) => day.daySame(item)))
        ];
    }
}
