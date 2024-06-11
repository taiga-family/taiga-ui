import {Directive, inject} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {
    INTERSECTION_ROOT_MARGIN,
    IntersectionObserverService,
} from '@ng-web-apis/intersection-observer';
import {tuiInjectElement} from '@taiga-ui/cdk';
import {catchError, of} from 'rxjs';

import {TUI_STUCK, TUI_STUCK_PROVIDER} from '../providers/stuck.provider';

@Directive({
    standalone: true,
    selector: 'thead[tuiThead]',
    providers: [
        TUI_STUCK_PROVIDER,
        IntersectionObserverService,
        {
            provide: INTERSECTION_ROOT_MARGIN,
            useValue: '0px 10000px 10000px 10000px',
        },
    ],
})
export class TuiTheadDirective {
    private readonly el = tuiInjectElement();
    protected readonly stuck$ = inject(TUI_STUCK)
        .pipe(
            catchError(() => of(false)), // SSR issue
            takeUntilDestroyed(),
        )
        .subscribe(add =>
            add ? this.el.classList.add('_stuck') : this.el.classList.remove('_stuck'),
        );
}
