import {Directive, Inject, Input, OnDestroy} from '@angular/core';
import {NgControl} from '@angular/forms';
import {TuiCheck} from '@taiga-ui/addon-table/interfaces';
import {TUI_TABLE_FILTER} from '@taiga-ui/addon-table/tokens';
import {defer, EMPTY, merge} from 'rxjs';
import {distinctUntilChanged} from 'rxjs/operators';

import {TuiTableFiltersDirective} from './table-filters.directive';

@Directive({
    selector: '[tuiTableFilter]',
})
export class TuiTableFilterDirective<T> implements OnDestroy {
    @Input()
    tuiTableFilter?: keyof T;

    readonly refresh$ = defer(() =>
        merge(
            this.control.valueChanges || EMPTY,
            this.control.statusChanges?.pipe(distinctUntilChanged()) || EMPTY,
        ),
    );

    constructor(
        @Inject(TUI_TABLE_FILTER)
        private readonly check: TuiCheck,
        @Inject(NgControl)
        private readonly control: NgControl,
        @Inject(TuiTableFiltersDirective) readonly filters: TuiTableFiltersDirective<T>,
    ) {
        this.filters.register(this);
    }

    ngOnDestroy(): void {
        this.filters.unregister(this);
    }

    filter(item: T): boolean {
        return (
            !!this.control.disabled ||
            !this.tuiTableFilter ||
            this.check.check(item[this.tuiTableFilter], this.control.value)
        );
    }
}
