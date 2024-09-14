import {Directive, forwardRef, inject, Input} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {tuiIfMap} from '@taiga-ui/cdk/observables';
import {PolymorpheusTemplate} from '@taiga-ui/polymorpheus';
import {Subject} from 'rxjs';

import {TuiPushService} from './push.service';

@Directive({
    standalone: true,
    selector: 'ng-template[tuiPush]',
})
export class TuiPushDirective extends PolymorpheusTemplate {
    private readonly push: TuiPushService = inject(forwardRef(() => TuiPushService));
    private readonly show$ = new Subject<boolean>();

    protected readonly $ = this.show$
        .pipe(
            tuiIfMap(() => this.push.open(this)),
            takeUntilDestroyed(),
        )
        .subscribe();

    @Input()
    public set tuiPush(show: boolean) {
        this.show$.next(show);
    }
}
