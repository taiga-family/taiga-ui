import {Directive, Inject, Input, TemplateRef} from '@angular/core';
import {TuiComparator} from '@taiga-ui/addon-table/types';
import {defaultSort} from '@taiga-ui/addon-table/utils';
import {TuiContextWithImplicit, tuiDefaultProp} from '@taiga-ui/cdk';

@Directive({
    selector: '[tuiHead]',
})
export class TuiHeadDirective<T extends Record<any, any>, K extends keyof T> {
    @Input()
    @tuiDefaultProp()
    tuiHead!: K;

    @Input()
    @tuiDefaultProp()
    tuiHeadOf: readonly T[] = [];

    @Input()
    @tuiDefaultProp()
    tuiHeadSorter: TuiComparator<T> | null = (a, b) =>
        defaultSort(a[this.tuiHead], b[this.tuiHead]);

    constructor(@Inject(TemplateRef) readonly template: TemplateRef<{}>) {}

    is(key: unknown): boolean {
        return this.tuiHead === key;
    }

    static ngTemplateContextGuard<T extends Record<any, any>, K extends keyof T>(
        _dir: TuiHeadDirective<T, K>,
        _ctx: any,
    ): _ctx is TuiContextWithImplicit<T[K]> {
        return true;
    }
}
