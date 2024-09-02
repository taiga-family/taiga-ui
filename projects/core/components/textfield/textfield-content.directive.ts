import {Directive, inject, TemplateRef} from '@angular/core';

import {TuiTextfieldComponent} from './textfield.component';

@Directive({
    standalone: true,
    selector: 'ng-template[tuiTextfieldContent]',
})
export class TuiTextfieldContent {
    constructor() {
        inject(TuiTextfieldComponent).vcr?.createEmbeddedView(inject(TemplateRef));
    }
}
