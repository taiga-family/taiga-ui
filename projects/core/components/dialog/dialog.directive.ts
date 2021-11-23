import {Directive, Inject, Input, Output, TemplateRef} from '@angular/core';
import {TuiBaseDialogContext} from '@taiga-ui/cdk';
import {TuiDialogOptions} from '@taiga-ui/core/interfaces';
import {EMPTY, Subject} from 'rxjs';
import {endWith, ignoreElements, switchMap} from 'rxjs/operators';

import {TuiDialogService} from './dialog.service';

@Directive({
    selector: 'ng-template[tuiDialog]',
})
export class TuiDialogDirective<T> {
    private readonly open$ = new Subject<boolean>();

    @Input('tuiDialogOptions')
    options: Partial<TuiDialogOptions<T>> = {};

    @Input()
    set tuiDialog(open: boolean) {
        this.open$.next(open);
    }

    @Output()
    tuiDialogChange = this.open$.pipe(
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
        private readonly templateRef: TemplateRef<
            TuiBaseDialogContext<void> & TuiDialogOptions<T>
        >,
        @Inject(TuiDialogService) private readonly service: TuiDialogService,
    ) {}
}
