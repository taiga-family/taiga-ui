import {inject, Pipe, type PipeTransform} from '@angular/core';
import {type TuiIdentityMatcher} from '@taiga-ui/cdk/types';
import {tuiPure} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiTextfieldComponent} from '@taiga-ui/core/components/textfield';
import {TUI_ITEMS_HANDLERS} from '@taiga-ui/core/directives/items-handlers';
import {tuiIsFlat} from '@taiga-ui/kit/utils';

@Pipe({
    name: 'tuiHideSelected',
    pure: false,
})
export class TuiHideSelectedPipe implements PipeTransform {
    private readonly textfield = inject(TuiTextfieldComponent);
    private readonly handlers = inject(TUI_ITEMS_HANDLERS);

    public transform<T>(items: readonly T[] | null): readonly T[] | null;
    public transform<T>(
        items: ReadonlyArray<readonly T[]> | null,
    ): ReadonlyArray<readonly T[]> | null;
    public transform<T>(
        items: ReadonlyArray<readonly T[]> | readonly T[] | null,
    ): ReadonlyArray<readonly T[]> | readonly T[] | null {
        if (!items) {
            return null;
        }

        const value = this.textfield.control()?.value || [];

        return tuiIsFlat(items)
            ? this.filter(items, value, this.handlers.identityMatcher())
            : this.filter2d(items, value, this.handlers.identityMatcher());
    }

    @tuiPure
    private filter2d<T>(
        items: ReadonlyArray<readonly T[]>,
        value: readonly T[],
        matcher: TuiIdentityMatcher<T>,
    ): ReadonlyArray<readonly T[]> {
        return items.map((subItems) => this.filter(subItems, value, matcher));
    }

    @tuiPure
    private filter<T>(
        items: readonly T[],
        value: readonly T[],
        matcher: TuiIdentityMatcher<T>,
    ): readonly T[] {
        return items.filter((item) =>
            value.every((selected) => !matcher(selected, item)),
        );
    }
}
