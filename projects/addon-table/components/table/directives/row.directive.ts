import {Directive, Inject, Input, TemplateRef} from '@angular/core';
import {TuiRowContext} from '@taiga-ui/addon-table/interfaces';
import {tuiDefaultProp} from '@taiga-ui/cdk';

/**
 * @deprecated use `*ngFor="let item of data | tuiTableSort"` instead.
 * See example {@link https://taiga-ui.dev/components/table#basic}
 * ___
 * TODO v4.0 delete it.
 * Don't forget to delete {@link TuiTrComponent}!
 */
@Directive({
    selector: `ng-template[tuiRow]`,
})
export class TuiRowDirective<T extends Partial<Record<keyof T, any>>> {
    @Input()
    @tuiDefaultProp()
    tuiRowOf: readonly T[] = [];

    constructor(@Inject(TemplateRef) readonly template: TemplateRef<TuiRowContext<T>>) {}

    static ngTemplateContextGuard<T>(
        _dir: TuiRowDirective<T>,
        _ctx: unknown,
    ): _ctx is TuiRowContext<T> {
        return true;
    }
}
