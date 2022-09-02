import {ChangeDetectorRef, Directive, Inject, TemplateRef} from '@angular/core';
import type {TuiDialog} from '@taiga-ui/cdk/types';
import {PolymorpheusTemplate} from '@tinkoff/ng-polymorpheus';
import {EMPTY, Subject} from 'rxjs';
import {endWith, ignoreElements, switchMap} from 'rxjs/operators';

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
        switchMap(open =>
            open
                ? this.service
                      .open(this, this.options)
                      .pipe(ignoreElements(), endWith(false))
                : EMPTY,
        ),
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
