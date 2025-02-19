import type {PipeTransform} from '@angular/core';
import {inject, Pipe} from '@angular/core';
import {TUI_DEFAULT_MATCHER} from '@taiga-ui/cdk/constants';
import type {TuiStringHandler, TuiStringMatcher} from '@taiga-ui/cdk/types';
import {tuiPure} from '@taiga-ui/cdk/utils/miscellaneous';
import {TUI_DATA_LIST_HOST} from '@taiga-ui/core/components/data-list';
import {TuiTextfieldComponent} from '@taiga-ui/core/components/textfield';
import {tuiIsFlat} from '@taiga-ui/kit/utils';

// TODO: Consider replacing TuiTextfieldComponent with proper token once we refactor textfields
@Pipe({
    standalone: true,
    name: 'tuiFilterByInput',
    pure: false,
})
export class TuiFilterByInputPipe implements PipeTransform {
    // TODO: Remove optional after legacy controls are dropped
    private readonly textfield = inject(TuiTextfieldComponent, {optional: true});
    private readonly host = inject(TUI_DATA_LIST_HOST);

    public transform<T>(items: null, matcher?: TuiStringMatcher<T>): null;
    public transform<T>(items: readonly T[], matcher?: TuiStringMatcher<T>): readonly T[];
    public transform<T>(
        items: ReadonlyArray<readonly T[]> | readonly T[] | null,
        matcher: TuiStringMatcher<T> = TUI_DEFAULT_MATCHER,
    ): ReadonlyArray<readonly T[]> | readonly T[] | null {
        return this.filter<T>(
            items,
            matcher,
            this.host.stringify || String,
            this.textfield?.input?.nativeElement.value ||
                (this.host as any).nativeFocusableElement?.value ||
                '',
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
        const match = this.getMatch(items, stringify, query);

        return match != null
            ? items
            : items.filter((item) => matcher(item, query, stringify));
    }

    private filter2d<T>(
        items: ReadonlyArray<readonly T[]>,
        matcher: TuiStringMatcher<T>,
        stringify: TuiStringHandler<T>,
        query: string,
    ): ReadonlyArray<readonly T[]> {
        const match = items.find((item) => this.getMatch(item, stringify, query) != null);

        return match != null
            ? items
            : items.map((inner) => this.filterFlat(inner, matcher, stringify, query));
    }

    private getMatch<T>(
        items: readonly T[],
        stringify: TuiStringHandler<T>,
        query: string,
    ): T | undefined {
        // TODO: Refactor when tui-textfield[multi] is ready
        if ((this.host as any).tagValidator) {
            return undefined;
        }

        return items.find(
            (item) => stringify(item).toLocaleLowerCase() === query.toLocaleLowerCase(),
        );
    }
}
