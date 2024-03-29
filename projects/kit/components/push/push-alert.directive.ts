import {
    ChangeDetectorRef,
    Directive,
    forwardRef,
    inject,
    Input,
    TemplateRef,
} from '@angular/core';
import {tuiIfMap} from '@taiga-ui/cdk';
import { DestroyRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {PolymorpheusTemplate} from '@tinkoff/ng-polymorpheus';
import {Subject} from 'rxjs';

import {TuiPushService} from './push.service';

@Directive({
    selector: '[tuiPush]',
    providers: []
})
export class TuiPushAlertDirective extends PolymorpheusTemplate {
    private readonly push: TuiPushService = inject(forwardRef(() => TuiPushService));
    private readonly show$ = new Subject<boolean>();

    constructor() {
        super(inject(TemplateRef), inject(ChangeDetectorRef));

        this.show$
            .pipe(
                tuiIfMap(() => this.push.open(this)),
                takeUntilDestroyed(this.destroyRef),
            )
            .subscribe();
    }

    @Input()
    public set tuiPush(show: boolean) {
        this.show$.next(show);
    }
}
