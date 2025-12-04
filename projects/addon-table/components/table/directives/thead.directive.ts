import {Directive} from '@angular/core';
import {WA_INTERSECTION_ROOT_MARGIN} from '@ng-web-apis/intersection-observer';

import {tuiTableOptionsProvider} from '../table.options';
import {TuiStuck} from './stuck.directive';

@Directive({
    selector: 'thead[tuiThead]',
    providers: [
        tuiTableOptionsProvider({sticky: true}),
        {
            provide: WA_INTERSECTION_ROOT_MARGIN,
            useValue: '0px 10000px 10000px 10000px',
        },
    ],
    hostDirectives: [TuiStuck],
})
export class TuiTableThead {}
