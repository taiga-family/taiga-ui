import {Directive, Inject, Input, TemplateRef} from '@angular/core';
import {TuiRowContext} from '@taiga-ui/addon-table/interfaces';
import {tuiDefaultProp} from '@taiga-ui/cdk';

@Directive({
    selector: 'ng-template[tuiRow]',
})
export class TuiRowDirective<T> {
    @Input()
    @tuiDefaultProp()
    tuiRowOf: readonly T[] = [];

    constructor(@Inject(TemplateRef) readonly template: TemplateRef<TuiRowContext<T>>) {}

    static ngTemplateContextGuard<T>(
        _dir: TuiRowDirective<T>,
        _ctx: any,
    ): _ctx is TuiRowContext<T> {
        return true;
    }
}
