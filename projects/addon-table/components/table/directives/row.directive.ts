import {Directive, Inject, Input, TemplateRef} from '@angular/core';
import {TuiContextWithImplicit, tuiDefaultProp} from '@taiga-ui/cdk';

@Directive({
    selector: 'ng-template[tuiRow]',
})
export class TuiRowDirective<T> {
    @Input()
    @tuiDefaultProp()
    tuiRowOf: readonly T[] = [];

    constructor(
        @Inject(TemplateRef) readonly template: TemplateRef<TuiContextWithImplicit<T>>,
    ) {}

    static ngTemplateContextGuard<T>(
        _dir: TuiRowDirective<T>,
        _ctx: any,
    ): _ctx is TuiContextWithImplicit<T> {
        return true;
    }
}
