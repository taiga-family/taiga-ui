import {
    Directive,
    type DoCheck,
    inject,
    type OnDestroy,
    TemplateRef,
} from '@angular/core';

import {TuiTextfieldComponent} from './textfield.component';

@Directive({
    selector: 'ng-template[tuiTextfieldContent]',
})
export class TuiTextfieldContent implements DoCheck, OnDestroy {
    private readonly ref = inject(TuiTextfieldComponent).vcr?.createEmbeddedView(
        inject(TemplateRef),
    );

    public ngDoCheck(): void {
        this.ref?.detectChanges();
    }

    public ngOnDestroy(): void {
        this.ref?.destroy();
    }
}
