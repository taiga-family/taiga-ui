import {Pipe} from '@angular/core';
import {Observable, timer} from 'rxjs';
import {map} from 'rxjs/operators';

import {AbstractTuiColorSegments} from './abstract-color-segments';

// TODO: 3.0 delete
@Pipe({name: 'tuiProgressColorSegmentsAsync'})
export class TuiProgressColorSegmentsAsyncPipe extends AbstractTuiColorSegments<
    Observable<string>
> {
    /**
     * @deprecated use tuiProgressColorSegments directive instead
     * {@link TuiProgressColorSegmentsDirective}
     * @example: `<progress tuiProgressBar [tuiProgressColorSegments]="colors">`
     */
    transform(colors: string[]): Observable<string> {
        return timer(0).pipe(map(() => this.calculate(colors)));
    }
}
