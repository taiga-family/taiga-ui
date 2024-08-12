import {Directive} from '@angular/core';
import {WA_INTERSECTION_ROOT_MARGIN} from '@ng-web-apis/intersection-observer';

import {TuiStuck} from './stuck.directive';

@Directive({
    standalone: true,
    selector: 'thead[tuiThead]',
    providers: [
        {
            provide: WA_INTERSECTION_ROOT_MARGIN,
            useValue: '0px 10000px 10000px 10000px',
        },
    ],
    hostDirectives: [TuiStuck],
})
export class TuiTableThead {}
