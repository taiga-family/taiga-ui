import {Directive, Inject, TemplateRef} from '@angular/core';

@Directive({
    selector: 'ng-template[tuiTab]',
})
export class TuiTabDirective {
    constructor(
        @Inject(TemplateRef) readonly template: TemplateRef<Record<string, unknown>>,
    ) {}
}
