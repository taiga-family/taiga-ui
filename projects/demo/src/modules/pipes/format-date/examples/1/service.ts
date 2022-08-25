import {Injectable} from '@angular/core';
import {TuiFormatDateService} from '@taiga-ui/core';
import formatDistance from 'date-fns/formatDistance';
import {Observable, timer} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class FormatService extends TuiFormatDateService {
    format(timestamp: number): Observable<string> {
        return timer(0, 1000).pipe(map(() => formatDistance(timestamp, Date.now())));
    }
}
