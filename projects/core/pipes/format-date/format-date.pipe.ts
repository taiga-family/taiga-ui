import {inject, Pipe, PipeTransform} from '@angular/core';
import {TuiFormatDateService} from '@taiga-ui/core/services';
import {Observable} from 'rxjs';

@Pipe({
    name: 'tuiFormatDate',
})
export class TuiFormatDatePipe implements PipeTransform {
    private readonly service = inject(TuiFormatDateService);

    public transform(timestampOrDate: Date | number): Observable<string> {
        return this.service.format(timestampOrDate.valueOf());
    }
}
