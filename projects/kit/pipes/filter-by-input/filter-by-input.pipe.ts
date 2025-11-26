import {inject, Pipe, type PipeTransform} from '@angular/core';
import {TUI_DEFAULT_MATCHER} from '@taiga-ui/cdk/constants';
import {type TuiStringHandler, type TuiStringMatcher} from '@taiga-ui/cdk/types';
import {tuiPure} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiTextfieldComponent} from '@taiga-ui/core/components/textfield';
import {TUI_ITEMS_HANDLERS} from '@taiga-ui/core/directives/items-handlers';
import {tuiIsFlat} from '@taiga-ui/kit/utils';

@Pipe({
    name: 'tuiFilterByInput',
    pure: false,
})
export class TuiFilterByInputPipe implements PipeTransform {
    private readonly textfield = inject(TuiTextfieldComponent);
    private readonly handlers = inject(TUI_ITEMS_HANDLERS);
    private readonly multi = this.textfield.el.matches('[multi]');

    public transform<T>(
        items: ReadonlyArray<readonly T[]>,
        matcher?: TuiStringMatcher<T>,
    ): ReadonlyArray<readonly T[]>;
    public transform<T>(items: readonly T[], matcher?: TuiStringMatcher<T>): readonly T[];
    public transform<T>(
        items: ReadonlyArray<readonly T[]> | null,
        matcher?: TuiStringMatcher<T>,
    ): ReadonlyArray<readonly T[]> | null;
    public transform<T>(
        items: readonly T[] | null,
        matcher?: TuiStringMatcher<T>,
    ): readonly T[] | null;
    public transform<T>(
        items: ReadonlyArray<readonly T[]> | readonly T[] | null,
        matcher: TuiStringMatcher<T> = TUI_DEFAULT_MATCHER,
    ): ReadonlyArray<readonly T[]> | readonly T[] | null {
        return this.filter<T>(
            items,
            matcher,
            this.handlers.stringify(),
            this.textfield.value(),
        );
    }

    @tuiPure
    private filter<T>(
        items: ReadonlyArray<readonly T[]> | readonly T[] | null,
        matcher: TuiStringMatcher<T>,
        stringify: TuiStringHandler<T>,
        query: string,
    ): ReadonlyArray<readonly T[]> | readonly T[] | null {
        if (!items) {
            return null;
        }

        return tuiIsFlat(items)
            ? this.filterFlat(items, matcher, stringify, query)
            : this.filter2d(items, matcher, stringify, query);
    }

    private filterFlat<T>(
        items: readonly T[],
        matcher: TuiStringMatcher<T>,
        stringify: TuiStringHandler<T>,
        query: string,
    ): readonly T[] {
        return this.getMatch(items, stringify, query.toLocaleLowerCase()) != null
            ? items
            : items.filter((item) => matcher(item, query, stringify));
    }

    private filter2d<T>(
        items: ReadonlyArray<readonly T[]>,
        matcher: TuiStringMatcher<T>,
        stringify: TuiStringHandler<T>,
        query: string,
    ): ReadonlyArray<readonly T[]> {
        return items.find(
            (item) => this.getMatch(item, stringify, query.toLocaleLowerCase()) != null,
        ) != null
            ? items
            : items.map((inner) => this.filterFlat(inner, matcher, stringify, query));
    }

    private getMatch<T>(
        items: readonly T[],
        stringify: TuiStringHandler<T>,
        query: string,
    ): T | undefined {
        return this.multi
            ? undefined
            : items.find((item) => stringify(item).toLocaleLowerCase() === query);
    }
}
