import {
    ChangeDetectorRef,
    Directive,
    Inject,
    Input,
    Output,
    TemplateRef,
} from '@angular/core';
import {tuiIfMap} from '@taiga-ui/cdk';
import {PolymorpheusTemplate} from '@tinkoff/ng-polymorpheus';
import {Subject} from 'rxjs';
import {endWith, ignoreElements, share} from 'rxjs/operators';

import {TuiSheet} from './sheet';
import {TuiSheetService} from './sheet.service';
import {TuiSheetOptions} from './sheet-options';

@Directive({
    selector: 'ng-template[tuiSheet]',
})
export class TuiSheetDirective extends PolymorpheusTemplate<TuiSheet<never>> {
    private readonly open$ = new Subject<boolean>();

    @Input('tuiSheetOptions')
    options: Partial<TuiSheetOptions> = {};

    @Input()
    set tuiSheet(open: boolean) {
        this.open$.next(open);
    }

    @Output()
    readonly tuiSheetChange = this.open$.pipe(
        tuiIfMap(() =>
            this.service.open(this, this.options).pipe(ignoreElements(), endWith(false)),
        ),
        share(),
    );

    constructor(
        @Inject(ChangeDetectorRef) cdr: ChangeDetectorRef,
        @Inject(TemplateRef) templateRef: TemplateRef<TuiSheet<never>>,
        @Inject(TuiSheetService) private readonly service: TuiSheetService,
    ) {
        super(templateRef, cdr);
    }
}
