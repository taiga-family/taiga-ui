import {
    Directive,
    EmbeddedViewRef,
    Inject,
    Input,
    OnChanges,
    TemplateRef,
    ViewContainerRef,
} from '@angular/core';

@Directive({
    selector: '[ngFor][ngForOf][ngForElse],[ngFor][ngForOf][ngForEmpty]',
})
export class TuiForDirective<T, K = unknown> implements OnChanges {
    private ref?: EmbeddedViewRef<unknown>;

    @Input() ngForOf: T[] | readonly T[] | null = [];

    @Input()
    ngForElse?: TemplateRef<K>;

    @Input()
    ngForEmpty?: TemplateRef<K>;

    constructor(@Inject(ViewContainerRef) private readonly vcr: ViewContainerRef) {}

    ngOnChanges(): void {
        this.ref?.destroy();

        if (this.ngForOf?.length === 0 && this.ngForEmpty) {
            this.ref = this.vcr.createEmbeddedView(this.ngForEmpty);
        } else if (!this.ngForOf && this.ngForElse) {
            this.ref = this.vcr.createEmbeddedView(this.ngForElse);
        }
    }
}
