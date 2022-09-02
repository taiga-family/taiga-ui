import {
    ChangeDetectorRef,
    Directive,
    Inject,
    Input,
    Output,
    TemplateRef,
} from '@angular/core';
import {tuiDefaultProp, tuiRequiredSetter} from '@taiga-ui/cdk';
import {PolymorpheusTemplate} from '@tinkoff/ng-polymorpheus';
import {EMPTY, Subject} from 'rxjs';
import {endWith, ignoreElements, switchMap} from 'rxjs/operators';

import type {TuiSheet} from './sheet';
import {TuiSheetService} from './sheet.service';
import type {TuiSheetOptions} from './sheet-options';

@Directive({
    selector: `ng-template[tuiSheet]`,
})
export class TuiSheetDirective extends PolymorpheusTemplate<TuiSheet<never>> {
    private readonly open$ = new Subject<boolean>();

    @Input(`tuiSheetOptions`)
    @tuiDefaultProp()
    options: Partial<TuiSheetOptions> = {};

    @Input()
    @tuiRequiredSetter()
    set tuiSheet(open: boolean) {
        this.open$.next(open);
    }

    @Output()
    tuiSheetChange = this.open$.pipe(
        switchMap(open =>
            open
                ? this.service
                      .open(this, this.options)
                      .pipe(ignoreElements(), endWith(false))
                : EMPTY,
        ),
    );

    constructor(
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Inject(TemplateRef) templateRef: TemplateRef<TuiSheet<never>>,
        @Inject(TuiSheetService) private readonly service: TuiSheetService,
    ) {
        super(templateRef, changeDetectorRef);
    }
}
