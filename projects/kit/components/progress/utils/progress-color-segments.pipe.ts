import {Pipe} from '@angular/core';

import {AbstractTuiColorSegments} from './abstract-color-segments';

// TODO delete in v3.0
@Pipe({name: 'tuiProgressColorSegments'})
export class TuiProgressColorSegmentsPipe extends AbstractTuiColorSegments<string> {
    /**
     * @deprecated use tuiProgressColorSegments directive instead
     * {@link TuiProgressColorSegmentsDirective}
     * @example: `<progress tuiProgressBar [tuiProgressColorSegments]="colors">`
     */
    transform(colors: string[]): string {
        return this.calculate(colors);
    }
}
