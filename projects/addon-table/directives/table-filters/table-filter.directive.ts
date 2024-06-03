import type {OnDestroy, OnInit} from '@angular/core';
import {Directive, inject, Input} from '@angular/core';
import {NgControl} from '@angular/forms';
import {TuiHeadDirective} from '@taiga-ui/addon-table/components';
import type {TuiValuesOf} from '@taiga-ui/cdk';
import {defer, distinctUntilChanged, EMPTY, merge} from 'rxjs';

import {AbstractTuiTableFilter} from './abstract-table-filter';
import type {TuiTableFilter} from './table-filter';
import {TuiTableFiltersDirective} from './table-filters.directive';

@Directive({
    standalone: true,
    selector: '[tuiTableFilter]',
})
export class TuiTableFilterDirective<T> implements OnInit, OnDestroy, TuiTableFilter<T> {
    private readonly head = inject(TuiHeadDirective<T>, {optional: true});
    private readonly delegate = inject(AbstractTuiTableFilter<TuiValuesOf<T>, any>);
    private readonly control = inject(NgControl);
    protected readonly filters = inject(TuiTableFiltersDirective<T>);

    @Input()
    public tuiTableFilter?: keyof T;

    public readonly refresh$ = defer(() =>
        merge(
            this.control.valueChanges || EMPTY,
            this.control.statusChanges?.pipe(distinctUntilChanged()) || EMPTY,
        ),
    );

    public ngOnInit(): void {
        this.filters.register(this);
    }

    public ngOnDestroy(): void {
        this.filters.unregister(this);
    }

    public filter(item: T): boolean {
        const {disabled, value} = this.control;

        return (
            !!disabled ||
            !this.key ||
            this.delegate.filter(item[this.key as keyof T], value)
        );
    }

    private get key(): string | keyof T | undefined {
        return this.tuiTableFilter || this.head?.tuiHead;
    }
}
