import type {PipeTransform} from '@angular/core';
import {inject, Pipe} from '@angular/core';
import type {TuiReadonlyDate} from '@taiga-ui/cdk/date-time';
import {TuiFormatDateService} from '@taiga-ui/core/services';
import type {Observable} from 'rxjs';

@Pipe({
    standalone: true,
    name: 'tuiFormatDate',
})
export class TuiFormatDatePipe implements PipeTransform {
    private readonly service = inject(TuiFormatDateService);

    public transform(
        timestampOrDate: Date | TuiReadonlyDate | number,
    ): Observable<string> {
        return this.service.format(timestampOrDate.valueOf());
    }
}
