import type {OnDestroy} from '@angular/core';
import {Directive, Inject, Input, Optional} from '@angular/core';
import {NgControl} from '@angular/forms';
import {TuiHeadDirective} from '@taiga-ui/addon-table/components';
import {defer, EMPTY, merge} from 'rxjs';
import {distinctUntilChanged} from 'rxjs/operators';

import {AbstractTuiTableFilter} from './abstract-table-filter';
import type {TuiTableFilter} from './table-filter';
import {TuiTableFiltersDirective} from './table-filters.directive';

@Directive({
    selector: `[tuiTableFilter]`,
})
export class TuiTableFilterDirective<T> implements OnDestroy, TuiTableFilter<T> {
    @Input()
    tuiTableFilter?: keyof T;

    readonly refresh$ = defer(() =>
        merge(
            this.control.valueChanges || EMPTY,
            this.control.statusChanges?.pipe(distinctUntilChanged()) || EMPTY,
        ),
    );

    constructor(
        @Optional()
        @Inject(TuiHeadDirective)
        private readonly head: TuiHeadDirective<T> | null,
        @Inject(AbstractTuiTableFilter)
        private readonly delegate: AbstractTuiTableFilter<T[keyof T], any>,
        @Inject(NgControl) private readonly control: NgControl,
        @Inject(TuiTableFiltersDirective) readonly filters: TuiTableFiltersDirective<T>,
    ) {
        this.filters.register(this);
    }

    ngOnDestroy(): void {
        this.filters.unregister(this);
    }

    filter(item: T): boolean {
        const {disabled, value} = this.control;

        return !!disabled || !this.key || this.delegate.filter(item[this.key], value);
    }

    private get key(): keyof T | undefined {
        return this.tuiTableFilter || this.head?.tuiHead;
    }
}
