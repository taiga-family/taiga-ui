import type {VirtualScrollStrategy} from '@angular/cdk/scrolling';
import {VIRTUAL_SCROLL_STRATEGY} from '@angular/cdk/scrolling';
import {Directive, Inject, Output} from '@angular/core';

@Directive({
    selector: '[indexChange]',
})
export class IndexChangeDirective {
    @Output()
    readonly indexChange = this.strategy.scrolledIndexChange;

    constructor(
        @Inject(VIRTUAL_SCROLL_STRATEGY)
        private readonly strategy: VirtualScrollStrategy,
    ) {}
}
