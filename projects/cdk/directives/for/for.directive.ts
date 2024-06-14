import type {EmbeddedViewRef, OnChanges, TemplateRef} from '@angular/core';
import {Directive, inject, Input, ViewContainerRef} from '@angular/core';

@Directive({
    standalone: true,
    selector: '[ngFor][ngForOf][ngForElse],[ngFor][ngForOf][ngForEmpty]',
})
export class TuiFor<T, K = unknown> implements OnChanges {
    private readonly vcr = inject(ViewContainerRef);

    private ref?: EmbeddedViewRef<unknown>;

    @Input()
    public ngForOf: T[] | readonly T[] | null = [];

    @Input()
    public ngForElse?: TemplateRef<K>;

    @Input()
    public ngForEmpty?: TemplateRef<K>;

    public ngOnChanges(): void {
        this.ref?.destroy();

        if (this.ngForOf?.length === 0 && this.ngForEmpty) {
            this.ref = this.vcr.createEmbeddedView(this.ngForEmpty);
        } else if (!this.ngForOf && this.ngForElse) {
            this.ref = this.vcr.createEmbeddedView(this.ngForElse);
        }
    }
}
