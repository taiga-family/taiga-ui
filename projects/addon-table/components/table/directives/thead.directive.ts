import {Directive, Inject} from '@angular/core';
import {
    INTERSECTION_ROOT_MARGIN,
    IntersectionObserverService,
} from '@ng-web-apis/intersection-observer';
import {Observable} from 'rxjs';
import {TUI_STUCK, TUI_STUCK_PROVIDER} from '../providers/stuck.provider';

@Directive({
    selector: 'thead[tuiThead]',
    providers: [
        TUI_STUCK_PROVIDER,
        IntersectionObserverService,
        {
            provide: INTERSECTION_ROOT_MARGIN,
            useValue: '0px 10000px 10000px 10000px',
        },
    ],
    host: {
        '($.class._stuck)': 'stuck$',
    },
})
export class TuiTheadDirective {
    constructor(@Inject(TUI_STUCK) readonly stuck$: Observable<boolean>) {}
}
