import {Directive, inject, Input, Output} from '@angular/core';
import {tuiIfMap} from '@taiga-ui/cdk';
import {PolymorpheusTemplate} from '@tinkoff/ng-polymorpheus';
import {endWith, ignoreElements, share, Subject} from 'rxjs';

import type {TuiSheet} from './sheet';
import {TuiSheetService} from './sheet.service';
import type {TuiSheetOptions} from './sheet-options';

/**
 * @deprecated: use {@link TuiSheetDialogDirective}
 * drop in v4.0
 */
@Directive({
    selector: 'ng-template[tuiSheet]',
})
export class TuiSheetDirective extends PolymorpheusTemplate<TuiSheet<never>> {
    private readonly service = inject(TuiSheetService);
    private readonly open$ = new Subject<boolean>();

    @Input('tuiSheetOptions')
    public options: Partial<TuiSheetOptions> = {};

    @Output()
    public readonly tuiSheetChange = this.open$.pipe(
        tuiIfMap(() =>
            this.service.open(this, this.options).pipe(ignoreElements(), endWith(false)),
        ),
        share(),
    );

    @Input()
    public set tuiSheet(open: boolean) {
        this.open$.next(open);
    }
}
