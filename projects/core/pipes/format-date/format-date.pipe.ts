import {Inject, Pipe, PipeTransform} from '@angular/core';
import {TuiFormatDateService} from '@taiga-ui/core/services';
import {Observable} from 'rxjs';

@Pipe({
    name: `tuiFormatDate`,
})
export class TuiFormatDatePipe implements PipeTransform {
    constructor(
        @Inject(TuiFormatDateService) private readonly service: TuiFormatDateService,
    ) {}

    transform(timestampOrDate: number | Date): Observable<string> {
        return this.service.format(timestampOrDate.valueOf());
    }
}
