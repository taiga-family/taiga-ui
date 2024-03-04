import {Injectable} from '@angular/core';
import {TuiFormatDateService} from '@taiga-ui/core';
import {formatDistance} from 'date-fns';
import {map, type Observable, timer} from 'rxjs';

@Injectable()
export class FormatService extends TuiFormatDateService {
    public override format(timestamp: number): Observable<string> {
        return timer(0, 1000).pipe(map(() => formatDistance(timestamp, Date.now())));
    }
}
