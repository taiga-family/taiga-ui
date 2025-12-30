import {
    computed,
    inject,
    Pipe,
    type PipeTransform,
    signal,
    untracked,
} from '@angular/core';
import {type TuiIdentityMatcher} from '@taiga-ui/cdk/types';
import {TuiTextfieldMultiComponent} from '@taiga-ui/core/components/textfield';
import {TUI_ITEMS_HANDLERS} from '@taiga-ui/core/directives/items-handlers';
import {tuiIsFlat} from '@taiga-ui/kit/utils';

@Pipe({name: 'tuiHideSelected', pure: false})
export class TuiHideSelectedPipe implements PipeTransform {
    private readonly textfield = inject(TuiTextfieldMultiComponent);
    private readonly handlers = inject(TUI_ITEMS_HANDLERS);
    private readonly items = signal<readonly any[] | null>([]);
    private readonly filtered = computed(() => {
        const items = this.items();
        const value = this.textfield.cva()?.value() || [];

        if (!items) {
            return null;
        }

        return tuiIsFlat(items)
            ? this.filter(items, value, this.handlers.identityMatcher())
            : this.filter2d(items, value, this.handlers.identityMatcher());
    });

    public transform<T>(items: readonly T[] | null): readonly T[] | null;
    public transform<T>(
        items: ReadonlyArray<readonly T[]> | null,
    ): ReadonlyArray<readonly T[]> | null;
    public transform<T>(
        items: ReadonlyArray<readonly T[]> | readonly T[] | null,
    ): ReadonlyArray<readonly T[]> | readonly T[] | null {
        untracked(() => {
            this.items.set(items);
        });

        return this.filtered() as ReadonlyArray<readonly T[]> | readonly T[] | null;
    }

    private filter2d<T>(
        items: ReadonlyArray<readonly T[]>,
        value: readonly T[],
        matcher: TuiIdentityMatcher<T>,
    ): ReadonlyArray<readonly T[]> {
        return items.map((subItems) => this.filter(subItems, value, matcher));
    }

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
