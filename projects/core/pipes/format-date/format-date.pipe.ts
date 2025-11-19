import {
    computed,
    inject,
    Pipe,
    type PipeTransform,
    signal,
    untracked,
} from '@angular/core';
import {TuiFormatDateService} from '@taiga-ui/core/services';

@Pipe({
    name: 'tuiFormatDate',
    pure: false,
})
export class TuiFormatDatePipe implements PipeTransform {
    private readonly service = inject(TuiFormatDateService);
    private readonly timestampOrDate = signal<Date | number>(0);
    private readonly state = computed(() =>
        this.service.format(this.timestampOrDate().valueOf())(),
    );

    public transform(timestampOrDate: Date | number): string {
        untracked(() => this.timestampOrDate.set(timestampOrDate));

        return this.state();
    }
}
