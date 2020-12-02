import {Inject, Optional, Pipe, PipeTransform} from '@angular/core';
import {TuiIdentityMatcher, tuiPure} from '@taiga-ui/cdk';
import {TuiMultiSelectComponent} from './multi-select.component';

// TODO: Remove Optional and second argument when Angular is upgraded to 9+
@Pipe({
    name: 'tuiHideSelected',
    pure: false,
})
export class TuiHideSelectedPipe<T> implements PipeTransform {
    constructor(
        @Optional()
        @Inject(TuiMultiSelectComponent)
        private readonly component: TuiMultiSelectComponent<T>,
    ) {}

    transform(items: null, component?: unknown): null;
    transform(items: ReadonlyArray<T>, component?: TuiMultiSelectComponent<T>): null;
    transform(
        items: ReadonlyArray<T> | null,
        {value, identityMatcher}: TuiMultiSelectComponent<T> = this.component,
    ): ReadonlyArray<T> | null {
        return items && this.filter(items, value, identityMatcher);
    }

    @tuiPure
    private filter(
        items: ReadonlyArray<T>,
        value: ReadonlyArray<T>,
        matcher: TuiIdentityMatcher<T>,
    ): ReadonlyArray<T> {
        return items.filter(item => value.every(selected => !matcher(selected, item)));
    }
}
