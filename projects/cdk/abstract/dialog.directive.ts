import {
    ChangeDetectorRef,
    Directive,
    Inject,
    OnChanges,
    TemplateRef,
} from '@angular/core';
import {tuiIfMap} from '@taiga-ui/cdk/observables';
import {TuiDialog} from '@taiga-ui/cdk/types';
import {PolymorpheusTemplate} from '@tinkoff/ng-polymorpheus';
import {Subject} from 'rxjs';
import {distinctUntilChanged, endWith, ignoreElements, share} from 'rxjs/operators';

import {AbstractTuiDialogService} from './dialog.service';

@Directive()
export abstract class AbstractTuiDialogDirective<T>
    extends PolymorpheusTemplate<TuiDialog<T, void>>
    implements OnChanges
{
    private readonly open$ = new Subject<boolean>();

    options: Partial<T> = {};
    open = false;

    openChange = this.open$.pipe(
        distinctUntilChanged(),
        tuiIfMap(() =>
            this.service.open(this, this.options).pipe(ignoreElements(), endWith(false)),
        ),
        share(),
    );

    constructor(
        @Inject(TemplateRef)
        templateRef: TemplateRef<TuiDialog<T, void>>,
        @Inject(ChangeDetectorRef) cdr: ChangeDetectorRef,
        @Inject(AbstractTuiDialogService)
        private readonly service: AbstractTuiDialogService<T>,
    ) {
        super(templateRef, cdr);
    }

    ngOnChanges(): void {
        this.open$.next(this.open);
    }
}
