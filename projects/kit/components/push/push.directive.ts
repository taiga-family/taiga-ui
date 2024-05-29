import {
    ChangeDetectorRef,
    Directive,
    forwardRef,
    inject,
    Input,
    TemplateRef,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {tuiIfMap} from '@taiga-ui/cdk';
import {PolymorpheusTemplate} from '@tinkoff/ng-polymorpheus';
import {Subject} from 'rxjs';

import {TuiPushService} from './push.service';

@Directive({
    standalone: true,
    selector: 'ng-template[tuiPush]',
})
export class TuiPushDirective extends PolymorpheusTemplate {
    private readonly push: TuiPushService = inject(forwardRef(() => TuiPushService));
    private readonly show$ = new Subject<boolean>();

    constructor() {
        super(inject(TemplateRef), inject(ChangeDetectorRef));

        this.show$
            .pipe(
                tuiIfMap(() => this.push.open(this)),
                takeUntilDestroyed(),
            )
            .subscribe();
    }

    @Input()
    public set tuiPush(show: boolean) {
        this.show$.next(show);
    }
}
