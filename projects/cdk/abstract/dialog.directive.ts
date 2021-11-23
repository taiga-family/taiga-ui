import {Directive, Inject, TemplateRef} from '@angular/core';
import {TuiBaseDialogContext} from '@taiga-ui/cdk/interfaces';
import {AbstractTuiDialogService} from './dialog.service';
import {EMPTY, Subject} from 'rxjs';
import {endWith, ignoreElements, switchMap} from 'rxjs/operators';

@Directive()
export abstract class AbstractTuiDialogDirective<T> {
    private readonly open$ = new Subject<boolean>();

    options: Partial<T> = {};

    set open(open: boolean) {
        this.open$.next(open);
    }

    openChange = this.open$.pipe(
        switchMap(open =>
            open
                ? this.service
                      .open(this.templateRef, this.options)
                      .pipe(ignoreElements(), endWith(false))
                : EMPTY,
        ),
    );

    constructor(
        @Inject(TemplateRef)
        private readonly templateRef: TemplateRef<TuiBaseDialogContext<void> & T>,
        @Inject(AbstractTuiDialogService)
        private readonly service: AbstractTuiDialogService<T>,
    ) {}
}
