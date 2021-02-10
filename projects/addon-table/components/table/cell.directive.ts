import {Directive, Inject, Input, TemplateRef} from '@angular/core';
import {tuiDefaultProp} from '@taiga-ui/cdk';

export class TuiCellContext<T extends G[keyof G], G extends Record<any, any>> {
    constructor(readonly $implicit: T, readonly item: G) {}

    get tuiCellOf(): T {
        return this.$implicit;
    }
}

@Directive({
    selector: '[tuiCell]',
})
export class TuiCellDirective<T extends Record<any, any>, K extends keyof T> {
    @Input()
    @tuiDefaultProp()
    tuiCell!: K | string;

    @Input()
    @tuiDefaultProp()
    tuiCellOf: readonly T[] = [];

    @Input()
    @tuiDefaultProp()
    tuiCellSticky = false;

    constructor(
        @Inject(TemplateRef) readonly template: TemplateRef<TuiCellContext<T[K], T>>,
    ) {}

    is(key: unknown): boolean {
        return this.tuiCell === key;
    }

    static ngTemplateContextGuard<T extends Record<any, any>, K extends keyof T>(
        _dir: TuiCellDirective<T, K>,
        _ctx: any,
    ): _ctx is TuiCellContext<T[K], T> {
        return true;
    }
}
