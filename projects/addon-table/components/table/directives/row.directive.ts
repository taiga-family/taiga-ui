import {Directive, inject, Input, TemplateRef} from '@angular/core';
import {type TuiRowContext} from '@taiga-ui/addon-table/interfaces';

/**
 * @deprecated use `*ngFor` + `tuiTableSort`-pipe instead.
 * See example {@link https://taiga-ui.dev/components/table/Setup}
 * ___
 * TODO v4.0 delete it.
 */
@Directive({
    selector: 'ng-template[tuiRow]',
})
export class TuiRowDirective<T extends Partial<Record<keyof T, any>>> {
    @Input()
    public tuiRowOf: readonly T[] = [];

    public readonly template = inject(TemplateRef<TuiRowContext<T>>);

    public static ngTemplateContextGuard<T>(
        _dir: TuiRowDirective<T>,
        _ctx: unknown,
    ): _ctx is TuiRowContext<T> {
        return true;
    }
}
