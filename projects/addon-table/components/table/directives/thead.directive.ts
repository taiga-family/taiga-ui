import {Directive} from '@angular/core';
import {INTERSECTION_ROOT_MARGIN} from '@ng-web-apis/intersection-observer';

import {TuiStuck} from './stuck.directive';

@Directive({
    standalone: true,
    selector: 'thead[tuiThead]',
    providers: [
        {
            provide: INTERSECTION_ROOT_MARGIN,
            useValue: '0px 10000px 10000px 10000px',
        },
    ],
    hostDirectives: [TuiStuck],
})
export class TuiTheadDirective {}
