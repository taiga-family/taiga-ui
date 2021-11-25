import {ChangeDetectorRef, Directive, Inject, TemplateRef} from '@angular/core';
import {TuiBaseDialogContext} from '@taiga-ui/cdk/interfaces';
import {PolymorpheusTemplate} from '@tinkoff/ng-polymorpheus';
import {AbstractTuiDialogService} from './dialog.service';
import {EMPTY, Subject} from 'rxjs';
import {endWith, ignoreElements, switchMap} from 'rxjs/operators';

@Directive()
export abstract class AbstractTuiDialogDirective<T> extends PolymorpheusTemplate<
    TuiBaseDialogContext<void> & T
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
        templateRef: TemplateRef<TuiBaseDialogContext<void> & T>,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Inject(AbstractTuiDialogService)
        private readonly service: AbstractTuiDialogService<T>,
    ) {
        super(templateRef, changeDetectorRef);
    }
}
