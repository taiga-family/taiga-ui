import {Pipe} from '@angular/core';
import {AbstractTuiColorSegments} from './abstract-color-segments';

/**
 * @deprecated use tuiProgressColorSegmentsAsync instead
 * {@link TuiProgressColorSegmentsAsyncPipe}
 * example: `<progress [color]="colors | tuiProgressColorSegmentsAsync | async">`
 */
@Pipe({name: 'tuiProgressColorSegments'})
export class TuiProgressColorSegmentsPipe extends AbstractTuiColorSegments<string> {
    transform(colors: string[]): string {
        return this.calculate(colors);
    }
}
