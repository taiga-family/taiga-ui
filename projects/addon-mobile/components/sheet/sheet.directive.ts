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
import {endWith, switchMap} from 'rxjs/operators';
import {TuiSheetOptions} from './sheet-options';
import {TuiSheetService} from './sheet.service';

@Directive({
    selector: 'ng-template[tuiSheet]',
})
export class TuiSheetDirective extends PolymorpheusTemplate<TuiSheetOptions> {
    private readonly open$ = new Subject<boolean>();

    @Input('tuiSheetOptions')
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
            open ? this.service.open(this, this.options).pipe(endWith(false)) : EMPTY,
        ),
    );

    constructor(
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Inject(TemplateRef) templateRef: TemplateRef<TuiSheetOptions>,
        @Inject(TuiSheetService) private readonly service: TuiSheetService,
    ) {
        super(templateRef, changeDetectorRef);
    }
}
