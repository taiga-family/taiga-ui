import {
    ChangeDetectorRef,
    Directive,
    forwardRef,
    Inject,
    Input,
    Self,
    TemplateRef,
} from '@angular/core';
import {TuiDestroyService, tuiIfMap} from '@taiga-ui/cdk';
import {PolymorpheusTemplate} from '@tinkoff/ng-polymorpheus';
import {Observable, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

// TODO: find the best way for prevent cycle
// eslint-disable-next-line import/no-cycle
import {TuiPushService} from './push.service';

@Directive({
    selector: '[tuiPush]',
    providers: [TuiDestroyService],
})
export class TuiPushAlertDirective extends PolymorpheusTemplate {
    private readonly show$ = new Subject<boolean>();

    @Input()
    set tuiPush(show: boolean) {
        this.show$.next(show);
    }

    constructor(
        @Inject(TemplateRef) template: TemplateRef<any>,
        @Inject(ChangeDetectorRef) cdr: ChangeDetectorRef,
        @Self() @Inject(TuiDestroyService) destroy$: Observable<unknown>,
        @Inject(forwardRef(() => TuiPushService)) push: TuiPushService,
    ) {
        super(template, cdr);

        this.show$
            .pipe(
                tuiIfMap(() => push.open(this)),
                takeUntil(destroy$),
            )
            .subscribe();
    }
}
