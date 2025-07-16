import type {AfterViewInit, QueryList} from '@angular/core';
import {
    ContentChildren,
    Directive,
    ElementRef,
    Input,
    inject,
    DestroyRef,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';

import {TuiDocAPIItem} from '../api/api-item.component';
import type {TuiApiItemConfig} from '../../services/code-generator.service';

@Directive({
    standalone: true,
    selector: 'table[tuiDocAPI][tuiDocCopyApi]',
})
export class TuiDocCopyApiDirective implements AfterViewInit {
    private readonly destroyRef = inject(DestroyRef);

    @ContentChildren(TuiDocAPIItem, {descendants: true})
    private readonly apiItems?: QueryList<TuiDocAPIItem<unknown>>;

    @Input('tuiDocCopyApi')
    public selector = '';

    @Input()
    public content = '';

    constructor(private readonly el: ElementRef<HTMLTableElement>) {}

    public ngAfterViewInit(): void {
        this.setupCopyButton();
    }

    private setupCopyButton(): void {
        if (!this.apiItems || !this.selector) {
            return;
        }

        // Listen for changes and update the copy functionality
        this.apiItems.changes
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe(() => {
                this.updateCopyData();
            });

        // Initial setup
        this.updateCopyData();
    }

    private updateCopyData(): void {
        // This will be used by the copy component to get current API data
        const apiConfig: TuiApiItemConfig[] = this.apiItems?.map(item => ({
            name: item.name,
            type: item.type,
            value: item.value,
        })) || [];

        // Store the data on the element for the copy component to access
        (this.el.nativeElement as any)['__apiConfig'] = {
            selector: this.selector,
            content: this.content,
            apiItems: apiConfig,
        };
    }
}