import {ChangeDetectorRef, Directive, Inject, TemplateRef} from '@angular/core';
import {tuiIfMap} from '@taiga-ui/cdk/observables';
import type {TuiDialog} from '@taiga-ui/cdk/types';
import {PolymorpheusTemplate} from '@tinkoff/ng-polymorpheus';
import {Subject} from 'rxjs';
import {endWith, ignoreElements, share} from 'rxjs/operators';

import {AbstractTuiDialogService} from './dialog.service';

@Directive()
export abstract class AbstractTuiDialogDirective<T> extends PolymorpheusTemplate<
    TuiDialog<T, void>
> {
    private readonly open$ = new Subject<boolean>();

    options: Partial<T> = {};

    set open(open: boolean) {
        this.open$.next(open);
    }

    openChange = this.open$.pipe(
        tuiIfMap(() =>
            this.service.open(this, this.options).pipe(ignoreElements(), endWith(false)),
        ),
        share(),
    );

    constructor(
        @Inject(TemplateRef)
        templateRef: TemplateRef<TuiDialog<T, void>>,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Inject(AbstractTuiDialogService)
        private readonly service: AbstractTuiDialogService<T>,
    ) {
        super(templateRef, changeDetectorRef);
    }
}
