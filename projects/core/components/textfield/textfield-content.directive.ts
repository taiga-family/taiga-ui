import {Directive, type DoCheck, inject, TemplateRef} from '@angular/core';

import {TuiTextfieldComponent} from './textfield.component';

@Directive({
    standalone: true,
    selector: 'ng-template[tuiTextfieldContent]',
})
export class TuiTextfieldContent implements DoCheck {
    private readonly ref = inject(TuiTextfieldComponent).vcr?.createEmbeddedView(
        inject(TemplateRef),
    );

    public ngDoCheck(): void {
        this.ref?.detectChanges();
    }
}
