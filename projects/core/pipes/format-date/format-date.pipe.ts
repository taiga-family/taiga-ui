import type {PipeTransform, Signal} from '@angular/core';
import {inject, Pipe} from '@angular/core';
import {TuiObservablePipe, tuiPure} from '@taiga-ui/cdk';
import {TuiFormatDateService} from '@taiga-ui/core/services';

@Pipe({
    standalone: true,
    name: 'tuiFormatDate',
    pure: false,
})
export class TuiFormatDatePipe extends TuiObservablePipe implements PipeTransform {
    private readonly service = inject(TuiFormatDateService);

    public transform(timestampOrDate: Date | number): string | null {
        return this.format(timestampOrDate)();
    }

    @tuiPure
    private format(timestampOrDate: Date | number): Signal<string | null> {
        return this.toSignal(this.service.format(timestampOrDate.valueOf()), null);
    }
}
