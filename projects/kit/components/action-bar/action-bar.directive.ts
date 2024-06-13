import type {EmbeddedViewRef, OnDestroy} from '@angular/core';
import {Directive, inject, Input, TemplateRef} from '@angular/core';
import {TuiDropdownService} from '@taiga-ui/core';

@Directive({
    standalone: true,
    selector: 'ng-template[tuiActionBar]',
})
export class TuiActionBarDirective implements OnDestroy {
    private readonly template = inject(TemplateRef);
    private readonly service = inject(TuiDropdownService);

    private viewRef?: EmbeddedViewRef<unknown>;

    @Input()
    public set tuiActionBar(show: boolean) {
        this.viewRef?.destroy();

        if (show) {
            this.viewRef = this.service.addTemplate(this.template);
        }
    }

    public ngOnDestroy(): void {
        this.viewRef?.destroy();
    }
}
