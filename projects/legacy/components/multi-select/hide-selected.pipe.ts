import {inject, Pipe, type PipeTransform} from '@angular/core';
import {type TuiIdentityMatcher} from '@taiga-ui/cdk/types';
import {tuiPure} from '@taiga-ui/cdk/utils/miscellaneous';
import {tuiIsFlat} from '@taiga-ui/kit/utils';

import {TuiMultiSelectComponent} from './multi-select.component';

@Pipe({
    standalone: false,
    name: 'tuiHideSelected',
    pure: false,
})
export class TuiHideSelectedPipe implements PipeTransform {
    private readonly component = inject(TuiMultiSelectComponent);

    public transform<T>(items: readonly T[] | null): readonly T[] | null;
    public transform<T>(
        items: ReadonlyArray<readonly T[]> | null,
    ): ReadonlyArray<readonly T[]> | null;
    public transform<T>(
        items: ReadonlyArray<readonly T[]> | readonly T[] | null,
    ): ReadonlyArray<readonly T[]> | readonly T[] | null {
        const {value, identityMatcher} = this.component;

        if (!items) {
            return null;
        }

        return tuiIsFlat(items)
            ? this.filter(items, value, identityMatcher)
            : this.filter2d(items, value, identityMatcher);
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
