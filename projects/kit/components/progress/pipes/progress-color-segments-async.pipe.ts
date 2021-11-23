import {Pipe} from '@angular/core';
import {Observable, timer} from 'rxjs';
import {map} from 'rxjs/operators';

import {AbstractTuiColorSegments} from './abstract-color-segments';

@Pipe({name: 'tuiProgressColorSegmentsAsync'})
export class TuiProgressColorSegmentsAsyncPipe extends AbstractTuiColorSegments<
    Observable<string>
> {
    transform(colors: string[]): Observable<string> {
        return timer(0).pipe(map(() => this.calculate(colors)));
    }
}
