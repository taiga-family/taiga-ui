import {Directive, Inject, Input, TemplateRef} from '@angular/core';
import {tuiDefaultProp} from '@taiga-ui/cdk';

export class TuiCellContext<T> {
    constructor(readonly $implicit: T) {}

    get tuiCellOf(): T {
        return this.$implicit;
    }
}

@Directive({
    selector: '[tuiCell]',
})
export class TuiCellDirective<T, K extends keyof T> {
    @Input()
    @tuiDefaultProp()
    tuiCell!: K | string;

    @Input()
    @tuiDefaultProp()
    tuiCellOf!: T;

    constructor(
        @Inject(TemplateRef) readonly template: TemplateRef<TuiCellContext<T[K]>>,
    ) {}

    static ngTemplateContextGuard<T, K extends keyof T>(
        _dir: TuiCellDirective<T, K>,
        _ctx: any,
    ): _ctx is TuiCellContext<T[K]> {
        return true;
    }
}
