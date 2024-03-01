import {
    ChangeDetectorRef,
    Directive,
    forwardRef,
    inject,
    Input,
    TemplateRef,
} from '@angular/core';
import {TuiDestroyService, tuiIfMap} from '@taiga-ui/cdk';
import {PolymorpheusTemplate} from '@tinkoff/ng-polymorpheus';
import {Subject, takeUntil} from 'rxjs';

import {TuiPushService} from './push.service';

@Directive({
    selector: '[tuiPush]',
    providers: [TuiDestroyService],
})
export class TuiPushAlertDirective extends PolymorpheusTemplate {
    private readonly push: TuiPushService = inject(forwardRef(() => TuiPushService));
    private readonly show$ = new Subject<boolean>();

    constructor() {
        super(inject(TemplateRef), inject(ChangeDetectorRef));

        this.show$
            .pipe(
                tuiIfMap(() => this.push.open(this)),
                takeUntil(inject(TuiDestroyService, {self: true})),
            )
            .subscribe();
    }

    @Input()
    public set tuiPush(show: boolean) {
        this.show$.next(show);
    }
}
